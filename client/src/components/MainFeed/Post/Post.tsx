import { useNavigate } from 'react-router-dom';
import { PostData } from '../../../types';
import PostContent from './PostContent';

type PostType = {
    post: PostData;
};

const Post = ({ post }: PostType) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(post, post.user.username);
        navigate(`/${post.user.username}/status/${post.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="relative flex flex-col w-full border-b border-neutral-700 cursor-pointer group"
        >
            <div className="absolute inset-0 bg-[#79737311] opacity-0 transition duration-300 group-hover:opacity-100 pointer-events-none" />
            <PostContent post={post} />
        </div>
    );
};

export default Post;
