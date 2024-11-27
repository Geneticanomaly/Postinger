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
    profileImage?: File | null;
    backgroundImage?: File | null;
};

export type UserContextValueType = {
    user: User;
};

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
    username: string;
    description: string;
    residence: string;
};
