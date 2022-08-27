import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import 'react-calendar/dist/Calendar.css';
import { useParams } from 'react-router-dom';
import { PatientForm } from '../PatientForm';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import { Button } from 'reactstrap';

export function UpdatePatient(props) {
    const { patientId } = useParams();
    const [patient, setPatient] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('patient/edit/' + patientId)
            .then(res => res.json())
            .then(p => setPatient(p));
    }, []);

    const handleSubmit = (patient) => {
        fetch('patient/update',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(patient)
            }
        ).then(navigate('/listpatients'));
    }

    return (
        patient ?
            <>
                <PatientForm patient={patient} submit={handleSubmit} />
                <NavLink tag={Link} className="btn btn-primary" to={`/listdiagnosis/${patient.patientId}`}>My Diagnoses</NavLink>
            </>
            :
            <div>...loading</div>
    );
}