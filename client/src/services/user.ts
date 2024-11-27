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

const update = async (payload: UpdateUserPayload) => {
    console.log('HERE', payload);
    const res = await axios.put(`${baseUrl}/users/edit_profile`, payload);
    return res.data;
};

const updateUserImage = async (formData: FormData) => {
    const res = await axios.post(`${baseUrl}/users/edit_profile/image`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return res.data;
};

export default { updateFile, getCurrentUser, getUser, update, updateUserImage };
