import React, { useState, useCallback } from 'react';
import { login } from '../slices/currentUser'
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const { from } = location.state || { from: { pathname: "/" } }

    const submitForm = useCallback( e => {
        e.stopPropagation();
        e.preventDefault();

        dispatch(login({ email, password }))
            .then(() => history.replace(from))
    }, [email, password])

    return (
        <div className='login-page'>
            <form onSubmit={submitForm}>
                <div>Login Form</div>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}
