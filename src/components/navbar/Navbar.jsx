import Button from '@mui/material/Button';

import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const auth = localStorage.getItem('user');

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className='navbar'>
            <div className='navContainer'>
                <img className='logoImg' src="https://iili.io/s8B7O7.jpg" alt="Life in balance logo" />
                <Link className='logo' to={'/'}>Life In Balance</Link>
                <ul className='navItems'>

                { 
                    auth && JSON.parse(auth).isAdmin ?  <Button className='navLink' href={'/create_lesson'}>Create Lesson</Button> 
                    : <></>  
                }
                    
                {   
                    auth ? <Button className='navLink' onClick={logout} to='/'>Logout</Button> 
                    : <>
                        <Button className='navLink' href={'/register'}>Register</Button>
                        <Button className='navLink' href={'/login'}>Login</Button>
                    </>}
                </ul>
            </div>
        </div>
    )
}