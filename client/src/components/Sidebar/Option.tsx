import { IconType } from 'react-icons';
import useWindowWidth from '../../hooks/useWindowWidth';
import { SidebarOption } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useUserValue } from '../../context/userContext/useUserContext';

type OptionType = {
    option: SidebarOption;
};

const Option = ({ option }: OptionType) => {
    const navigate = useNavigate();
    const width = useWindowWidth();
    const user = useUserValue();
    // console.log('USER', user);

    const shouldDisplayName = option.name && width > 1280;

    const getIcon = (option: SidebarOption): IconType => {
        if (option.filledLogo) {
            // Only highlight profile icon when current user viewing their own page.
            if (option.route === '/profile') {
                if (user)
                    return window.location.href.includes(user.user.username)
                        ? option.filledLogo
                        : option.logo;
            }
            return window.location.href.includes(option.route) ? option.filledLogo : option.logo;
        } else {
            return option.logo;
        }
    };

    const IconComponent = getIcon(option);

    const navigateToRoute = () => {
        if (option.route === '/profile') {
            navigate(`${option.route}/${user?.user.username}`);
        } else {
            navigate(option.route);
        }
    };

    return (
        <section
            onClick={navigateToRoute}
            className={`flex items-center gap-4 text-left
            ${shouldDisplayName ? 'pl-3 pr-6 py-3' : 'p-3'} 
            max-w-max cursor-pointer rounded-full hover:bg-neutral-800 transition duration-200
        `}
        >
            <IconComponent className="text-3xl" />
            {shouldDisplayName && (
                <span
                    className={`text-[18px] ${
                        IconComponent === option.filledLogo && 'font-semibold'
                    }`}
                >
                    {option.name}
                </span>
            )}
        </section>
    );
};

export default Option;
