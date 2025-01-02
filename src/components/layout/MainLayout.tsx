import React from 'react'
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode, JwtPayload } from 'jwt-decode'; // Corregir la importación
import { useNavigate } from 'react-router-dom';

export const MainLayout: React.FC = () => {

    const navigate = useNavigate();

    const getCookie = (name: string): string | null => {
        return Cookies.get(name) || null;
    };

    const isTokenExpired = (token: string | null): boolean => {
        if (!token) return true; // Si no hay token, está expirado
        const decoded = jwtDecode(token); // Decodificar el JWT
        const currentTime = Date.now() / 1000; // Obtener el tiempo actual en segundos
        return decoded.exp ? decoded.exp < currentTime : true; // Comparar la fecha de expiración con la fecha actual
    };

    useEffect(() => {
        const token = getCookie('AuthToken');
        if (!token || isTokenExpired(token)) {
            navigate('/login');
        }
    }, [navigate]);


    return (

        <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
            <Sidebar />
            <div style={{ width: '87.5%' }}>
                <Outlet />
            </div>
        </div>

    )
}