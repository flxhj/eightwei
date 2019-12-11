import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/regirect'
  },
  {
    path: '/regirect',
    name: 'regirect',
    component: () => import('@/views/regirect')
  },
  {
    path:'/login',
    name:'login',
    component: () => import('@/views/login')
  },
  {
    path:'/index',
    name:'index',
    component: () => import('@/views/home'),
    beforeEnter:(to,from,next)=>{
      let token = window.localStorage.getItem('token')
      if(token&&token.split(".").length===3){
        next()
      }else{
        router.replace('/login')
      }
    },
    children:[{
      path:"index",
      component:()=>import("@/views/home/index/index.vue")
    },{
      path:"show",
      component:()=>import("@/views/home/show/show.vue")
    },{
      path:"date",
      component:()=>import("@/views/home/date/date.vue")
    },{
      path:"/index",
      redirect:"/index/index"
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
