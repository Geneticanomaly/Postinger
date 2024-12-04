import { useNavigate } from 'react-router-dom';
import { PostData } from '../../../types';
import PostFooter from './PostFooter';
import { getPostDate, getPostMedia, getUserImage } from '../../../helperFunctions';
import placeholderAvatar from '../../../assets/avatar-1577909_1280.png';

type PostContentType = {
    post: PostData;
};

const PostContent = ({ post }: PostContentType) => {
    const navigate = useNavigate();
    const postMedia = getPostMedia(post.media);

    return (
        <div className="flex gap-2 p-3">
            <div
                className="relative w-11 h-10 cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/profile/${post.user.username}`);
                }}
            >
                <img
                    src={
                        post.user.profileImage
                            ? getUserImage(post.user.profileImage)
                            : placeholderAvatar
                    }
                    className="rounded-full w-full h-full transition duration-200"
                />
                <div className="absolute inset-0 bg-neutral-950 bg-opacity-10 rounded-full opacity-0 hover:opacity-100 transition duration-300"></div>
            </div>
            <div className="w-full">
                <section className="flex flex-col">
                    <section className="flex gap-1 sm:text-base text-sm">
                        <h2
                            className="font-bold cursor-pointer hover:underline"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/profile/${post.user.username}`);
                            }}
                        >
                            {post.user.username}
                        </h2>
                        <p className="text-neutral-500">· {getPostDate(post.createdAt)}</p>
                    </section>
                    <p>{post.content}</p>
                </section>

                <section className="mb-3 mt-3 rounded-xl ">
                    {post.media &&
                        (postMedia && postMedia.length > 1 ? (
                            postMedia.map((media) => <img key={media} src={media} />)
                        ) : (
                            <img
                                src={postMedia[0]}
                                className="w-full h-auto rounded-xl cursor-pointer"
                            />
                        ))}
                    {/* {post.video && (
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
                    )} */}
                </section>
                <PostFooter post={post} />
            </div>
        </div>
    );
};

export default PostContent;
