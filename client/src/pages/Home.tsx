import { useThemeContext } from '../context/themeContext';

import Sidebar from '../components/Sidebar/Sidebar';
import MainFeed from '../components/MainFeed/MainFeed';

const Home = () => {
    const { theme } = useThemeContext();

    return (
        <div className={`${theme === 'dark' && 'dark'}`}>
            <main className="h-full bg-neutral-950 text-neutral-100 flex justify-center ">
                <Sidebar />
                <MainFeed />
            </main>
        </div>
    );
};

export default Home;
