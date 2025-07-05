<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teHaIkenai as meta, naideKudasai, teVerb } from "./metadataN5";

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
      Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">は</span> + <span class="grammar-highlight">いけ<span v-if="isPolite">ません</span><span v-else>ない</span></span>
    </template>
    <template #related>
      <div class="related-mb">Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink></div>
    </template>
    <template #explanation>
      This grammar pattern <span class="g">～てはいけない</span> is used to express prohibition — that doing a certain action is not permitted, forbidden, or wrong.
      <br><br>
      It is formed by taking the て-form of a verb and adding <span class="g">はいけない</span> (or <span class="g">はいけません</span> for polite speech).
      The <span class="g">は</span> here is actually a topic marker, meaning it is pronounced  as "wa", not "ha".
      <GrammarExample>
        <template #example>
          <ruby>入<rt>はい</rt></ruby>っ<span class="g">てはいけない</span>
        </template>
        <template #translation>
          You must not enter
        </template>
      </GrammarExample>

      It is often used to give strong advice or warnings against certain actions; therefore it commonly used in rules or signs, instructions,
      or to express moral or social prohibitions.
      <GrammarExample>
        <template #example>
          ここでタバコを<ruby>吸<rt>す</rt></ruby>っ<span class="g">てはいけません</span>
        </template>
        <template #translation>
          You must not smoke here
        </template>
      </GrammarExample>
      For a more gentle way to express prohibition, see
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: naideKudasai.slug } }" class="link">{{ naideKudasai.title }}</RouterLink>
    </template>
  </GrammarStructure>
</template>
