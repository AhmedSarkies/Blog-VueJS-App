import Vue from "vue";
import VueRouter from "vue-router";
import { HomeView, BlogView } from "../views";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog/:id",
    name: "BlogView",
    component: BlogView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
