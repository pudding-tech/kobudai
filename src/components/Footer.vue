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
  /* background: var(--footer-bg); */
  border-top: 1px solid var(--footer-border);
  box-shadow: var(--surface-shadow-soft);
}

@media (hover: hover) and (pointer: fine) {
  .footer {
    -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
    backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  }
}

.text {
  color: var(--footer-text-color);
  font-size: 14px;
  text-align: center;
}

.unselectable {
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
