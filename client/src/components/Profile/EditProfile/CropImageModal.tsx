import EditModalHeader from './EditModalHeader';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { HiMagnifyingGlassPlus, HiMagnifyingGlassMinus } from 'react-icons/hi2';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop';
import { getCroppedImage } from '../../../helperFunctions';
import Loading from '../../Loading';

type CropImageModalProps = {
    profilePicture: File | null;
    setProfilePicture: React.Dispatch<React.SetStateAction<File | null>>;
    setProfileUrl: React.Dispatch<React.SetStateAction<string>>;
    backgroundPicture: File | null;
    setBackgroundPicture: React.Dispatch<React.SetStateAction<File | null>>;
    setBackgroundUrl: React.Dispatch<React.SetStateAction<string>>;
    setShowCropImageModal: React.Dispatch<React.SetStateAction<boolean>>;
    currentPicture: '' | 'profile' | 'background';
    setCurrentPicture: React.Dispatch<React.SetStateAction<'' | 'profile' | 'background'>>;
};

const CropImageModal = ({
    profilePicture,
    setProfilePicture,
    setProfileUrl,
    backgroundPicture,
    setBackgroundPicture,
    setBackgroundUrl,
    setShowCropImageModal,
    currentPicture,
    setCurrentPicture,
}: CropImageModalProps) => {
    const [loading, setLoading] = useState(false);
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [imageUrl, setImageUrl] = useState('');
    const [croppedImagePixels, setCroppedImagePixels] = useState<Area>({
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    });

    const onCropComplete = (_croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedImagePixels(croppedAreaPixels);
    };

    useEffect(() => {
        const selectedPicture = currentPicture === 'profile' ? profilePicture : backgroundPicture;
        if (selectedPicture) {
            setImageUrl(URL.createObjectURL(selectedPicture));
        }
    }, [currentPicture, profilePicture, backgroundPicture]);

    const handleClick = async () => {
        setLoading(true);
        getCroppedImage(imageUrl, croppedImagePixels)
            .then((croppedImage) => {
                if (croppedImage instanceof File) {
                    if (currentPicture === 'profile') {
                        setProfilePicture(croppedImage);
                        setProfileUrl(URL.createObjectURL(croppedImage));
                    } else if (currentPicture === 'background') {
                        setBackgroundPicture(croppedImage);
                        setBackgroundUrl(URL.createObjectURL(croppedImage));
                    }
                    setLoading(false);
                    setCurrentPicture('');
                    setShowCropImageModal(false);
                } else {
                    console.error('The returned value is not a valid File');
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error cropping image:', error);
                setLoading(false);
            });
    };

    return (
        <div
            className="absolute z-50 w-full h-full bg-neutral-100 dark:bg-black rounded-xl 
                       overflow-auto scrollbar-hidden"
        >
            <EditModalHeader
                setShowCropImageModal={setShowCropImageModal}
                cropImage={true}
                setProfilePicture={setProfilePicture}
                setBackgroundPicture={setBackgroundPicture}
                setCurrentPicture={setCurrentPicture}
            />
            <button
                className="absolute top-3.5 right-4 z-50 w-[74px] h-8 rounded-full bg-white text-sm text-neutral-950 font-medium
                         flex justify-center items-center hover:bg-neutral-200 transition duration-200"
                onClick={handleClick}
            >
                {loading ? <Loading isButton={true} /> : 'Apply'}
            </button>
            <div className="h-full bg-[#111111]">
                <Cropper
                    image={imageUrl}
                    crop={crop}
                    zoom={zoom}
                    aspect={currentPicture === 'profile' ? 1 / 1 : 3.5 / 1.5}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    showGrid={false}
                />
            </div>
            <div className="sticky bottom-0 w-full p-1 bg-black flex justify-center items-center gap-4">
                <HiMagnifyingGlassMinus className="text-neutral-500 text-[20px]" />
                <Box sx={{ width: 300, marginTop: '6px' }}>
                    <Slider
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(_event, newValue) => {
                            setZoom(Number(newValue));
                        }}
                        className="custom-slider"
                    />
                </Box>
                <HiMagnifyingGlassPlus className="text-neutral-500 text-[20px]" />
            </div>
        </div>
    );
};

export default CropImageModal;
