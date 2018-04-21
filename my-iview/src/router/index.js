import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/Users'
import Renho from '@/components/Renho'
import Login from '@/components/LoginForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/renho',
      name: 'Renho',
      component: Renho
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
