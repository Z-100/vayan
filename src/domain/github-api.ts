import axios from 'axios';
import {GithubRepository} from "./models";
import {urlBuilder} from "./utils";

enum URL {
    BASE = "https://api.github.com",
    REPOSITORIES = "/users/%s/repos",
    REPOSITORY = "/repos/%s/%s",
}

export class GithubApi {
    getRepositoriesFromUser = async (
        user: string
    ): Promise<GithubRepository[]> => {

        if (true) return this.getMockRepositories();

        const {data} = await axios.get<GithubRepository[]>(
            URL.BASE + urlBuilder(URL.REPOSITORIES, user),
        );

        return data;
    }

    getRepositoryFromUser = async (
        user: string,
        repositoryName: string,
    ): Promise<GithubRepository> => {

        if (true) return this.getMockRepositories()[0]

        const {data} = await axios.get<GithubRepository>(
            URL.BASE + urlBuilder(URL.REPOSITORY, user, repositoryName)
        );

        return data;
    }

    getRepositories = async (
        urls: string[]
    ): Promise<GithubRepository[]> => {

        let repositories = []

        if (true) return this.getMockRepositories();

        for (const url of urls) {
            const {data} = await axios.get<GithubRepository>(url)
            repositories.push(data)
        }

        return repositories
    }

    getMockRepositories(): GithubRepository[] {

        let repositories = [];

        repositories.push({
            name: "Vayan",
            description: "This repository, basically",
            language: "Typescript",
            full_name: "z-100/vayan",
            html_url: "https://github.com/z-100/vayan"
        });

        repositories.push({
            name: "FitFusion",
            description: "The backend of FitFubile",
            language: "Kotlin",
            full_name: "ze-100/fitfusion",
            html_url: "https://github.com/ze-100/fitfusion"
        });

        repositories.push({
            name: "soemi-weather",
            description: "Camunda trash",
            language: "Yaml",
            full_name: "z-100/soemi-weather",
            html_url: "https://github.com/z-100/soemi-weather"
        });

        return repositories;
    }
}

export const githubApi = new GithubApi()
