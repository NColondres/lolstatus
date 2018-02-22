import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LolStatus from '@/components/LolStatus'
import DefaultLolStatusType from '@/components/DefaultLolStatusType'
import CustomLolStatusType from '@/components/CustomLolStatusType'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lolstatus',
      name: 'LolStatus',
      component: LolStatus,
      children: [
        {
          path: '',
          name: 'DefaultLolStatusType',
          component: DefaultLolStatusType
        },
        {
          path: 'custom',
          name: 'CustomLolStatusType',
          component: CustomLolStatusType
        }
      ]
    }
  ]
})
