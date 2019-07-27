import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

function loadView(view) {
  return () =>
    import( /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
    path: "/",
    name: "home",
    component: loadView("landing")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: loadView("dashboard/index"),
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
        path:"info",
        component:loadView("dashboard/Borrow/info")
      },
      {
        path: "details",
        component: loadView("dashboard/Borrow/details")
      }]
    },
    {
      path: "lend",
      component: loadView("dashboard/Lend/index"),
      children:[{
        path:"/",
        component:loadView("dashboard/Lend/request")
      },
      {
        path:"info",
        component:loadView("dashboard/Lend/info")
      },
      {
        path:"details",
        component:loadView("dashboard/Lend/details")
      }]
    },
    {
      path: "history",
      component: loadView("dashboard/History/index"),
    },
    {
      path: "account",
      component: loadView("dashboard/Account/index")
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