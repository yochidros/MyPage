import {mutations} from '@/store/modules/github/mutations';
import {getters} from '@/store/modules/github/getters';
import {actions} from '@/store/modules/github/actions';
import { State } from 'vuex-class';

export interface State {
   user?: {
      id: number;
      name: string;
      avatar_url: string;
      url: string | null;
      blog: string | null;
      email: string | null;
   };

   repos?: {
      repository: object[],
   };
}
export function createGitHubStore() {
   const state: State = {
       user: undefined,
   };

   return {
      namespaced: true,
      state,
      actions,
      getters,
      mutations,
   };
}
