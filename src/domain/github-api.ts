import axios from 'axios';
import {GithubRepository} from "./models/GithubRepository";
import {urlBuilder} from "./utils/url-builder";

enum URL {
    BASE = "https://api.github.com",
    REPOSITORIES = "/users/%s/repos",
    REPOSITORY = "/repos/%s/%s",
}
export class GithubApi {
    getRepositoriesFromUser = async (
        user: string
    ): Promise<GithubRepository[]> => {
        const { data } = await axios.get<GithubRepository[]>(
            URL.BASE + urlBuilder(URL.REPOSITORIES, user),
        );

        return data;
    }

    getRepositoryFromUser = async (
        user: string,
        repositoryName: string,
    ): Promise<GithubRepository> => {
        const { data } = await axios.get<GithubRepository>(
            URL.BASE + urlBuilder(URL.REPOSITORY, user, repositoryName)
        );

        return data;
    }

    getRepositories = async (
        urls: string[]
    ): Promise<GithubRepository[]> => {

        let repositories = []

        for (const url of urls) {
            const { data } = await axios.get<GithubRepository>(url)
            repositories.push(data)
        }

        return repositories
    }
}

export const githubApi = new GithubApi()
