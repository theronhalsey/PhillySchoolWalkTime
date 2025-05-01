<script setup lang="ts"></script>

<template>
  <div id="textbox">
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
h3 {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 30vh;
  margin-bottom: 70vh;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
}

@media (max-width: 800px) {
  h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 500px) {
  h3 {
    font-size: 1rem;
  }
}

@media (max-width: 420px) {
  h3 {
    font-size: 1rem;
  }
}

@media (max-width: 390px) {
  h3 {
    font-size: .9rem;
  }
}
</style>
