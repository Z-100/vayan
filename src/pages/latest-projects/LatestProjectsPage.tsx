import React from 'react'
import {useGetRepositoryFromUser} from "../../domain";
import {GithubRepository} from "../../domain/models/GithubRepository";
import {GithubRepositoryCard} from "./components/GithubRepositoryCard";

export const LatestProjectsPage = () => {

    let repositories: GithubRepository[] = []

    repositories.push(useGetRepositoryFromUser("Z-100", "vayan").data!!)
    repositories.push(useGetRepositoryFromUser("Z-100", "soemi-weather").data!!)
    repositories.push(useGetRepositoryFromUser("Z-100", "M5Stack-parkingsystem").data!!)

    return (
        <>
            {repositories.map((repository, index) => {
                <GithubRepositoryCard key={index} repository={repository} />
            })}
        </>
    )
}
