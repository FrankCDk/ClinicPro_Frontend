import axios from 'axios';


const BASE_URL = 'http://localhost:3000';

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
