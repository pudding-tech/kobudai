<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { desu as meta } from "./metadataN5";

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
        Noun + <span class="grammar-highlight">です</span><br>
        Adjective + <span class="grammar-highlight">です</span><br>
      </div>
      <div v-else>
        Noun + <span class="grammar-highlight">だ</span><br>
        [ な ] adjective + <span class="grammar-highlight">だ</span>
      </div>
    </template>
    <template #details>
      
    </template>
    <template #explanation>
      <span class="g">です</span> and <span class="g">だ</span> are both used to link nouns or adjectives to a subject, functioning like "is" or "am" in English. They serve as copulas, connecting the subject to a descriptor or identity.
      Do note that <span class="g">です</span> and <span class="g">だ</span> only tells that something is something, but not what that something is.
      For that another construction&nbsp;<RouterLink :to="{ name: 'grammarLoader', params: { slug: 'は' } }" class="link">(X は Y)</RouterLink> is used together with the copula.
      <br><br>
      <span class="g">です</span> is the polite form and is used in more formal or respectful settings. It is typically added after nouns or adjectives to form sentences like "X is Y."
      <GrammarExample>
        <template #example>
          ペン<span class="g">です</span>
        </template>
        <template #translation>
          (It) is a pen
        </template>
        <template #note>
          What "it" is, is not specified, but inferred
        </template>
      </GrammarExample>
      <span class="g">だ</span> is the plain, informal equivalent of <span class="g">です</span>. It’s used in casual conversation or among friends. The meaning stays the same, but feels less formal.
      Note that <span class="g">だ</span> cannot be used after&nbsp;<RouterLink :to="{ name: 'grammarLoader', params: { slug: 'は' } }" class="link">[ い ] adjectives</RouterLink>.
      <GrammarExample>
        <template #example>
          <ruby>車<rt>くるま</rt></ruby><span class="g">だ</span>
        </template>
        <template #translation>
          (It) is a car
        </template>
      </GrammarExample>
      <h4>Fun fact</h4>
      Writing <span class="g">です</span> after an い-adjective is technically not correct Japanese, yet it is extremely common to both hear and read in everyday situations.
    </template>
  </GrammarStructure>
</template>
