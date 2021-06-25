<template>
  <v-row>
    <v-col
      lg="12"
      class="mt-3 mb-3"
    >
      <template>
        <v-data-table
          :headers="headers"
          :items="filterTableData"
          :items-per-page="10"
          class="elevation-1"
        >
          <template #top>
            <v-toolbar
              flat
            >
              <v-toolbar-title>Roles</v-toolbar-title>
              <v-spacer />
              <edit-dialog
                v-if="$can('role_create')"
                :action-type="actionTypes.ACTION_TYPE_CREATE"
              />
            </v-toolbar>
          </template>
          <template #[`item.actions`]="{ item }">
            <edit-dialog
              v-if="$can('role_edit')"
              :item="item"
              :action-type="actionTypes.ACTION_TYPE_UPDATE"
            />
            <v-icon
              v-if="$can('role_delete')"
              small
              @click="handleDeleteRole(item.id)"
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
  name: 'Roles',

  components: {
    EditDialog
  },

  mixins: [abilties],

  data() {
    return {
      headers: [
        { text: 'Id', value: 'id', sortable: true },
        { text: 'Title', value: 'title', sortable: true },
        { text: 'Permissions', value: 'tablePermissions' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      actionTypes
    };
  },

  computed: {
    ...mapState('roles', ['data']),

    filterTableData() {
      return this.data.map(({ id, title, permissions }) => ({
        id: id,
        title: title,
        permissions,
        tablePermissions: permissions.map(({ title }) => title).join()
      }));
    }
  },

  beforeMount() {
    this.fetchRoles();
  },

  methods: {
    ...mapActions('roles', ['fetchRoles', 'delete']),

    handleDeleteRole(id) {
      this.delete(id);
    }
  }
};
</script>
