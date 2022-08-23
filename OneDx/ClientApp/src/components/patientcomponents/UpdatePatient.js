import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import 'react-calendar/dist/Calendar.css';
import { useParams } from 'react-router-dom';
import { PatientForm } from '../PatientForm';

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
            <PatientForm patient={patient} submit={handleSubmit} />
            :
            <div>...loading</div>
    );
}