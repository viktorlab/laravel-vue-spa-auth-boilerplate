import abilitiesService from '../../services/abilities/abilitiesService';
import { types } from './types';

export const actions = Object.freeze({ fetchAbilities });

async function fetchAbilities({ commit }) {
  const response = await abilitiesService.getAbilities();

  if (response) {
    commit(types.SET_PERMISSIONS, response.data);
  }
}
