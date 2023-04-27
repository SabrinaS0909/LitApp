import { useRef, useState, useEffect } from 'react';
import Inside from './Inside';

const LoginVerification = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pass, setPass] = useEffect('');
    return (
        <div>
            <Inside />
        </div>
    )
}

export default LoginVerification