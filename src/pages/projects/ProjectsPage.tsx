import React, {JSX} from 'react'
import {AllProjectsContainer, FeaturedProjectsContainer, LatestProjectsContainer} from "./components";
import {mapContentContainers} from "../../domain";

export const ProjectsPage = () => {

    const containers: JSX.Element[] = [
        <FeaturedProjectsContainer/>,
        <LatestProjectsContainer/>,
        <AllProjectsContainer/>,
    ];

    return (<>{mapContentContainers(containers)}</>);
}
