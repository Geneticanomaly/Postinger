import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authServices from '../services/auth';
import { TextField } from '@mui/material';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await authServices.register(formData);
        setFormData({
            email: '',
            username: '',
            password: '',
        });
        navigate('/login');
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
                <TextField
                    type="text"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    type="text"
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                />
                <button className="p-6 bg-blue-400">Register</button>
            </form>
        </>
    );
};

export default Register;
