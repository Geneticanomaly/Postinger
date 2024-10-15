import googleLogo from '../assets/icons8-google-48.png';
import discordLogo from '../assets/icons8-discord-48.png';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../context/themeContext';

const LandingPage = () => {
    const navigate = useNavigate();
    const { theme, setTheme } = useThemeContext();

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
                    <button
                        className="flex justify-center items-center gap-2 p-3 rounded-full bg-neutral-white border
                        border-gray-300 cursor-pointertext-neutral-900 font-semibold hover:bg-gray-100
                        dark:bg-white dark:hover:bg-gray-200"
                    >
                        <img src={googleLogo} alt="Google" className="inline mr-2 w-8" />
                        Sign up with Google
                    </button>
                    <button
                        className="flex justify-center items-center gap-2 p-3 rounded-full bg-neutral-white border
                        border-gray-300 cursor-pointertext-neutral-900 font-semibold hover:bg-gray-100
                        dark:bg-white dark:hover:bg-gray-200"
                    >
                        <img src={discordLogo} alt="Google" className="inline mr-2 w-8" />
                        Sign up with Discord
                    </button>
                    <section className="flex flex-row items-center justify-center gap-2 dark:text-white w-full">
                        <hr className="w-full" />
                        <p className="font-semibold">or</p>
                        <hr className="w-full" />
                    </section>
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
                <button
                    className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full
                    text-white dark:text-black"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                    {theme === 'dark' ? 'DRK' : 'LGT'}
                </button>
            </main>
        </div>
    );
};

export default LandingPage;
