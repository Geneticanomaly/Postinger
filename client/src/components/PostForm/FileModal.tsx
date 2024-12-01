import { IoCloseOutline } from 'react-icons/io5';

type FileModalProps = {
    file: File | null | undefined;
    setFile: React.Dispatch<React.SetStateAction<File | null | undefined>>;
    fileUrl: string;
    setFileUrl: React.Dispatch<React.SetStateAction<string>>;
};

const FileModal = ({ file, setFile, fileUrl, setFileUrl }: FileModalProps) => {
    const handleFileClose = () => {
        setFile(null);
        setFileUrl('');
    };
    return (
        <section className="relative mb-3 w-full">
            {file && file.type.startsWith('video/') ? (
                <video src={fileUrl} className="rounded-2xl w-full" controls />
            ) : (
                <img src={fileUrl} className="rounded-2xl w-full" />
            )}
            {fileUrl && (
                <span
                    className="absolute top-1.5 right-1.5 p-2 text-2xl cursor-pointer rounded-full bg-neutral-900 bg-opacity-90"
                    onClick={handleFileClose}
                >
                    <IoCloseOutline />
                </span>
            )}
        </section>
    );
};

export default FileModal;
