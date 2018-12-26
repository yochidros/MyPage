import Vue from 'vue';
import Vuex from 'vuex';
import {mutations} from '@/store/mutations';
import {getters} from '@/store/getters';
import {actions} from '@/store/actions';

Vue.use(Vuex);

export function createStore() {
   const store = new Vuex.Store({
      getters,
      mutations,
      actions,
   });
   return store;
}
