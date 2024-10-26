<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { ne as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      Phrase + <span class="grammar-highlight">ね</span>
    </template>
    <template #details>
      
    </template>
    <template #explanation>
      The sentence-ending particle <span class="g">ね</span> is used to seek confirmation or agreement from the listener, similar to saying "right?" or "isn't it?" in English. It softens statements and can create a sense of shared understanding.
      <GrammarExample>
        <template #example>
          <span v-tooltip.top="'きょう'">今日</span>は<span v-tooltip.top="'さむい'">寒い</span>です<span class="g">ね</span>
        </template>
        <template #translation>
          It's cold today, isn't it?
        </template>
        <template #note>
          Indicates that the speaker expects the listener to agree or confirm what they are saying
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          すごいです<span class="g">ね</span>
        </template>
        <template #translation>
          That's amazing, right?
        </template>
        <template #note>
          Expresses that the speaker and listener have the same feeling or understanding
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
