import Vue from 'vue'
import Router from 'vue-router'
import LogicLine from '@/components/LogicLine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogicLine',
      component: LogicLine
    }
  ]
})
