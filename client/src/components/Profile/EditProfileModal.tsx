import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfileModal = () => {
    const navigate = useNavigate();

    // Disable scrolling when the modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-[#5d778642] z-20 cursor-pointer opacity-70"></div>
            <div className="fixed inset-0 flex items-center justify-center z-30">
                <div
                    className="md:w-[650px] md:h-[650px] w-full h-full relative max-h-full bg-neutral-100 dark:bg-neutral-950
                        rounded-xl flex flex-col items-center justify-center overflow-auto"
                >
                    <section
                        className="absolute top-0 left-0 m-3 p-2 cursor-pointer rounded-full
                        hover:bg-neutral-200 dark:hover:bg-neutral-800"
                        onClick={() => navigate(-1)}
                    >
                        <CloseIcon className="text-2xl dark:text-white" />
                    </section>
                </div>
            </div>
        </>
    );
};

export default EditProfileModal;
