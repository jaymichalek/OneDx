import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function Demographics(props) {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState(new Date());
    const [Gender, setGender] = useState('');
    const [DoctorId, setDoctorId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('patient/create',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    FirstName, LastName, DateOfBirth, "Gender": Number(Gender), DoctorId
                })
            }
        ).then(() => navigate('/listpatients'));
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
                <TextField label="First Name" id="outlined-size-normal" defaultValue="Enter First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                <TextField label="Last Name" id="outlined-size-normal" defaultValue="Enter Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} />
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
                    <TextField label="Doctor Id" id="outlined-size-normal" defaultValue="Enter Doctor ID" value={DoctorId} onChange={(e) => setDoctorId(e.target.value)} />
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