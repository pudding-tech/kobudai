<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { to as meta, de, ha, he, ni, mo, wo, ya } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Noun + <span class="grammar-highlight">と</span> + noun
    </template>
    <template #related>
      <div class="related-mb">
        Other common particles:
      </div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ya.slug } }" class="link">{{ ya.title + " (and such, among other things)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ni.slug } }" class="link">{{ ni.title + " (location, movement)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: de.slug } }" class="link">{{ de.title + " (location of action)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ha.slug } }" class="link">{{ ha.title + " (topic particle)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: he.slug } }" class="link">{{ he.title + " (direction particle)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: wo.slug } }" class="link">{{ wo.title + " (direct object particle)" }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: mo.slug } }" class="link">{{ mo.title + " (also, too)" }}</RouterLink></div>
    </template>
    <template #explanation>
      The particle <span class="g">と</span> is used to connect nouns (meaning "and") and to indicate companionship (meaning "with"). It links items or people in a clear, definite way.

      <div class="section">
        <div class="grammar-subtitle">Connecting nouns (and)</div>
        Use <span class="g">と</span> to join two or more nouns in a list. It implies an exhaustive list — nothing more, nothing less.
        <GrammarExample>
          <template #example>
            <ruby>先生<rt>せんせい</rt></ruby><span class="g">と</span><ruby>学生<rt>がくせい</rt></ruby>
          </template>
          <template #translation>
            Teacher and student
          </template>
        </GrammarExample>
        When listing more than two items, <span class="g">と</span> is used between each item. Unlike in English, commas are not used in Japanese lists.
        <GrammarExample>
          <template #example>
            りんご<span class="g">と</span>バナナ<span class="g">と</span>スイカを<ruby>食<rt>た</rt></ruby>べました
          </template>
          <template #translation>
            I ate apples, bananas, and watermelons
          </template>
        </GrammarExample>

        When used as "and", <span class="g">と</span> implies completeness — all items listed are included.
        <ul>
          <li>パスタ<span class="g">と</span>ピザ → pasta and pizza (and nothing else)</li>
        </ul>
        This contrasts with <RouterLink :to="{ name: 'grammarLoader', params: { slug: ya.slug } }" class="link">{{ ya.title }}</RouterLink>,
        which means "A and B and such", and gives a non-exhaustive list.

        <div class="note">
          <div class="note-title">Note:</div>
          <span class="g">と</span> connects nouns only. It cannot be used to connect clauses or verbs.
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Companionship (together with)</div>
        <span class="g">と</span> can also be used to indicate doing something together with someone.
        <GrammarExample>
          <template #example>
            <ruby>友<rt>とも</rt></ruby>だち<span class="g">と</span><ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>た
          </template>
          <template #translation>
            I watched a movie with my friend
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>家族<rt>かぞく</rt></ruby><span class="g">と</span><ruby>旅行<rt>りょこう</rt></ruby>します
          </template>
          <template #translation>
            I will travel with my family
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
