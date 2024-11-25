import SideContent from '../SideContent';
import Posts from '../MainFeed/Post/Posts';
import ProfileBanner from './ProfileBanner';
import Header from '../Header';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import userServices from '../../services/user';
import Loading from '../Loading';
import { User } from '../../types';
import { useUserValue } from '../../context/userContext/useUserContext';

const ProfileContainer = () => {
    const user = useUserValue();
    const { username } = useParams<{ username: string }>();

    const {
        isLoading,
        error,
        data: userData,
    } = useQuery<User>({
        queryKey: ['otherUser'],
        queryFn: () => userServices.getUser(username),
        enabled: user?.user.username !== username,
    });

    const displayUser = user?.user.username === username ? user?.user : userData;

    if (isLoading || error) return <Loading isButton={false} />;

    return (
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[900px]">
            <div className="flex justify-center gap-4 xl:gap-10">
                <div className="w-full">
                    <Header user={displayUser} />
                    <ProfileBanner user={displayUser} />
                    {/* Posts / Replies / Likes */}
                    <Posts />
                </div>
                <SideContent />
            </div>
        </div>
    );
};

export default ProfileContainer;
