import EditModalHeader from './EditModalHeader';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { HiMagnifyingGlassPlus, HiMagnifyingGlassMinus } from 'react-icons/hi2';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop';
import { getCroppedImage } from '../../../helperFunctions';

type CropImageModalProps = {
    backgroundPicture: File | null;
    setBackgroundPicture: React.Dispatch<React.SetStateAction<File | null>>;
    setBackgroundUrl: React.Dispatch<React.SetStateAction<string>>;
    setShowCropImageModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CropImageModal = ({
    backgroundPicture,
    setBackgroundPicture,
    setBackgroundUrl,
    setShowCropImageModal,
}: CropImageModalProps) => {
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
        if (backgroundPicture) {
            setImageUrl(URL.createObjectURL(backgroundPicture));
        }
    }, [backgroundPicture]);

    const handleClick = async () => {
        getCroppedImage(imageUrl, croppedImagePixels)
            .then((croppedImage) => {
                if (croppedImage instanceof File) {
                    setBackgroundPicture(croppedImage);
                    if (backgroundPicture) {
                        setBackgroundUrl(URL.createObjectURL(croppedImage));
                    }
                    setShowCropImageModal(false);
                } else {
                    console.error('The returned value is not a valid File');
                }
            })
            .catch((error) => {
                console.error('Error cropping image:', error);
            });
    };

    return (
        <div
            className="absolute z-50 w-full h-full bg-neutral-100 dark:bg-black rounded-xl 
                       overflow-auto scrollbar-hidden"
        >
            <EditModalHeader setShowCropImageModal={setShowCropImageModal} cropImage={true} />
            <button
                className="absolute top-3.5 right-4 z-50 py-1.5 px-4 rounded-full bg-white text-sm text-neutral-950 font-medium
                         hover:bg-neutral-200 transition duration-200"
                onClick={handleClick}
            >
                Apply
            </button>
            <div className="h-full bg-[#111111]">
                <Cropper
                    image={imageUrl}
                    crop={crop}
                    zoom={zoom}
                    aspect={3.5 / 1.5}
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
