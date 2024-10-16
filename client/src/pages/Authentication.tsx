import { useThemeContext } from '../context/themeContext';
import AuthModal from '../components/auth/AuthModal';

const Register = () => {
    const { theme } = useThemeContext();

    return (
        <div className={`${theme === 'dark' && 'dark'} `}>
            <main className="h-svh dark:bg-neutral-900 flex flex-col justify-center items-center">
                <AuthModal />
            </main>
        </div>
    );
};

export default Register;
