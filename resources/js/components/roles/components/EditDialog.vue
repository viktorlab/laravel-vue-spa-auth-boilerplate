<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        v-show="actionType === actionTypes.ACTION_TYPE_CREATE"
        color="primaryOrange"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Add new Role
      </v-btn>
      <v-icon
        v-show="actionType === actionTypes.ACTION_TYPE_UPDATE"
        small
        class="mr-2"
        v-bind="attrs"
        v-on="on"
      >
        mdi-pencil
      </v-icon>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ dialogTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <form ref="roles-form">
            <v-row>
              <v-text-field
                v-model="title"
                label="Title"
                required
                color="primaryOrange"
              />
            </v-row>
            <v-row>
              <v-select
                v-model="selectedPermissions"
                :items="permissionsOptions"
                label="Permissions"
                return-object
                chips
                multiple
                color="primaryOrange"
                item-color="primaryOrange"
              />
            </v-row>
          </form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primaryOrange"
          dark
          @click="dialog = false"
        >
          Close
        </v-btn>
        <v-btn
          color="primaryOrange"
          dark
          @click="handleSubmit"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import actionTypes from '../../../constants/actionTypes';

export default {
  name: 'EditDialog',

  props: {
    actionType: {
      type: String
    },
    item: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      actionTypes,
      dialog: false,
      title: this.item?.title,
      selectedPermissions: this.item?.permissions?.map(({ id, title }) => ({ value: id, text: title })) || []
    };
  },

  computed: {
    ...mapState('permissions', ['data']),

    permissionsOptions() {
      return this.data.map(({ id, title }) => ({ value: id, text: title }));
    },

    dialogTitle() {
      return !this.item?.id ? 'Add new role' : 'Update role';
    }
  },

  methods: {
    ...mapActions('roles', ['create', 'update']),

    prepareRequestData() {
      return {
        id: this.item?.id,
        title: this.title,
        permissions: this.selectedPermissions.map(({ value }) => value)
      };
    },

    handleSubmit() {
      const requestBody = this.prepareRequestData();
      !this.item?.id ? this.create(requestBody) : this.update(requestBody);
      this.dialog = false;
      this.$refs['roles-form'].reset();
    }
  }
};
</script>
