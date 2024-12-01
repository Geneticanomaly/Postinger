import { PostData } from '../../../types';
import { getCondensedNumber } from '../../../helperFunctions';
import { TbMessageCircle } from 'react-icons/tb';
import { LiaRetweetSolid } from 'react-icons/lia';
import { BiBarChart } from 'react-icons/bi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';

type PostFooterType = {
    post: PostData;
};

const PostFooter = ({ post }: PostFooterType) => {
    return (
        <footer className="flex items-center justify-between z-10 -ml-2">
            <section
                className="flex items-center cursor-pointer group/replies"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <span
                    className="p-[8px] rounded-full text-xl text-neutral-500 transition duration-200
                    group-hover/replies:bg-[#00aeff] group-hover/replies:bg-opacity-10 group-hover/replies:text-[#00aeff]"
                >
                    <TbMessageCircle />
                </span>
                <p className="text-[13px] text-neutral-500 group-hover/replies:text-[#00aeff] transition duration-200 -ml-1">
                    {getCondensedNumber(post.comments)}
                </p>
            </section>
            <section
                className="flex items-center cursor-pointer group/reposts"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <span
                    className="p-[7px] rounded-full text-xl text-neutral-500 transition duration-200
                    group-hover/reposts:bg-green-500 group-hover/reposts:bg-opacity-10 group-hover/reposts:text-green-500"
                >
                    <LiaRetweetSolid />
                </span>
                <p className="text-[13px] text-neutral-500 group-hover/reposts:text-green-500 transition duration-200 -ml-1">
                    {getCondensedNumber(post.reposts)}
                </p>
            </section>
            <section
                className="flex items-center cursor-pointer group/likes"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <span
                    className="p-[7px] rounded-full text-xl text-neutral-500 transition duration-200
                    group-hover/likes:bg-pink-500 group-hover/likes:bg-opacity-10 group-hover/likes:text-pink-500"
                >
                    <IoMdHeartEmpty />
                </span>
                <p className="text-[13px] text-neutral-500 group-hover/likes:text-pink-500 transition duration-200 -ml-1">
                    {getCondensedNumber(post.likes)}
                </p>
            </section>
            <section
                className="flex items-center cursor-pointer group/views"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <span
                    className="p-[7px] rounded-full text-xl text-neutral-500 transition duration-200
                    group-hover/views:bg-blue-500 group-hover/views:bg-opacity-10 group-hover/views:text-blue-500"
                >
                    <BiBarChart />
                </span>
                <p className="text-[13px] text-neutral-500 group-hover/views:text-blue-500 transition duration-200 -ml-1">
                    0 {/* {getCondensedNumber(post.views)}  */}
                </p>
            </section>
            <span
                className="p-2 rounded-full text-neutral-500 transition duration-200 
                        hover:bg-[#00aeff] hover:text-[#00aeff] hover:bg-opacity-10 cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <IoBookmarkOutline size={18} />
            </span>
        </footer>
    );
};

export default PostFooter;
