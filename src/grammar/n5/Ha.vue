<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { ha as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      X + <span class="grammar-highlight">は </span>+ Y
    </template>
    <template #details>
      Pronouced as わ
    </template>
    <template #explanation>
      The "X <span class="g">は</span> Y" grammar structure uses <span class="g">は</span> as the topic marker particle, which introduces the topic of the sentence. It indicates that "X" is what the sentence is about, and "Y" provides information about X.
      <br><br>
      <span class="g">は</span> marks the topic, and often です or だ comes at the end to act like a "copula," connecting the topic (X) with its description (Y).<br>
      <GrammarExample>
        <template #example>
          これ<span class="g">は</span>本です
        </template>
        <template #translation>
          This is a book (literally, "as for this, it is a book")
        </template>
        <template #note>
          X (これ) = "this," Y (本) = "a book," and です completes the sentence politely.
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          彼<span class="g">は</span>学生だ
        </template>
        <template #translation>
          He is a student (literally, "as for he, he is a student")
        </template>
        <template #note>
          は marks "he" as the topic, and だ completes the sentence informaly.
        </template>
      </GrammarExample>
      This structure is fundamental in Japanese to convey what something is or to describe something/someone.
    </template>
  </GrammarStructure>
</template>
