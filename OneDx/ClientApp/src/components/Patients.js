import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

export class Patients extends Component {
  //static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { patients: [], loading: true };
  }

  componentDidMount() {
    this.populatePatientsData();
  }

  static renderPatientsTable(patients) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patients =>
            <tr key={patients.patientId}>
              <td>{patients.firstName}</td>
              <td>{patients.lastName}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Patients.renderPatientsTable(this.state.patients);

    return (
      <div>
        <h1 id="tabelLabel" >List of All Patients</h1>
        <p>This table shows a lists of all patients.</p>
        {contents}
      </div>
    );
  }

  async populatePatientsData() {
    const token = await authService.getAccessToken();
    const response = await fetch('patient/all', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    this.setState({ patients: data, loading: false });
  }
}
