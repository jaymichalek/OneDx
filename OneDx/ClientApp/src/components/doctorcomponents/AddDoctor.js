import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router';

export function AddDoctor(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('doctor/create',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName, lastName, email
                })
            }
        ).then(() => navigate('/listdoctors'));
    }

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Doctor Information
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