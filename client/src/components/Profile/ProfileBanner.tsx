import background from '../../assets/profile-background.jpg';
import avatarUrl from '../../assets/avatar-1577909_1280.png';
import { IoCalendarOutline } from 'react-icons/io5';

const ProfileBanner = () => {
    return (
        <div className="relative w-full border-l border-r border-b border-neutral-700">
            <img src={background} className="w-full h-[200px]" />
            <img
                src={avatarUrl}
                className="absolute w-32 rounded-full left-5 top-[135px] border-[3px] border-neutral-950
                        cursor-pointer"
            />
            <button
                className="absolute top-[210px] right-2 py-2 px-4 border border-neutral-700 rounded-full
                        font-bold text-sm hover:bg-neutral-800 transition duration-300"
            >
                Set up profile
            </button>
            <section className="w-full h-[175px] py-20 px-5 flex flex-col gap-2">
                <h1>Username</h1>
                <span className="text-sm text-neutral-500 flex items-center gap-2">
                    <IoCalendarOutline className="text-base" /> Joined December 2014
                </span>
                <div className="flex gap-4 text-sm ">
                    <div className="flex gap-1">
                        <b>37</b>
                        <p className="text-neutral-500">Following</p>
                    </div>
                    <div className="flex gap-1">
                        <b>12</b>
                        <p className="text-neutral-500">Followers</p>
                    </div>
                </div>
            </section>
            <section className="flex">
                <span
                    className="flex justify-center p-4 w-full hover:bg-neutral-700 transition duration-300 
                        cursor-pointer"
                >
                    Posts
                </span>
                <span
                    className="flex justify-center p-4 w-full hover:bg-neutral-700 transition duration-300 
                        cursor-pointer"
                >
                    Replies
                </span>
                <span
                    className="flex justify-center p-4 w-full hover:bg-neutral-700 transition duration-300 
                        cursor-pointer"
                >
                    Likes
                </span>
            </section>
        </div>
    );
};

export default ProfileBanner;
