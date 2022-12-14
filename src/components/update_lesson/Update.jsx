import { useNavigate, useParams } from 'react-router-dom';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { Navbar } from '../navbar/Navbar';
import '../registration/registration.css'

export const UpdateLesson = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const param = useParams();
    
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (!JSON.parse(auth).isAdmin) {
            navigate('/')
        }
    });

    const submitData = async (props) => {
        let result = await fetch(`https://nameless-waters-45397.herokuapp.com/lessons/${param.id}`, {
            method:'put',
            body: JSON.stringify({
                title, date, description
            }),
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if (!result.title === '' || !result.date) {
            alert('Title and date cannot be blank')
        } else {
            localStorage.setItem('lesson', JSON.stringify(result))
            navigate('/');
        }

    };
    return (
        <div>
            <Navbar />
            <div className='registrationPage'>
                <div className='formContainer'>
                    <h2>Update Lesson</h2>
                    <input className='submissionInput' type='text' placeholder='Lesson title' 
                            value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <input className='submissionInput' type='date' placeholder='Enter date' 
                            value={date} onChange={(e) => setDate(e.target.value)}/>
                        <input className='submissionInput' type='text' placeholder='Enter description' 
                            value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <button onClick={submitData} className='submissionButton' type='button'>Submit</button>
                </div>
            </div>
        </div>
    )
}