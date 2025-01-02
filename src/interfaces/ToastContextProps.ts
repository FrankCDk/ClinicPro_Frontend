export interface ToastContextProps {
    addToast: (message: string, type: 'success' | 'error' | 'warn') => void;
}