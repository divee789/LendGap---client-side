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
          component: loadView("dashboard/Borrow")
        },
        {
          path: "lend",
          component: loadView("dashboard/Lend")
        },
        {
          path: "history",
          component: loadView("dashboard/History")
        },
        {
          path: "account",
          component: loadView("dashboard/Account")
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