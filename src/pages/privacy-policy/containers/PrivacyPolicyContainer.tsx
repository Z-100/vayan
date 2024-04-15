import React from 'react'
import {ContentSection} from "../../../components";
import {privacyPolicyTexts} from "../../../domain";

export const PrivacyPolicyContainer = () => {

    return (
        <>
            {privacyPolicyTexts.map(section => (
                <ContentSection textSection={section}
                                textPos={"right"}/>
            ))}
        </>
    )
}
