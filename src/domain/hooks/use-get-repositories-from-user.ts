import {ExtractDataFromRequest, githubApi} from '../';

export function useGetRepositoriesFromUser(user: string) {
    return ExtractDataFromRequest(githubApi.getRepositoriesFromUser(user))
}
