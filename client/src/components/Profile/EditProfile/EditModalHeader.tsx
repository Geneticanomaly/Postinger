import { NavigateFunction } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { IoMdArrowBack } from 'react-icons/io';

type EditModalHeaderProps = {
    navigate: NavigateFunction;
    setShowCropImageModal: React.Dispatch<React.SetStateAction<boolean>>;
    cropImage: boolean;
};

const EditModalHeader = ({ navigate, setShowCropImageModal, cropImage }: EditModalHeaderProps) => {
    const handleNavigation = () => {
        if (cropImage) {
            setShowCropImageModal(false);
        } else {
            navigate(-1);
        }
    };

    return (
        <header
            className="sticky w-full p-3 top-0 z-10 bg-neutral-950 flex items-center justify-between
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
            <button
                className="py-1.5 px-4 rounded-full bg-white text-sm text-neutral-950 font-medium
                         hover:bg-neutral-200 transition duration-200"
            >
                {cropImage ? 'Apply' : 'Save'}
            </button>
        </header>
    );
};

export default EditModalHeader;
