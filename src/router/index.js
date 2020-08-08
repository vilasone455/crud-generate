import Vue from "vue";
import Router from "vue-router";

import codeform from "../pages/codeform.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name : "home",
      component: codeform
    }

  ]
});
