import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import { Button } from 'reactstrap';
import authService from './api-authorization/AuthorizeService'

export function Doctors() {

    const [doctor, setDoctor] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const populateDoctorData = async () => {
        const token = await authService.getAccessToken();
        const response = await fetch('doctor/all', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setDoctor(data);
        setLoading(false);
    }

    useEffect(() => {
        populateDoctorData();
    }, [])

    const handleClick = () => {
        console.log('clicked');
        navigate('/create-doctor');
    }

    const renderDoctorTable = (doctors) => {
        return (
            <table className='table table-striped table-hover clickable-row' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Doctor Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map(doctor =>
                        <tr key={doctor.id} >
                            <td>{doctor.firstName} {doctor.lastName}</td>
                            <td><NavLink tag={Link} className="btn btn-primary" to={`/edit-doctor/${doctor.id}`}>Edit Doctor</NavLink></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    return (
        <>
            <h1 id="tabelLabel" >List of All Doctors</h1>
            <p>This table shows a lists of all doctors.</p>
            <Button color="link" onClick={handleClick}>
                Add New Doctor
            </Button>
            {
                loading
                    ? <p><em>Loading...</em></p>
                    : renderDoctorTable(doctor)
            }
        </>
    );


}