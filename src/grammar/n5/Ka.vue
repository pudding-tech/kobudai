<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { ka as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      Phrase + <span class="grammar-highlight">か</span>
    </template>
    <template #details>
      
    </template>
    <template #explanation>
      The sentence-ending particle <span class="g">か</span> in Japanese is used to form questions. It’s placed at the end of a sentence to indicate that the sentence is a question, similar to how a question mark works in English.
      <GrammarExample>
        <template #example>
          これはペンです<span class="g">か</span>？
        </template>
        <template #translation>
          Is this a pen?
        </template>
      </GrammarExample>
      <span class="g">か</span> can be used with both polite (です) and plain forms (だ), but in informal conversation, it’s often dropped, and a rising intonation is used instead to indicate a question.
    </template>
  </GrammarStructure>
</template>
