<template>
  <div id="locationContainer">
    <div class="cell cell-map">
      Map
    </div>   
  </div>
</template>

<script>
  export default {
    name: 'FilmLocactions'
  }
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
  }

  #locationContainer {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 100%;
    display: grid;
    grid-template-columns: 100vh;
    grid-auto-rows: 1fr;
    grid-gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  }

  .cell {
    border-radius: 4px;
    background-color: lightgrey;
  }

  .cell-map {
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  
</style>