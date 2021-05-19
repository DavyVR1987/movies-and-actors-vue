<template>
  <div class="movie-list">
    <h1 class="title">Movie list</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <ul v-for="movie in movies" :key="movie.id">
            <movie-list-item :movie="movie"></movie-list-item>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoviesDataService from "@/services/MoviesDataService";
import Movie from "@/models/Movie";
import ResponseData from "@/models/ResponseData";
import MovieListItem from "./MovieListItem.vue";

export default defineComponent({
  name: "movie-list",
  components: {
    MovieListItem,
  },
  data() {
    return {
      movies: [] as Movie[],
    };
  },
  methods: {
    getAllMovies() {
      MoviesDataService.getAll()
        .then((result: ResponseData) => {
          this.movies = result.data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getAllMovies();
  },
});
</script>

<style lang="scss">
.movie-list .title {
  font-family: "Josefin Sans", sans-serif;
  color: #e9eaeb;
  font-size: 28px;
  text-align: center;
}

.movie-list {
  ul {
    margin: 0;
    padding: 0;

    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      display: block;
    }
  }
}
</style>
