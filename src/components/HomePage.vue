<script setup lang="ts"></script>

<template>
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
</template>

<style scoped>
h3 {
  font-size: 1.5rem;
  text-align: center;
  place-items: center;
  margin: auto;
  width: 75%;
  transform: translate(0%, 250%);
}

@media (max-width: 1880px) {
  h3 {
    transform: translate(0%, 200%);
  }
}

@media (max-width: 810px) {
  h3 {
    transform: translate(0%, 50%);
  }
}

@media (max-width: 400px) {
  h3 {
    transform: translate(0%, 45%);
  }
}

@media (max-width: 370px) {
  h3 {
    transform: translate(0%, 35%);
  }
}

@media (max-width: 350px) {
  h3 {
    transform: translate(0%, 5%);
  }
}
</style>