import {githubApi} from "../";
import {useEffect, useState} from "react";
import {GithubRepository} from "../models/GithubRepository";

export function useGetRepositoryFromUser(user: string, repositoryName: string) {

    const [data, setData] = useState<GithubRepository | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        githubApi.getRepositoryFromUser(user, repositoryName)
            .then(res => setData(res))
            .catch(err => setError(err));
    }, [user, repositoryName])

    return {data, error}
}
