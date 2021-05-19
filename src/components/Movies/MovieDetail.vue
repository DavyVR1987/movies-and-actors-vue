<template>
    <div v-if="currentMovie.id" class="movie-list-item-details-container">
        <h1>{{currentMovie.name}}</h1>
        <div class="movie-list-item-bio">
            <img :src="require('@/assets/images/' + currentMovie.name + '.jpg')"  width="200px" />
            <div class="details">
                <div class="details-top">
                    <div class="release-year">{{moment(currentMovie.year).format("DD/MM/yyyy")}}</div>
                    <div class="genre">{{currentMovie.genre}}</div>
                </div>
                <div>
                    <div>
                        <h4>Actors</h4>&nbsp;
                        <router-link class="btn btn-primary" :to="'/actor-new'">Add new actor</router-link>
                    </div>
                    <ul v-for="actor of currentMovie.actors" :key="actor.id">
                        <li>{{actor.firstName}} {{actor.lastName}}</li>
                        <!--<app-actor-list-item [actor]="actor"></app-actor-list-item>-->
                    </ul>
                </div>
            </div>
        </div>
        <div class="navigation">
            <router-link class="btn btn-light" :to="'/movies'">Back</router-link>
            <span>&nbsp;</span>
            <router-link class="btn btn-success" :to="'/movie-edit/' + currentMovie.id">Edit</router-link>
            <span>&nbsp;</span>            
            <button type="button" class="btn btn-danger" @click="deleteClicked()">Delete</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MoviesDataService from "@/services/MoviesDataService";
import Movie from "@/models/Movie";
import ResponseData from "@/models/ResponseData";
import moment from "moment";

export default defineComponent({
    name: "movie-detail",
    data() {
        return {
            currentMovie: {} as Movie
        }
    },
    methods: {
        moment,
        getMovie(id: any) {
            MoviesDataService.getById(id).then(
                (result: ResponseData) => {
                    console.log(result.data);
                    this.currentMovie = result.data;
                }
            )
            .catch((e: Error) => {
                console.log(e);
            });
        }
    },
    mounted() {
        this.getMovie(this.$route.params.id);
    }
})
</script>

<style lang="scss">
.movie-list-item-details {
  max-width: 1024px;
  margin: 0 auto;
  font-family: 'Josefin Sans', sans-serif;
  color: #E9EAEB;
  margin-top: 50px;
}

.movie-list-item-details-container {
  padding: 30px;
  max-width: 740px;
  margin: 0 auto;
}

.movie-list-item-details-container h1 {
  margin-bottom: 30px;
  margin: 0;
  padding: 0;
  font-size: 44px;
  border-bottom: 1px solid;
  padding-bottom: 8px;
}

.movie-list-item-bio {
  display: flex;
  margin-top: 30px;
  overflow: hidden;
  width: 740px;
}

.movie-list-item-bio img {
  width: 300px;
  height: 450px;
  border: 7px solid gray;
  cursor: pointer;
  float: left;
}

.details {
  padding: 0 5px 0 19px;
}

.details-top {
  display: block;
  width: 100%;
  padding-bottom: 3px;
  color: grey;
}

.release-year {
  line-height: 25px;
  font-size: 25px;
}

.genre {
  line-height: 25px;
  font-size: 15px;
}

.rating {
  margin-bottom: 10px;
  display: inline-block;
  float: right;
  line-height: 25px;
  font-size: 25px;
}

.details p {
  line-height: 27px;
}
.navigation {
  margin-top: 10px;
}
.go-back-button {
  border: 1px solid;
  float: left;
  margin-right: 12px;
  border-radius: 6px;
  display: block;
  width: 70px;
  height: 31.69px;
  line-height: 34.69px;
  text-align: center;
  cursor: pointer;
}
.go-back-button:hover {
  text-decoration: underline;
}
</style>