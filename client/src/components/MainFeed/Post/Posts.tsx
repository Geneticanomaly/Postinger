import useWindowWidth from '../../../hooks/useWindowWidth';
import MainHeader from '../MainHeader';
import MobileHeader from '../MobileHeader';
import Post from './Post';
import PostForm from '../../PostForm/PostForm';
import { useLocation } from 'react-router-dom';
import { PostData } from '../../../types';
import Loading from '../../Loading';

type PostsProps = {
    posts: PostData[] | undefined;
};

const Posts = ({ posts }: PostsProps) => {
    const width = useWindowWidth();
    const location = useLocation();

    return (
        <div className="flex flex-col w-full min-h-screen border-l border-r border-neutral-700">
            {location.pathname === '/home' && (
                <>
                    {width > 499 ? <MainHeader /> : <MobileHeader />}
                    <div className="border-b border-neutral-700 p-3 w-full">
                        <PostForm />
                    </div>
                </>
            )}

            {!posts ? (
                <Loading isButton={false} />
            ) : (
                posts.map((post, i) => <Post key={i} post={post} />)
            )}
        </div>
    );
};

export default Posts;
