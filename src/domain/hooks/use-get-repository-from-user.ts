import {githubApi} from '../';
import {ExtractDataFromRequest} from '../';

export function useGetRepositoryFromUser(user: string, repositoryName: string) {
    return ExtractDataFromRequest(githubApi.getRepositoryFromUser(user, repositoryName))
}

