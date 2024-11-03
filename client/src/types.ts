import { IconType } from 'react-icons';

export type SidebarOption = {
    id: number;
    name?: string;
    route: string;
    logo: IconType;
};

export type PostData = {
    username: string;
    title: string;
    img?: string;
    date: string;
    avatarUrl: string;
    replies: number;
    reposts: number;
    likes: number;
    views: number;
};
