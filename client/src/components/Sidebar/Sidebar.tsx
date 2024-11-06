import OptionList from './OptionList';
import { options } from '../../data/SidebarOptions';
import PostButton from './PostButton';
import ProfileButton from './ProfileButton';

const Sidebar = () => {
    return (
        <div className="mt-1 ml-2 mr-2 text-2xl w-[60px] xl:w-[275px] ">
            <section className="flex flex-col items-center xl:items-start gap-2 sticky top-1 z-10 ">
                <OptionList options={options} />
                <PostButton />
                <ProfileButton />
            </section>
        </div>
    );
};

export default Sidebar;
