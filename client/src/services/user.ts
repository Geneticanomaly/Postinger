import axios from 'axios';
import { baseUrl } from '../constants';
import { UpdateUserPayload } from '../types';

const updateFile = () => {};

const getCurrentUser = async () => {
    const res = await axios.get(`${baseUrl}/users/get/current_user`, { withCredentials: true });
    return res.data;
};

const getUser = async (username: string | undefined) => {
    const res = await axios.get(`${baseUrl}/users/${username}`);
    return res.data;
};

const update = async (payload: UpdateUserPayload, userId: string) => {
    const res = await axios.post(`${baseUrl}/users/${userId}`, payload);
    return res.data;
};

export default { updateFile, getCurrentUser, getUser, update };
