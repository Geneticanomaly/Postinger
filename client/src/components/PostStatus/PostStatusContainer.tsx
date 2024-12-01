import SideContent from '../SideContent';
import PostStatusContent from './PostStatusContent';
import Header from '../Header';
import Posts from '../MainFeed/Post/Posts';
import { useUserValue } from '../../context/userContext/useUserContext';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { PostData } from '../../types';
import postServices from '../../services/post';
import Loading from '../Loading';

const PostStatusContainer = () => {
    const user = useUserValue();
    const params = useParams();
    console.log(params);

    const {
        data: post,
        isLoading,
        error,
    } = useQuery<PostData>({
        queryKey: ['post'],
        queryFn: () => postServices.getOne(Number(params.postId)),
    });

    if (isLoading || error) return <div>Loading...</div>;

    console.log('MY POST', post);
    return (
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[900px]">
            <div className="flex justify-center gap-4 xl:gap-10">
                <div className="w-full">
                    <Header user={user} />
                    {post ? <PostStatusContent post={post} /> : <Loading isButton={false} />}
                    <Posts />
                </div>
                <SideContent />
            </div>
        </div>
    );
};

export default PostStatusContainer;
