import {RouterType} from "../../models";
import React from "react";
import {
    AboutPage, ContactPage, LatestProjectsPage, PortfolioPage,
    WelcomePage
} from "../../pages";

const routerData: RouterType[] = [
    {
        path: "/",
        element: <WelcomePage/>,
        title: "Welcome"
    },
    {
        path: "/about",
        element: <AboutPage/>,
        title: "About"
    },
    {
        path: "/contact",
        element: <ContactPage/>,
        title: "Contact"
    },
    {
        path: "/latest-projects",
        element: <LatestProjectsPage/>,
        title: "Latest Projects"
    },
    {
        path: "/portfolio",
        element: <PortfolioPage/>,
        title: "Portfolio"
    },
]

export default routerData;
