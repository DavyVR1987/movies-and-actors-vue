<template>    
    <h1>Actor form</h1>
    <form>
        <input type="hidden" v-model="actor.id" name="id" />
        <div class="row mb-3">
            <div class="col-sm-5">
                <label class="form-label" for="firstName">First name</label>            
                <input type="text" class="form-control" id="firstName" required v-model="actor.firstName" />
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-5">
                <label class="form-label" for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" required v-model="actor.lastName" />
            </div>
        </div>
        <div class="row mb-3">
            <div class="form-group col-sm-5">
                <label class="form-label" for="birthDate">Date of birth</label>
                <input type="text" class="form-control" id="birthDate" required v-model="birthDate" />
            </div>
        </div>                
        <button type="button" class="btn btn-success">Save</button>
        <span>&nbsp;</span>
        <button type="button" class="btn btn-light">Back</button>        
    </form>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Actor from '@/models/Actor'
import ActorsDataService from '@/services/ActorsDataService';
import ResponseData from '@/models/ResponseData';
import {format} from 'date-fns';

export default defineComponent({
    name: 'actor-form',
    data() {
        return {
            actor: {} as Actor,
            format,
            birthDate: '',
        }
    },    
    methods: {        
        getActor(id: any) {
            ActorsDataService.getById(id).then(
                (result: ResponseData) => {                    
                    this.actor = result.data;
                    this.birthDate = format(new Date(this.actor.birthDate), 'dd/MM/yyyy');
                }
            )
            .catch((e: Error) => {
                console.log(e);
            });
        },

        editActor() {
            // edit existing actor
            let actorData = this.actor;
            ActorsDataService.edit(this.actor.id, actorData).then(
                (result: ResponseData) => {
                    console.log(result);
                    this.$router.push({path: '/actors'});
                }
            )
            .catch((e: Error) => {
                console.log(e);
            });
        },

        addActor() {
            // add new actor
        }
    },
    mounted() {
        if(this.$route.params.id) {
            this.getActor(this.$route.params.id);            
        }
    }
})
</script>
