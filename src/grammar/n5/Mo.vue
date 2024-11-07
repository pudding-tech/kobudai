<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { mo as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      Noun + <span class="grammar-highlight">も</span>
    </template>
    <template #related>
      
    </template>
    <template #explanation>
      The particle <span class="g">も</span> means "also" or "too" in Japanese. It is used to indicate that something is the same or applies in addition to something else.
      <br><br>
      <b>Similar information:</b> Used to say "also" or "too" in affirmative sentences.
      <GrammarExample>
        <template #example>
          私<span class="g">も</span>学生です
        </template>
        <template #translation>
          I am also a student
        </template>
      </GrammarExample>

      <b>Similar negative information:</b> Used to say "neither" in negative sentences.
      <GrammarExample>
        <template #example>
          猫<span class="g">も</span>犬<span class="g">も</span><span v-tooltip.top="'すき'">好き</span>じゃない
        </template>
        <template #translation>
          I like neither cats nor dogs
        </template>
      </GrammarExample>

      <span class="g">も</span> replaces particles like は (topic marker) or が (subject marker) when used, but keeps the basic sentence structure the same.
    </template>
  </GrammarStructure>
</template>
