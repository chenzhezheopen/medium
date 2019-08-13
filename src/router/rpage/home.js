const home = () => import('@/pages/home/home.vue')
const welcome = () => import('@/pages/home/welcome.vue')




export default [


  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: ''
    },
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: welcome,
    meta: {
      title: ''
    },
  },



]
