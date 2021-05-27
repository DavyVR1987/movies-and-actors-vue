<template>
    <div ref="map" style="width: 100%; height: 100%">
      <div id="popup" class="ol-popup">
        <div id="content"></div>
      </div>
    </div>    
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

    props: { 
      geojson: Object
    },

    data() {
      return {
        olMap: null,
        vectorLayer: null,
        selectedFeature: null,
        overlay: null,        
        popup: null
      }
    },

    mounted() {   
      this.vectorLayer = new VectorLayer({
          source: new VectorSource({            
            features: [
              new Feature({
                geometry: new Point(fromLonLat([-117.382195, 33.193211])),
              })
            ],
          }),
      }),

      this.popup = new Overlay({
        element: document.getElementById('popup'),
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
          center: fromLonLat([-117.382195, 33.193211]),
          constrainResolution: true
        }),        
        overlays: [
          this.popup
        ]
      })
      
      this.olMap.on('singleclick', (event) => {        
        if (this.olMap.hasFeatureAtPixel(event.pixel) === true) {
          var coordinate = event.coordinate;
          document.getElementById('content').innerHTML = '<b>Charlies house</b>'
          this.popup.setPosition(coordinate);                    
        } else {
          this.popup.setPosition(undefined);
        }
      });
    },

    watch: {
      geojson(value) {
        this.updateSource(value);
      },
    },

    methods: {
      updateSource(geojson) {
        const view = this.olMap.getView();
        const source = this.vectorLayer.getSource();

        const features = new GeoJSON({
          featureProjection: 'EPSG:3857',
        }).readFeatures(geojson);

        source.clear();
        source.addFeatures(features);

        view.fit(source.getExtent())
      }
    }
}
</script>

<style>
.ol-popup {
  position: absolute;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  bottom: 12px;
  left: -50px;
  min-width: 280px;
}

.ol-popup:after, .ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.ol-popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}
.ol-popup:before {
  border-top-color: #cccccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}
</style>