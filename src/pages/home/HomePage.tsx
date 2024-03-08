import React, {JSX} from 'react'
import {AboutContainer, IntroductionContainer, SkillsContainer} from "./components";
import {mapContentContainers} from "../../domain";

export const HomePage = () => {

    const containers: JSX.Element[] = [
        <IntroductionContainer/>,
        <AboutContainer/>,
        <SkillsContainer/>,
    ];

    return (<>{mapContentContainers(containers)}</>);
}
