import React, {JSX} from 'react'
import {AboutMeContainer, AboutWebsiteContainer, IntroContainer, SkillsContainer} from "./components";
import {mapContentContainers} from "../../domain";

export const HomePage = () => {

    const containers: JSX.Element[] = [
        <IntroContainer/>,
        <AboutWebsiteContainer/>,
        <AboutMeContainer/>,
        <SkillsContainer/>,
    ];

    return (
        <div>
            {mapContentContainers(containers)}
        </div>
    );
}
