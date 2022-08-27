import React, { useEffect, useState } from 'react';
import authService from './api-authorization/AuthorizeService'
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';

export function Patients() { 

    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [doctor, setDoctor] = useState();

    const confirmDoctor = async () => {
        const user = await authService.getUser();
        console.log(user);
        const token = await authService.getAccessToken();
        const response = await fetch("doctor/editDoc/" + user.name,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
        );
        const data = await response.json();
        setDoctor(data);
    }
    
    const populatePatientsData = async () => {
        const token = await authService.getAccessToken();
        const response = await fetch('patient/bydoctor/' + doctor.id, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setPatients(data);
        setLoading(false);
    }

    useEffect(() => {
        confirmDoctor().then(() => populatePatientsData());
    }, [doctor, setDoctor])

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
            
            <h1 id="tabelLabel" >List of My Patients</h1>
            <p>This table shows a lists of my patients.</p>
            {
                loading
                ? <p><em>Loading...</em></p>
                : renderPatientsTable(patients)
            }
        </>
    );

    
}
