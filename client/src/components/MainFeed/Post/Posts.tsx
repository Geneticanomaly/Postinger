import { posts } from '../../../data/PostData';
import useWindowWidth from '../../../hooks/useWindowWidth';
import MainHeader from '../MainHeader';
import MobileHeader from '../MobileHeader';
import Post from './Post';
import PostForm from './PostForm';

const Posts = () => {
    const width = useWindowWidth();

    return (
        <div className="flex flex-col w-full">
            {width > 499 ? <MainHeader /> : <MobileHeader />}
            <PostForm />
            {posts.map((post, i) => (
                <Post key={i} post={post} />
            ))}
        </div>
    );
};

export default Posts;
