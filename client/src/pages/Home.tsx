import { useThemeContext } from '../context/themeContext';

import Sidebar from '../components/Sidebar/Sidebar';
import MainFeed from '../components/MainFeed';

const Home = () => {
    const { theme } = useThemeContext();

    return (
        <div className={`${theme === 'dark' && 'dark'}`}>
            <main className="h-svh bg-neutral-950 text-neutral-100 ">
                <div className="flex justify-center h-full">
                    <section className="w-[275px] flex flex-col items-center">
                        <Sidebar />
                    </section>

                    <section className="w-[990px]">
                        <MainFeed />
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Home;
