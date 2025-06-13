<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { numberMo as meta, numberShika } from "./metadataN4";
  import { mo } from "@/grammar/n5/metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      Noun + が／を + <span class="grammar-highlight">number</span> + <span class="grammar-highlight">も</span> + verb
    </template>
    <template #related>
      Similarly, to say "as few as", see <RouterLink :to="{ name: 'grammarLoader', params: { slug: numberShika.slug } }" class="link">{{ numberShika.title }}</RouterLink>
    </template>
    <template #explanation>
      The particle <span class="g">も</span> is often used to emphasize a large number or unexpected quantity of something. When attached to a number, it means "as many as...",
      often with a nuance of surprise, emphasis, or disbelief — highlighting that the amount is more than expected.
      <GrammarExample>
        <template #example>
          りんごを４<ruby>個<rt>こ</rt></ruby><span class="g">も</span><ruby>食<rt>た</rt></ruby>べた
        </template>
        <template #translation>
          I ate as many as four apples
        </template>
        <template #note>
          Implying that four apples is a lot
        </template>
      </GrammarExample>
      This usage of <span class="g">も</span> contrasts with the regular particle が or を, which would just state the number plainly without emphasis.
      The nuance is usually surprise, impressiveness, or sometimes even excessiveness, meaning you'll often see it in contexts where the speaker is reacting to the amount in some way.
      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">も</span> can be used after a noun without a number, but then it just means "also" or "too", without the emphasis on quantity.
        See <RouterLink :to="{ name: 'grammarLoader', params: { slug: mo.slug } }" class="link">{{ mo.title }}</RouterLink> for this usage.
      </div>
    </template>
  </GrammarStructure>
</template>
