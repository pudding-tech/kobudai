<script setup lang="ts">
  import { nextTick, onMounted, ref, shallowRef } from "vue";
  import { useRoute } from "vue-router";
  import { grammarIndex } from "@/grammar/grammarIndex";
  import { resolveScroll, setResolveScroll } from "@/router/scrollResolver";
  import { breakpointService } from "@/services/breakpointService";
  import type { GrammarComponent } from "@/types/types";
  import NotFound from "./NotFound.vue";

  const route = useRoute();

  const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
  const grammarPoint = shallowRef<GrammarComponent | undefined>();
  const notFound = ref(false);

  onMounted(async () => {
    try {
      if (slug) {
        grammarPoint.value = await grammarIndex[slug]?.();
      }
      if (!grammarPoint.value) {
        notFound.value = true;
      }

      const metaTitle = grammarPoint.value?.meta?.title;
      if (metaTitle) {
        document.title = `${metaTitle} - Kobudai`;
      }

      // Set the scroll position
      await nextTick();
      if (resolveScroll) {
        resolveScroll();
        setResolveScroll(null);
      }
    }
    catch (err) {
      console.error(err);
    }
  });
</script>

<template>
  <div class="grammar-loader">
    <NotFound v-if="notFound" />
    <component v-else-if="grammarPoint" :is="grammarPoint.component" />
    <ProgressSpinner v-else class="loading-spinner" :class="{ 'mobile': breakpointService.isMobile() }" />
  </div>
</template>

<style scoped>
.grammar-loader {
  overflow-x: hidden;
  overflow-y: auto;
}

.loading-spinner {
  display: flex;
  overflow: clip;

  &.mobile {
    margin-top: 40px;
  }
}
</style>
