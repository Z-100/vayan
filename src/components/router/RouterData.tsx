import {RouteGroup, RouteType} from "../../domain";
import React from "react";
import {HomePage, ProjectsPage} from "../../pages";
import {BiCalculator, BiHomeHeart,} from "react-icons/bi";
import {PrivacyPolicyPage} from "../../pages/privacy-policy";
import {Perlin2DPage} from "../../pages/perlin-2d";

export function getRouterData(group?: RouteGroup) {
    return group ? routerData.filter(it => it.group === group) : routerData;
}

const routerData: RouteType[] = [
    {
        path: "/",
        element: <HomePage/>,
        name: "Home",
        icon: BiHomeHeart,
        group: RouteGroup.NAVBAR,
    },
    {
        path: "/projects",
        element: <ProjectsPage/>,
        name: "Projects",
        icon: BiHomeHeart,
        group: RouteGroup.NAVBAR,
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage/>,
        name: "Privacy Policy",
        icon: BiHomeHeart,
        group: RouteGroup.FOOTER,
    },
    {
        path: "/perlin-2d",
        element: <Perlin2DPage/>,
        name: "Perlin 2D",
        icon: BiCalculator,
        group: RouteGroup.NAVBAR,
    },
]
