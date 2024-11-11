import Posts from './Post/Posts';
import SideContent from '../SideContent';

const MainFeed = () => {
    return (
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[900px]">
            <div className="flex justify-center gap-4 xl:gap-10">
                <Posts />
                <SideContent />
            </div>
        </div>
    );
};

export default MainFeed;
