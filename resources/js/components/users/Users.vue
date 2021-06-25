<template>
  <v-row>
    <v-col
      lg="12"
      class="mt-3 mb-3"
    >
      <template>
        <v-data-table
          :headers="headers"
          :items="data"
          :items-per-page="10"
          class="elevation-1"
        >
          <template #top>
            <v-toolbar
              flat
            >
              <v-toolbar-title>Users</v-toolbar-title>
              <v-spacer />
              <edit-dialog
                v-if="$can('user_create')"
                :action-type="actionTypes.ACTION_TYPE_CREATE"
              />
            </v-toolbar>
          </template>
          <template #[`item.actions`]="{ item }">
            <edit-dialog
              v-if="$can('user_edit')"
              :item="item"
              :action-type="actionTypes.ACTION_TYPE_UPDATE"
            />
            <v-icon
              v-if="$can('user_delete')"
              small
              @click="handleDeleteUser(item.id)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import EditDialog from './components/EditDialog';
import actionTypes from '../../constants/actionTypes';
import { abilties } from '../../mixins/abilties';

export default {
  name: 'Users',

  components: {
    EditDialog
  },

  mixins: [abilties],

  data() {
    return {
      headers: [
        { text: 'Id', value: 'id', sortable: true },
        { text: 'Name', value: 'name', sortable: true },
        { text: 'Email', value: 'email' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      actionTypes
    };
  },

  computed: {
    ...mapState('users', ['data'])
  },

  beforeMount() {
    this.fetchUsers();
  },

  methods: {
    ...mapActions('users', ['fetchUsers', 'delete']),

    handleDeleteUser(id) {
      this.delete(id);
    }
  }
};
</script>
