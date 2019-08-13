const Structure = () => import('@/pages/Structure/Structure.vue') 
const member = () => import('@/pages/Structure/member.vue') //
const add = () => import('@/pages/Structure/add.vue') //
const search = () => import('@/pages/Structure/search.vue') //
const department = () => import('@/pages/Structure/department.vue') //
const mmdetail = () => import('@/pages/Structure/mmdetail.vue') //




export default [


    {
        path: '/Structure',
        name: 'Structure',
        component: Structure,
        meta:{
            title:' '
        },
    },
    {
        path: '/member',
        name: 'member',
        component: member,
        meta:{
            title:' '
        },
    },
    {
        path: '/add',
        name: 'add',
        component: add,
        meta:{
            title:' '
        },
    },
    {
        path: '/search',
        name: 'search',
        component: search,
        meta:{
            title:' '
        },
    },
    {
        path: '/department',
        name: 'department',
        component: department,
        meta:{
            title:' '
        },
    },
    {
        path: '/mmdetail',
        name: 'mmdetail',
        component: mmdetail,
        meta:{
            title:' '
        },
    },
  ]
  