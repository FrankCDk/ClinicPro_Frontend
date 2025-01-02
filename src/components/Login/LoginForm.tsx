import React, { useState } from 'react'
import { LoginRequest } from '../../interfaces/Auth';
import { useNavigate } from 'react-router';
import { loginService } from '../../api/authService';
import { LoginValidation } from '../../utils/Validations/LoginValidation';
import Cookies from 'js-cookie';

export const LoginForm = () => {

    const [err, setErr] = useState<any>({});
    const [credentials, setCredentials] = useState<LoginRequest>({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        const errors: any = LoginValidation(credentials);

        if (errors.email || errors.password) {
            setErr(errors);
            return;
        }

        setErr({});

        const res = await loginService(credentials);

        if (res != null) {
            Cookies.set('AuthToken', res.data.token);
            navigate('/app/home');
        }


    }

    return (
        <>
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor="email">Usuario o Correo electronico:</label>
                <input type="text" id="email" name="email" value={credentials.email} onChange={handleChange} />
                {err.email && <p className='error'>{err.email}</p>}


                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} />
                {err.password && <p className='error'>{err.password}</p>}

                <button type="submit" className='btn-primary'>Login</button>
            </form>
        </>

    )
}
