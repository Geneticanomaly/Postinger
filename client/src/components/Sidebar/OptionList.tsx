import { SidebarOption } from '../../types';
import Option from './Option';

type OptionListType = {
    options: SidebarOption[];
};

const OptionList = ({ options }: OptionListType) => {
    return (
        <>
            {options.map((option) => (
                <Option key={option.id} option={option} />
            ))}
        </>
    );
};

export default OptionList;
