import { mapState } from 'vuex';

export const abilties = {
  computed: {
    ...mapState('abilities', ['abilities']),
  },

  methods: {
    $can(permission) {
      return this.abilities.includes(permission);
    }
  }
};
