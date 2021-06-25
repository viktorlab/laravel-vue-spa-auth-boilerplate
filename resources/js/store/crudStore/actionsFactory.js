import { toast } from '../../utils/toast';
import { types } from './types';

export function createCrudStoreActions(entity, service) {
  return {
    async get({ commit }) {
      commit(types.SET_LOADING, true);
      const { data, error: errorMessage } = await service.fetch();

      if (errorMessage) {
        toast.error(errorMessage);
        return;
      }

      commit(types.SET_DATA, data?.data);
      commit(types.SET_LOADING, false);
    },

    async create({ commit }, requestBody) {
      commit(types.SET_LOADING, true);
      const { data, error: errorMessage } = await service.create(requestBody);

      if (errorMessage) {
        toast.error(errorMessage);
        return;
      }

      commit(types.ADD_DATA, data?.data);
      commit(types.SET_LOADING, false);
      toast.success(`New ${entity} is successfully added!`);
    },

    async update({ commit }, requestBody) {
      commit(types.SET_LOADING, true);
      const { data, error: errorMessage } = await service.update(requestBody);

      if (errorMessage) {
        toast.error(errorMessage);
        return;
      }

      commit(types.UPDATE_DATA, data?.data);
      commit(types.SET_LOADING, false);
      toast.success(`${entity} is successfully updated!`);
    },

    async delete({ commit }, id) {
      commit(types.SET_LOADING, true);
      const { error: errorMessage } = await service.delete(id);

      if (errorMessage) {
        toast.error(errorMessage);
        return;
      }

      commit(types.DELETE_DATA, id);
      commit(types.SET_LOADING, false);
      toast.success(`${entity} is successfully deleted!`);
    }
  };
}
