import { TextField } from '@mui/material';
import { useState } from 'react';
import { useThemeContext } from '../../context/themeContext';
import { getTextFieldStyle } from '../../theme';
// import googleLogo from '../../assets/icons8-google-48.png';
// import discordLogo from '../../assets/icons8-discord-48.png';
import { Link } from 'react-router-dom';
import ThirdPartyAuth from './ThirdPartyAuth';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { theme } = useThemeContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <main className="w-full flex flex-col gap-2">
            <section className="flex flex-col ml-[15%] mr-[15%] gap-2">
                <h1 className=" text-neutral-800 text-3xl font-bold mb-4 dark:text-white">
                    Sign in to Postinger
                </h1>
                <section className="flex flex-col justify-center items-center gap-4">
                    <ThirdPartyAuth />
                </section>
                <section className="flex flex-row items-center justify-center gap-2 dark:text-white">
                    <hr className="w-full" />
                    <p className="font-semibold">or</p>
                    <hr className="w-full" />
                </section>
            </section>
            <form className="flex flex-col justify-center items-center gap-4">
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
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                />
                <button className="w-[70%] p-4 rounded-full text-white font-bold bg-blue-600 hover:bg-blue-500">
                    Sign in
                </button>
            </form>
            <section className="ml-[15%] flex text-white gap-1 mt-4">
                <p className=" text-neutral-800 dark:text-white">Don't have an account,</p>
                <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Sign up
                </Link>
            </section>
        </main>
    );
};

export default LoginForm;
