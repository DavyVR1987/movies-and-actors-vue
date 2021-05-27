<template>
  <div class="locations">
      <h2>Filming locations</h2>
      <form>
        <div class="row g-2 align-items-center">
          <div class="col-auto">
            <label class="form-label">Select movie:</label>&nbsp;
          </div>
          <div class="col-auto">
            <select class="form-select" v-model="selectedMovie">              
              <option v-for="movie in allMovies" :key="movie.id" :value="movie.id">
                {{movie.name}}
              </option>
            </select>            
          </div>
          <span style="color: red;">Selected movie: {{selectedMovie}}</span>
        </div>
      </form>      
      <div id="locationContainer">
          <div class="cell cell-map">
              <map-container></map-container>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
  import MapContainer from "@/components/OpenLayers/MapContainer.vue";
  import MoviesDataService from "@/services/MoviesDataService";
  import Movie from "@/models/Movie";
  import ResponseData from '@/models/ResponseData';

  export default defineComponent ({
    name: 'FilmLocactions',
    data() {
        return {
            allMovies: [] as Movie[],
            selectedMovie: '',
            geojson: {
              type: 'Feature',
              properties: {
                name: 'default object',
                quality: 'top'
              }
            },
        }
    },
    components: {
      MapContainer
    },
    methods: {
      getMovies() {
        MoviesDataService.getAll()
        .then((result: ResponseData) => {
          this.allMovies = result.data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
      }
    },
    mounted() {
      this.getMovies();
    }
  })
</script>

<style lang="scss">
  .locations {
    padding: 15px;
    max-width: 740px;
    margin: 0 auto;

    h2 {
        color: yellow;
        margin-bottom: 30px;        
        font-size: 28px;
        border-bottom: 1px solid;
        padding-bottom: 8px;
    }    

    #locationContainer {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        height: 100%;
        display: grid;
        grid-template-columns: 100vh;
        grid-auto-rows: 1fr;
        grid-gap: 1rem;
        box-sizing: border-box;
    }

    .cell{
        margin-top: 20px;
        border-radius: 5px;
        background-color: lightgray;        
    }

    .cell-map {
        grid-column: 1;
        grid-row-start: 1 ;
        grid-row-end: 30 ;
    }
}
  
</style>