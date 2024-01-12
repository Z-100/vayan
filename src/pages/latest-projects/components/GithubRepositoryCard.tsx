import React from "react";
import {GithubRepository} from "../../../domain/models/GithubRepository";

interface GithubRepositoryCardProps {
    repository: GithubRepository
}
export const GithubRepositoryCard = ({ repository }: GithubRepositoryCardProps) => {

    return(
        <div className="bg-primary rounded-2xl h-8 dark:bg-light-primary transition-colors duration-300 hover:bg-opacity-80">
            <p className="text-center text-white">{repository.name}</p>
            <p className="text-center text-white">{repository.description}</p>
            <p className="text-center text-white">{repository.language}</p>
        </div>
    )
}
