import React, { useEffect, useState } from 'react';
import authService from './api-authorization/AuthorizeService'
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';

export function Patients() { 

    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const populatePatientsData = async () => {
        const token = await authService.getAccessToken();
        const response = await fetch('patient/all', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setPatients(data);
        setLoading(false);
    }

    useEffect(() => {
        populatePatientsData();
    }, [])

    const renderPatientsTable = (patients) => {
    return (
        <table className='table table-striped table-hover clickable-row' aria-labelledby="tabelLabel">
        <thead>
            <tr>
                <th>Patient Name</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {patients.map(patient =>
                <tr key={patient.patientId} >
                    <td>{patient.firstName + ' ' + patient.lastName}</td>
                    <td><NavLink tag={Link} className="btn btn-primary" to={`/edit-patient/${patient.patientId}`}>View/Edit Info</NavLink></td>
                </tr>
            )}
        </tbody>
        </table>
        );
    }

    return (
        <>
            
            <h1 id="tabelLabel" >List of All Patients</h1>
            <p>This table shows a lists of all patients.</p>
            {
                loading
                ? <p><em>Loading...</em></p>
                : renderPatientsTable(patients)
            }
        </>
    );

    
}
