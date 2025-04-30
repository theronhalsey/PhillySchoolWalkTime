<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'
</script>

<template>
  <div id="header">
    <HomePage
      msg="How long does it take for students in Philadelphia to walk to their neighborhood school?"
    />
  </div>

  <div id="main">
    <RouterView />
  </div>

  <nav id="footer">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/ElemSchool">Elementary School</RouterLink>
    <RouterLink to="/MiddleSchool">Middle School</RouterLink>
    <RouterLink to="/HighSchool">High School</RouterLink>
  </nav>
</template>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  place-items: center;
}

#main {
  position: fixed;
  margin: auto;
  width: 100%;
  height: 75%;
  place-items: center;
  transform: translate(-50%, -50%);
}

nav {
  width: 100%;
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 2rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
