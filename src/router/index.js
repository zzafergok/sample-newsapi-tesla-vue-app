import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";

Vue.use(VueRouter);

const category = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const routes = [
  {
    path: "/",
    name: "home-page",
    component: Home,
  },
  // {
  //   path: "/business",
  //   name: "categories-page",
  //   component: () =>
  //     import(/* webpackChunkName: "categories" */ "../pages/Categories.vue"),
  // },
  // {
  //   path: "/entertainment",
  //   name: "categories-page",
  //   component: () =>
  //     import(/* webpackChunkName: "categories" */ "../pages/Categories.vue"),
  // },
  // {
  //   path: "/general",
  //   name: "categories-page",
  //   component: () =>
  //     import(/* webpackChunkName: "categories" */ "../pages/Categories.vue"),
  // },
  // {
  //   path: "/health",
  //   name: "categories-page",
  //   component: () =>
  //     import(/* webpackChunkName: "categories" */ "../pages/Categories.vue"),
  // },
  // {
  //   path: "/science",
  //   name: "categories-page",
  //   component: () =>
  //     import(/* webpackChunkName: "categories" */ "../pages/Categories.vue"),
  // },
  // {
  //   path: "/sports",
  //   name: "categories-page",
  //   component: () =>
  //     import(/* webpackChunkName: "categories" */ "../pages/Categories.vue"),
  // },
  // {
  //   path: "/technology",
  //   name: "categories-page",
  //   component: () =>
  //     import(/* webpackChunkName: "categories" */ "../pages/Categories.vue"),
  // },
  {
    path: "/:id",
    name: "details-page",
    component: () =>
      import(/* webpackChunkName: "details" */ "../pages/Details.vue"),
  },
];

category.map((item) => {
  const newCategories = {
    path: `/${item}`,
    name: "categories-page",
    component: () =>
      import(/* webpackChunkName: "categories" */ "../pages/Categories.vue"),
  };

  routes.unshift(newCategories);
});

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
