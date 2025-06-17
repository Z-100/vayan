import React, {JSX} from 'react'
import {FeaturedProjectsContainer, PlannedProjectsContainer} from "./containers";
import {ContentContainer} from "../../components";

export const ProjectsPage = () => {

    const containers: JSX.Element[] = [
        <FeaturedProjectsContainer/>,
        <PlannedProjectsContainer/>,
    ];

    return (
        <div className="pt-14 md:mt-24">
            <ContentContainer containers={containers}/>
        </div>
    );
}
