import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import authService from './api-authorization/AuthorizeService'
import { Link, useParams } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import { Button } from 'reactstrap';

export function Diagnosis(props) {
    const { patientId } = useParams();
    const [diagnosis, setDiagnosis] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    
    const populateDiagnosisData = async () => {
        const token = await authService.getAccessToken();
        const response = await fetch('diagnosis/bypatient/' + patientId, {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setDiagnosis(data);
        setLoading(false);
    }

    useEffect(() => {
        populateDiagnosisData();
    }, [])

    const handleClick = () => {
        navigate('/create-diagnosis/' + patientId);
    }

    const renderDiagnosisTable = (diagnoses) => {
    return (
        <table className='table table-striped table-hover clickable-row' aria-labelledby="tabelLabel">
        <thead>
            <tr>
                    <th>Diagnosis Code</th>
                    <th>Diagnosis Name</th>
                    <th>Diagnosis Date</th>
                    <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {diagnoses.map(diagnosis =>
                <tr key={diagnosis.diagnosisId} >
                    <td>{diagnosis.diagnosisCode}</td>
                    <td>{diagnosis.diagnosisName}</td>
                    <td>{diagnosis.diagnosisDate}</td>
                    <td><NavLink tag={Link} className="btn btn-primary" to={`/edit-diagnosis/${diagnosis.diagnosisId}`}>Edit Diagnosis</NavLink></td>
                </tr>
            )}
        </tbody>
        </table>
        );
    }

    return (
        <>
            <h1 id="tabelLabel" >List of My Diagnoses</h1>
            <p>This table shows a lists of my diagnoses.</p>
            <Button color="link" onClick={handleClick}>
                Add New Diagnosis
            </Button>
            {
                loading
                ? <p><em>Loading...</em></p>
                : renderDiagnosisTable(diagnosis)
            }
        </>
    );

    
}
