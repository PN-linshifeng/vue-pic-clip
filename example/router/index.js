import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('../home')), 'example')
const Upload = r => require.ensure([], () => r(require('../upload')), 'example')
const Upload2 = r => require.ensure([], () => r(require('../upload2')), 'example')
const Upload3 = r => require.ensure([], () => r(require('../upload3')), 'example')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/upload',
      component: Upload
    }, {
      path: '/upload2',
      component: Upload2
    }, {
      path: '/upload3',
      component: Upload3
    }
  ]
})
