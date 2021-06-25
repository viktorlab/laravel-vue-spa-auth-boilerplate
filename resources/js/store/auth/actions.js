import authService from '../../services/auth/auth';
import { types } from './types';
import { toast } from '../../utils/toast';

export const actions = Object.freeze({
  login
});

async function login({ commit }, requestBody) {
  const { data, message: errorMessage } = await authService.login(requestBody);

  if (errorMessage) {
    toast.error(errorMessage);
    return;
  }

  commit(types.SET_LOGIN_DATA, { data });
  localStorage.setItem('token', data?.token);
  toast.success('You have successfully logged in');
  window.location.href = '/';
}
