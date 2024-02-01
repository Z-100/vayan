import {
    RouteType,
    RouteGroup
} from "../../domain";
import React from "react";
import {
    WelcomePage
} from "../../pages";
import {
    BiHomeHeart,
} from "react-icons/bi";

export const routerData: RouteType[] = [
    {
        path: "/",
        element: <WelcomePage/>,
        text: "Welcome",
        icon: BiHomeHeart,
        group: RouteGroup.GENERAL,
    },
    {
        path: "/goodbye",
        element: <WelcomePage/>,
        text: "Goodbye",
        icon: BiHomeHeart,
        group: RouteGroup.PERSONAL,
    },
    {
        path: "/no",
        element: <WelcomePage/>,
        text: "No",
        icon: BiHomeHeart,
        group: RouteGroup.GENERAL,
    },
]
