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
                        <div className='subContainer'>
                            <div className='content'>
                                <p className='contentText'>Username: </p>
                                <p className='contentText'>{user.username}</p>
                            </div>
                            <div className='content'>
                                <p className='contentText'>Email: </p>
                                <p className='contentText'>{user.email}</p>
                            </div>
                        </div>

                        <div className='subContainer'>
                            <div className='warning'>
                                <p>Warning: This is a mock business website, do not enter your actual banking information</p>
                            </div>
                            <div className='content'>
                                <p>Credit/Debit Card: </p>
                                <input className='ccInput'></input>
                            </div>
                            <div className='content'>
                                <p>Security Number: </p>
                                <input className='secInput'></input>
                            </div>
                        </div>

                        <Footer/>
                    </div>
                </div>
                : <></>
            } 
        </>
    )
};
