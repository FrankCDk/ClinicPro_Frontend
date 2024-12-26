import { axiosPublic } from "../config/Axios/axiosConfig";
import { LoginRequest } from "../interfaces/Auth";

export const loginService = async (credentials: LoginRequest) => {

    const response = await axiosPublic.post('/auth/login', credentials);
    return response.data;

}