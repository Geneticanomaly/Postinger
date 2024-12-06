import PostInstance from './database/models/post';
import FileInstance from './database/models/file';
import UserInstance from './database/models/user';

/* Controller request types */

/* Auth */
export type RegisterRequest = {
    email: string;
    password: string;
    username: string;
};

export type LoginRequest = {
    email: string;
    password: string;
};

/* Post */
export type PostWithMedia = PostInstance & {
    media: FileInstance | null;
};

export type PostWithUser = PostWithMedia & {
    user: {
        username: string;
        profileImage: FileInstance | null;
    };
};

export type CreatePostRequest = {
    userId: string;
    parentPostId: number | null;
    content: string;
    fileType: string;
};

/* User */
export type UserWithImages = UserInstance & {
    profileImage: FileInstance | null;
    backgroundImage: FileInstance | null;
};

export type UserDataRequest = {
    username: string;
    description: string;
    residence: string;
};

export type updateUserImageRequest = {
    userId: string;
    fileType: string;
};
