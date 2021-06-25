import { deleteItem, updateItem } from '../../utils/storeUtils';
import { types } from './types';

export function createCrudStoreMutations() {
  return {
    [types.SET_DATA](state, value) {
      state.data = value;
    },

    [types.ADD_DATA](state, value) {
      state.data = [...state.data, value];
    },

    [types.UPDATE_DATA](state, value) {
      updateItem(state.data, item => item.id === value.id, value);
    },

    [types.DELETE_DATA](state, value) {
      deleteItem(state.data, item => item.id === value);
    },

    [types.SET_LOADING](state, value) {
      state.loading = value;
    }
  };
}
