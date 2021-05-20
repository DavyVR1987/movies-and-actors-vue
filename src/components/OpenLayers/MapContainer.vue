<template>
    <div ref="map-root" style="width: 100%; height: 100%"></div>
</template>

<script lang="ts">
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

import 'ol/ol.css';

export default {
    name: 'MapContainer',
    components: {},
    props: {
        geojson: Object
    },
    data() {
        return {
            olMap: null,
            vectorLayer: null,
            selectedFeature: null
        }     
    },
    mounted() {
        new Map({
            target: 'map-root',
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
            ],
            view: new View({
                zoom: 0,
                center: [0, 0],
                constrainResolution: true
            }),
        })        
    },
    watch: {},
    methods: {}
}
</script>
