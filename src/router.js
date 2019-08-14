import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

function loadView(view) {
  return () =>
    import( /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {selector: to.hash}
    }
    return {x: 0, y: 0}
  },
  routes: [{
      path: "/",
      name: "home",
      component: loadView("landing"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: loadView("dashboard/index"),
      meta: { 
        requiresAuth: true
    },
      children: [{
          path: "/",
          name: "market",
          component: loadView("dashboard/marketplace/index"),
          children: [{
              path: "/",
              component: loadView("dashboard/marketplace/lists")
            },
            {
              path: "market/card",
              component: loadView("dashboard/marketplace/card")
            }
          ]
        },
        {
          path: "borrow",
          component: loadView("dashboard/Borrow/index"),
          children: [{
              path: "/",
              component: loadView("dashboard/Borrow/request")
            },
            {
              path: "info",
              component: loadView("dashboard/Borrow/info")
            },
            {
              path: "details",
              component: loadView("dashboard/Borrow/details")
            }
          ]
        },
        {
          path: "lend",
          component: loadView("dashboard/Lend/index"),
          children: [{
              path: "/",
              component: loadView("dashboard/Lend/request")
            },
            {
              path: "info",
              component: loadView("dashboard/Lend/info")
            },
            {
              path: "details",
              component: loadView("dashboard/Lend/details")
            }
          ]
        },
        {
          path: "history",
          component: loadView("dashboard/History/index"),
        },
        {
          path: "account",
          name:"account",
          component: loadView("dashboard/Account/index") ,
        },
        {
          path: "*",
          redirect: "/"
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
          next({
              path: '/',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user.is_admin == 1){
                  next()
              }
              else{
                  next({ name: 'dashboard'})
              }
          }else {
              next()
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
          next()
      }
      else{
          next({ name: 'dashboard'})
      }
  }else {
      next() 
  }
})



export default router