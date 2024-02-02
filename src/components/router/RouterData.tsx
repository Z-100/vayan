import {RouteGroup, RouteType} from "../../domain";
import React from "react";
import {ContactPage, DemoPage, HomePage, ProjectsPage} from "../../pages";
import {BiHomeHeart,} from "react-icons/bi";

export const routerData: RouteType[] = [
    {
        path: "/",
        element: <HomePage/>,
        name: "Welcome",
        icon: BiHomeHeart,
        group: RouteGroup.LEFT,
    },
    {
        path: "/contact",
        element: <ContactPage/>,
        name: "Contact",
        icon: BiHomeHeart,
        group: RouteGroup.RIGHT,
    },
    {
        path: "/demo",
        element: <DemoPage/>,
        name: "Demo",
        icon: BiHomeHeart,
        group: RouteGroup.MID,
    },
    {
        path: "/projects",
        element: <ProjectsPage/>,
        name: "Projects",
        icon: BiHomeHeart,
        group: RouteGroup.MID,
    },
]
