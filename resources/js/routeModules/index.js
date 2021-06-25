import Homepage from '../components/homepage/Homepage.vue';
import Login from '../components/login/Login';
import NotFound from '../components/notFound/NotFound';
import Permissions from '../components/permissions/Permissions';
import Roles from '../components/roles/Roles';
import Users from '../components/users/Users';

export default [
  {
    path: '/',
    name: 'home',
    component: Homepage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/permissions',
    name: 'permissions',
    component: Permissions,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/roles',
    name: 'roles',
    component: Roles,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: NotFound,
    meta: {
      requiresAuth: false
    }
  }
];

