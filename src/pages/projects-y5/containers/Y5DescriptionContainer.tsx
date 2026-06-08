import React from 'react'
import {ContentSection} from "../../../components";
import {y5DescriptionTexts} from "../../../domain";

export const Y5DescriptionContainer = () => {

    return (
        <>
            {y5DescriptionTexts.map(section => (
                <ContentSection textSection={section}
                                textPos={"left"}/>
            ))}
        </>
    )
}
