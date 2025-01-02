import { ToastContextProps } from "../interfaces/ToastContextProps";

let toastContext: ToastContextProps | null = null;

export const setToastContext = (context: ToastContextProps) => {
    toastContext = context;
};

export const showToast = (message: string, type: 'success' | 'error' | 'warn') => {
    if (toastContext) {
        toastContext.addToast(message, type);
    } else {
        console.warn("Toast context is not available");
    }
};
