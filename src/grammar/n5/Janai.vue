<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { janai as meta } from "./metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(polite) => isPolite = polite">
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div v-if="isPolite">
        Noun + <span class="grammar-highlight">じゃないです</span><br>
        Noun + <span class="grammar-highlight">ではありません</span><br>
        [ な ] adjective + <span class="grammar-highlight">じゃないです</span><br>
        [ な ] adjective + <span class="grammar-highlight">ではありません</span>
      </div>
      <div v-else>
        Noun + <span class="grammar-highlight">じゃない</span><br>
        [ な ] adjective + <span class="grammar-highlight">じゃない</span>
      </div>
    </template>
    <template #related>
      Negated form of <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'です' } }" class="link">です</RouterLink>
    </template>
    <template #explanation>
      <span class="g">じゃない</span> is used to express negation in informal speech, meaning "is not" or "am not." It is the casual form of <span class="g">ではありません</span> or <span class="g">ではない</span>, which are more formal ways to negate.
      In modern Japanese it is however most common to just add the general politeness modifier です so it becomes <span class="g">じゃないです</span>.
      <br><br>
      Only nouns and な-adjectives can be used with <span class="g">じゃない</span>. For い-adjectives and verbs different forms of negation are used.
      <GrammarExample>
        <template #example>
          <span v-tooltip.top="'せんせい'">先生</span><span class="g">じゃない</span>
        </template>
        <template #translation>
          (I am) not a teacher
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          <span v-tooltip.top="'せんせい'">先生</span><span class="g">じゃないです</span>
        </template>
        <template #translation>
          (I am) not a teacher
        </template>
        <template #note>
          Polite form
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
