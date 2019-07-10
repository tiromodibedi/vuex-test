import Vue from 'vue';
import Vuex from 'vuex';

// modules
import counter from './modules/counter.js';

// shared actions, mutations and getters
import * as actions from './shared/actions';
import * as mutations from './shared/mutations';
import * as getters from './shared/getters';

// Enable Vuex
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    numValue: 0,
  },
  actions,
  getters,
  mutations,
  modules: {
    counter
  }
})