<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { mitai as meta, sou } from "./metadataN4";

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
      <div>Verb (plain form) + <span class="grammar-highlight">みたい</span><span v-if="isPolite"> + です</span></div>
      <div>Noun + <span class="grammar-highlight">みたい</span><span v-if="isPolite"> + です</span></div>
      <div>い-adjective + <span class="grammar-highlight">みたい</span><span v-if="isPolite"> + です</span></div>
      <div>な-adjective + <span class="grammar-highlight">みたい</span><span v-if="isPolite"> + です</span></div>
    </template>
    <template #related>
      <div class="related-mb">Other ways of expressing "looks like":</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: sou.slug } }" class="link">{{ sou.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: null } }" class="link">ようだ</RouterLink></div>
    </template>
    <template #explanation>
      <span class="g">みたい</span> is a versatile and commonly used expression in spoken Japanese. It's a fairly informal way to express that something
      resembles or appears to be something else, or that you're making a guess based on what you saw, heard, or felt. It's similar to phrases like:
      <ul>
        <li>"It's similar to..."</li>
        <li>"It's like..."</li>
        <li>"It looks like..."</li>
      </ul>

      Grammatically, <span class="g">みたい</span> behaves like a na-adjective. This means you can attach it directly to the end of a noun,
      a plain-form verb, or an i-adjective, and follow it with だ／です when needed (especially at the end of a sentence).
      <GrammarExample>
        <template #example>
          <ruby>犬<rt>いぬ</rt></ruby><span class="g">みたい</span>
        </template>
        <template #translation>
          It looks like a dog
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>った<span class="g">みたい</span>です
        </template>
        <template #translation>
          It looks like it rained
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          この<ruby>部屋<rt>へや</rt></ruby>、ホテル<span class="g">みたい</span>だね
        </template>
        <template #translation>
          This room is like a hotel, isn't it?
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        While <span class="g">みたい</span> can be used with adjectives, it's more commonly paired with nouns and verbs. When describing the appearance or state of
        adjectives (like how something looks or feels), the <RouterLink :to="{ name: 'grammarLoader', params: { slug: sou.slug } }" class="link">{{ sou.title }}</RouterLink>
        construction is usually more natural and commonly used.
      </div>
      <GrammarExample>
        <template #example>
          このカレーは<ruby>辛<rt>から</rt></ruby>い<span class="g">みたい</span>
        </template>
        <template #translation>
          This curry seems spicy
        </template>
        <template #note>
          辛そう would be more natural here, but みたい is also acceptable
        </template>
      </GrammarExample>
      

      <div class="note">
        <div class="note-title">Note:</div>
        While <span class="g">みたい</span> is common in everyday conversation,
        more formal equivalents like <RouterLink :to="{ name: 'grammarLoader', params: { slug: null } }" class="link">ようだ</RouterLink>
        or <RouterLink :to="{ name: 'grammarLoader', params: { slug: null } }" class="link">らしい</RouterLink> are often more prevalent in writing or polite conversation.
      </div>
    </template>
  </GrammarStructure>
</template>
