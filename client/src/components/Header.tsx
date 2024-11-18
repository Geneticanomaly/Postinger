import { IoMdArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCondensedNumber } from '../helperFunctions';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const renderHeader = () => {
        if (location.pathname.includes('status')) {
            return <h1 className="font-bold text-xl">Post</h1>;
        } else if (location.pathname === 'bookmarks') {
            return <h1 className="font-bold text-xl">Bookmarks</h1>;
        } else {
            return (
                <>
                    <h1 className="font-bold text-xl">Username</h1>
                    <p className="text-sm text-neutral-500">{getCondensedNumber(113250)} posts</p>
                </>
            );
        }
    };

    return (
        <header
            className="sticky top-0 z-20 h-[55px] flex items-center gap-10 px-3 py-1 bg-neutral-950
                    border-l border-r border-neutral-700 bg-opacity-90 backdrop-blur-sm"
        >
            <span className="cursor-pointer p-2 rounded-full hover:bg-neutral-800 transition duration-200">
                <IoMdArrowBack size={20} onClick={() => navigate(-1)} />
            </span>
            <div>{renderHeader()}</div>
        </header>
    );
};

export default Header;
