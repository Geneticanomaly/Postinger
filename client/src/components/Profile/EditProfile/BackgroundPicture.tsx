import { IoMdClose } from 'react-icons/io';
import { TbCameraPlus } from 'react-icons/tb';
import { getUserImage } from '../../../helperFunctions';
import { useUserValue } from '../../../context/userContext/useUserContext';
import placeholder from '../../../assets/profile-background.jpg';

type BackgroundPictureProps = {
    setCurrentPicture: React.Dispatch<React.SetStateAction<'' | 'profile' | 'background'>>;
    backgroundUrl: string;
    setBackgroundUrl: React.Dispatch<React.SetStateAction<string>>;
    setBackgroundPicture: React.Dispatch<React.SetStateAction<File | null>>;
    setShowCropImageModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const BackgroundPicture = ({
    setCurrentPicture,
    backgroundUrl,
    setBackgroundUrl,
    setBackgroundPicture,
    setShowCropImageModal,
}: BackgroundPictureProps) => {
    const user = useUserValue();

    const handleClick = () => {
        const fileInput = document.getElementById('backgroundInput');
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setBackgroundPicture(selectedFile);
            setCurrentPicture('background');
            setShowCropImageModal(true);

            // Reset the input so that the same file can trigger the onChange
            e.target.value = '';
        }
    };

    const resetProfilePicture = () => {
        setBackgroundPicture(null);
        setBackgroundUrl('');
        setShowCropImageModal(false);
    };

    return (
        <>
            <img
                src={
                    backgroundUrl
                        ? backgroundUrl
                        : user?.backgroundImage
                        ? getUserImage(user, false)
                        : placeholder
                }
                className="w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 ">
                <input
                    id="backgroundInput"
                    type="file"
                    accept="image/*"
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
