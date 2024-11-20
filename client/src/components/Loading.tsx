import CircularProgress from '@mui/material/CircularProgress';

type LoadingProps = {
    isButton: boolean;
};

const Loading = ({ isButton }: LoadingProps) => {
    return (
        <div
            className={`flex justify-center ${
                isButton
                    ? 'w-full h-full py-1.5'
                    : 'h-screen py-6 w-full border-r border-l border-neutral-700 overflow-hidden'
            }`}
        >
            <CircularProgress size={isButton ? 20 : 30} />
        </div>
    );
};

export default Loading;
