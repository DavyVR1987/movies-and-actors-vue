<template>
    <div ref="map" style="width: 100%; height: 100%"><div id="popup"></div></div>    
</template>

<script>
import Map from 'ol/Map';
import View from 'ol/View';
import defaults, { Attribution } from 'ol/control';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay';
import {Icon, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';

import 'ol/ol.css';

export default {
    name: 'MapContainer',
    components: {},
    props: { },
    data() {
      return {
        olMap: null,
        vectorLayer: null,
        selectedFeature: null,
        overlay: null,
        container: document.getElementById('popup'),
        popup: null
      }
    },
    mounted() {   
      this.vectorLayer = new VectorLayer({
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(fromLonLat([4.35247, 50.84673])),
                name: 'Brussels'
              })
            ],
          }),
      }),

      this.popup = new Overlay({
        element: this.container,
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, -50]
      }),

      this.olMap = new Map({
        target: this.$refs['map'],
        layers: [
          new TileLayer({
            source: new OSM()
          }),
          this.vectorLayer              
        ],
        view: new View({          
          zoom: 12,
          maxZoom: 18,
          center: fromLonLat([4.35247, 50.84673]),
          constrainResolution: true
        }),        
        overlays: [
          this.popup
        ]
      })
      
      /*this.olMap.on('singleclick', (event) => {
        if (this.olMap.hasFeatureAtPixel(event.pixel) === true) {
          var coordinate = event.coordinate;
          this.$refs['popup-content'].innerHTML = '<b>Welcome to Brussels!!<b>';
          this.overlay.setPosition(coordinate);
        } else {
          this.overlay.setPosition(undefined);
          this.closer.blur();
        }
      })*/
    },
    
    /*methods: {
    }*/
}
</script>
