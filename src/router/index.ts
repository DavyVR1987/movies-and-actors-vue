import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [ 
  {
    path: "/",
    alias: "/movies",
    name: "movies",
    component: () => import("../views/Movies.vue")
  },
  {
    path: "/movie-detail/:id",
    name: "movie-details",
    component: () => import("../views/MovieDetails.vue")
  },
  {
    path: "/edit-movie/:id",
    name: "edit-movie",
    component: () => import("../views/MovieForm.vue")
  },
  {
    path: "/add-movie/",
    name: "add-movie",
    component: () => import("../views/MovieForm.vue")
  },  
  {
    path: "/actors",
    name: "actors",
    component: () => import("../views/Actors.vue")
  },
  {
    path: "/actor-detail/:id",
    name: "actor-details",
    component: () => import("../views/ActorDetails.vue")
  },
  {
    path: "/locations",
    name: "locations",
    component: () => import("../views/FilmLocations.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
