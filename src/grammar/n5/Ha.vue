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
      X + <span class="grammar-highlight">は</span> + Y
    </template>
    <template #related>
      Subject marking particle <router-link :to="{ name: 'grammarLoader', params: { slug: 'が' } }" class="link">が</router-link>
    </template>
    <template #explanation>
      The "X <span class="g">は</span> Y" grammar structure uses <span class="g">は</span> as the topic marker particle, which introduces the topic of the sentence. It indicates that "X" is what the sentence is about, and "Y" provides information about X.
      <br><br>
      <div class="note">Note:</div>
      Even though the particle is written <span class="g">は</span> it is pronouced as <span class="g">わ</span>. This is one of the very few exceptions where a character is pronouced different than what is written.
      <br><br>
      A common structure is where <span class="g">は</span> marks the topic, and です or だ comes at the end to act like a "copula," connecting the topic with its description.<br>
      <GrammarExample>
        <template #example>
          これ<span class="g">は</span><ruby>本<rt>ほん</rt></ruby>です
        </template>
        <template #translation>
          This is a book (literally, "as for this, it is a book")
        </template>
        <template #note>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <div>は marks "this" as the topic and "is a book" as information about "this".</div>
            <div>です completes the sentence politely.</div>
          </div>
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          <ruby>彼<rt>かれ</rt></ruby><span class="g">は</span><ruby>学生<rt>がくせい</rt></ruby>だ
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
