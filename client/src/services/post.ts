import axios from 'axios';
import { baseUrl } from '../constants';

const create = async (formData: FormData) => {
    const res = await axios.post(`${baseUrl}/posts`, formData);
    return res.data;
};

const getOne = async (postId: number) => {
    const res = await axios.get(`${baseUrl}/posts/${postId}`);
    return res.data;
};

const getAll = async () => {
    const res = await axios.get(`${baseUrl}/posts`);
    return res.data;
};

const getUserPosts = async (username: string | undefined) => {
    const res = await axios.get(`${baseUrl}/userPosts/${username}`);
    return res.data;
};

export default { create, getAll, getOne, getUserPosts };
