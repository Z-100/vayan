import {RouterType} from "../../models";
import React from "react";
import {
    AboutPage,
    ContactPage,
    LatestProjectsPage,
    PortfolioPage,
    WelcomePage
} from "../../pages";
import {
    BiConversation,
    BiHomeHeart,
    BiMeteor,
    BiStreetView,
    BiTable
} from "react-icons/bi";

const routerData: RouterType[] = [
    {
        path: "/",
        element: <WelcomePage/>,
        title: "Welcome",
        icon: BiHomeHeart,
    },
    {
        path: "/about",
        element: <AboutPage/>,
        title: "About",
        icon: BiStreetView,
    },
    {
        path: "/contact",
        element: <ContactPage/>,
        title: "Contact",
        icon: BiMeteor,
    },
    {
        path: "/latest-projects",
        element: <LatestProjectsPage/>,
        title: "Latest Projects",
        icon: BiConversation,
    },
    {
        path: "/portfolio",
        element: <PortfolioPage/>,
        title: "Portfolio",
        icon: BiTable,
    },
]

export default routerData;
