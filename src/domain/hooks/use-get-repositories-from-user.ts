import {githubApi} from '../';
import {ExtractDataFromRequest} from '../';

export function useGetRepositoriesFromUser(user: string) {
    return ExtractDataFromRequest(githubApi.getRepositoriesFromUser(user))
}
