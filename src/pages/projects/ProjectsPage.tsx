import React, {JSX} from 'react'
import {FeaturedProjectsContainer} from "./components";
import {mapContentContainers} from "../../domain";

export const ProjectsPage = () => {

    const containers: JSX.Element[] = [
        <FeaturedProjectsContainer/>,
    ];

    return (<>{mapContentContainers(containers)}</>);

}
