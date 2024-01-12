import React from 'react'
import {useGetRepositoryFromUser} from "../../domain";

export const LatestProjectsPage = () => {

    const {data} = useGetRepositoryFromUser("Z-100", "vayan")

    return (
        <>
            {data?.name}
            <br/>
            {data?.description}
            <br/>
            {data?.full_name}
            <br/>
            {data?.html_url}
            <br/>
            {data?.language}
        </>
    )
}
