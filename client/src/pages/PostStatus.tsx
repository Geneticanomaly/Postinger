import PostStatusContainer from '../components/PostStatus/PostStatusContainer';
import Sidebar from '../components/Sidebar/Sidebar';
import { useThemeContext } from '../context/themeContext';
import useWindowWidth from '../hooks/useWindowWidth';

const PostStatus = () => {
    const { theme } = useThemeContext();
    const width = useWindowWidth();

    return (
        <div className={`${theme === 'dark' && 'dark'}`}>
            <main className="min-h-screen bg-neutral-950 text-neutral-100 flex justify-center">
                {width > 499 && <Sidebar />}
                <PostStatusContainer />
            </main>
        </div>
    );
};

export default PostStatus;
