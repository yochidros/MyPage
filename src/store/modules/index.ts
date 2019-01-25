import {createGitHubStore} from '@/store/modules/github';

export function createModules() {
    const github = createGitHubStore();
    return {
        github,
    };
}
