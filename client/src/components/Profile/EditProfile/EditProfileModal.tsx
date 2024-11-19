import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import BackgroundPicture from './BackgroundPicture';
import EditProfileTextarea from './EditProfileTextarea';
import EditModalHeader from './EditModalHeader';
import CropImageModal from './CropImageModal';

const EditProfileModal = () => {
    const navigate = useNavigate();
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [backgroundPicture, setBackgroundPicture] = useState<File | null>(null);
    const [showCropImageModal, setShowCropImageModal] = useState(false);

    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');

    // Disable scrolling when the modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-full h-full bg-[#5d778642] z-20 cursor-pointer opacity-70"
                onClick={() => navigate(-1)}
            ></div>
            <div
                className="absolute z-30 md:w-[650px] md:h-[650px] w-full h-full bg-neutral-100 dark:bg-neutral-950
                           rounded-xl flex flex-col items-center overflow-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                <EditModalHeader
                    navigate={navigate}
                    setShowCropImageModal={setShowCropImageModal}
                    cropImage={false}
                />
                <div className="relative w-full h-[200px]">
                    <ProfilePicture
                        setProfilePicture={setProfilePicture}
                        setShowCropImageModal={setShowCropImageModal}
                    />
                    <BackgroundPicture
                        setBackgroundPicture={setBackgroundPicture}
                        setShowCropImageModal={setShowCropImageModal}
                    />
                </div>
                <div className="absolute w-full flex flex-col items-center justify-center gap-4 mt-[345px]">
                    <EditProfileTextarea
                        label="Name"
                        maxCount={50}
                        rows={1}
                        value={name}
                        onChange={setName}
                    />
                    <EditProfileTextarea
                        label="Bio"
                        maxCount={160}
                        rows={3}
                        value={bio}
                        onChange={setBio}
                    />
                    <EditProfileTextarea
                        label="Location"
                        maxCount={30}
                        rows={1}
                        value={location}
                        onChange={setLocation}
                    />
                </div>

                {showCropImageModal && (
                    <CropImageModal
                        backgroundPicture={backgroundPicture}
                        setShowCropImageModal={setShowCropImageModal}
                    />
                )}
            </div>
        </>
    );
};

export default EditProfileModal;
