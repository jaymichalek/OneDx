import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 //return (
    //    //TODO: Re-use demographics form here.
    //    //TODO: Add Diagnosis Component with search box
    //    //TODO: Add Diagnosis Table Component
    //)
export function PatientForm(props) {
    const [PatientId, setPatientId] = useState(props.patient.patientId);
    const [FirstName, setFirstName] = useState(props.patient.firstName);
    const [LastName, setLastName] = useState(props.patient.lastName);
    const { dateReceived } = props.patient.dateOfBirth;
    const { formattedDateOfBirth } = dateReceived.toLocaleDateString();
    const [DateOfBirth, setDateOfBirth] = useState(formattedDateOfBirth); //props.patient.dateOfBirth

    const [Gender, setGender] = useState(props.patient.gender);
    const [DoctorId, setDoctorId] = useState(props.patient.doctorId);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submit({ PatientId, FirstName, LastName, DateOfBirth, Gender, DoctorId });
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
                    <TextField label="First Name" id="outlined-size-normal" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                    <TextField label="Last Name" id="outlined-size-normal" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                </Box>
                <Box m={2}>
                    <div>
                        <Calendar onChange={setDateOfBirth} value={DateOfBirth} />
                    </div>
                </Box>
                <Box m={2}>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        defaultValue="female"
                        name="controlled-radio-buttons-group"
                        value={Gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <FormControlLabel value="0" control={<Radio />} label="Male" />
                        <FormControlLabel value="1" control={<Radio />} label="Female" />
                        <FormControlLabel value="2" control={<Radio />} label="Non-binary" />
                    </RadioGroup>
                </Box>
                <Box m={2}>
                    <TextField label="Doctor Id" id="outlined-size-normal" value={DoctorId} onChange={(e) => setDoctorId(e.target.value)} />
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