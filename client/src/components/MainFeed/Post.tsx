import { PostData } from '../../types';
import { TbMessageCircle } from 'react-icons/tb';
import { LiaRetweetSolid } from 'react-icons/lia';
import { BiBarChart } from 'react-icons/bi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { getCondensedNumber } from '../../helperFunctions';
import { IoBookmarkOutline } from 'react-icons/io5';
import useWindowWidth from '../../hooks/useWindowWidth';

type PostType = {
    post: PostData;
};

const Post = ({ post }: PostType) => {
    const width = useWindowWidth();

    return (
        <div className="flex flex-col w-full border-l border-r border-b border-gray-600 p-3">
            {/* Post Info */}
            <section className="flex gap-2">
                <img
                    src={post.avatarUrl}
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12 cursor-pointer"
                />
                <section className="flex flex-col">
                    <section className="flex gap-1 sm:text-base text-sm">
                        <h2 className="font-bold cursor-pointer hover:underline">
                            {post.username}
                        </h2>
                        <p className="text-neutral-500">· {post.date}</p>
                    </section>
                    <p>{post.title}</p>
                </section>
            </section>
            <section className=" ml-[9.5%] mt-3 rounded-xl">
                {post.img && (
                    <img src={post.img} className="max-w-full h-auto rounded-xl cursor-pointer" />
                )}
            </section>
            {/* Footer */}
            <footer className="flex items-center ml-[10%] mt-3 justify-between ">
                <div
                    className={`flex  ${
                        width <= 405
                            ? 'gap-0 justify-between'
                            : `${width < 550 ? 'gap-8' : 'gap-10'} sm:gap-10 md:gap-16`
                    }`}
                >
                    <section className="flex items-center cursor-pointer group ">
                        <span
                            className="p-[6px] rounded-full text-xl text-neutral-500 transition duration-200
                    group-hover:bg-blue-500 group-hover:bg-opacity-10 group-hover:text-blue-500"
                        >
                            <TbMessageCircle />
                        </span>
                        <p className="text-sm text-neutral-500 group-hover:text-blue-500 transition duration-200 -ml-1">
                            {getCondensedNumber(post.replies)}
                        </p>
                    </section>
                    <section className="flex items-center cursor-pointer group">
                        <span
                            className="p-[6px] rounded-full text-xl text-neutral-500 transition duration-200
                    group-hover:bg-green-500 group-hover:bg-opacity-10 group-hover:text-green-500"
                        >
                            <LiaRetweetSolid className="" />
                        </span>
                        <p className="text-sm text-neutral-500 group-hover:text-green-500 transition duration-200 -ml-1">
                            {getCondensedNumber(post.reposts)}
                        </p>
                    </section>
                    <section className="flex items-center cursor-pointer group">
                        <span
                            className="p-[6px] rounded-full text-xl text-neutral-500 transition duration-200
                    group-hover:bg-pink-500 group-hover:bg-opacity-10 group-hover:text-pink-500"
                        >
                            <IoMdHeartEmpty />
                        </span>

                        <p className="text-sm text-neutral-500 group-hover:text-pink-500 transition duration-200 -ml-1">
                            {getCondensedNumber(post.likes)}
                        </p>
                    </section>
                    <section className="flex items-center cursor-pointer group">
                        <span
                            className="p-[6px] rounded-full text-xl text-neutral-500 transition duration-200
                    group-hover:bg-blue-500 group-hover:bg-opacity-10 group-hover:text-blue-500"
                        >
                            <BiBarChart />
                        </span>
                        <p className="text-sm text-neutral-500 group-hover:text-blue-500 transition duration-200 -ml-1">
                            {getCondensedNumber(post.views)}
                        </p>
                    </section>
                </div>
                <span
                    className="p-[6px] rounded-full text-neutral-500 transition duration-200 
                        hover:bg-blue-500 hover:text-blue-500 hover:bg-opacity-10 cursor-pointer md:mr-5"
                >
                    <IoBookmarkOutline />
                </span>
            </footer>
        </div>
    );
};

export default Post;
