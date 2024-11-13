import { posts } from '../../../data/PostData';
import useWindowWidth from '../../../hooks/useWindowWidth';
import MainHeader from '../MainHeader';
import MobileHeader from '../MobileHeader';
import Post from './Post';
import PostForm from './PostForm';
import { useQuery } from '@tanstack/react-query';
import postServices from '../../../services/post';
import { PostData } from '../../../types';

const Posts = () => {
    const width = useWindowWidth();

    const { data, isLoading, error } = useQuery<PostData[]>({
        queryKey: ['posts'],
        queryFn: () => postServices.getAll(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    if (isLoading || error) return <>Loading...</>;

    console.log(data);

    return (
        <div className="flex flex-col w-full">
            {width > 499 ? <MainHeader /> : <MobileHeader />}
            <PostForm />
            {posts!.map((post, i) => (
                <Post key={i} post={post} />
            ))}
        </div>
    );
};

export default Posts;
