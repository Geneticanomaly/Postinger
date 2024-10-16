import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authServices from '../../services/auth';
import { TextField } from '@mui/material';
import { useThemeContext } from '../../context/themeContext';
import { getTextFieldStyle } from '../../theme';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });
    const { theme } = useThemeContext();

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
        <main className="w-full flex flex-col gap-10">
            <h1 className="text-3xl font-bold ml-[15%] dark:text-white">Create your account</h1>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="w-full flex flex-col justify-center items-center gap-4"
            >
                <TextField
                    sx={getTextFieldStyle(theme)}
                    type="text"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    autoComplete="off"
                />
                <TextField
                    sx={getTextFieldStyle(theme)}
                    type="text"
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    sx={getTextFieldStyle(theme)}
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                />
                <section className="flex flex-row justify-center items-center gap-2 w-[70%]">
                    <hr className="sm:w-[38.5%] w-[30%]" />
                    <p className="text-neutral-800 dark:text-white">Get Started</p>
                    <hr className="sm:w-[38.5%] w-[30%]" />
                </section>
                <button className="p-4 w-[70%] mt-2 rounded-full bg-blue-600 text-white font-bold text-base  hover:bg-blue-400">
                    Register
                </button>
                <section className="flex w-[70%] text-white gap-1 mt-2">
                    <p className=" text-neutral-800 dark:text-white">Already have an account,</p>
                    <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Sign in
                    </Link>
                </section>
            </form>
        </main>
    );
};

export default RegisterForm;
