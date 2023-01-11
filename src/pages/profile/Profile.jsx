import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'

import './profile.css';
import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';

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
                user ? 
                <div id='profileBody'>
                    <Navbar/>
                    <div id='profileContainer'>
                        <div className='content'>
                            <p>Username: {user.username}</p>
                        </div>
                        <div className='content'>
                            <p>Email: {user.email}</p>
                        </div>
                        <Footer/>
                    </div>
                </div>
                : <></>
            } 
        </>
    )
};
