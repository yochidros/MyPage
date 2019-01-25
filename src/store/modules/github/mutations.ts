import {State} from '@/store/modules/github/index';
import {DefineMutations} from 'vuex-type-helper';

import Vue from 'vue';

export interface Mutations {
   setUser: {
       data: State['user'];
   };

   setRepos: {
       data: State['repos'];
   };
}

export const mutations: DefineMutations<Mutations, State> = {
    setUser(state, { data }) {
        Vue.set(state, 'user', data);
    },

    setRepos(state, { data }) {
        Vue.set(state, 'repos', data);
    },
};
