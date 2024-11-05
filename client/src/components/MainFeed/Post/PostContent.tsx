import { PostData } from '../../../types';
import PostFooter from './PostFooter';

type PostContentType = {
    post: PostData;
};

const PostContent = ({ post }: PostContentType) => {
    return (
        <div className="flex gap-2 p-3">
            <img
                src={post.avatarUrl}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 cursor-pointer"
            />
            <div>
                <section className="flex flex-col">
                    <section className="flex gap-1 sm:text-base text-sm">
                        <h2 className="font-bold cursor-pointer hover:underline">
                            {post.username}
                        </h2>
                        <p className="text-neutral-500">· {post.date}</p>
                    </section>
                    <p>{post.title}</p>
                </section>

                <section className=" mt-3 rounded-xl">
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
                <PostFooter post={post} />
            </div>
        </div>
    );
};

export default PostContent;
