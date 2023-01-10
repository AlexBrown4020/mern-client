import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'

import { Navbar } from '../../components/navbar/Navbar';
import './profile.css';

export const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
          alert('You must be logged in to see the lesson')
          navigate('/')
        }
    });

    return (
        <>
            {
                user ? <div>
                    <Navbar/>
                </div>
                : <>No</>
            } 
        </>
    )
};
