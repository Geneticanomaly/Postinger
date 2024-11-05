import { PostData } from '../../../types';
import PostContent from './PostContent';

type PostType = {
    post: PostData;
};

const Post = ({ post }: PostType) => {
    return (
        <div className="flex flex-col w-full border-l border-r border-b border-neutral-700 p-3 ">
            <PostContent post={post} />
        </div>
    );
};

export default Post;
