import { types } from './types';

export const mutations = {
  [types.SET_PERMISSIONS](state, data) {
    state.abilities = data;
  }
};
