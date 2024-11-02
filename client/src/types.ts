import { IconType } from 'react-icons';

export type SidebarOption = {
    id: number;
    name?: string;
    route: string;
    logo: IconType;
};
