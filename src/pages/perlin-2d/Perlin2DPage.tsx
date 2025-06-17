import React, {JSX} from 'react'
import {ContentContainer} from "../../components";
import {Perlin2DContainer} from "./containers";

export const Perlin2DPage = () => {

    const containers: JSX.Element[] = [
        <Perlin2DContainer />,
    ];

    return (
        <>
            <ContentContainer containers={containers}/>
        </>
    );
}
