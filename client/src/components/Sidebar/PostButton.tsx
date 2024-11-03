import { MdOutlinePostAdd } from 'react-icons/md';

const PostButton = () => {
    return (
        <>
            <button
                className="w-[90%] mt-4 bg-blue-500 text-lg font-bold text-white py-[12px] px-4 rounded-full 
            hover:bg-blue-600 hidden xl:block transition duration-200"
            >
                Post
            </button>
            <span className="rounded-full p-2 mt-4 cursor-pointer bg-blue-500 max-w-max hover:bg-blue-600 xl:hidden transition duration-200">
                <MdOutlinePostAdd className="text-3xl" />
            </span>
        </>
    );
};

export default PostButton;
