import { CrudStore } from '../crudStore/crudStore';
import crudService from '../../services/crudService/crudService';

const rolesActions = {
  async fetchRoles({ dispatch }) {
    await Promise.all([
      dispatch('permissions/get', null, { root: true }),
      dispatch('get')
    ]);
  }
};

class RolesStore extends CrudStore {
  constructor(label, service) {
    const storeProps = {
      actions: rolesActions,
    };
    super(label, service, storeProps);
  }
}

export const roles = new RolesStore('Role', new crudService('api/roles'));
