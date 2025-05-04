<script setup lang="ts">
  import type { GrammarPoint } from "@/types/types";
  const props = defineProps<{
    grammarPoint: GrammarPoint;
  }>();
</script>

<template>
  <RouterLink :to="{ name: 'grammarLoader', params: { slug: props.grammarPoint.slug } }" v-ripple class="list-item">
    <div class="icon">
      <i class="pi pi-circle-fill" style="font-size: 0.5rem; opacity: 50%;" />
    </div>
    <div>
      <div class="title">{{ props.grammarPoint.title }}</div>
      <div class="subtitle">{{ props.grammarPoint.subtitle }}</div>
    </div>
  </RouterLink>
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
  line-height: 1.34;

  &:hover {
    background-color: var(--list-item-bg-hover);
  }
}

.icon {
  margin-right: 20px;
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
