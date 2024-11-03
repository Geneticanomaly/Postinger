import { PostData } from '../../types';
import { TiMessages } from 'react-icons/ti';
import { LiaRetweetSolid } from 'react-icons/lia';
import { BiBarChart } from 'react-icons/bi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { getCondensedNumber } from '../../helperFunctions';

type PostType = {
    post: PostData;
};

const Post = ({ post }: PostType) => {
    return (
        <div className="w-full border-l border-r border-b border-gray-600 p-3">
            {/* Post Info */}
            <section className="flex gap-2">
                <img src={post.avatarUrl} className="rounded-full w-12" />
                <section className="flex flex-col">
                    <section className="flex gap-1">
                        <h2 className="font-bold">{post.username} </h2>
                        <p className="text-neutral-500">· {post.date}</p>
                    </section>
                    <p>{post.title}</p>
                </section>
            </section>
            <section className=" ml-[10%] mt-3 rounded-xl">
                {post.img && <img src={post.img} className=" max-w-full h-auto rounded-xl" />}
            </section>
            {/* Footer */}
            <footer className="flex gap-16 ml-[10%] mt-3">
                <section className="flex items-center cursor-pointer group">
                    <span
                        className="p-[6px] rounded-full text-xl text-neutral-500 transition duration-200
            group-hover:bg-blue-500 group-hover:bg-opacity-10 group-hover:text-blue-500"
                    >
                        <TiMessages />
                    </span>
                    <p className="text-sm text-neutral-500 group-hover:text-blue-500 transition duration-200">
                        {getCondensedNumber(post.replies)}
                    </p>
                </section>
                <section className="flex items-center cursor-pointer group">
                    <span
                        className="p-[6px] rounded-full text-xl text-neutral-500 transition duration-200
            group-hover:bg-green-500 group-hover:bg-opacity-10 group-hover:text-green-500"
                    >
                        <LiaRetweetSolid />
                    </span>
                    <p className="text-sm text-neutral-500 group-hover:text-green-500 transition duration-200">
                        {getCondensedNumber(post.reposts)}
                    </p>
                </section>
                <section className="flex items-center cursor-pointer group">
                    <span
                        className="p-[6px] rounded-full text-xl text-neutral-500 transition duration-200
            group-hover:bg-red-500 group-hover:bg-opacity-10 group-hover:text-red-500"
                    >
                        <IoMdHeartEmpty />
                    </span>

                    <p className="text-sm text-neutral-500 group-hover:text-red-500 transition duration-200">
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
                    <p className="text-sm text-neutral-500 group-hover:text-blue-500 transition duration-200">
                        {getCondensedNumber(post.views)}
                    </p>
                </section>
            </footer>
        </div>
    );
};

export default Post;
