<script setup lang="ts">
  import packageJson from "../../package.json";

  const version = packageJson.version;
</script>

<template>
  <div class="footer">
    <div class="text unselectable">
      Kobudai v{{ version }}<br>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-top: 1px solid var(--footer-border);
}

.text {
  color: #777777;
  font-size: 14px;
  text-align: center;
}

.unselectable {
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
