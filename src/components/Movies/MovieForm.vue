<template>
    <div class="container">
        <h1>Add or edit a movie</h1>
        <form>
            <input type="hidden" v-model="movie.id" name="id" />
            <div class="form-group row col-sm-5">
                <label for="name">Movie name</label>
                <input type="text" class="form-control" v-model="movie.name" id="name" name="name" />
            </div>
            <div class="form-group row col-sm-5">
                <label for="name">Year</label>
                <input type="text" class="form-control" v-model="movie.year" id="year" name="year" required />
            </div>
            <div class="form-group row col-sm-5">
                <label for="name">Genre</label>
                <input type="text" class="form-control" v-model="movie.genre" id="genre" name="genre" required />
            </div>
            <div class="form-group col-sm-5">
                <label v-for="actor in movie.actors" :key="actor.id">
                    <input type="checkbox" name="actor" v-model="actor.id" id="actor" /> {{actor.firstName}} {{actor.lastName}}
                </label>                
            </div>
            <div class="form-group col-sm-5">                
                <button class="btn btn-light" @click="backClicked">Back</button>
                <button class="btn btn-success" v-if="movie.id" @click="editMovie">Save</button>
                <button class="btn btn-success" v-else @click="addMovie">Save</button>
            </div>
        </form>        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoviesDataService from '@/services/MoviesDataService';
import Movie from '@/models/Movie';
import ResponseData from '@/models/ResponseData';
import moment from "moment";

export default defineComponent({
    name: 'movie-form',
    data() {
        return {
            movie: {} as Movie            
        }
    },    
    methods: {
        moment,
        getMovie(id: any) {
            MoviesDataService.getById(id).then(
                (result: ResponseData) => {                    
                    this.movie = result.data;
                }
            )
            .catch((e: Error) => {
                console.log(e);
            });
        },

        editMovie() {
            let movieData = this.movie;
            MoviesDataService.edit(this.movie.id, movieData).then(
                (result: ResponseData) => {
                    console.log(result);
                    this.$router.push({path: '/movie-detail/' + this.movie.id});
                }
            )
            .catch((e: Error) => {
                console.log(e);
            });
        },

        addMovie() {
            let movieData = this.movie;
            MoviesDataService.add(movieData).then(
                (result: ResponseData) => {
                    console.log(result);                    
                    this.$router.push({name: "movies"});
                }
            )
            .catch((e: Error) => {
                console.log(e);
            });
        },

        backClicked() {
            this.$router.push({name: "movies"});
        }
    },
    mounted() {
        if(this.$route.params.id) {
            this.getMovie(this.$route.params.id);            
        }
    }
})
</script>

