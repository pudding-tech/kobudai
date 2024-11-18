<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { adjectivesI as meta, ha } from "./metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(polite) => isPolite = polite">
    <template #title> {{ meta.title }}</template>
    <template #subtitle> {{ meta.subtitle }}</template>
    <template #structure>
      <div v-if="isPolite">
        [TODO]
      </div>
      <div v-else>
        [TODO]
      </div>
    </template>
    <template #related>
      Commonly used with&nbsp;<RouterLink :to="{ name: 'grammarLoader', params: { slug: ha.slug } }" class="link">は (topic marking particle)</RouterLink>
    </template>
    <template #explanation>
      [TODO]
    </template>
  </GrammarStructure>
</template>
