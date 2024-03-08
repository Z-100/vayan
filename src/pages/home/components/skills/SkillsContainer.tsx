import React from 'react'
import {ContentSection} from "../../../../components";
import {skillsTexts} from "../../../../domain";

export const SkillsContainer = () => {

    return (
        <>
            {skillsTexts.map(section => (
                <ContentSection textSection={section}/>
            ))}
        </>
    )
}
