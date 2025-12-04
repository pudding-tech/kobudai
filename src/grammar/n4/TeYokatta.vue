<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teYokatta as meta } from "./metadataN4";
  import { teVerb } from "../n5/metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">よかった</span><span v-if="isPolite"> + です</span>
    </template>
    <template #related>
      Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink>
    </template>
    <template #explanation>
      <span class="g">～てよかった</span> is used when you want to say you're glad or relieved that something happened
      or that you (or someone) did something.
      <ul>
        <li>Verb (<span class="g">て-form</span>) + <span class="g">よかった</span></li>
      </ul>
      The <span class="g">て-form</span> of the verb connects the action. <span class="g">よかった</span> is the past tense of いい ("good"),
      so the phrase literally means "It was good that [X happened/did X]".

      <GrammarExample>
        <template #example>
          <ruby>行<rt>い</rt></ruby>っ<span class="g">てよかった</span>
        </template>
        <template #translation>
          I'm glad I went
        </template>
      </GrammarExample>
      <span class="g">～てよかった</span> is often used when looking back on something with relief or satisfaction.
      It's common in casual and polite conversation alike.
      <GrammarExample>
        <template #example>
          <ruby>傘<rt>かさ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ってき<span class="g">てよかった</span>です
        </template>
        <template #translation>
          It was good I brought an umbrella
        </template>
      </GrammarExample>

      It can also be used to express relief or gratitude that something didn't happen.
      <GrammarExample>
        <template #example>
          <ruby>遅<rt>お</rt></ruby>くれなく<span class="g">てよかった</span>
        </template>
        <template #translation>
          I'm glad I wasn't late
        </template>
        <template #note>
          Here used with the negative て-form
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
