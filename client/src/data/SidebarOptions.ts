import {
    IoNotificationsOutline,
    IoNotificationsSharp,
    IoBookmarkOutline,
    IoBookmark,
    IoPersonOutline,
    IoPersonSharp,
    IoSearchOutline,
    IoSearchSharp,
    IoMailOutline,
    IoMailSharp,
} from 'react-icons/io5';
import { SiPopos } from 'react-icons/si';
import { GoHome, GoHomeFill } from 'react-icons/go';

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
        logo: GoHome,
        filledLogo: GoHomeFill,
    },
    {
        id: 3,
        name: 'Explore',
        route: '/explore',
        logo: IoSearchOutline,
        filledLogo: IoSearchSharp,
    },
    {
        id: 4,
        name: 'Notifications',
        route: '/notifications',
        logo: IoNotificationsOutline,
        filledLogo: IoNotificationsSharp,
    },
    {
        id: 5,
        name: 'Messages',
        route: '/messages',
        logo: IoMailOutline,
        filledLogo: IoMailSharp,
    },
    {
        id: 6,
        name: 'Booksmarks',
        route: '/bookmarks',
        logo: IoBookmarkOutline,
        filledLogo: IoBookmark,
    },
    {
        id: 7,
        name: 'Profile',
        route: '/profile',
        logo: IoPersonOutline,
        filledLogo: IoPersonSharp,
    },
];
