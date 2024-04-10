import React, {JSX} from 'react'
import {PlannedProjectsContainer, FeaturedProjectsContainer} from "./containers";
import {ContentContainer} from "../../components";

export const ProjectsPage = () => {

    const containers: JSX.Element[] = [
        <FeaturedProjectsContainer/>,
        <PlannedProjectsContainer/>,
    ];

    return (
        <>
            <ContentContainer containers={containers}/>
        </>
    );
}
