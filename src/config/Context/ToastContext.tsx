import React, { createContext, useState } from "react";
import { Toast } from "../../components/common/Toast";
import { ToastContextProps } from "../../interfaces/ToastContextProps";
import { setToastContext } from "../../context/ToastContext";

interface ToastData {
    id: number;
    message: string;
    type: 'success' | 'error' | 'warn';
}

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const addToast = (message: string, type: 'success' | 'error' | 'warn') => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 3000);
    };

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    const contextValue = { addToast };
    setToastContext(contextValue); // Registra el contexto

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <div className="toast-container position-fixed top-0 end-0 p-3">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};
