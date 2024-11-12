import { IconType } from 'react-icons';
import useWindowWidth from '../../hooks/useWindowWidth';
import { SidebarOption } from '../../types';
import { useNavigate } from 'react-router-dom';

type OptionType = {
    option: SidebarOption;
};

const Option = ({ option }: OptionType) => {
    const navigate = useNavigate();
    const width = useWindowWidth();

    const shouldDisplayName = option.name && width > 1280;

    const getIcon = (option: SidebarOption): IconType => {
        if (option.filledLogo) {
            return window.location.href.includes(option.route) ? option.filledLogo : option.logo;
        } else {
            return option.logo;
        }
    };

    const IconComponent = getIcon(option);

    return (
        <section
            onClick={() => navigate(option.route)}
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
