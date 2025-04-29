<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'
</script>

<template>
  <header></header>

  <div id="header">
    <HomePage
      msg="How long does it take for students in Philadelphia to walk to their neighborhood school?"
    />
  </div>

  <body>
    <RouterView />
  </body>

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
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
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

@media (min-width: 1024px) {
  #header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  #footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
}
</style>
