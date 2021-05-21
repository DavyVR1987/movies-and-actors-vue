<template>
    <li class="actor-list-item">
        <span class="actor-list-item-name">{{actor.firstName}} {{actor.lastName}}</span>
        <span class="actor-list-item-birthdate">{{actor.birthDate}}</span>
        <router-link class="btn btn-success" :to="'/actor-detail/' + actor.id">Edit actor</router-link>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {format} from 'date-fns';

export default defineComponent({
    name: "actor-list-item",
    props: ['actor'],
    data() {
        return {
            format,
        }
    }
    
})
</script>

<style lang="scss">
.actor-list-item {
  width: auto;
  height: auto;
  overflow: hidden;
  list-style: none;
  position: relative;
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 15px;    

  .actor-list-item-name {
    display: block;
    font-size: 18px;
    letter-spacing: 1px;
    margin-bottom: 5px;
  }

  .actor-list-item-birthdate {
    display: block;
    font-size: 14px;
    color: #8a9195;
  }
}
</style>