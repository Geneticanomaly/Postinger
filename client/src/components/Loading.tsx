import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <div className="flex justify-center py-6 w-full h-screen border-r border-l border-neutral-700 overflow-hidden">
            <CircularProgress size={30} />
        </div>
    );
};

export default Loading;
