<script setup lang="ts">
  import type { GrammarPoint } from "@/types/types";
  const props = defineProps<{
    grammarPoint: GrammarPoint
  }>();
</script>

<template>
  <div v-ripple class="list-item">
    <div>
      <div class="title">{{ props.grammarPoint.title }}</div>
      <div class="subtitle">{{ props.grammarPoint.subtitle }}</div>
    </div>
  </div>
</template>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 20px 20px;
  border-radius: var(--p-content-border-radius);
  background-color: var(--list-item-bg);
  transition: background-color 0.08s ease-in;
  line-height: 1.34;

  &:hover {
    background-color: var(--list-item-bg-hover);
  }
}

.title {
  font-size: 1.2rem;
  word-break: keep-all;
}

.subtitle {
  font-size: 1rem;
  opacity: 0.8;
  word-break: keep-all;
}
</style>
