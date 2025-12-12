<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { deshita as meta, desu } from "./metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div v-if="isPolite">
        Noun + <span class="grammar-highlight">でした</span><br>
        な-Adjective + <span class="grammar-highlight">でした</span><br>
      </div>
      <div v-else>
        Noun + <span class="grammar-highlight">だった</span><br>
        な-Adjective + <span class="grammar-highlight">だった</span>
      </div>
    </template>
    <template #related>
      Past tense of <RouterLink :to="{ name: 'grammarLoader', params: { slug: desu.slug } }" class="link">{{ desu.title }}</RouterLink>
    </template>
    <template #explanation>
      The forms <span class="g">だった</span> and <span class="g">でした</span> are the past tense of the copulas だ and です.
      They are used to say that something was a certain way in the past — describing past states, past identities, or past attributes.
      Like だ and です, the choice of form depends on politeness level.

      <div class="section">
        <div class="grammar-subtitle">だった (plain past form of だ)</div>
        <span class="g">だった</span> is the plain, casual past tense of だ, used in informal conversation, casual writing, and internal thoughts.
        Use it to state that something was something in the past.
        <GrammarExample>
          <template #example>
            <ruby>学生<rt>がくせい</rt></ruby><span class="g">だった</span>
          </template>
          <template #translation>
            I was a student
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>昨日<rt>きのう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby><span class="g">だった</span>
          </template>
          <template #translation>
            It was rainy yesterday
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          Just like だ, <span class="g">だった</span> cannot be used after い-adjectives and verbs,
          as they conjugate internally to express tense.
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">でした (polite past form of です)</div>
        <span class="g">でした</span> is the polite past tense of です, used in formal conversation, polite speech,
        customer interactions, and most public-facing contexts.

        <GrammarExample>
          <template #example>
            <ruby>先生<rt>せんせい</rt></ruby><span class="g">でした</span>
          </template>
          <template #translation>
            I was a teacher
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            この<ruby>本<rt>ほん</rt></ruby>はとても<ruby>簡単<rt>かんたん</rt></ruby><span class="g">でした</span>
          </template>
          <template #translation>
            This book was very easy
          </template>
        </GrammarExample>

        <div class="note">
          <div class="note-title">Note:</div>
          Unlike です, which can act as a general politeness marker after い-adjectives, <span class="g">でした</span> cannot be used this way.
          <span class="g">でした</span> is strictly a past-tense form, and because い-adjectives already conjugate to show tense,
          attaching <span class="g">でした</span> would result in double-marking the past. For that reason,
          even when an い-adjective is in the past tense, you still follow it with です, not <span class="g">でした</span>, e.g.:
          <ul>
            <li><ruby>楽<rt>たの</rt></ruby>しいかったです → was fun</li>
          </ul>
        </div>
      </div>
    </template>
  </GrammarStructure>
</template>
