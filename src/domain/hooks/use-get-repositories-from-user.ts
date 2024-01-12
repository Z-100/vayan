import {githubApi} from '../';
import {ExtractDataFromRequest} from '../functions';

export function useGetRepositoriesFromUser(user: string) {
    return ExtractDataFromRequest(githubApi.getRepositoriesFromUser(user))
}
