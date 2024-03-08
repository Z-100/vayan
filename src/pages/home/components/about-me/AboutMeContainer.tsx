import React from 'react'
import {ContentSection} from "../../../../components";
import {aboutMeTexts} from "../../../../domain";

export const AboutMeContainer = () => {

    return (
        <>
            {aboutMeTexts.map(section => (
                <ContentSection textSection={section}
                                textPos={"right"}/>
            ))}
        </>
    )
}
