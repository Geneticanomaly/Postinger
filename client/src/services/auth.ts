import axios from 'axios';
import { baseUrl } from '../constants';

type RegisterCredentials = {
    email: string;
    username: string;
    password: string;
};

type LoginCredentials = {
    email: string;
    password: string;
};

const register = async (credentials: RegisterCredentials) => {
    const res = await axios.post(`${baseUrl}/auth/register`, credentials);
    return res.data;
};

const login = async (credentials: LoginCredentials) => {
    const res = await axios.post(`${baseUrl}/auth/login`, credentials);
    return res.data;
};

export default { register, login };
