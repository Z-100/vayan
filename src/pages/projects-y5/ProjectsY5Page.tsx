import React, {JSX} from 'react'
import {ContentContainer} from "../../components";
import {Y5ShowCaseContainer} from "./containers";

export const ProjectsY5Page = () => {

    const containers: JSX.Element[] = [
        <Y5ShowCaseContainer/>,
    ];

    return (
        <>
            <ContentContainer containers={containers}/>
        </>
    );
}
