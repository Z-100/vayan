import React, {JSX} from 'react'
import {PlannedProjectsContainer, FeaturedProjectsContainer} from "./components";
import {mapContentContainers} from "../../domain";

export const ProjectsPage = () => {

    const containers: JSX.Element[] = [
        <FeaturedProjectsContainer/>,
        <PlannedProjectsContainer/>,
    ];

    return (
        <div className="w-full md:w-[50%] mx-auto">
            {mapContentContainers(containers)}
        </div>
    );
}
