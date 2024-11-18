import { NavigateFunction } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

type EditModalHeaderProps = {
    navigate: NavigateFunction;
};

const EditModalHeader = ({ navigate }: EditModalHeaderProps) => {
    return (
        <header
            className="sticky w-full p-3 top-0 z-10 bg-neutral-950 flex items-center justify-between
                        bg-opacity-90 backdrop-blur-sm"
        >
            <section className="flex items-center gap-8">
                <span
                    className="p-2 rounded-full cursor-pointer hover:bg-neutral-800"
                    onClick={() => navigate(-1)}
                >
                    <CloseIcon className="text-2xl dark:text-white" />
                </span>
                <h3 className="text-white text-lg font-semibold">Edit profile</h3>
            </section>
            <button
                className="py-1.5 px-4 rounded-full bg-white text-sm text-neutral-950 font-medium
                                hover:bg-neutral-200 transition duration-200"
            >
                Save
            </button>
        </header>
    );
};

export default EditModalHeader;
