<template>
    <div ref="map" style="width: 100%; height: 100%"></div>
</template>

<script>
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {Circle as CircleStyle, Stroke, Style} from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

import 'ol/ol.css';

const image = new CircleStyle({
  radius: 5,
  fill: null,
  stroke: new Stroke({color: 'red', width: 1})
})

const styles = {
  'Point': new Style({
    image: image,
  })
}

export default {
    name: 'MapContainer',
    components: {},
    props: {},
    mounted() {
      // this is where we create the OpenLayers map
      new Map({
        // the map will be created using the 'map-root' ref
        target: this.$refs['map'],
        layers: [
          // adding a background tiled layer
          new TileLayer({
            source: new OSM() // tiles are served by OpenStreetMap
          }),
        ],

        // the map view will initially show the whole world
        view: new View({
          zoom: 0,
          center: [0, 0],
          constrainResolution: true
        }),
      })
    },
}
</script>
