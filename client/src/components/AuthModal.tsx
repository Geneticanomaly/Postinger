import RegisterForm from './RegisterForm';
import '../index.css';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const AuthModal = () => {
    const navigate = useNavigate();

    return (
        <div
            className="modal bg-neutral-100 rounded-xl flex flex-col 
        items-center justify-center dark:bg-neutral-950"
        >
            <section
                className="absolute top-0 left-0 m-3 p-2 cursor-pointer rounded-full hover:bg-neutral-200 
             dark:hover:bg-neutral-800"
            >
                <CloseIcon className=" !text-2xl dark:text-white" onClick={() => navigate('/')} />
            </section>

            <RegisterForm />
        </div>
    );
};

export default AuthModal;
