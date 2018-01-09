import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Sample from '@/components/sample/Sample'
import {routerMap} from './router-map'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: routerMap.ROOT_PATH,
      name: 'Main',
      component: Main
    },
    {
      path: routerMap.SAMPLE_PATH,
      name: 'Sample',
      component: Sample
    },
  ]
})
