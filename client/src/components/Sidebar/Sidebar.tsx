import { useNavigate } from 'react-router-dom';
import authServices from '../../services/auth';
import OptionList from './OptionList';
import { options } from '../../data/SidebarOptions';
import placeholderAvatar from '../../assets/avatar-1577909_1280.png';
import { IoIosMore } from 'react-icons/io';

const Sidebar = () => {
    const navigate = useNavigate();

    const logout = async () => {
        await authServices.logout();
        navigate('/');
    };
    return (
        <div className="w-[100%] flex flex-col gap-4 mt-1 text-2xl h-full">
            <OptionList options={options} />
            <button className="w-[80%] mt-4 bg-blue-500 text-xl font-bold text-white p-3 rounded-full hover:bg-blue-600">
                Post
            </button>
            <h1 onClick={logout}>Logout</h1>
            <section className="flex items-center gap-4 p-3 mt-4 max-w-max rounded-full font-bold text-base cursor-pointer hover:bg-neutral-800">
                <img src={placeholderAvatar} className="rounded-full w-10" />
                <span>Hikaru Nakamura</span>
                <IoIosMore />
            </section>
        </div>
    );
};

export default Sidebar;
