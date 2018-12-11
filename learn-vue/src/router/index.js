import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import E1 from '@/components/E1'
import E2 from '@/components/E2'
import E3 from '@/components/E3'
import E4 from '@/components/E4'
import E5 from '@/components/E5'
import E6 from '@/components/E6'
import E7 from '@/components/E7'
import E8 from '@/components/E8'
import E9 from '@/components/E9'
import E11 from '@/components/E11'
import E12 from '@/components/E12'

Vue.use(Router)

const Foo = { template: '<div>foo-----></div>' }
const Bar = { template: '<div>bar</div>' }
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/e1',
      name: 'E1',
      component: E1
    },
    {
      path: '/e2',
      name: 'E2',
      component: E2
    },
    {
      path: '/e3',
      name: 'E3',
      component: E3
    },
    {
      path: '/e4',
      name: 'E4',
      component: E4
    },
    {
      path: '/e5',
      name: 'E5',
      component: E5
    },
    {
      path: '/e6',
      name: 'E6',
      component: E6
    },
    {
      path: '/e7',
      name: 'E7',
      component: E7
    },
    {
      path: '/e8',
      name: 'E8',
      component: E8
    },
    {
      path: '/e9',
      name: 'E9',
      component: E9
    },
    {
      path: '/e11',
      name: 'E11',
      component: E11
    },
    {
      path: '/e12',
      name: 'E12',
      component: E12,
      menuId: 1,
      hidden: false,
      // redirect: '/admin/user',
      // icon: 'table',
      meta: {
        title: 'renho',
        icon: 'table'
      },
      children: [
        {menuId: 2, path: 'foo', component: Foo, name: 'Foo', meta: { title: 'Foo', icon: 'user' }},
        {menuId: 3, path: 'Bar', component: Bar, name: 'Bar', meta: { title: 'Bar', icon: 'tree' }}
      ]
    }
  ]
})
