import { IconType } from 'react-icons';

export type User = {
    id: string;
    email: string;
    username: string;
    description: string | null;
    residence: string | null;
    disabled: boolean;
    admin: boolean;
    createdAt: string;
    updatedAt: string;
    profileImage?: UserImage | null;
    backgroundImage?: UserImage | null;
};

export type SidebarOption = {
    id: number;
    name?: string;
    route: string;
    logo: IconType;
    filledLogo?: IconType;
};

export type BasePost = {
    id: number;
    userId: string;
    parentPostId: number | null;
    content: string | null;
    embeddedLink: string | null;
    likes: number;
    comments: number;
    reposts: number;
    createdAt: string;
    updatedAt: string;
};

export type PostData = BasePost & {
    user: {
        username: string;
        profileImage: UserImage | null | undefined;
    };
    media?: PostMedia[] | null;
};

// export type UserPosts = BasePost & {
//     media: PostMedia[] | null;
// };

export type UpdateUserPayload = {
    username: string;
    description: string;
    residence: string;
};

export type UserImage = {
    name?: string;
    encoding?: string;
    mimetype: string;
    buffer: string;
    fileType?: string;
};

export type PostMedia = {
    mimetype: string;
    buffer: string;
};
