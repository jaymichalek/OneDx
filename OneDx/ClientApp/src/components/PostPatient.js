import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Input, FormGroup, Label } from 'reactstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function PostPatient(props) {
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
        <div className="container">
            <h1>Add New Patient</h1>
            <div className="row">
                <div className="col-mid-6">
                    <form id="statsForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" placeholder="Enter first name" name="FirstName" value={FirstName} className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" placeholder = "Enter last name" name="LastName" value={LastName} className="form-control" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div>
                            <Calendar onChange={setDateOfBirth} value={DateOfBirth} />
                        </div>
                        <div>
                            <FormGroup check inline>
                            <Input type="radio" name="Gender" value="0" className="form-control" onChange={(e) => setGender(e.target.value)} />
                                <Label check>Male</Label>
                            </FormGroup>
                            <FormGroup check inline>
                            <Input type="radio" name="Gender" value="1" className="form-control" onChange={(e) => setGender(e.target.value)} />
                                <Label check>Female</Label>
                            </FormGroup>
                            <FormGroup check inline>
                            <Input type="radio" name="Gender" value="2" className="form-control" onChange={(e) => setGender(e.target.value)} />
                                <Label check>Non-Binary</Label>
                            </FormGroup>
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Doctor Id</label>
                            <input type="text" placeholder="Enter doctor ID string" name="DoctorId" value={DoctorId} className="form-control" onChange={(e) => setDoctorId(e.target.value)} />
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