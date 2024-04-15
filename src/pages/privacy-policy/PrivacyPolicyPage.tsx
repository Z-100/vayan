import React, {JSX} from 'react'
import {ContentContainer} from "../../components";
import {PrivacyPolicyContainer} from "./containers";

export const PrivacyPolicyPage = () => {

    const containers: JSX.Element[] = [
        <PrivacyPolicyContainer />,
    ];

    return (
        <>
            <ContentContainer containers={containers}/>
        </>
    );
}
