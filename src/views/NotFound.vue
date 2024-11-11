<script setup lang="ts">
  import { breakpointService } from "@/utils/breakpointService";
</script>

<template>
  <div class="title" :class="{ 'mobile': breakpointService.isMobile() }">
    <h3>404: Lost at Sea</h3>
    <img src="../assets/kobudai2.png" class="kobudai" />
  </div>
  <div class="text">
    <div :class="{ 'mobile': breakpointService.isMobile() }">Uh-oh! It seems you've sailed off the map and into uncharted waters. No compass in sight, and no sign of the page you're seeking.</div>
    <div>But fear not, brave navigator! Chart a course&nbsp;<RouterLink to="/" class="link">back to safer shores</RouterLink>, or try searching for a new island (or page) to explore.</div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  &.mobile {
    margin-top: 20px;
  }
}

.text {
  padding: 0 20px;
  text-align: center;
  line-height: 1.6;

  .mobile {
    margin-bottom: 10px;
  }
}

.kobudai {
  position: relative;
  width: 50px;
  margin-left: 10px;
  bottom: 2px;
}
</style>
