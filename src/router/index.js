import Vue from 'vue'
import Router from 'vue-router'
import Multiselect from '@/components/Multiselect/Multiselect'
import Admin from '@/components/Admin/Admin'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Multiselect',
      component: Multiselect
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
