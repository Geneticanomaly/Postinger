import { posts } from '../../../data/PostData';
import useWindowWidth from '../../../hooks/useWindowWidth';
import MainHeader from '../MainHeader';
import MobileHeader from '../MobileHeader';
import Post from './Post';
import PostForm from './PostForm';
import { useQuery } from '@tanstack/react-query';
import postServices from '../../../services/post';
import { PostData } from '../../../types';
import { useLocation } from 'react-router-dom';
import Loading from '../../Loading';

const Posts = () => {
    const width = useWindowWidth();
    const location = useLocation();

    const { data, isLoading, error } = useQuery<PostData[]>({
        queryKey: ['posts'],
        queryFn: () => postServices.getAll(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    return (
        <div className="flex flex-col w-full">
            {location.pathname === '/home' && (
                <>
                    {width > 499 ? <MainHeader /> : <MobileHeader />}
                    <PostForm />
                </>
            )}
            {isLoading || error ? (
                <Loading />
            ) : !data ? (
                <h3>No posts here...</h3>
            ) : (
                posts!.map((post, i) => <Post key={i} post={post} />)
            )}
        </div>
    );
};

export default Posts;
