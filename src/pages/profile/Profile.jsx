import { useState } from '../../hooks/useFetch';
import './profile.css';

export const List = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        console.log(username, email)
    )
};
