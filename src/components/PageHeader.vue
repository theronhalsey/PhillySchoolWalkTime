<template>
  <h1 class="green">{{ msg }}</h1>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.2rem;
  margin-top: 0.5vh;
  text-align: center;
}

@media (max-width: 1400px) {
  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 1280px) {
  h1 {
    font-size: 1.8rem;
  }
}

@media (max-width: 1100px) {
  h1 {
    font-size: 1.5rem;;
  }
}

@media (max-width: 800px) {
  h1 {
    font-size: 1.1rem;
  }
}

@media (max-width: 500px) {
  h1 {
    font-size: 0.7rem;
  }
}

@media (max-width: 420px) {
  h1 {
    font-size: 0.65rem;
  }
}

@media (max-width: 390px) {
  h1 {
    font-size: .59rem;
  }
}
</style>
