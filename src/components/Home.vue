<script setup lang="ts">
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <Header></Header>
  <RouterView></RouterView>
  <Footer></Footer>
</template>