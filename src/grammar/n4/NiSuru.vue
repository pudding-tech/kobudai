<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { niSuru as meta, kotoNiSuru } from "./metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Noun + <span class="grammar-highlight">に<span v-if="isPolite">します</span><span v-else>する</span></span></div>
    </template>
    <template #related>
      <div class="related-mb">See also:</div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: kotoNiSuru.slug } }" class="link">{{ kotoNiSuru.title }}</RouterLink></div>
    </template>
    <template #explanation>
      The grammar pattern <span class="g">にする</span> is used to express a choice or decision, often in the context of selecting
      between different possible choices. It can translate as "decide on...", "choose...", or "go with...".
      <ul>
        <li>Noun + <span class="g">にする</span></li>
      </ul>
      It is commonly used when making decisions about food, drinks, or other options.
      <GrammarExample>
        <template #example>
          お<ruby>茶<rt>ちゃ</rt></ruby><span class="g">にする</span>
        </template>
        <template #translation>
          I'll go with tea
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">にする</span> expresses an intentional act, usually by the speaker.
      </div>
      <GrammarExample>
        <template #example>
          こっちのバッグ<span class="g">にします</span>
        </template>
        <template #translation>
          I'll choose this bag
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>結局<rt>けっきょく</rt></ruby>、カレー<span class="g">にした</span>
        </template>
        <template #translation>
          In the end, I decided on curry
        </template>
      </GrammarExample>

      For the equivalent with verbs, "to decide to do something", see
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: kotoNiSuru.slug } }" class="link">{{ kotoNiSuru.title }}</RouterLink>.
    </template>
  </GrammarStructure>
</template>
