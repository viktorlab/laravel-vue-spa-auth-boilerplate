import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';

export const abilities = {
  namespaced: true,

  state,
  actions,
  mutations
};
