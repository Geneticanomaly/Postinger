import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authServices from '../../services/auth';
import { TextField } from '@mui/material';
import { useThemeContext } from '../../context/themeContext';
import { getTextFieldStyle } from '../../theme';
import { z } from 'zod';
import { isAxiosError } from 'axios';

const registerSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
    username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const RegisterForm = () => {
    const navigate = useNavigate();
    const { theme } = useThemeContext();
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState<{
        email?: string;
        username?: string;
        password?: string;
    }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));

        // Reset error if user starts typing again
        if (formErrors[e.target.name as keyof typeof formErrors]) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [e.target.name]: '',
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = registerSchema.safeParse(formData);

        if (!result.success) {
            const zodErrors = result.error.format();
            setFormErrors({
                email: zodErrors.email?._errors[0],
                username: zodErrors.username?._errors[0],
                password: zodErrors.password?._errors[0],
            });
            return;
        }

        try {
            await authServices.register(formData);
            setFormData({
                email: '',
                username: '',
                password: '',
            });
            navigate('/login');
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                if (error.response) {
                    setErrorMessage(error.response.data.error);
                } else {
                    setErrorMessage('Something went wrong');
                }
            } else {
                setErrorMessage('An unexpected error occured');
            }
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
        }
    };

    return (
        <main className="w-full flex flex-col">
            <h1 className="text-3xl font-bold ml-[15%] dark:text-white mb-10">
                Create your account
            </h1>
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
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                />
                <TextField
                    sx={getTextFieldStyle(theme)}
                    type="text"
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={(e) => handleChange(e)}
                    error={!!formErrors.username}
                    helperText={formErrors.username}
                />
                <TextField
                    sx={getTextFieldStyle(theme)}
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                    error={!!formErrors.password}
                    helperText={formErrors.password}
                />
                {errorMessage && <p className="w-[70%] text-red-600">{errorMessage}</p>}
                <section className="flex flex-row justify-center items-center gap-2 w-[70%]">
                    <hr className="sm:w-[38.5%] w-[30%]" />
                    <p className="text-neutral-800 dark:text-white">Get Started</p>
                    <hr className="sm:w-[38.5%] w-[30%]" />
                </section>
                <button className="p-4 w-[70%] mt-2 rounded-full bg-blue-600 text-white font-bold text-base  hover:bg-blue-400">
                    Register
                </button>
            </form>
            <section className="flex ml-[15%] text-white gap-1 mt-6">
                <p className=" text-neutral-800 dark:text-white">Already have an account,</p>
                <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Sign in
                </Link>
            </section>
        </main>
    );
};

export default RegisterForm;
