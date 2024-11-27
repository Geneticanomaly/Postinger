import background from '../../assets/profile-background.jpg';
import avatarUrl from '../../assets/avatar-1577909_1280.png';
import { IoCalendarOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User } from '../../types';
import { getJoinDate, getUserImage } from '../../helperFunctions';
import { useUserValue } from '../../context/userContext/useUserContext';

type ProfileBannerProps = {
    user: User | undefined;
};

const ProfileBanner = ({ user }: ProfileBannerProps) => {
    const [selectedElement, setSelectedElement] = useState('posts');
    const navigate = useNavigate();
    const currentUser = useUserValue();
    const location = useLocation();

    const isCurrentUser = location.pathname === `/profile/${currentUser?.username}` ? true : false;

    return (
        <div>
            <div className="relative w-full border-l border-r border-b border-neutral-700">
                <img
                    src={user?.backgroundImage ? getUserImage(user) : background}
                    className="w-full h-[200px]"
                />
                <img
                    src={avatarUrl}
                    className="absolute w-32 rounded-full left-5 top-[135px] border-[3px] border-neutral-950 cursor-pointer"
                />
                {isCurrentUser && (
                    <button
                        className="absolute top-[210px] right-2 py-2 px-4 border border-neutral-700 rounded-full
                               font-bold text-sm hover:bg-neutral-800 transition duration-300"
                        onClick={() => navigate(`/profile/${currentUser?.username}/edit_profile`)}
                    >
                        Edit profile
                    </button>
                )}
                <section className="w-full h-[175px] py-20 px-5 flex flex-col gap-2">
                    <h1 className="font-bold">{user?.username}</h1>
                    <span className="text-sm text-neutral-500 flex items-center gap-2">
                        <IoCalendarOutline className="text-base" /> Joined{' '}
                        {getJoinDate(user?.createdAt)}
                    </span>
                    <div className="flex gap-4 text-sm ">
                        <div className="hover:underline cursor-pointer">
                            <p className="text-neutral-500">
                                <b className="text-white">12</b> Following
                            </p>
                        </div>
                        <div className="hover:underline cursor-pointer">
                            <p className="text-neutral-500">
                                <b className="text-white">12</b> Followers
                            </p>
                        </div>
                    </div>
                </section>
                <footer className="flex">
                    <span
                        className={`relative flex justify-center p-4 w-full hover:bg-neutral-700 transition duration-300 
                                    cursor-pointer ${selectedElement === 'posts' && 'font-bold'}`}
                        onClick={() => setSelectedElement('posts')}
                    >
                        Posts
                        {selectedElement === 'posts' && (
                            <div className="absolute bottom-0 h-[4px] w-[50%] bg-[#00aeff] rounded-full" />
                        )}
                    </span>
                    <span
                        className={`relative flex justify-center p-4 w-full hover:bg-neutral-700 transition duration-300 
                                    cursor-pointer ${selectedElement === 'replies' && 'font-bold'}`}
                        onClick={() => setSelectedElement('replies')}
                    >
                        Replies
                        {selectedElement === 'replies' && (
                            <div className="absolute bottom-0 h-[4px] w-[50%] bg-[#00aeff] rounded-full" />
                        )}
                    </span>
                    <span
                        className={`relative flex justify-center p-4 w-full hover:bg-neutral-700 transition duration-300 
                                    cursor-pointer ${selectedElement === 'likes' && 'font-bold'}`}
                        onClick={() => setSelectedElement('likes')}
                    >
                        Likes
                        {selectedElement === 'likes' && (
                            <div className="absolute bottom-0 h-[4px] w-[50%] bg-[#00aeff] rounded-full" />
                        )}
                    </span>
                </footer>
            </div>
        </div>
    );
};

export default ProfileBanner;
