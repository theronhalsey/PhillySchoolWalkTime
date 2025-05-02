<template>
  <div id="map">
    <div id="legend"></div>
  </div>
</template>

<script lang="ts">
import MapView from '@arcgis/core/views/MapView.js'
import WebMap from '@arcgis/core/WebMap.js'
import Legend from '@arcgis/core/widgets/Legend.js'

export default {
  name: 'WebMap',
  props: {
    portalItemId: { type: String, required: true },
    layerName: { type: String, required: true },
  },
  methods: {
    async getWebMap() {
      const webmap = new WebMap({
        portalItem: {
          id: this.portalItemId,
        },
      })
      const mapview = new MapView({
        map: webmap,
        container: this.$el,
      })
      try {
        await mapview.when()
        mapview.ui.remove(mapview.ui.getComponents())
        mapview.ui.container = document.getElementById("legend")
        const featureLayer: __esri.Layer = webmap.layers.getItemAt(0)!
        const legend = new Legend({
          view: mapview,
          layerInfos: [
            {
              layer: featureLayer,
              title: this.layerName,
            },
          ],
        })
        mapview.ui.add(legend, 'top-right')

      } catch (error) {
        console.warn('Failed to get map for ArcGIS:', error)
      }
    },
  }, // end of methods
  mounted() {
    this.getWebMap()
  },
} // end of export
</script>

<style scoped>
#map {
  width: 95vw;
  height: 89vh;
}

#legend {
  color: black;
  background-color: gainsboro;
  border: 3px;
  border-style: solid;
  border-color: black;
  height: fit-content;
  width: fit-content;
  position: absolute;
  margin-top: 7vh;
  margin-left: 3vw;
}


@media (max-width: 1400px) {
  #legend {
    margin-left: 1vw;
  }
}

@media (max-width: 800px) {
  #legend {
    transform: scale(.8, .8);
    margin-top: 4vh;
    margin-left: 0vw;
  }
}

@media (max-width: 500px) {
  #legend {
    transform: scale(.6, .6);
    margin-top: 0.5vh;
    margin-left: -7.5vw;
  }
}

@media (max-width: 420px) {
  #legend {
    transform: scale(.5, .5);
    margin-top: -2vh;
    margin-left: -11vw;
  }
}

@media (max-width: 380px) {
  #legend {
    margin-top: -4vh;
    margin-left: -11.5vw;
  }
}
</style>
