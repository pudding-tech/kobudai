<script setup lang="ts">
  import { onMounted, ref, shallowRef } from "vue";
  import { useRoute } from "vue-router";
  import { grammarIndex } from "@/grammar/grammarIndex";
  import type { GrammarComponent } from "@/types/types";
  import NotFound from "./NotFound.vue";

  const route = useRoute();

  const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
  const grammarPoint = shallowRef<GrammarComponent | null>(null);
  const notFound = ref(false);

  onMounted(async () => {
    try {
      grammarPoint.value = await grammarIndex[slug]?.();
      if (!grammarPoint.value) {
        notFound.value = true;
      }
      
      const metaTitle = grammarPoint.value?.meta?.title;
      if (metaTitle) {
        document.title = `${metaTitle} - Kobudai`;
      }
    }
    catch (err) {
      console.error(err);
    }
  });
</script>

<template>
  <NotFound v-if="notFound" />
  <component v-else :is="grammarPoint?.component" />
</template>
