import React, {JSX} from 'react'
import {AboutMeContainer, AboutWebsiteContainer, SkillsContainer} from "./components";
import {mapContentContainers} from "../../domain";

export const HomePage = () => {

    const containers: JSX.Element[] = [
        <AboutMeContainer/>,
        <AboutWebsiteContainer/>,
        <SkillsContainer/>,
    ];

    return (
        <div className="w-full">
            <div className="relative">
                <img className="w-full h-auto block md:hidden" src="/images/r7-mobile.jpg" alt="R7"/>
                <img className="w-full h-auto hidden md:block" src="/images/r7.jpg" alt="R7 Mobile"/>
                <span className="absolute top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-7xl md:text-9xl font-bold">Z-100</h1>
                    <h2 className="text-4xl md:text-5xl mt-5">Swiss Backend Dev</h2>
                </span>
            </div>
            <div className="w-full md:w-[80%] mx-auto">
                {mapContentContainers(containers)}
            </div>
        </div>
    );
}
