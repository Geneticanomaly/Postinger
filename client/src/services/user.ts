import axios from 'axios';
import { baseUrl } from '../constants';
import { UpdateUserPayload } from '../types';

const updateFile = () => {};

const update = async (payload: UpdateUserPayload, userId: string) => {
    const res = await axios.post(`${baseUrl}/users/${userId}`, payload);
    return res.data;
};

export default { updateFile, update };
