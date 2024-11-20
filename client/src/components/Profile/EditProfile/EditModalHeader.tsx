import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { IoMdArrowBack } from 'react-icons/io';

type EditModalHeaderProps = {
    setShowCropImageModal: React.Dispatch<React.SetStateAction<boolean>>;
    cropImage: boolean;
    setProfilePicture: React.Dispatch<React.SetStateAction<File | null>>;
    setBackgroundPicture: React.Dispatch<React.SetStateAction<File | null>>;
    setCurrentPicture: React.Dispatch<React.SetStateAction<'' | 'profile' | 'background'>>;
};

const EditModalHeader = ({
    setShowCropImageModal,
    cropImage,
    setProfilePicture,
    setBackgroundPicture,
    setCurrentPicture,
}: EditModalHeaderProps) => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        if (cropImage) {
            setProfilePicture(null);
            setBackgroundPicture(null);
            setCurrentPicture('');
            setShowCropImageModal(false);
        } else {
            setCurrentPicture('');
            navigate(-1);
        }
    };

    return (
        <header
            className="sticky w-full p-3 top-0 z-10 bg-black flex items-center justify-between
                        "
        >
            <section className="flex items-center gap-8">
                <span
                    className="p-2 rounded-full cursor-pointer hover:bg-neutral-800"
                    onClick={handleNavigation}
                >
                    {cropImage ? (
                        <IoMdArrowBack className="text-xl dark:text-white" />
                    ) : (
                        <CloseIcon className="text-2xl dark:text-white" />
                    )}
                </span>
                <h3 className="text-white text-lg font-semibold">
                    {cropImage ? 'Edit media' : 'Edit profile'}
                </h3>
            </section>
        </header>
    );
};

export default EditModalHeader;
