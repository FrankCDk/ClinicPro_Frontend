import { LoginRequest } from "../../interfaces/Auth";

export const LoginValidation = (credentials: LoginRequest) => {

    const errors: any = {};

    if (!credentials.email) {
        errors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
        errors.email = 'El email es invalido';
    }

    if (!credentials.password) {
        errors.password = 'La contraseña es requerida';
    }

    return errors;

}