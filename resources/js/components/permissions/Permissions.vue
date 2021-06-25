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
              <v-toolbar-title>Permissions</v-toolbar-title>
              <v-spacer />
              <edit-dialog
                v-if="$can('permission_create')"
                :action-type="actionTypes.ACTION_TYPE_CREATE"
              />
            </v-toolbar>
          </template>
          <template #[`item.actions`]="{ item }">
            <edit-dialog
              v-if="$can('permission_edit')"
              :item="item"
              :action-type="actionTypes.ACTION_TYPE_UPDATE"
            />
            <v-icon
              v-if="$can('permission_delete')"
              small
              @click="handleDeletePermission(item.id)"
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
import EditDialog from './components/editDialog/EditDialog';
import actionTypes from '../../constants/actionTypes';
import { abilties } from '../../mixins/abilties';

export default {
  name: 'Permissions',

  components: {
    EditDialog
  },

  mixins: [abilties],

  data() {
    return {
      headers: [
        { text: 'Id', value: 'id', sortable: true },
        { text: 'Title', value: 'title', sortable: true },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      actionTypes
    };
  },

  computed: {
    ...mapState('permissions', ['data'])
  },

  beforeMount() {
    this.get();
  },

  methods: {
    ...mapActions('permissions', ['get', 'delete']),

    handleDeletePermission(id) {
      this.delete(id);
    }
  }
};
</script>
