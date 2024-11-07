<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { yo as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      Phrase + <span class="grammar-highlight">よ</span>
    </template>
    <template #related>
      
    </template>
    <template #explanation>
      The sentence-ending particle <span class="g">よ</span> is used to give emphasis, assert information, or provide new information that the speaker believes the listener may not know. It makes the statement more forceful or confident, similar to saying "you know" or "I'm telling you" in English.
      <GrammarExample>
        <template #example>
          これは<span v-tooltip.top="'おいしい'">美味しい</span>です<span class="g">よ</span>
        </template>
        <template #translation>
          This is delicious, you know!
        </template>
        <template #note>
          Asserts or stresses something the speaker thinks is important or not known by the listener.
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <span v-tooltip.top="'あぶない'">危ない</span><span class="g">よ</span>
        </template>
        <template #translation>
          That's dangerous!
        </template>
        <template #note>
          Strongly suggests something or warns the listener
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
