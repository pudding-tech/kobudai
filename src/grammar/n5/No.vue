<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { no as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      Noun ₁ + <span class="grammar-highlight">の</span> + Noun ₂
    </template>
    <template #explanation>
      The particle <span class="g">の</span> in the pattern "noun <span class="g">の</span> noun" is used to show possession or describe the relationship between two nouns - much like 's or "of" in English.
      Essentially, <span class="g">の</span> lets you build more complex noun phrases by linking multiple nouns together.
      There's also no strict limit to how many <span class="g">の</span> you can use in a row, as long as the meaning remains clear.
      <br><br>
      <div class="grammar-subtitle">Possession</div>
      Indicates that something belongs to someone or something.
      <GrammarExample>
        <template #example>
          <ruby>田中<rt>たなか</rt></ruby>さん<span class="g">の</span><ruby>本<rt>ほん</rt></ruby>
        </template>
        <template #translation>
          Tanaka's book
        </template>
      </GrammarExample>
      <div class="grammar-subtitle">Description/Relation</div>
      Links two nouns, where the first noun describes or modifies the second.
      <GrammarExample>
        <template #example>
          <ruby>日本<rt>にほん</rt></ruby><span class="g">の</span><ruby>車<rt>くるま</rt></ruby>
        </template>
        <template #translation>
          Japanese car (literally, "car of Japan")
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
