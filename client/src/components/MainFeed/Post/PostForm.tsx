import { useState } from 'react';
import placeholderAvatar from '../../../assets/avatar-1577909_1280.png';
import { IoImageOutline } from 'react-icons/io5';
import { MdOutlineGif } from 'react-icons/md';
import { VscSmiley } from 'react-icons/vsc';
import { IoCloseOutline } from 'react-icons/io5';
import postServices from '../../../services/post';

const PostForm = () => {
    const [text, setText] = useState<string>('');
    const [file, setFile] = useState<File | null>();
    const [fileUrl, setFileUrl] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = '48px'; // Reset height when content is removed
        e.target.style.height = `${e.target.scrollHeight}px`; // Adjust textare height based on its content

        setText(e.target.value);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setFileUrl(URL.createObjectURL(selectedFile));
        }
    };

    const handleClick = () => {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleFileClose = () => {
        setFile(null);
        setFileUrl('');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('userId', '8517635c-75a8-4ea6-bfe7-581067a86b19');
        if (text) formData.append('content', text);
        if (file) formData.append('file', file);

        const res = await postServices.create(formData);
        console.log(res);
        setText('');
        setFile(null);
        setFileUrl('');
    };

    const isButtonDisabled = !text && !file;

    return (
        <div className="border-l border-r border-b border-neutral-700 min-h-32">
            <form className="p-3 md:mr-4 lg:mr-0" onSubmit={(e) => handleSubmit(e)}>
                <section className="flex gap-2">
                    <img
                        src={placeholderAvatar}
                        className="max-w-10 max-h-10 rounded-full cursor-pointer"
                    />
                    <div className="w-full">
                        <textarea
                            className="w-full h-12 p-2.5 -mt-1 text-lg bg-neutral-950  text-white rounded-lg 
                            placeholder-gray-400 outline-none resize-none"
                            id="textarea"
                            name="text"
                            value={text}
                            placeholder="What is happening?!"
                            onChange={(e) => handleChange(e)}
                        ></textarea>
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
                        <div className=" h-[1px] w-full bg-gray-500 opacity-40" />
                        <div className="flex items-center justify-between mt-3">
                            <section className="flex items-center gap-1 text-blue-400">
                                <div className="flex rounded-full transition duration-200 hover:bg-blue-400 hover:bg-opacity-10">
                                    <input
                                        type="file"
                                        id="fileInput"
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
                                <span
                                    className="p-[10px] rounded-full cursor-pointer transition duration-200
                                hover:bg-blue-400 hover:bg-opacity-10"
                                >
                                    <MdOutlineGif className="border rounded-sm border-blue-400 cursor-pointer" />
                                </span>
                                <span
                                    className="p-[8px] text-[20px] rounded-full cursor-pointer transition duration-200
                                hover:bg-blue-400 hover:bg-opacity-10"
                                >
                                    <VscSmiley />
                                </span>
                            </section>
                            <button
                                className={`py-[7px] w-[70px] bg-blue-500 rounded-full font-bold transition duration-200 
                                ${
                                    !isButtonDisabled ? 'hover:bg-[#3a77da]' : 'disabled:opacity-50'
                                }`}
                                disabled={isButtonDisabled}
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default PostForm;
