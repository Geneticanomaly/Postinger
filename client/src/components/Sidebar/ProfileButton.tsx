import { useNavigate } from 'react-router-dom';
import authServices from '../../services/auth';
import placeholderAvatar from '../../assets/avatar-1577909_1280.png';
import { IoIosMore } from 'react-icons/io';

const Profile = () => {
    const navigate = useNavigate();

    const logout = async () => {
        await authServices.logout();
        navigate('/');
    };

    return (
        <section
            className="flex items-center justify-between w-full xl:p-3 p-2 mt-4 rounded-full font-bold text-base 
    cursor-pointer hover:bg-neutral-800 transition duration-200"
        >
            <div className="flex items-center gap-4">
                <img src={placeholderAvatar} className="rounded-full xl:w-10 w-12" />
                <span className="hidden xl:inline">Hikaru Nakamura</span>
            </div>
            <IoIosMore className="hidden xl:inline" onClick={logout} />
        </section>
    );
};

export default Profile;
