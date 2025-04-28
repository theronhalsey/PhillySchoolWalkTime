<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      View catchments, their associated schools, and how long it would take for
      <a
        href="https://theronsmaps.maps.arcgis.com/apps/webappviewer/index.html?id=ec383e6463e741589e98a9edf5b8d745"
        target="_blank"
        rel="noopener"
        >Elementary</a
      >,
      <a
        href="https://theronsmaps.maps.arcgis.com/apps/webappviewer/index.html?id=b0d7a0a8f2524244bdee62feb46183c1"
        target="_blank"
        rel="noopener"
        >Middle</a
      >, and
      <a
        href="https://theronsmaps.maps.arcgis.com/apps/webappviewer/index.html?id=bb92ed91b657492b8a3821eebc5d0d13"
        target="_blank"
        rel="noopener"
        >High School</a
      >
      students to walk to them.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
