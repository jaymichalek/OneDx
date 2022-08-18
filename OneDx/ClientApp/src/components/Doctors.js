import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

export class Doctors extends Component {
  //static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { doctors: [], loading: true };
  }

  componentDidMount() {
    this.populateDoctorsData();
  }

  static renderDoctorsTable(doctors) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctors =>
            <tr key={doctors.id}>
              <td>{doctors.firstName}</td>
              <td>{doctors.lastName}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Doctors.renderDoctorsTable(this.state.doctors);

    return (
      <div>
        <h1 id="tabelLabel" >List of All Doctors</h1>
        <p>This table shows a lists all doctors.</p>
        {contents}
      </div>
    );
  }

  async populateDoctorsData() {
    const token = await authService.getAccessToken();
    const response = await fetch('doctor/all', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    this.setState({ doctors: data, loading: false });
  }
}
