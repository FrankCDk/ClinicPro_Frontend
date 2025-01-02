import axios from 'axios';
import { showToast } from '../../context/ToastContext';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

//Instancia sin token
export const axiosPublic = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

//Instancia con token
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para añadir el token a las solicitudes privadas
axiosPrivate.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosPublic.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === "ERR_NETWORK") {
            showToast('Error de conexión', 'error');
        } else {
            const errorMessage = error.response?.data?.Message || 'Error en la solicitud';
            showToast(errorMessage, 'error');
        }
        return Promise.resolve();
    }
);


axiosPrivate.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === "ERR_NETWORK") {
            showToast('Error de conexión', 'error');
        } else {
            const errorMessage = error.response?.data?.Message || 'Error en la solicitud';
            showToast(errorMessage, 'error');
        }
        return Promise.resolve();
    }
);
