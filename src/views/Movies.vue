<template>
  <div class="about">    
    <movie-list></movie-list>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MovieList from "@/components/Movies/MovieList.vue"; // @ is an alias to /src

@Options({
  components: {
    MovieList,
  },
})
export default class Movies extends Vue {}
</script>


