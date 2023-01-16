import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import './profile.css';
import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';

export const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const [creditCard, setCreditCard] = useState("");
    const [securityNumber, setSecurityNumber] = useState("");

    const ccInput = (e) => {
        let prevInfo = creditCard;
        setCreditCard(e.target.value);
        if (e.target.value.length >= 13) {
            e.target.value = prevInfo;
            setCreditCard(prevInfo);
        }
    }

    const secInput = (e) => {
        const prevInfo = securityNumber;
        setSecurityNumber(e.target.value);
        if (e.target.value.length >= 4) {
            e.target.value = e.target.value.slice(0, 3);
            setSecurityNumber(prevInfo);
        }
    }

    const submitCC = async () => {
            let result = await fetch(`https://nameless-waters-45397.herokuapp.com/users`, {
            method:'put',
            body: JSON.stringify({
                creditCard,
                securityNumber
            }),
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem('user', JSON.stringify(result));
        alert('Banking information added');
        navigate('/');
    };

    useEffect(() => {
        if (user === null) {
          alert('You must be logged in to see the lesson');
          navigate('/');
        }
    });

    return (
        <>
            {
                <div id='profileBody'>
                    <Navbar/>
                    <div id='profileContainer'>
                        <div className='subContainer'>
                            <h2 id='title'>Profile</h2>
                            <div className='content'>
                                <p className='contentText'>Username: </p>
                                <p className='contentText'>{user.username}</p>
                            </div>
                            <div className='content'>
                                <p className='contentText'>Email: </p>
                                <p className='contentText'>{user.email}</p>
                            </div>

                                {
                                    creditCard ? 
                                    <div className='content'>
                                        <p className='contentText'> Credit Card:</p>
                                    </div>
                                    :
                                    <></>
                                }
                        <div className='subContainer'>
                            <div className='warning'>
                                <p>Warning: This is a mock business website, do not enter your actual banking information</p>
                            </div>
                            <div className='content'>
                                <p>Credit/Debit Card: </p>
                                <input type="number" className='ccInput' onInput={ccInput}/>
                            </div>
                            <div className='content'>
                                <p>Security Number: </p>
                                <input type="number" className='secInput' onInput={secInput}/>
                            </div>
                            <button onClick={submitCC} className='submissionButton' type='button'>Submit</button>
                        </div>

                        <Footer/>
                    </div>
                </div>
                : <></>
            </div>
            } 
        </>
    )
};
