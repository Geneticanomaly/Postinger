import { useNavigate } from 'react-router-dom';
import { PostData } from '../../../types';
import PostFooter from './PostFooter';

type PostContentType = {
    post: PostData;
};

const PostContent = ({ post }: PostContentType) => {
    const navigate = useNavigate();

    return (
        <div className="flex gap-2 p-3">
            <img
                src={post.avatarUrl}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/profile/${post.username}`);
                }}
            />
            <div className="w-full">
                <section className="flex flex-col">
                    <section className="flex gap-1 sm:text-base text-sm">
                        <h2
                            className="font-bold cursor-pointer hover:underline"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/profile/${post.username}`);
                            }}
                        >
                            {post.username}
                        </h2>
                        <p className="text-neutral-500">· {post.date}</p>
                    </section>
                    <p>{post.title}</p>
                </section>

                <section className="mb-3 mt-3 rounded-xl ">
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

                        // <iframe
                        //     className="w-full rounded-xl sm:h-[236px] md:h-[292px] lg:h-[283px] xl:h-[270px] h-[268px]
                        //                cursor-pointer border border-neutral-700"
                        //     src="https://www.youtube.com/embed/bxfKJHE3hpE?si=qZKrRFQa9rb3cdse"
                        //     title="YouTube video player"
                        //     frameBorder="0"
                        //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        //     referrerPolicy="strict-origin-when-cross-origin"
                        //     allowFullScreen
                        // ></iframe>
                    )}
                </section>
                <PostFooter post={post} />
            </div>
        </div>
    );
};

export default PostContent;
