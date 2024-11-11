import SideContent from '../MainFeed/SideContent';
import PostStatusContent from './PostStatusContent';
import { posts } from '../../data/PostData';

const PostStatusContainer = () => {
    return (
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[900px]">
            <div className="flex justify-center gap-4 xl:gap-10">
                <PostStatusContent post={posts[0]} />
                <SideContent />
            </div>
        </div>
    );
};

export default PostStatusContainer;
