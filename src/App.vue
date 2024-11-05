<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navbar />
  <div class="main">
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </RouterView>
  </div>
  <Footer />
</template>

<style scoped>
.main {
  flex: 1;
  padding: 2rem;
}
</style>
