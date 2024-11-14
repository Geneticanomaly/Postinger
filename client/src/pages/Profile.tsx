import { Outlet } from 'react-router-dom';
import ProfileContainer from '../components/Profile/ProfileContainer';
import Sidebar from '../components/Sidebar/Sidebar';
import { useThemeContext } from '../context/themeContext';
import useWindowWidth from '../hooks/useWindowWidth';

const Profile = () => {
    const { theme } = useThemeContext();
    const width = useWindowWidth();

    return (
        <div className={`${theme === 'dark' && 'dark'}`}>
            <main className="min-h-screen bg-neutral-950 text-neutral-100 flex justify-center">
                {width > 499 && <Sidebar />}
                <ProfileContainer />
            </main>
            <Outlet />
        </div>
    );
};

export default Profile;
