import { TextField } from '@mui/material';
import { useState } from 'react';
import { useThemeContext } from '../../context/themeContext';
import { getTextFieldStyle } from '../../theme';
import { Link } from 'react-router-dom';
import ThirdPartyAuth from './ThirdPartyAuth';
import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z.string().min(1, { message: 'Password is required' }),
});

const LoginForm = () => {
    const { theme } = useThemeContext();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState<{
        email?: string;
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = loginSchema.safeParse(formData);

        if (!result.success) {
            const zodErrors = result.error.format();
            setFormErrors({
                email: zodErrors.email?._errors[0],
                password: zodErrors.password?._errors[0],
            });
            return;
        }
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
            </section>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col justify-center items-center gap-4"
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
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                    error={!!formErrors.password}
                    helperText={formErrors.password}
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
