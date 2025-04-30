<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <div id="header">
    <PageHeader
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
  top: 1rem;
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
  padding: 1rem 0;
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

@media (max-width: 1880px) {
  nav {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  #main {
    height: 70%;
    transform: translate(-50%, -45%);
  }
}

@media (max-width: 810px) {
  #main {
    width: 97%;
    height: 72%;
    transform: translate(-2.5%, 15%);
  }
}

@media (max-width: 500px) {
  #header {
    top: 0.5rem;
  }
  nav {
    margin-left: 0rem;
    font-size: 0.7rem;
  }
  #main {
    transform: translate(-7%, 7.5%);
  }
}

@media (max-width: 370px) {
  #header {
    top: 0.5rem;
  }
  nav {
    font-size: 0.6rem;
  }
  #main {
    height: 70%;
    transform: translate(-7%, 7%);
  }
}

@media (max-width: 330px) {
  #header {
    top: 0.25rem;
  }
  nav {
    font-size: 0.5rem;
  }
  #main {
    width: 95%;
    height: 60%;
    transform: translate(-8%, 10%);
  }
}

</style>