import React from 'react'
import {ContentSection} from "../../../components";
import {aboutWebsiteTexts} from "../../../domain";

export const AboutWebsiteContainer = () => {

    return (
        <>
            {aboutWebsiteTexts.map(section => (
                <ContentSection textSection={section}
                                textPos={"right"}/>
            ))}
        </>
    )
}
