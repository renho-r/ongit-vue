import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: _import('index')
    },
    {
      path: '/layout1',
      name: 'Layout1',
      component: _import('layout/layout1')
    },
    {
      path: '/menu1',
      name: 'Menu1',
      component: _import('menu/menu1')
    },
    {
      path: '/mymenu',
      name: 'MyMenu',
      component: _import('menu/mymenu')
    }
  ]
})
