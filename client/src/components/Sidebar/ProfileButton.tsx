import placeholderAvatar from '../../assets/avatar-1577909_1280.png';
import { IoIosMore } from 'react-icons/io';
import { useState } from 'react';
import LogoutModal from './LogoutModal';
import { useUserValue } from '../../context/userContext/useUserContext';

const ProfileButton = () => {
    const [showModal, setShowModal] = useState(false);
    const user = useUserValue();

    return (
        <section
            className={`relative flex items-center justify-between w-full xl:p-3 p-2 mt-4 rounded-full font-bold 
                    text-base cursor-pointer transition duration-200 ${
                        !showModal && 'hover:bg-neutral-800'
                    }`}
        >
            <div className="flex items-center gap-4">
                <img src={placeholderAvatar} className="rounded-full xl:w-10 w-12" />
                <span className="hidden xl:inline">{user?.username}</span>
            </div>
            <IoIosMore className="hidden xl:inline text-xl" />
            {showModal && <LogoutModal />}
            {showModal && (
                <div
                    className="fixed z-20 top-0 left-0 w-full h-full cursor-default"
                    onClick={() => setShowModal(false)}
                ></div>
            )}
            <div
                className="absolute z-20 w-full h-full rounded-full"
                onClick={() => setShowModal(true)}
            ></div>
        </section>
    );
};

export default ProfileButton;
