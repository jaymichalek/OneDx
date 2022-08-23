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
import { CodeSearchBox } from './patientcomponents/CodeSearchBox';
 //return (
    //    //TODO: Re-use demographics form here.
    //    //TODO: Add Diagnosis Component with search box
    //    //TODO: Add Diagnosis Table Component
    //)
export function PatientForm(props) {
    const [PatientId, setPatientId] = useState(props.patient.patientId);
    const [FirstName, setFirstName] = useState(props.patient.firstName);
    const [LastName, setLastName] = useState(props.patient.lastName);
    const [DateOfBirth, setDateOfBirth] = useState(props.patient.dateOfBirth);
    const [Gender, setGender] = useState(props.patient.gender);
    const [DoctorId, setDoctorId] = useState(props.patient.doctorId);

    const [value, setValue] = useState(new Date(props.patient.dateOfBirth));

    function onChange(nextValue) {
        setValue(nextValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submit({ PatientId, FirstName, LastName, DateOfBirth, "Gender": Number(Gender), DoctorId });
    }

    //const convertDateTime = (dateTime) => {
    //    const year = dateTime.substr(0, 4);
    //    const month = dateTime.substr(5, 2);
    //    const day = dateTime.substr(8, 2);
    //    return new Date(year, month-1, day);
    //};

    function onChange(DateOfBirth) {
        setDateOfBirth(DateOfBirth);
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
                        <Calendar calendarType="US" defaultValue={value} onChange={onChange} /> 
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
                <CodeSearchBox />
            </form>
        </>
    );
}