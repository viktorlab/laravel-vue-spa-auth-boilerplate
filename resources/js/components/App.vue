<template>
  <v-app
    id="main"
  >
    <navbar
      v-show="isLoggedIn"
      ref="navbar"
    />

    <app-header
      v-show="isLoggedIn"
      @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"
    />

    <v-main>
      <v-container
        fluid
        class="pt-8 pl-12 pr-12"
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    'navbar': Navbar,
    'app-header': Header,
  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }
  },

  watch: {
    $route() {
      this.fetchAbilities();
    }
  },

  mounted() {
    this.fetchAbilities();
  },

  methods: {
    ...mapActions('abilities', ['fetchAbilities'])
  }
};
</script>
