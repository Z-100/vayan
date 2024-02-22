import React from 'react'
import {ContentSection} from "../../../../components";
import {aboutTexts} from "../../../../domain";

export const AboutContainer = () => {

    return (
        <>
            {aboutTexts.map((section, index) => (
                <ContentSection textSection={section}
                                textPos={"right"}
                                image={"/logo171.png"}/>
            ))}
        </>
    )
}
