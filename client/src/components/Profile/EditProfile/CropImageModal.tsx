import { useNavigate } from 'react-router-dom';
import EditModalHeader from './EditModalHeader';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { HiMagnifyingGlassPlus, HiMagnifyingGlassMinus } from 'react-icons/hi2';

type CropImageModalProps = {
    backgroundPicture: File | null;
    setShowCropImageModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CropImageModal = ({ backgroundPicture, setShowCropImageModal }: CropImageModalProps) => {
    const navigate = useNavigate();

    const [backgroundUrl, setBackgroundUrl] = useState('');

    useEffect(() => {
        if (backgroundPicture) {
            setBackgroundUrl(URL.createObjectURL(backgroundPicture));
        }
    }, [backgroundPicture]);

    return (
        <div
            className="absolute z-50 w-full h-full bg-neutral-100 dark:bg-black rounded-xl 
                       flex flex-col items-center overflow-auto scrollbar-hidden"
        >
            <EditModalHeader
                navigate={navigate}
                setShowCropImageModal={setShowCropImageModal}
                cropImage={true}
            />
            <div className="flex-grow w-full px-5 py-40 bg-[#111111]">
                {backgroundUrl && <img src={backgroundUrl} />}
            </div>
            <div className="sticky bottom-0 w-full p-1 bg-black flex justify-center items-center gap-4">
                <HiMagnifyingGlassMinus className="text-neutral-500 text-[20px]" />
                <Box sx={{ width: 300, marginTop: '6px' }}>
                    <Slider defaultValue={0} className="custom-slider" />
                </Box>
                <HiMagnifyingGlassPlus className="text-neutral-500 text-[20px]" />
            </div>
        </div>
    );
};

export default CropImageModal;
