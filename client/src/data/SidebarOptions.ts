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
        route: '/home',
        logo: SiPopos,
    },
    {
        name: 'Home',
        route: '/home',
        logo: GoHomeFill,
    },
    {
        name: 'Explore',
        route: '/explore',
        logo: IoSearchOutline,
    },
    {
        name: 'Notifications',
        route: '/notifications',
        logo: IoNotificationsOutline,
    },
    {
        name: 'Messages',
        route: '/messages',
        logo: AiOutlineMail,
    },
    {
        name: 'Booksmarks',
        route: '/bookmarks',
        logo: IoBookmarkOutline,
    },
    {
        name: 'Profile',
        route: '/profile',
        logo: IoPersonOutline,
    },
];
