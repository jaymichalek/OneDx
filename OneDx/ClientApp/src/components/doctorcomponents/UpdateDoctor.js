import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { DoctorForm } from './DoctorForm';


export function UpdateDoctor(props) {
    const { id } = useParams();

    console.log('Update Doctor getting this id: ' + id);

    const [doctor, setDoctor] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('doctor/edit/' + id)
            .then(res => res.json())
            .then(d => setDoctor(d));
    }, []);

    const handleSubmit = (doctor) => {
        fetch('doctor/update',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(doctor)
            }
        ).then(navigate('/listdoctors'));
    }

    return (
        doctor ?
            <DoctorForm doctor={doctor} submit={handleSubmit} />
            :
            <div>...loading</div>
    );
}