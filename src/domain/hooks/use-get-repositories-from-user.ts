import {githubApi} from "../";

export function useGetRepositoriesFromUser(user: string) {
    return githubApi.getRepositoriesFromUser(user)
}
