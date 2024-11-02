import { SidebarOption } from '../../types';
import { useNavigate } from 'react-router-dom';

type OptionType = {
    option: SidebarOption;
};

const Option = ({ option }: OptionType) => {
    const navigate = useNavigate();

    return (
        <section
            onClick={() => navigate(option.route)}
            className={`flex items-center text-left gap-4 
            ${option.name ? 'pl-3 pr-6 py-3' : 'p-3'} 
            max-w-max cursor-pointer rounded-full hover:bg-neutral-800
        `}
        >
            <option.logo className="text-3xl" />
            {option.name && <span>{option.name}</span>}
        </section>
    );
};

export default Option;
