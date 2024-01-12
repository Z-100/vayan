import {
    RouteType,
    RouteGroup
} from "../../domain/models";
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

const routerData: RouteType[] = [
    {
        path: "/",
        element: <WelcomePage/>,
        title: "Welcome",
        icon: BiHomeHeart,
        group: RouteGroup.GENERAL,
    },
    {
        path: "/about",
        element: <AboutPage/>,
        title: "About",
        icon: BiStreetView,
        group: RouteGroup.PERSONAL,
    },
    {
        path: "/contact",
        element: <ContactPage/>,
        title: "Contact",
        icon: BiMeteor,
        group: RouteGroup.ADDITIONAL,
    },
    {
        path: "/latest-projects",
        element: <LatestProjectsPage/>,
        title: "Latest Projects",
        icon: BiConversation,
        group: RouteGroup.PROJECTS,
    },
    {
        path: "/portfolio",
        element: <PortfolioPage/>,
        title: "Portfolio",
        icon: BiTable,
        group: RouteGroup.PERSONAL,
    },
]

export default routerData;
