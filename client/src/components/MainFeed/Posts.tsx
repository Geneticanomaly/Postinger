import { posts } from '../../data/PostData';
import Post from './Post';

const Posts = () => {
    return (
        <div className="flex flex-col w-full">
            <header
                className="sticky top-0 z-10 flex items-center text-center border-b border-l border-r w-full 
    border-gray-500 opacity-70"
            >
                <h2 className="p-4 bg-neutral-950 w-[50%] cursor-pointer hover:bg-neutral-500">
                    For you
                </h2>
                <h2 className="p-4 bg-neutral-950 w-[50%] cursor-pointer hover:bg-neutral-500">
                    Following
                </h2>
            </header>

            {posts.map((post, i) => (
                <Post key={i} post={post} />
            ))}
        </div>
    );
};

export default Posts;
