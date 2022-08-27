import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import 'react-calendar/dist/Calendar.css';
import { useParams } from 'react-router-dom';
import { DiagnosisForm } from './DiagnosisForm';


export function UpdateDiagnosis(props) {
    const { diagnosisId } = useParams();
    const [diagnosis, setDiagnosis] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('diagnosis/edit/' + diagnosisId)
            .then(res => res.json())
            .then(d => setDiagnosis(d));
    }, []);

    const handleSubmit = (diagnosis) => {
        fetch('diagnosis/update',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(diagnosis)
            }
        ).then(navigate('/listpatients/'));
    }

    return (
        diagnosis ?
            <DiagnosisForm diagnosis={diagnosis} submit={handleSubmit} />
            :
            <div>...loading</div>
    );
}