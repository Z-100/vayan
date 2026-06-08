import React, {JSX} from 'react'
import {ContentContainer} from "../../components";
import {Y5DescriptionContainer, Y5ShowCaseContainer} from "./containers";

export const ProjectsY5Page = () => {

    const containers: JSX.Element[] = [
        <Y5DescriptionContainer/>,
        <Y5ShowCaseContainer/>,
    ];

    return (
        <div className="w-full">
            <div className="relative pt-24 md:mt-44 pb-72 md:pb-48">
                <span className="absolute top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-4xl md:text-5xl mt-5 hover:drop-shadow-2xl">y5 - Game Engine</h2>
                </span>
            </div>
            <ContentContainer containers={containers}/>
        </div>
    );
}
