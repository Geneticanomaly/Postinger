import { useState, useEffect } from 'react';
import SideContent from '../SideContent';
import Posts from '../MainFeed/Post/Posts';
import ProfileBanner from './ProfileBanner';
import Header from '../Header';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import userServices from '../../services/user';
import Loading from '../Loading';
import { PostData, User } from '../../types';
import { useUserValue } from '../../context/userContext/useUserContext';
import postServices from '../../services/post';

const ProfileContainer = () => {
    const user = useUserValue();
    const { username } = useParams<{ username: string }>();
    const [currentPosts, setCurrentPosts] = useState<PostData[] | null>(null);

    const {
        isLoading: userIsLoading,
        error: userError,
        data: userData,
    } = useQuery<User>({
        queryKey: ['otherUser', username],
        queryFn: () => userServices.getUser(username),
        enabled: user?.username !== username,
        staleTime: 1000 * 60 * 1,
    });

    const {
        data: userPosts,
        isLoading: postsLoading,
        error: postsError,
    } = useQuery<PostData[]>({
        queryKey: ['userPosts', username],
        queryFn: () => postServices.getUserPosts(username),
        staleTime: 1000 * 60 * 1,
    });

    const displayUser = user?.username === username ? user : userData;

    // Reset current posts when username changes
    useEffect(() => {
        setCurrentPosts(null); // Clear old posts
    }, [username]);

    // Update posts when userPosts are fetched
    useEffect(() => {
        if (userPosts) {
            setCurrentPosts(userPosts);
        }
    }, [userPosts]);

    if (userIsLoading || postsLoading || userError || postsError) {
        return (
            <div className="flex justify-center sm:w-[500px] md:w-[600px] lg:w-[900px]">
                <Loading isButton={false} />
                <SideContent />
            </div>
        );
    }

    return (
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[900px]">
            <div className="flex justify-center gap-4 xl:gap-10">
                <div className="w-full">
                    <Header user={displayUser} />
                    <ProfileBanner user={displayUser} />
                    {/* Posts / Replies / Likes */}
                    {currentPosts ? <Posts posts={currentPosts} /> : <Loading isButton={false} />}
                </div>
                <SideContent />
            </div>
        </div>
    );
};

export default ProfileContainer;
