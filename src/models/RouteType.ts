import {JSX} from "react";
import {IconType} from "react-icons/lib";
import {RouteGroup} from "./RouteGroup";

export interface RouteType {
    path: string,
    element: JSX.Element
    title: string,
    icon: IconType
    group: RouteGroup
}
