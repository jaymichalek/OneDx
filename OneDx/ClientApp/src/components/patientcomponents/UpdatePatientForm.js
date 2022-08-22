import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import 'react-calendar/dist/Calendar.css';
import { useParams } from 'react-router-dom';
import { DemographicsForm } from './DemographicsForm';

export default function UpdatePatientForm(props) {
    const { PatientId } = useParams();
    const [patient, setPatient] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('patient/edit/' + PatientId)
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
        );
        navigate('/listpatients');
    }

    return (
        patient ? <DemographicsForm patient={patient} submit={handleSubmit} /> : <div>...loading</div>
    );
    
}