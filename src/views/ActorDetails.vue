<template>
  <div class="container">
    <actor-form></actor-form> 
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ActorForm from "@/components/Actors/ActorForm.vue"; // @ is an alias to /src

@Options({
  components: {
    ActorForm,
  },
})
export default class ActorDetails extends Vue {}
</script>


