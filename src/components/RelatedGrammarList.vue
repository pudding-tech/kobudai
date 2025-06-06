<script setup lang="ts">
  import type { GrammarPoint } from "@/types/types";

  const props = defineProps<{
    related: (GrammarPoint | { slug: string; title: string })[];
  }>();
</script>

<template>
  <div v-for="(gp, index) in props.related" v-bind:key="index" :class="{ 'related-mb': index !== props.related.length - 1 }">
    - <RouterLink :to="{ name: 'grammarLoader', params: { slug: gp.slug } }" class="link">{{ gp.title }}</RouterLink>
  </div>
</template>
