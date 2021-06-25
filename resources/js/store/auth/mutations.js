import { types } from './types';

export const mutations = {
  [types.SET_LOGIN_DATA](state, { data }) {
    state.user = data?.user;
    state.token = data?.token;
  }
};
