import {
    BiConversation,
    BiHomeHeart,
    BiMeteor,
    BiStreetView,
} from 'react-icons/bi';

export const sidebarContent = [
    {
        id: 1,
        groupName: 'Personal',
        items: [
            {
                id: 1,
                icon: BiHomeHeart,
                destination: '/',
                text: 'Home'
            },
            {
                id: 2,
                icon: BiStreetView,
                destination: '/about',
                text: 'About'
            }
        ]
    },
    {
        id: 2,
        groupName: 'Projects',
        items: [
            {
                id: 1,
                icon: BiMeteor,
                destination: '/latest',
                text: 'Latest projects'
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
