import SideContent from '../SideContent';
import Posts from '../MainFeed/Post/Posts';
import ProfileBanner from './ProfileBanner';
import Header from '../Header';

const ProfileContainer = () => {
    return (
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[900px]">
            <div className="flex justify-center gap-4 xl:gap-10">
                <div className="w-full">
                    <Header />
                    <ProfileBanner />
                    {/* Posts / Replies / Likes */}
                    <Posts />
                </div>
                <SideContent />
            </div>
        </div>
    );
};

export default ProfileContainer;
