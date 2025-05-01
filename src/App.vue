<template>
  <div class="container" id="body">
    <header id="header">
      <PageHeader
        msg="How long does it take for students in Philadelphia to walk to their neighborhood school?"
      />
    </header>

    <main id="main">
      <RouterView :key="$route.fullPath" />
    </main>

    <footer>
      <nav id="footer">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/ElemSchool">Elementary School</RouterLink>
        <RouterLink to="/MiddleSchool">Middle School</RouterLink>
        <RouterLink to="/HighSchool">High School</RouterLink>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue'
</script>

<style scoped>
#body {
  display: flex;
  flex-direction: column;
  min-height: 100vmin;
  min-width: 100vmin;
  place-items: center;
  justify-content: center;
}

#header {
  position: fixed;
  top: 0;
  left: 0;
  line-height: 1.5;
  width: 100%;
  place-items: center;
}

#main {
  margin: 5vh 10vh 10vh 10vh;
  place-items: center;
}

#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

nav {
  font-size: 3vh;
  width: 100%;
  text-align: center;
  margin-bottom: 0.5vh;
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

@media (max-width: 1400px) {
  nav {
    font-size: 1.7rem;
  }
}

@media (max-width: 1100px) {
  nav {
    font-size: 1.5rem;
  }
}

@media (max-width: 800px) {
  nav {
    font-size: 1.2rem;
  }
}

@media (max-width: 500px) {
  nav {
    font-size: 0.7rem;
  }
}

@media (max-width: 420px) {
  nav {
    font-size: 0.55rem;
  }
}

@media (max-width: 390px) {
  nav {
    font-size: 0.5rem;
  }
}
</style>