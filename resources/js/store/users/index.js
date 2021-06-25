import { CrudStore } from '../crudStore/crudStore';
import crudService from '../../services/crudService/crudService';

const usersActions = {
  async fetchUsers({ dispatch }) {
    await Promise.all([
      dispatch('roles/get', null, { root: true }),
      dispatch('get')
    ]);
  }
};

class RolesStore extends CrudStore {
  constructor(label, service) {
    const storeProps = {
      actions: usersActions,
    };
    super(label, service, storeProps);
  }
}

export const users = new RolesStore('User', new crudService('api/users'));
