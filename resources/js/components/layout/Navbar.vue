<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    color="primaryBlack"
  >
    <v-list dense>
      <v-list-item
        link
        exact
        :to="{ name: 'home' }"
      >
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="$can('permission_access')"
        link
        exact
        :to="{ name: 'permissions' }"
      >
        <v-list-item-action>
          <v-icon>mdi-lock</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Permissions</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="$can('role_access')"
        link
        exact
        :to="{ name: 'roles' }"
      >
        <v-list-item-action>
          <v-icon>mdi-shield-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Roles</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="$can('user_management_access')"
        link
        exact
        :to="{ name: 'users' }"
      >
        <v-list-item-action>
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Users</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { abilties } from '../../mixins/abilties';

export default {
  mixins: [abilties],

  data() {
    return {
      drawer: true
    };
  }
};
</script>
