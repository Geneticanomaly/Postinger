import { useThemeContext } from '../context/themeContext';

import Sidebar from '../components/Sidebar/Sidebar';
import MainFeed from '../components/MainFeed/MainFeed';
import useWindowWidth from '../hooks/useWindowWidth';

const Home = () => {
    const { theme } = useThemeContext();
    const width = useWindowWidth();

    return (
        <div className={`${theme === 'dark' && 'dark'}`}>
            <main className="h-full bg-neutral-950 text-neutral-100 flex justify-center ">
                {width > 499 && <Sidebar />}
                <MainFeed />
            </main>
        </div>
    );
};

export default Home;
