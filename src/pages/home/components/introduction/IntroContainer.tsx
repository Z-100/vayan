import React from 'react'
import {ContentSection} from "../../../../components";
import {introTexts} from "../../../../domain";

export const IntroContainer = () => {

    return (
        <>
            {introTexts.map(section => (
                <ContentSection textSection={section}/>
            ))}
        </>
    )
}
