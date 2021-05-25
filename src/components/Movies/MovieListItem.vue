<template>
  <li class="movie-list-item">
    <img :src="require('@/assets/images/' + movie.name + '.jpg')"  width="200px" />
    <span class="movie-list-item-title">{{ movie.name }}</span>
    <span class="movie-list-item-release-year">{{format(new Date(movie.year), "dd/MM/yyyy")}}</span>
    <span class="movie-list-item-genre">{{convertGenre(movie.genre)}}</span>
    <span class="movie-list-item-details">
      <router-link class="btn btn-info" :to="'/movie-detail/' + movie.id">Details</router-link>
    </span>
  </li>
</template>

<script lang="ts">
import {format} from 'date-fns';
import { MovieGenre } from "@/models/MovieGenreEnum";

export default {
  name: "movie-list-item",
  props: ["movie"],
  data() {
    return {
      format,
    };
  },
  methods: {
    convertGenre(movieGenre: number) {
      return MovieGenre[movieGenre]
    }
  },
};
</script>

<style lang="scss">
.movie-list-item {
  width: auto;
  height: auto;
  overflow: hidden;
  list-style: none;
  position: relative;
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 15px;

  img {
    width: 200px;
    height: 305px;
    margin-bottom: 15px;
  }

  div {
    border-radius: 50%;
    width: 45px;
    height: 45px;
    line-height: 48px;
    font-size: 20px;
    text-align: center;
    background-color: #f48f26;
    display: inline-block;
    position: absolute;
    bottom: 97px;
    right: 2px;
  }

  .movie-list-item-title {
    display: block;
    font-size: 18px;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-align: center;
  }

  .movie-list-item-release-year {
    display: block;
    font-size: 14px;
    color: #8a9195;
    text-align: center;
  }

  .movie-list-item-genre {
    display: block;
    font-size: 14px;
    color: #8a9195;
    text-align: center;
  }

  .movie-list-item-details {
    display: block;
    font-size: 14px;
    text-align: center;
  }
}
</style>
