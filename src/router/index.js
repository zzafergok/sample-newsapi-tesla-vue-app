import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home-page",
    component: Home,
  },
  {
    path: "/:id",
    name: "details-page",
    component: () =>
      import(/* webpackChunkName: "details" */ "../pages/Details.vue"),
  },
  {
    path: "/categories",
    name: "categories-page",
    component: () =>
      import(/* webpackChunkName: "categories" */ "../pages/Categories.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
