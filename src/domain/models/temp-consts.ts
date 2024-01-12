import {
    BiAlarm,
    BiAtom,
    BiConversation,
    BiHeart,
    BiHomeHeart,
    BiMeteor,
    BiStar,
} from 'react-icons/bi';

export const sidebarContent = [
    {
        id: 0,
        groupName: 'Personal',
        items: [
            {
                id: 0,
                icon: BiHomeHeart,
                destination: '/',
                text: 'Home'
            },
            {
                id: 1,
                icon: BiHeart,
                destination: '/about',
                text: 'About me'
            }
        ]
    },
    {
        id: 1,
        groupName: 'Projects',
        items: [
            {
                id: 0,
                icon: BiStar,
                destination: '/project-selection',
                text: 'Project selection'
            },
            {
                id: 1,
                icon: BiMeteor,
                destination: '/active-projects',
                text: 'Active projects'
            },
            {
                id: 2,
                icon: BiAtom,
                destination: '/all-projects',
                text: 'All projects'
            },
            {
                id: 3,
                icon: BiAlarm,
                destination: '/latest-projects',
                text: 'Latest projects',
            }
        ]
    },
    {
        id: 3,
        groupName: 'Additional',
        items: [
            {
                id: 1,
                icon: BiConversation,
                destination: '/contact',
                text: 'Get in touch!'
            }
        ]
    }
];
