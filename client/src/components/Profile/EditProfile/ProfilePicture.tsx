import { useState } from 'react';
import placeholderAvatar from '../../../assets/avatar-1577909_1280.png';
import { TbCameraPlus } from 'react-icons/tb';
import { IoMdClose } from 'react-icons/io';

type ProfilePictureProps = {
    setProfilePicture: React.Dispatch<React.SetStateAction<File | null>>;
};

const ProfilePicture = ({ setProfilePicture }: ProfilePictureProps) => {
    const [profilePictureUrl, setProfilePictureUrl] = useState('');

    const handleClick = () => {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setProfilePicture(selectedFile);
            setProfilePictureUrl(URL.createObjectURL(selectedFile));
        }
    };

    const resetProfilePicture = () => {
        setProfilePicture(null);
        setProfilePictureUrl('');
    };

    return (
        <div className="absolute left-5 top-[90px]">
            <div className="relative w-32 h-32 bg-white rounded-full border-2 border-white mt-12">
                <img
                    src={profilePictureUrl ? profilePictureUrl : placeholderAvatar}
                    className="w-full h-full rounded-full border-2 border-black"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                    <input
                        id="fileInput"
                        type="file"
                        onChange={(e) => handleFileChange(e)}
                        className="hidden"
                    />
                    <span
                        onClick={handleClick}
                        className="p-2 bg-neutral-800 text-[20px] rounded-full cursor-pointer text-white
                                   transition duration-200 hover:bg-neutral-700 bg-opacity-60"
                    >
                        <TbCameraPlus />
                    </span>
                    {profilePictureUrl && (
                        <span
                            className="p-2 bg-neutral-800 text-[20px] rounded-full cursor-pointer text-white
                                       transition duration-200 hover:bg-neutral-700 bg-opacity-60"
                            onClick={resetProfilePicture}
                        >
                            <IoMdClose />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePicture;
