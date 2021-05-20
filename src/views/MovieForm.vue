<template>
  <div class="about">    
    <movie-form></movie-form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MovieForm from "@/components/Movies/MovieForm.vue"; // @ is an alias to /src

@Options({
  components: {
    MovieForm,
  },
})
export default class MoviesForm extends Vue {}
</script>


