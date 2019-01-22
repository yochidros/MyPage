import Vue from 'vue';
import Vuex, {ActionContext} from 'vuex';
import {mutations} from '@/store/mutations';
import {getters} from '@/store/getters';
import {actions} from '@/store/actions';
import {createModules} from '@/store/modules';

Vue.use(Vuex);

export type Store = ActionContext<{}, {}>;

export function createStore() {
   const state = {};
   const modules = createModules();
   return new Vuex.Store({
      state,
      modules,
      getters,
      mutations,
      actions,
   });
}
