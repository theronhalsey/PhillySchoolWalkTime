<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <h1 class="green">{{ msg }}</h1>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.8rem;
  text-align: center;
}

@media (max-width: 1280px) {
  h1 {
    font-size: 2.1rem;
  }
}

@media (max-width: 810px) {
  h1 {
    font-size: 2.1rem;
  }
}

@media (max-width: 500px) {
  h1 {
    font-size: 1rem;
  }
}

@media (max-width: 350px) {
  h1 {
    font-size: .85rem;
  }
}
</style>
