import { useNavigate } from 'react-router-dom';
import { PostData } from '../../../types';
import PostContent from './PostContent';

type PostType = {
    post: PostData;
};

const Post = ({ post }: PostType) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(post);
        navigate(`/${post.username}/status/${post.id}`);
    };

    return (
        <div className="relative flex flex-col w-full border-l border-r border-b border-neutral-700">
            <div
                className="absolute inset-0 transition duration-300 hover:bg-[#79737311] hover:opacity-90 cursor-pointer"
                onClick={handleClick}
            />
            <PostContent post={post} />
        </div>
    );
};

export default Post;
