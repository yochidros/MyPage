import {Mutations} from '@/store/modules/github/mutations';
import {State} from '@/store/modules/github/index';
import {Getters} from '@/store/modules/github/getters';
import * as api from '@/api/Github-Api';
import {DefineActions} from 'vuex-type-helper';

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
            return Promise.reject(value);
        });
    },

    fetchRepos({ commit }, {}) {
        return api.fetch('users/yochidros/repos').then( (data) => {
            commit('setRepos', {data });
            return data;
        }).catch( (error) => {
            return Promise.reject(error);
        });
    },

};
