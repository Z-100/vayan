import {JSX} from "react";
import {IconType} from "react-icons/lib";

export interface RouterType {
    path: string,
    element: JSX.Element
    title: string,
    icon: IconType
}
