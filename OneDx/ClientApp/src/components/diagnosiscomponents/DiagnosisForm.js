import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function DiagnosisForm(props) {
    const [diagnosisId, setDiagnosisId] = useState(props.diagnosis.diagnosisId);
    const [diagnosisCode, setDiagnosisCode] = useState(props.diagnosis.diagnosisCode);
    const [diagnosisName, setDiagnosisName] = useState(props.diagnosis.diagnosisName);
    const [diagnosisDate, setDiagnosisDate] = useState(props.diagnosis.diagnosisDate);
    const [patientId, setPatientId] = useState(props.diagnosis.patientId);

    const [value, setValue] = useState(new Date(props.diagnosis.diagnosisDate));

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submit({ diagnosisId, diagnosisCode, diagnosisName, diagnosisDate, patientId });
    }

    function onChange(diagnosisDate) {
        setDiagnosisDate(diagnosisDate);
    }

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Patient Demographics
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
                        <Calendar calendarType="US" defaultValue={value} onChange={onChange} />
                    </div>
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