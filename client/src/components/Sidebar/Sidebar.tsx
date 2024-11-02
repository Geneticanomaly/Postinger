import { useNavigate } from 'react-router-dom';
import authServices from '../../services/auth';
import OptionList from './OptionList';
import { options } from '../../data/SidebarOptions';
import placeholderAvatar from '../../assets/avatar-1577909_1280.png';
import { IoIosMore } from 'react-icons/io';
import { MdOutlinePostAdd } from 'react-icons/md';

const Sidebar = () => {
    const navigate = useNavigate();

    const logout = async () => {
        await authServices.logout();
        navigate('/');
    };

    return (
        <div className="flex flex-col gap-3 mt-1 text-2xl ml-2 w-[60px] xl:w-[275px]">
            <OptionList options={options} />
            <button
                className="w-[90%] mt-4 bg-blue-500 text-xl font-bold text-white p-3 rounded-full 
            hover:bg-blue-600 hidden xl:block"
            >
                Post
            </button>
            <span className="rounded-full p-3 cursor-pointer bg-blue-500 max-w-max hover:bg-blue-600 xl:hidden">
                <MdOutlinePostAdd className="text-3xl" />
            </span>
            <section
                className="flex items-center gap-4 p-3 mt-4 max-w-max rounded-full font-bold text-base 
            cursor-pointer hover:bg-neutral-800"
            >
                <img src={placeholderAvatar} className="rounded-full w-10" />
                <span className="hidden xl:inline">Hikaru Nakamura</span>
                <IoIosMore className="hidden xl:inline" onClick={logout} />
            </section>
        </div>
    );
};

export default Sidebar;
