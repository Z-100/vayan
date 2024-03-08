import React from 'react'
import {ContentSection} from "../../../../components";
import {introTexts} from "../../../../domain";

export const IntroductionContainer = () => {

    return (
        <>
            {introTexts.map((section, index) => (
                <ContentSection textSection={section}/>
            ))}
        </>
    )
}
