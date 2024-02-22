import React, {JSX} from 'react'
import {AboutContainer, IntroductionContainer, SkillsContainer} from "./components";

export const HomePage = () => {

    const containers: JSX.Element[] = [
        <IntroductionContainer/>,
        <AboutContainer/>,
        <SkillsContainer/>,
    ];

    return (
        <div className="flex flex-col items-center">
            {containers.map((container, index) => (
                <div className="w-full bg-dark-3 my-2 px-4 sm:w-[80%]">
                    {container}
                </div>
            ))}
        </div>
    )
}
