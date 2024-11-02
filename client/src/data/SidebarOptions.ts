import { GoHomeFill } from 'react-icons/go';

import {
    IoNotificationsOutline,
    IoBookmarkOutline,
    IoPersonOutline,
    IoSearchOutline,
} from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { SiPopos } from 'react-icons/si';

export const options = [
    {
        id: 1,
        route: '/home',
        logo: SiPopos,
    },
    {
        id: 2,
        name: 'Home',
        route: '/home',
        logo: GoHomeFill,
    },
    {
        id: 3,
        name: 'Explore',
        route: '/explore',
        logo: IoSearchOutline,
    },
    {
        id: 4,
        name: 'Notifications',
        route: '/notifications',
        logo: IoNotificationsOutline,
    },
    {
        id: 5,
        name: 'Messages',
        route: '/messages',
        logo: AiOutlineMail,
    },
    {
        id: 6,
        name: 'Booksmarks',
        route: '/bookmarks',
        logo: IoBookmarkOutline,
    },
    {
        id: 7,
        name: 'Profile',
        route: '/profile',
        logo: IoPersonOutline,
    },
];
