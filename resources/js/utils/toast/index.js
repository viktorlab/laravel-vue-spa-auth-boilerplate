import Vue from 'vue';
import Toasted from 'vue-toasted';
export const TOAST_DURATION = 1000;

Vue.use(Toasted, {
  duration: TOAST_DURATION,
  position: 'bottom-right',
  iconPack: 'mdi',
});

export const toast = {
  success(message) {
    return Vue.toasted.show(message);
  },

  info(message) {
    return Vue.toasted.show(message);
  },

  warning(message) {
    return Vue.toasted.show(message);
  },

  error(message = 'Error') {
    return Vue.toasted.show(message);
  }
};
