import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";

const routes: Array<RouteRecordRaw> = [ 
  {
    path: "/",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/actors",
    name: "Actors",
    component: () => 
      import("../views/Actors.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
