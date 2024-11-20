import placeholderAvatar from '../../assets/avatar-1577909_1280.png';
import { IoIosMore } from 'react-icons/io';
import { useState } from 'react';
import LogoutModal from './LogoutModal';

const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section
            className="relative flex items-center justify-between w-full xl:p-3 p-2 mt-4 rounded-full font-bold 
            text-base cursor-pointer group transition duration-200"
        >
            <div className="flex items-center gap-4" onClick={() => setShowModal(true)}>
                <img src={placeholderAvatar} className="rounded-full xl:w-10 w-12" />
                <span className="hidden xl:inline">Hikaru Nakamura</span>
            </div>
            <IoIosMore className="hidden xl:inline" />
            {showModal && <LogoutModal />}
            {showModal && (
                <div
                    className="fixed z-20 top-0 left-0 w-full h-full cursor-default"
                    onClick={() => setShowModal(false)}
                ></div>
            )}
        </section>
    );
};

export default Profile;
