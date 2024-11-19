import { IconType } from 'react-icons';

export type SidebarOption = {
    id: number;
    name?: string;
    route: string;
    logo: IconType;
    filledLogo?: IconType;
};

export type PostData = {
    id: number;
    username: string;
    title: string;
    img?: string;
    video?: string;
    date: string;
    avatarUrl: string;
    replies: number;
    reposts: number;
    likes: number;
    views: number;
};

export type UpdateUserPayload = {
    name: string;
    bio: string;
    residence: string;
};
