import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../context/themeContext';
import ThirdPartyAuth from '../components/auth/ThirdPartyAuth';
import DarkModeToggle from '../components/DarkModeToggle';
import useIsAuthenticated from '../hooks/useIsAuthenticated';

const LandingPage = () => {
    const navigate = useNavigate();
    const { theme } = useThemeContext();

    useIsAuthenticated();

    return (
        <div className={`${theme === 'dark' && 'dark'}`}>
            <main className="h-svh flex flex-col justify-center gap-4 items-center bg-white dark:bg-neutral-800">
                <section className="flex flex-col gap-3 w-80">
                    <h1 className="font-bold text-6xl text-neutral-800 dark:text-neutral-100 mb-8">
                        Happening now
                    </h1>
                    <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-4">
                        Join today.
                    </h3>
                    <ThirdPartyAuth />
                    <button
                        className="p-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500"
                        onClick={() => navigate('/register')}
                    >
                        Create account
                    </button>
                    <p className="text-neutral-900 dark:text-white text-sm">
                        By signing up, you agree to the Terms of Service and Privacy Policy,
                        including Cookie Use.
                    </p>
                    <section className="flex flex-col gap-4 mt-12">
                        <h3 className="font-bold dark:text-white">Already have an account?</h3>
                        <button
                            className="p-4 rounded-full  bg-neutral-800 text-white font-bold hover:text-blue-400 
                        dark:bg-neutral-900 dark:border dark:border-blue-400"
                            onClick={() => navigate('/login')}
                        >
                            Sign in
                        </button>
                    </section>
                </section>
                <section className="absolute top-0 right-0 m-4">
                    <DarkModeToggle />
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
