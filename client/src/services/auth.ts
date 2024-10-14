import axios from 'axios';
const baseUrl = import.meta.env.BACKEND_URL;

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
    const res = await axios.post(`${baseUrl}/register`, credentials);
    return res.data;
};

const login = async (credentials: LoginCredentials) => {
    const res = await axios.post(`${baseUrl}/login`, credentials);
    return res.data;
};

export default { register, login };
