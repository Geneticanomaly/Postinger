import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { TbCameraPlus } from 'react-icons/tb';

type BackgroundPictureProps = {
    setBackgroundPicture: React.Dispatch<React.SetStateAction<File | null>>;
};

const BackgroundPicture = ({ setBackgroundPicture }: BackgroundPictureProps) => {
    const [backgroundUrl, setBackgroundUrl] = useState('');

    const handleClick = () => {
        const fileInput = document.getElementById('backgroundInput');
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            // setProfilePicture(selectedFile);
            setBackgroundUrl(URL.createObjectURL(selectedFile));
        }
    };

    const resetProfilePicture = () => {
        setBackgroundPicture(null);
        setBackgroundUrl('');
    };

    return (
        <>
            <img
                src={backgroundUrl ? backgroundUrl : ''}
                className={`${backgroundUrl ? 'w-full h-full' : 'hidden'}`}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 ">
                <input
                    id="backgroundInput"
                    type="file"
                    onChange={(e) => handleFileChange(e)}
                    className="hidden"
                />
                <span
                    className="p-3 bg-neutral-800 text-[20px] rounded-full cursor-pointer text-white
                               transition duration-200 hover:bg-neutral-700 bg-opacity-60"
                    onClick={handleClick}
                >
                    <TbCameraPlus />
                </span>
                {backgroundUrl && (
                    <span
                        className="p-3 bg-neutral-800 text-[20px] rounded-full cursor-pointer text-white
                                   transition duration-200 hover:bg-neutral-700 bg-opacity-60"
                        onClick={resetProfilePicture}
                    >
                        <IoMdClose />
                    </span>
                )}
            </div>
        </>
    );
};

export default BackgroundPicture;
