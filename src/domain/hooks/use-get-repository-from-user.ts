import {ExtractDataFromRequest, githubApi} from '../';

export function useGetRepositoryFromUser(user: string, repositoryName: string) {
    return ExtractDataFromRequest(githubApi.getRepositoryFromUser(user, repositoryName))
}

