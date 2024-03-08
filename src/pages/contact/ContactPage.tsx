import React from 'react'
import {mapContentContainers} from "../../domain";
import {ContactFormContainer} from "./components";

export const ContactPage = () => {

    const containers = [
        <ContactFormContainer/>
    ]

    return (<>{mapContentContainers(containers)}</>);

}
