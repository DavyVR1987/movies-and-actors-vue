<template>
  <div class="about">    
    <movie-detail></movie-detail>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MovieDetail from "@/components/Movies/MovieDetail.vue"; // @ is an alias to /src

@Options({
  components: {
    MovieDetail,
  },
})
export default class MovieDetails extends Vue {}
</script>


