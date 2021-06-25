<template>
  <v-card
    class="mx-auto my-12 pa-md-4 mx-lg-auto"
    width="600"
  >
    <form ref="login-form">
      <v-text-field
        v-model="email"
        label="E-mail"
        color="primaryOrange"
      />
      <v-text-field
        v-model="password"
        type="password"
        label="Password"
        color="primaryOrange"
      />
      <v-btn
        class="mr-4"
        color="primaryOrange"
        dark
        @click="handleLogin"
      >
        submit
      </v-btn>
    </form>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },

  methods: {
    ...mapActions('auth', ['login']),

    handleLogin() {
      this.login({ email: this.email, password: this.password });
      this.$refs['login-form'].reset();
    }
  }
};
</script>
