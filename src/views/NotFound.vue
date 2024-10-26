<script setup lang="ts">
</script>

<template>
  <div class="container">
    <h3>404: Lost at Sea</h3>
    <img src="../assets/kobudai2.png" class="kobudai" />
  </div>
  <div class="text">
    Uh-oh! It seems you've sailed off the map and into uncharted waters. No compass in sight, and no sign of the page you're seeking.
  </div>
  <div class="text">
    But fear not, brave navigator! Chart a course&nbsp;<RouterLink to="/" class="link">back to safer shores</RouterLink>, or try searching for a new island (or page) to explore.
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
}

.kobudai {
  position: relative;
  width: 50px;
  margin-left: 10px;
  bottom: 2px;
}
</style>
