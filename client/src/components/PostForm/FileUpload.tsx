import { IoImageOutline } from 'react-icons/io5';

type FileUploadProps = {
    setFile: React.Dispatch<React.SetStateAction<File | null | undefined>>;
    setFileUrl: React.Dispatch<React.SetStateAction<string>>;
};

const FileUpload = ({ setFile, setFileUrl }: FileUploadProps) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];

            if (selectedFile.size > MAX_FILE_SIZE) {
                alert('File size must be less than 5MB.');
                return;
            }

            setFile(selectedFile);
            setFileUrl(URL.createObjectURL(selectedFile));
            e.target.value = '';
        }
    };

    const handleClick = () => {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }
    };

    return (
        <div className="flex rounded-full transition duration-200 hover:bg-[#1D9BF0] hover:bg-opacity-10">
            <input
                type="file"
                id="fileInput"
                accept="image/*,video/*"
                onChange={(e) => handleFileChange(e)}
                className="hidden"
            />
            <span
                onClick={handleClick}
                className="p-[10px] text-[20px] rounded-full cursor-pointer "
            >
                <IoImageOutline />
            </span>
        </div>
    );
};

export default FileUpload;
