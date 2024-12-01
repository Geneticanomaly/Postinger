import { useState } from 'react';
import placeholderAvatar from '../../assets/avatar-1577909_1280.png';
import { MdOutlineGif } from 'react-icons/md';
import { VscSmiley } from 'react-icons/vsc';
import postServices from '../../services/post';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserValue } from '../../context/userContext/useUserContext';
import { getUserImage } from '../../helperFunctions';
import FileUpload from './FileUpload';
import FileModal from './FileModal';

const PostForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = useUserValue();

    const [text, setText] = useState<string>('');
    const [file, setFile] = useState<File | null>();
    const [fileUrl, setFileUrl] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = '48px'; // Reset height when content is removed
        e.target.style.height = `${e.target.scrollHeight}px`; // Adjust textare height based on its content

        setText(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isMainFeed && user) {
            const formData = new FormData();
            formData.append('userId', user.id);
            if (text) formData.append('content', text);
            if (file) formData.append('file', file);
            formData.append('fileType', 'postImage');

            const res = await postServices.create(formData);
            console.log(res);
        }

        setText('');
        setFile(null);
        setFileUrl('');
    };

    const isButtonDisabled = !text && !file;

    const isMainFeed = location.pathname === '/home' ? true : false;

    return (
        <>
            <form className="md:mr-4 lg:mr-0" onSubmit={(e) => handleSubmit(e)}>
                <section className="flex gap-2">
                    <div
                        className="relative w-11 h-10 cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/profile/${user?.username}`);
                        }}
                    >
                        <img
                            src={
                                user?.profileImage
                                    ? getUserImage(user.profileImage)
                                    : placeholderAvatar
                            }
                            className="rounded-full w-full h-full transition duration-200"
                        />
                        <div className="absolute inset-0 bg-neutral-950 bg-opacity-10 rounded-full opacity-0 hover:opacity-100 transition duration-300"></div>
                    </div>
                    <div className="w-full">
                        <textarea
                            className="w-full h-12 p-2.5 -mt-1 text-lg bg-neutral-950  text-white rounded-lg 
                            placeholder-gray-400 outline-none resize-none"
                            id="textarea"
                            name="text"
                            value={text}
                            placeholder={`${isMainFeed ? 'What is happening?' : 'Post your reply'}`}
                            onChange={(e) => handleChange(e)}
                        ></textarea>
                        <FileModal
                            file={file}
                            setFile={setFile}
                            fileUrl={fileUrl}
                            setFileUrl={setFileUrl}
                        />
                        <div className=" h-[1px] w-full bg-gray-500 opacity-40" />
                        <div className="flex items-center justify-between mt-3">
                            <section className="flex items-center text-[#1D9BF0]">
                                <FileUpload setFile={setFile} setFileUrl={setFileUrl} />
                                <span
                                    className="p-[12px] rounded-full cursor-pointer transition duration-200
                                hover:bg-[#1D9BF0] hover:bg-opacity-10"
                                >
                                    <MdOutlineGif className="border rounded-sm border-[#1D9BF0] cursor-pointer" />
                                </span>
                                <span
                                    className="p-[10px] text-[20px] rounded-full cursor-pointer transition duration-200
                                hover:bg-blue-400 hover:bg-opacity-10"
                                >
                                    <VscSmiley />
                                </span>
                            </section>
                            <button
                                className={`py-[8px] w-[66px] text-sm bg-[#1D9BF0] rounded-full font-bold transition duration-200 
                                ${
                                    !isButtonDisabled
                                        ? 'hover:bg-[#00aeffd8]'
                                        : 'disabled:opacity-40'
                                }`}
                                disabled={isButtonDisabled}
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
};

export default PostForm;
