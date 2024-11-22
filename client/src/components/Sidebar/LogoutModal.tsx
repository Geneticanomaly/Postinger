import { useNavigate } from 'react-router-dom';
import authServices from '../../services/auth';
import { useUserValue } from '../../context/userContext/useUserContext';

const LogoutModal = () => {
    const navigate = useNavigate();
    const user = useUserValue();

    const handleLogout = async () => {
        await authServices.logout();
        navigate('/');
    };

    return (
        <div
            className="absolute z-50 bg-black w-[275px] h-[70px] mb-40 sm:-ml-8 -ml-2
                       flex justify-center items-center rounded-xl border border-neutral-700"
            style={{
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.2), 0 0 5px rgba(128, 128, 128, 0.1)',
            }}
        >
            <span
                className="w-full py-3 transition duration-200 hover:bg-[#24293065] opacity-90"
                onClick={handleLogout}
            >
                <h2 className="text-white pl-5">Log out @{user?.user.username}</h2>
            </span>
            <span
                className="absolute sm:left-[46px] left-[19px] bottom-0"
                style={{
                    filter: 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.2))',
                }}
            >
                <span
                    className="absolute border-l-[9px] border-l-transparent -ml-[1px] mt-[1px]
                               border-t-[11px] border-neutral-700
                               border-r-[9px] border-r-transparent"
                ></span>
                <span
                    className="absolute left-[-1px] border-l-[9px] border-l-transparent
                               border-t-[11px] border-t-black
                               border-r-[9px] border-r-transparent"
                ></span>
            </span>
        </div>
    );
};

export default LogoutModal;
