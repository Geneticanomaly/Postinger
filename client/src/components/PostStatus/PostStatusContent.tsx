import placeholderAvatar from '../../assets/avatar-1577909_1280.png';
import PostFooter from '../MainFeed/Post/PostFooter';
import { PostData } from '../../types';

type PostStatusContentType = {
    post: PostData;
};

const PostStatusContent = ({ post }: PostStatusContentType) => {
    return (
        <div className="flex flex-col w-full p-3 border-l border-r border-b border-neutral-700 gap-3">
            <div className="flex gap-3 mt-4 items-center">
                <img
                    src={placeholderAvatar}
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12 cursor-pointer"
                />
                <section className="flex flex-col w-full">
                    <section className="flex sm:text-base text-sm items-center justify-between">
                        <h2 className="font-bold cursor-pointer">{post.username}</h2>
                        <button
                            className="bg-blue-50 rounded-full text-sm text-neutral-800 py-1 px-4 font-semibold
                        hover:bg-neutral-100 transition duration-200"
                        >
                            Follow
                        </button>
                    </section>
                </section>
            </div>
            <p className="text-lg">This is a thread on how to hit a draw...</p>
            <section className="mt-3 rounded-xl">
                {post.img && (
                    <img src={post.img} className="w-full h-auto rounded-xl cursor-pointer" />
                )}
                {post.video && (
                    <video
                        className="w-full rounded-xl cursor-pointer border border-neutral-700"
                        controls
                    >
                        <source src={post.video} type="video/mp4" />
                    </video>
                )}
            </section>
            <p className="text-neutral-500 hover:underline cursor-pointer">{post.date}</p>
            <div className="p-2 border-b border-t border-neutral-700">
                <PostFooter post={post} />
            </div>
        </div>
    );
};

export default PostStatusContent;
