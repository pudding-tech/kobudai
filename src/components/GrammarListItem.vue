<script setup lang="ts">
  import type { GrammarPoint } from "@/types/types";
  const props = defineProps<{
    grammarPoint: GrammarPoint
  }>();
</script>

<template>
  <div v-ripple class="list-item">
    <div class="icon">
      <i class="pi pi-circle-fill" style="font-size: 0.5rem; opacity: 50%;" />
    </div>
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
  min-width: 60rem;
  padding: 20px 20px;
  border-radius: var(--p-content-border-radius);
  background-color: var(--list-item-bg);
  cursor: pointer;
  transition: background-color 0.08s ease-in;

  &:hover {
    background-color: var(--list-item-bg-hover);
  }
}

.icon {
  margin-right: 20px;
}

.title {
  font-size: 1.2rem;
}

.subtitle {
  font-size: 16px;
  font-size: 1rem;
  opacity: 0.8;
}
</style>
