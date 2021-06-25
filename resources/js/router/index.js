import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export class Router extends VueRouter {
  constructor(config) {
    super({
      mode: 'history',
      routes: config.routes,
      scrollBehavior: () => ({ x: 0, y: 0 })
    });

    this.beforeEach((to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token') === null) {
          next({
            path: '/login',
            params: { nextUrl: to.fullPath }
          });
        } else {
          next();
        }
      } else {
        if (localStorage.getItem('token') !== null) {
          next({
            path: '/',
            params: { nextUrl: '/' }
          });
        } else {
          next();
        }
      }
    });
  }
}
