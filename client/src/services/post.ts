import axios from 'axios';
import { baseUrl } from '../constants';

const create = async (formData: FormData) => {
    const res = await axios.post(`${baseUrl}/posts`, formData);
    return res.data;
};

export default { create };
