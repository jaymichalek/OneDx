import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export function PostPatient(props) {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
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
        <div className="container">
            <h1>Wordle Stats</h1>
            <div className="row">
                <div className="col-mid-6">
                    <form id="statsForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="FirstName" value={FirstName} className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="LastName" value={LastName} className="form-control" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Date of Birth</label>
                            <input type="text" name="DateOfBirth" value={DateOfBirth} className="form-control" onChange={(e) => setDateOfBirth(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Gender</label>
                            <input type="text" name="Gender" value={Gender} className="form-control" onChange={(e) => setGender(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Doctor Id</label>
                            <input type="text" name="DoctorId" value={DoctorId} className="form-control" onChange={(e) => setDoctorId(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}