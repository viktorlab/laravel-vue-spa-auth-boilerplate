import { CrudStore } from '../crudStore/crudStore';
import crudService from '../../services/crudService/crudService';

class PermissionsStore extends CrudStore {}

export const permissions = new PermissionsStore('Permission', new crudService('api/permissions'));
