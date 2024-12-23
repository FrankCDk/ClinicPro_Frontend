import { useState } from 'react';
import '../../styles/utilities.css';

export const LoginPage = () => {


    const [register, setRegister] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(e);
        console.log('Formulario enviado');
    }

    return (

        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <div className='card' style={{ display: 'flex', flexDirection: 'row', height: '500px' }}>
                <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '0' }}>
                    <h2 style={{ padding: '1rem' }}>Inicio de Sesión</h2>
                    <form onSubmit={handleSubmit} className='form'>
                        <label htmlFor="email">Usuario o Correo electronico:</label>
                        <input type="email" id="email" name="email" />
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" />
                        <button type="submit" className='btn-primary'>Login</button>
                    </form>
                </div>
                <div style={{ width: '50%', height: '100%' }}>
                    {
                        register && (
                            <div>
                                <h2>Registro</h2>
                                <form onSubmit={handleSubmit} className='form'>
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
                            <div style={{ height: '100%' }}>
                                <img src="/src/assets/img_login.jpg" alt="Login" style={{ width: '100%', height: '100%' }} />
                            </div>
                        )
                    }
                </div>
            </div>

        </div>


    )
}
