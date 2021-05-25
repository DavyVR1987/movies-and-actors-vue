<template>
    <h1>Add or edit a movie</h1>
    <form>
        <input type="hidden" v-model="movie.id" name="id" />
        <div class="row mb-3">
            <div class="col-sm-5">
                <label class="form-label" for="name">Movie name</label>
                <input type="text" class="form-control" v-model="movie.name" id="name" name="name" />
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-5">
                <label class="form-label" for="name">Year</label>
                <input type="text" class="form-control" v-model="movieYear" id="year" name="year" required />
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-5">
                <label class="form-label" for="name">Genre</label>
                <input type="text" class="form-control" v-model="movie.genre" id="genre" name="genre" required />
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-5">
                <div class="form-check" v-for="actor in movie.actors" :key="actor.id">
                    <input class="form-check-input" type="checkbox" v-model="actor.id" id="actor" />
                    <label class="form-check-label" for="actor">{{actor.firstName}} {{actor.lastName}}</label> 
                </div>                                
            </div>
        </div>
        <button class="btn btn-light" @click="backClicked">Back</button>
        <span>&nbsp;</span>
        <button class="btn btn-success" v-if="movie.id" @click="editMovie">Save</button>
        <button class="btn btn-success" v-else @click="addMovie">Save</button>            
    </form>        
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoviesDataService from '@/services/MoviesDataService';
import Movie from '@/models/Movie';
import ResponseData from '@/models/ResponseData';
import {format} from 'date-fns';

export default defineComponent({
    name: 'movie-form',
    data() {
        return {
            movie: {} as Movie,
            format,
            movieYear: ''
        }
    },    
    methods: {
        getMovie(id: any) {
            MoviesDataService.getById(id).then(
                (result: ResponseData) => {                    
                    this.movie = result.data;
                    this.movieYear = format(new Date(this.movie.year), 'dd/MM/yyyy');
                }
            )
            .catch((e: Error) => {
                console.log(e);
            });
        },

        editMovie() {
            let movieData = this.movie;
            console.log(movieData);
            MoviesDataService.edit(this.movie.id, movieData).then(
                (result: ResponseData) => {
                    console.log(result);
                    //this.$router.push({path: '/movie-detail/' + this.movie.id});
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

