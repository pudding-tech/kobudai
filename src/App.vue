<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  import { breakpointService } from "./services/breakpointService";
</script>

<template>
  <Navbar />
  <div class="main" :class="{ 'full-view': !breakpointService.isMobile() }">
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </RouterView>
  </div>
  <Footer />
</template>

<style scoped>
.main {
  flex: 1;

  &.full-view {
    padding: 34px;
  }
}
</style>
