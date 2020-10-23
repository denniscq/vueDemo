import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterDemo from '../components/RouterDemo'
import RouterChildrenDemo from '../components/RouterChildrenDemo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/chen',
    name: '1',
    component: RouterDemo
  },
  {
    path: '/qiang',
    name: '2',
    component: RouterDemo
  },
  {
    path: '/user/:id',
    name: '3',
    props: true,
    component: RouterDemo,
    children: [
      {
        path: 'profile',
        component: RouterChildrenDemo,
        name: '3-1'
      },
      {
        path: 'posts',
        component: RouterChildrenDemo
      }
    ]
  },
  { path: '/a', redirect: '/chen' },
  { path: '*', component: RouterDemo, name: '404' }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
