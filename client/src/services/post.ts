import axios from 'axios';
import { baseUrl } from '../constants';

const create = async (formData: FormData) => {
    const res = await axios.post(`${baseUrl}/posts`, formData);
    return res.data;
};

const getAll = async () => {
    const res = await axios.get(`${baseUrl}/posts`);
    return res.data;
};

export default { create, getAll };
