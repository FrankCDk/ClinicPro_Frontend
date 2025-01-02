import { useState } from 'react';
import '../../styles/utilities.css';
import { LoginForm } from '../../components/Login/LoginForm';

export const LoginPage = () => {

    const [register, setRegister] = useState<boolean>(false);

    return (

        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <div className='card' style={{ display: 'flex', flexDirection: 'row', height: '500px', width: '80%', margin: '2rem' }}>
                <div className='form-login'>
                    <h2 style={{ padding: '1rem' }}>Bienvenid@ a ClinicPro</h2>
                    <LoginForm />
                </div>
                <div className='form-register'>
                    {
                        register && (
                            <div>
                                <h2>Registro</h2>
                                <form className='form'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" />
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" />
                                    <label htmlFor="password">Confirmar Password</label>
                                    <input type="password" id="password" name="password" />
                                    <button type="submit" className='btn-primary'>Registrarse</button>
                                    <button type="reset" className='btn-danger'>Limpiar</button>
                                </form>
                            </div>
                        )
                    }
                    {
                        !register && (
                            <div className='img-login' style={{ height: '100%' }}>
                                <img src="/src/assets/img_login.jpg" alt="Login" style={{ width: '100%', height: '100%' }} />
                            </div>
                        )
                    }
                </div>
            </div >

        </div >


    )
}
