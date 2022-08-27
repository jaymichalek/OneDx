import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function DoctorForm(props) {
    const [id, setDoctorId] = useState(props.doctor.id);
    const [firstName, setFirstName] = useState(props.doctor.firstName);
    const [lastName, setLastName] = useState(props.doctor.lastName);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submit({ id, firstName, lastName, email });
    }

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Update Doctor Information
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="First Name" id="outlined-size-normal" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <TextField label="Last Name" id="outlined-size-normal" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <TextField label="Email Address" id="outlined-size-normal" value={email} onChange={(e) => setEmail(e.target.value)} />
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