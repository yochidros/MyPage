import {DefineActions} from 'vuex-type-helper';
import {Mutations} from '@/store/modules/github/mutations';
import {State} from '@/store/modules/github/index';
import {Getters} from '@/store/modules/github/getters';
import * as api from '@/api/Github-Api';

export interface Actions {
   fetchUser: {};
   fetchRepos: {};
}

export const actions: DefineActions<Actions, State, Mutations, Getters> = {
    fetchUser({ commit }, {}) {
        return api.fetch('users/yochidros').then( (data) => {
            commit('setUser', { data });
            return data;
        }).catch( (error) => {
            const value = {
                code: error.code || '',
                message: error.message || '',
            };
            console.log(value);
            return Promise.reject(error);
        });
    },

    fetchRepos({ commit }, {}) {
        return api.fetch('users/yochidros/repos').then( (data) => {
            console.log(data);
            commit('setRepos', {data });
            return data;
        }).catch( (error) => {
            console.log(error);
            return Promise.reject(error);
        });
    },

};
