import React from 'react'
import {AboutContainer, FeaturedProjectsContainer, IntroductionContainer, SkillsContainer} from "./components";

export const HomePage = () => {

    return (
        <>
            <IntroductionContainer/>
            <AboutContainer/>
            <SkillsContainer/>
            <FeaturedProjectsContainer/>
        </>
    )
}
