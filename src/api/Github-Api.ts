import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

export interface GithubApi {
   axios: AxiosInstance;
}

const githubApi = {} as GithubApi;
const baseURL = "https://api.github.com"

githubApi.axios = axios.create({
   baseURL,
   timeout: 1000,
});

export default githubApi;

export function fetch(path: string, options: AxiosRequestConfig = {}) {
   return githubApi
       .axios
       .get(path, options)
       .then( (response: any) => {
           return Promise.resolve(response.data);
       });
}
