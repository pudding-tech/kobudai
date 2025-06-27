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
      Sentence + <span class="grammar-highlight">よ</span>
    </template>
    <template #explanation>
      The sentence-ending particle <span class="g">よ</span> is used to give emphasis, assert information, or provide new information that the speaker believes the listener may not know. It makes the statement more forceful or confident, similar to saying "you know" or "I'm telling you" in English.
      <GrammarExample>
        <template #example>
          これは<ruby>美味<rt>おい</rt></ruby>しいです<span class="g">よ</span>
        </template>
        <template #translation>
          This is delicious, you know
        </template>
        <template #note>
          Asserts or stresses something the speaker thinks is important or not known by the listener.
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>危<rt>あぶ</rt></ruby>ない<span class="g">よ</span>
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
