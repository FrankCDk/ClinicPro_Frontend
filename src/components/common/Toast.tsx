import { useEffect } from 'react'
import { FaExclamationCircle } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'warn';
    onClose: () => void;
    duration?: number;
}


export const Toast = ({ message, type, onClose, duration = 3000 }: ToastProps) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => {
            clearTimeout(timer);
        }
    }, [duration, onClose]);

    return (

        <div className={`toast toast-${type}`}>

            {
                type === 'success' && <FaCheckCircle />
            }
            {
                type === 'error' && <FaExclamationCircle />
            }
            {
                type === 'warn' && <FaExclamationTriangle />
            }

            <p>{message}</p>
            <button onClick={onClose}>X</button>
        </div>

    )
}
