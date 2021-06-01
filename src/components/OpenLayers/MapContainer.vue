<template>
    <div ref="map" style="width: 100%; height: 100%">
      <div id="popup" class="ol-popup">
        <div id="content"></div>
      </div>
    </div>    
</template>

<script>
import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import GeoJSON from "ol/format/GeoJSON";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import Overlay from "ol/Overlay";
import {Style, Circle, Fill, Stroke} from "ol/style";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import Topgun from "@/shared/topgun.geojson";


import "ol/ol.css";

export default {
    name: "MapContainer",

    components: {},

    /*props: { 
      geojson: Object
    },*/

    data() {
      return {
        olMap: null,
        tileLayer: null,
        vectorSource: null,
        vectorLayer: null,
        selectedFeature: null,
        overlay: null,        
        popup: null,
        style: null,
        geojson: null       
      }
    },

    mounted() {
      this.geojson = Topgun;

      this.tileLayer = new TileLayer({
        source: new OSM()
      }),

      /*this.style = new Style({
        image: new Circle({
          radius: 5,
          fill: new Fill({
            color: "red",
          }),
          stroke: new Stroke({
            color: "black",
            width: 3
          })
        })
      }),*/

      this.vectorSource = new VectorSource({
        features: new GeoJSON().readFeatures(this.geojson)        
      }),

      this.vectorLayer = new VectorLayer({
          source: this.vectorSource,
            /*features: [
              new Feature({
                name: "Charlie"s house",
                description: "102 Pacific Street, Oceanside, California, USA",
                geometry: new Point(fromLonLat([-117.382195, 33.193211])),                
              }),
              new Feature({
                name: "Kansas City Barbeque",
                description: "610 W. Market Street, San Diego, California, USA",
                geometry: new Point(fromLonLat([-117.168671, 32.711678])),
              })
            ],*/
      }),

      this.popup = new Overlay({
        element: document.getElementById("popup"),
        positioning: "bottom-center",
        stopEvent: false,
        offset: [0, -50]
      }),
      
      this.olMap = new Map({
        target: this.$refs["map"],
        layers: [this.tileLayer, this.vectorLayer],
        view: new View({          
          zoom: 6,          
          center: fromLonLat([-75.289080414181669, 48.284706278302295]),
          constrainResolution: true
        }),        
        overlays: [
          this.popup
        ]
      })

      this.olMap.on("click", (event) => {
        var feature = this.olMap.forEachFeatureAtPixel(event.pixel, (feature) => {
          //feature.setStyle(this.style);
          return feature;
        });

        if(feature) {
          var geometry = feature.getGeometry();
          var coordindates = geometry.getCoordinates();
          
          var content = "<h3>" + feature.get("name") + "</h3>";
          //content += "<h5>" + feature.get("description") + "</h5>";
          document.getElementById("content").innerHTML = content;
          this.popup.setPosition(coordindates);
        } else {
          this.popup.setPosition(undefined);
        }
      });
    },

    /*watch: {
      geojson(value) {
        this.updateSource(value);
      },
    },

    methods: {
      updateSource(geojson) {
        const view = this.olMap.getView();
        const source = this.vectorLayer.getSource();

        const features = new GeoJSON({
          featureProjection: "EPSG:3857",
        }).readFeatures(geojson);

        source.clear();
        source.addFeatures(features);

        view.fit(source.getExtent())
      }
    }*/
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