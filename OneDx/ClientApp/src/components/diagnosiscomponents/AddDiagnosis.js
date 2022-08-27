import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function AddDiagnosis(props) {
    const [diagnosisCode, setDiagnosisCode] = useState('');
    const [diagnosisName, setDiagnosisName] = useState('');
    const [diagnosisDate, setDiagnosisDate] = useState(new Date());
    const [patientId, setPatientId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('diagnosis/create',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    diagnosisCode, diagnosisName, diagnosisDate, patientId
                })
            }
        ).then(() => navigate('/listpatients'));
    }

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Patient Diagnosis Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Diagnosis Code" id="outlined-size-normal" value={diagnosisCode} onChange={(e) => setDiagnosisCode(e.target.value)} />
                    <TextField label="Diagnosis Name" id="outlined-size-normal" value={diagnosisName} onChange={(e) => setDiagnosisName(e.target.value)} />
                </Box>
                <Box m={2}>
                    <div>
                        <Calendar calendarType="US" onChange={setDiagnosisDate} value={diagnosisDate} />
                    </div>
                </Box>
                <Box m={2}>
                    <TextField label="Patient Id" id="outlined-size-normal" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
                </Box>
                <Box m={2}>
                    <Button type="submit" variant="contained" color="success">
                        Submit
                    </Button>
                </Box>
            </form>
        </>
    );
}