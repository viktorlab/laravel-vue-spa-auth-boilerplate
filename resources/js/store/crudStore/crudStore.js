import { createCrudStoreActions } from './actionsFactory';
import { createCrudStoreMutations } from './mutationsFactory';

const defaultState = {
  loading: false,
  data: [],
};

const defaultStoreProps = {
  state: null,
  actions: null,
  mutations: null
};

export class CrudStore {
  constructor(entity, service, storeProps = null) {
    const { state, actions, mutations } = Object.assign({}, defaultStoreProps, storeProps);

    this.namespaced = true;

    this.state = {
      ...defaultState,
      ...state
    };

    this.actions = {
      ...createCrudStoreActions(entity, service),
      ...actions
    };

    this.mutations = {
      ...createCrudStoreMutations(),
      ...mutations
    };
  }
}
