import { useState } from 'react';
import './profile.css';

export const Profile = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        console.log(username, email)
    )
};
