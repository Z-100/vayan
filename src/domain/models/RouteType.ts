import {JSX} from "react";
import {RouteGroup} from "./RouteGroup";
import {IconType} from "react-icons";

export interface RouteType {
    path: string,
    element: JSX.Element
    name: string,
    icon: IconType
    group: RouteGroup
}
