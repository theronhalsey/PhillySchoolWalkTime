<template>
  <div></div>
</template>

<script lang="ts">
import MapView from '@arcgis/core/views/MapView.js'
import WebMap from '@arcgis/core/WebMap.js'

export default {
  name: 'WebMap',
  props: {
    portalItemId: { type: String, required: true },
  },
  methods: {
    getWebMap() {
      const webmap = new WebMap({
        portalItem: {
          id: this.portalItemId,
        },
      })
      const mapview = new MapView({
        map: webmap,
        container: 'viewDiv',
      })
      return mapview
    },
    async initialize(mapview: MapView, container: HTMLDivElement) {
      mapview.container = container
      try {
        await mapview.when()
        console.log('Map and View are ready')
      } catch (error) {
        console.warn('An error in creating the map occurred:', error)
      }
    },
  }, // end of methods
  mounted() {
    const map = this.getWebMap()
    this.initialize(map, this.$el)
  },
} // end of export
</script>
