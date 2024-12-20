import RegisterForm from './RegisterForm';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import DarkModeToggle from '../DarkModeToggle';

const AuthModal = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const renderForm = () => {
        if (location.pathname === '/register') return <RegisterForm />;
        else if (location.pathname === '/login') return <LoginForm />;
        return null;
    };
    return (
        <div
            className="sm:w-[600px] sm:h-[600px] h-dvh w-dvw
             absolute  bg-neutral-100 rounded-xl flex flex-col 
                items-center justify-center dark:bg-neutral-950"
        >
            <section
                className="absolute top-0 left-0 m-3 p-2 cursor-pointer rounded-full 
                    hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
                <CloseIcon className=" !text-2xl dark:text-white" onClick={() => navigate('/')} />
            </section>
            <section className="absolute top-0 right-0 m-4">
                <DarkModeToggle />
            </section>
            {renderForm()}
        </div>
    );
};

export default AuthModal;
