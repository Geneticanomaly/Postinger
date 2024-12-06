import Posts from './Post/Posts';
import SideContent from '../SideContent';
import { useQuery } from '@tanstack/react-query';
import { PostData } from '../../types';
import postServices from '../../services/post';
import Loading from '../Loading';

const MainFeed = () => {
    const {
        data: posts,
        isLoading,
        error,
    } = useQuery<PostData[]>({
        queryKey: ['posts'],
        queryFn: () => postServices.getAll(),
    });

    if (isLoading || error) {
        <div className="flex justify-center sm:w-[500px] md:w-[600px] lg:w-[900px]">
            <Loading isButton={false} />
            <SideContent />
        </div>;
    }

    return (
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[900px]">
            <div className="flex justify-center gap-4 xl:gap-10">
                <Posts posts={posts} />
                <SideContent />
            </div>
        </div>
    );
};

export default MainFeed;
