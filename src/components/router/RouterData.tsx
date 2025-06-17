import {RouteGroup, RouteType} from "../../domain";
import React from "react";
import {HomePage, PrivacyPolicyPage, ProjectsPage, TestAreaPage} from "../../pages";
import {BiCalculator, BiHomeHeart,} from "react-icons/bi";

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
        path: "/test-area",
        element: <TestAreaPage/>,
        name: "Tests",
        icon: BiCalculator,
        group: RouteGroup.NAVBAR,
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage/>,
        name: "Privacy Policy",
        icon: BiHomeHeart,
        group: RouteGroup.FOOTER,
    },
]
