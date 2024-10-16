import authServices from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const logout = async () => {
        await authServices.logout();
        navigate('/');
    };

    return (
        <>
            <h1>Hello there</h1>
            <button onClick={logout}>Logout</button>
        </>
    );
};

export default Home;
