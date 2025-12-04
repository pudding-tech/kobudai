<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { mo as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Noun + <span class="grammar-highlight">も</span>
    </template>
    <template #explanation>
      The particle <span class="g">も</span> means "also" or "too" in Japanese. It is used to indicate that something is the same or applies in addition to something else.
      <span class="g">も</span> replaces particles like は (topic marker) or が (subject marker) when used, but keeps the basic sentence structure the same.
      <br><br>
      <b>Similar information:</b> Used to say "also" or "too" in affirmative sentences.
      <GrammarExample>
        <template #example>
          <ruby>私<rt>わたし</rt></ruby><span class="g">も</span><ruby>学生<rt>がくせい</rt></ruby>です
        </template>
        <template #translation>
          I am also a student
        </template>
      </GrammarExample>

      <b>Similar negative information:</b> Used to say "neither" in negative sentences.
      <GrammarExample>
        <template #example>
          <ruby>猫<rt>ねこ</rt></ruby><span class="g">も</span><ruby>犬<rt>いぬ</rt></ruby><span class="g">も</span><ruby>好<rt>す</rt></ruby>きじゃない
        </template>
        <template #translation>
          I like neither cats nor dogs
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
