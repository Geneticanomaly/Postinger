import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import BackgroundPicture from './BackgroundPicture';
import EditProfileTextarea from './EditProfileTextarea';
import EditModalHeader from './EditModalHeader';
import CropImageModal from './CropImageModal';
import { useUserValue } from '../../../context/userContext/useUserContext';
// import userServices from '../../../services/user';

const EditProfileModal = () => {
    const navigate = useNavigate();
    const user = useUserValue();

    const [currentPicture, setCurrentPicture] = useState<'' | 'profile' | 'background'>('');

    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [profileUrl, setprofileUrl] = useState('');

    const [backgroundPicture, setBackgroundPicture] = useState<File | null>(null);
    const [backgroundUrl, setBackgroundUrl] = useState('');

    const [showCropImageModal, setShowCropImageModal] = useState(false);

    // Initialize state directly with user data
    const [username, setUsername] = useState(user?.username || '');
    const [description, setDescription] = useState(user?.description || '');
    const [residence, setResidence] = useState(user?.residence || '');

    const handleSave = () => {
        // TODO:
        // Need to check which api endpoints needs to be triggered
        // Based on what has changed

        // if (username)

        console.log('SAVING DATA');
    };

    // Disable main page scrolling when the modal is open
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
                           md:rounded-xl flex flex-col items-center overflow-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                <EditModalHeader
                    setShowCropImageModal={setShowCropImageModal}
                    cropImage={false}
                    setProfilePicture={setProfilePicture}
                    setBackgroundPicture={setBackgroundPicture}
                    setCurrentPicture={setCurrentPicture}
                />
                <button
                    className="absolute top-3.5 right-4 z-30 py-1.5 px-4 rounded-full bg-white text-sm text-neutral-950 font-medium
                         hover:bg-neutral-200 transition duration-200"
                    onClick={handleSave}
                >
                    Save
                </button>
                <div className="relative w-full h-[200px]">
                    <ProfilePicture
                        setCurrentPicture={setCurrentPicture}
                        profileUrl={profileUrl}
                        setProfileUrl={setprofileUrl}
                        setProfilePicture={setProfilePicture}
                        setShowCropImageModal={setShowCropImageModal}
                    />
                    <BackgroundPicture
                        setCurrentPicture={setCurrentPicture}
                        backgroundUrl={backgroundUrl}
                        setBackgroundUrl={setBackgroundUrl}
                        setBackgroundPicture={setBackgroundPicture}
                        setShowCropImageModal={setShowCropImageModal}
                    />
                </div>
                <div className="absolute w-full flex flex-col items-center justify-center gap-4 mt-[345px]">
                    <EditProfileTextarea
                        label="Name"
                        maxCount={50}
                        rows={1}
                        value={username}
                        onChange={setUsername}
                    />
                    <EditProfileTextarea
                        label="Bio"
                        maxCount={160}
                        rows={3}
                        value={description}
                        onChange={setDescription}
                    />
                    <EditProfileTextarea
                        label="Location"
                        maxCount={30}
                        rows={1}
                        value={residence}
                        onChange={setResidence}
                    />
                </div>

                {showCropImageModal && (
                    <CropImageModal
                        profilePicture={profilePicture}
                        setProfilePicture={setProfilePicture}
                        setProfileUrl={setprofileUrl}
                        backgroundPicture={backgroundPicture}
                        setBackgroundPicture={setBackgroundPicture}
                        setBackgroundUrl={setBackgroundUrl}
                        setShowCropImageModal={setShowCropImageModal}
                        currentPicture={currentPicture}
                        setCurrentPicture={setCurrentPicture}
                    />
                )}
            </div>
        </>
    );
};

export default EditProfileModal;
