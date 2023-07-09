import {
    BiConversation,
    BiHomeHeart,
    BiMeteor,
    BiStreetView,
} from 'react-icons/bi';

export const sidebarContent = [
    {
        groupName: 'Personal',
        items: [
            {
                icon: BiHomeHeart,
                destination: '/',
                text: 'Home'
            },
            {
                icon: BiStreetView,
                destination: '/about',
                text: 'About'
            }
        ]
    },
    {
        groupName: 'Projects',
        items: [
            {
                icon: BiMeteor,
                destination: '/latest',
                text: 'Latest projects'
            }
        ]
    },
    {
        groupName: 'Additional',
        items: [
            {
                icon: BiConversation,
                destination: '/contact',
                text: 'Get in touch!'
            }
        ]
    }
];
