import {JSX} from "react";
import {IconType} from "react-icons/lib";
import {RouteGroup} from "./RouteGroup";

export interface RouteType {
    path: string,
    element: JSX.Element
    text: string,
    icon: IconType
    group: RouteGroup
}
