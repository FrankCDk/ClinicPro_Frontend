import { axiosPublic } from "../config/Axios/axiosConfig";
import { LoginRequest } from "../interfaces/Auth";

export const loginService = async (credentials: LoginRequest) => {

    return await axiosPublic.post('/auth/login', credentials)
        .then(res => res.data)
        .catch(() => null);

}