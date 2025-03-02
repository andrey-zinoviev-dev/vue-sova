<script setup lang="ts">
import Welcome from './components/Welcome.vue';
import StartPage from './components/StartPage.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView></RouterView>
  <!-- <Welcome></Welcome> -->
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
