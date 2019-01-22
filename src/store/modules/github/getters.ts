import {State} from '@/store/modules/github/index';
import {DefineGetters} from 'vuex-type-helper';

export interface Getters {
   user: State['user'];
   repos: State['repos'];
}

export const getters: DefineGetters<Getters, State> = {
   user(state) {
      return state.user;
   },

   repos(state) {
      return state.repos;
   },
};
