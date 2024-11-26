import { MdOutlinePostAdd } from 'react-icons/md';

const PostButton = () => {
    return (
        <>
            <button
                className="w-[90%] mt-4 bg-[#00aeff] text-lg font-bold text-white py-[12px] px-4 rounded-full 
            hover:bg-[#00aeffe7] hidden xl:block transition duration-200"
            >
                Post
            </button>
            <span className="rounded-full p-2 mt-4 cursor-pointer bg-[#00aeff] max-w-max hover:bg-[#00aeffe7] xl:hidden transition duration-200">
                <MdOutlinePostAdd className="text-3xl" />
            </span>
        </>
    );
};

export default PostButton;
