import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import BackgroundPicture from './BackgroundPicture';
import EditProfileTextarea from './EditProfileTextarea';
import EditModalHeader from './EditModalHeader';
import CropImageModal from './CropImageModal';
import { useUserDispatch, useUserValue } from '../../../context/userContext/useUserContext';
import { useMutation } from '@tanstack/react-query';
import userServices from '../../../services/user';
import { User, UserImage } from '../../../types';
import Loading from '../../Loading';

const EditProfileModal = () => {
    const navigate = useNavigate();
    const user = useUserValue();
    const userDispatch = useUserDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const [currentPicture, setCurrentPicture] = useState<'' | 'profile' | 'background'>('');

    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [profileUrl, setprofileUrl] = useState('');

    const [backgroundPicture, setBackgroundPicture] = useState<File | null>(null);
    const [backgroundUrl, setBackgroundUrl] = useState('');

    const [showCropImageModal, setShowCropImageModal] = useState(false);

    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [residence, setResidence] = useState('');

    // Store initial values
    const [initialUsername] = useState(user?.username || '');
    const [initialDescription] = useState(user?.description || '');
    const [initialResidence] = useState(user?.residence || '');

    // Check if any values have changed
    const isDisabled =
        username.length < 3 ||
        (username === initialUsername &&
            description === initialDescription &&
            residence === initialResidence &&
            !backgroundPicture &&
            !profilePicture);

    // Initialize values with the current user's data
    useEffect(() => {
        if (user) {
            setUsername(user.username || '');
            setDescription(user.description || '');
            setResidence(user.residence || '');
        }
    }, [user]);

    const userMutation = useMutation({
        mutationFn: userServices.update,
        onSuccess: (newUser: User) => {
            console.log('User updated successfully', newUser);
            if (user) {
                userDispatch({
                    type: 'SET',
                    payload: {
                        ...user,
                        username: newUser.username,
                        description: newUser.description,
                        residence: newUser.residence,
                    },
                });
            }
        },
        onError: (err: unknown) => {
            console.error('Error updating user:', err);
        },
    });

    const updateUserImageMutation = useMutation({
        mutationFn: userServices.updateUserImage,
        onSuccess: (file: UserImage) => {
            const fileType = file.fileType;
            if (user && fileType) {
                userDispatch({
                    type: 'SET',
                    payload: {
                        ...user,
                        [fileType]: { ...file },
                    },
                });
            }
        },
        onError: (err: unknown) => {
            console.error('Error updating user image:', err);
        },
    });

    const handleSave = async () => {
        setIsLoading(true);

        // Initialize null values to empty strings
        const userDescription = user?.description || '';
        const userResidence = user?.residence || '';

        // If user's data (username, description or residence) has changed only then go in here
        if (
            username !== user?.username ||
            description !== userDescription ||
            residence !== userResidence
        ) {
            const payload = {
                username,
                description,
                residence,
            };

            userMutation.mutate(payload);
        }

        // If a new backgroundPicture is selected go in here
        if (backgroundPicture && user) {
            const formData = new FormData();
            formData.append('userId', user.id);
            formData.append('file', backgroundPicture);
            formData.append('fileType', 'backgroundImage');
            updateUserImageMutation.mutate(formData);
        }

        // If a new profilePicture is selected go in here
        if (profilePicture && user) {
            const formData = new FormData();
            formData.append('userId', user.id);
            formData.append('file', profilePicture);
            formData.append('fileType', 'profileImage');
            updateUserImageMutation.mutate(formData);
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
        navigate(-1);
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
                    className={`absolute top-3.5 right-4 z-30 w-[74px] h-8 rounded-full bg-white text-sm text-neutral-950 font-medium
                         hover:bg-neutral-200 transition duration-200 ${
                             isDisabled && 'disabled:opacity-50'
                         }`}
                    disabled={isDisabled || isLoading}
                    onClick={handleSave}
                >
                    {isLoading ? <Loading isButton={true} /> : 'Save'}
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
