import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";

const routes: Array<RouteRecordRaw> = [ 
  {
    path: "/",
    alias: "/movies",
    name: "movies",
    component: () => import("../components/Movies/MovieList.vue"),
  },
  {
    path: "/movie-detail/:id",
    name: "movie-details",
    component: () => import("../components/Movies/MovieDetail.vue"),
  },
  {
    path: "/actors",
    name: "actors",
    component: () => import("../views/Actors.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
