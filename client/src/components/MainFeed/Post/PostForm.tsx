import placeholderAvatar from '../../../assets/avatar-1577909_1280.png';
import { IoImageOutline } from 'react-icons/io5';
import { MdOutlineGif } from 'react-icons/md';
import { VscSmiley } from 'react-icons/vsc';

const PostForm = () => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = 'auto'; // Reset height when content is removed
        e.target.style.height = `${e.target.scrollHeight}px`; // Adjust textare height based on its content
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="border-l border-r border-b border-neutral-700 min-h-32">
            <form className="p-3" onSubmit={(e) => handleSubmit(e)}>
                <section className="flex gap-2">
                    <img
                        src={placeholderAvatar}
                        className="max-w-10 max-h-10 rounded-full cursor-pointer"
                    />
                    <div className="w-full">
                        <textarea
                            className="w-[90%] p-2.5 -mt-1 text-lg bg-neutral-950  text-white rounded-lg 
                            placeholder-gray-400 outline-none resize-none"
                            id="textarea"
                            placeholder="What is happening?!"
                            onChange={(e) => handleChange(e)}
                        ></textarea>
                        <div className=" h-[1px] w-full bg-gray-500 opacity-40" />
                        <div className="flex items-center justify-between mt-3">
                            <section className="flex items-center gap-1 text-blue-400">
                                <span
                                    className="p-[8px] text-[20px] rounded-full cursor-pointer transition duration-200
                                hover:bg-blue-400 hover:bg-opacity-10 hover:text-blue-400"
                                >
                                    <IoImageOutline />
                                </span>
                                <span
                                    className="p-[10px] rounded-full cursor-pointer transition duration-200
                                hover:bg-blue-400 hover:bg-opacity-10 hover:text-blue-400"
                                >
                                    <MdOutlineGif className="border border-blue-400 cursor-pointer" />
                                </span>
                                <span
                                    className="p-[8px] text-[20px] rounded-full cursor-pointer transition duration-200
                                hover:bg-blue-400 hover:bg-opacity-10 hover:text-blue-400"
                                >
                                    <VscSmiley />
                                </span>
                            </section>
                            <button className="py-[7px] w-[70px] bg-blue-500 rounded-full font-bold hover:bg-blue-400 transition duration-200">
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
