import SideContent from '../SideContent';
import PostStatusContent from './PostStatusContent';
import { posts } from '../../data/PostData';
import Header from '../Header';
import Posts from '../MainFeed/Post/Posts';

const PostStatusContainer = () => {
    return (
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[900px]">
            <div className="flex justify-center gap-4 xl:gap-10">
                <div className="w-full">
                    <Header />
                    <PostStatusContent post={posts[0]} />
                    <Posts />
                </div>
                <SideContent />
            </div>
        </div>
    );
};

export default PostStatusContainer;
