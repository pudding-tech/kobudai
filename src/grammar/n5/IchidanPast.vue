<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { ichidanPast as meta, godanPast, ichidan, ichidanNegative, ichidanNonPast, ichidanPastNegative, imperativeVerbs, teVerb } from "./metadataN5";
  import { ba, causativePassiveVerbs, causativeVerbs, passiveVerbs, potentialVerbs, volitionalVerbs } from "@/grammar/n4/metadataN4";

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
      <div class="kanji-mb">
        <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">{{ isPolite ? "ました" : "た"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="grammar-highlight">{{ isPolite ? "ました" : "た"}}</span>
      </div>
      <div class="structure-title">
        Exceptions
      </div>
      <div class="kanji-mb">
        <span>する</span> → <span class="grammar-highlight">し{{ isPolite ? "ました" : "た"}}</span>
      </div>
      <div>
        <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>き</rt></ruby>{{ isPolite ? "ました" : "た"}}</span>
      </div>
    </template>
    <template #related>
      <div class="related-mb">
        Past form of godan verbs:
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPast.slug } }" class="link">{{ godanPast.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Other ichidan conjugations:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidan.slug } }" class="link">{{ ichidan.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanNonPast.slug } }" class="link">{{ ichidanNonPast.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanNegative.slug } }" class="link">{{ ichidanNegative.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanPastNegative.slug } }" class="link">{{ ichidanPastNegative.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">て-form</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: imperativeVerbs.slug } }" class="link">{{ imperativeVerbs.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: potentialVerbs.slug } }" class="link">{{ potentialVerbs.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: volitionalVerbs.slug } }" class="link">{{ volitionalVerbs.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">Conditional verb (～ば)</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: passiveVerbs.slug } }" class="link">{{ passiveVerbs.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeVerbs.slug } }" class="link">{{ causativeVerbs.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativePassiveVerbs.slug } }" class="link">{{ causativePassiveVerbs.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="grammar-title">The Past Form of Ichidan Verbs</div>
      The past form of Japanese verbs is used to describe actions that have already been completed, or events that have already happened.

      <div class="section">
        <div class="grammar-subtitle">Plain form (informal)</div>
        Since ichidan verbs have only one possible conjugation pattern, conjugating them is straightforward.
        To change an ichidan verb into the past form, you simply drop the last syllable <span class="g">る</span>, then add <span class="g">た</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">た</span>
          </div>
          <div class="translation">
            to eat → ate
          </div>
          <div class="example">
            <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">た</span>
          </div>
          <div class="translation">
            to fall → fell
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">た</span>
          </div>
          <div class="translation">
            to see → saw
          </div>
          <div class="example">
            いる → い<span class="g">た</span>
          </div>
          <div class="translation">
            to exist → existed (animate)
          </div>
          <template #note>
            Plain past form
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Polite form</div>
        The polite form of a verb is used in formal situations, such as speaking with strangers or people of higher social status.
        To make an ichidan verb polite in the past form, you simply drop the last syllable <span class="g">る</span>, then add <span class="g">ました</span>.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">ました</span>
          </div>
          <div class="translation">
            to eat → ate
          </div>
          <div class="example">
            <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">ました</span>
          </div>
          <div class="translation">
            to fall → fell
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">ました</span>
          </div>
          <div class="translation">
            to see → saw
          </div>
          <div class="example">
            いる → い<span class="g">ました</span>
          </div>
          <div class="translation">
            to exist → existed (animate)
          </div>
          <template #note>
            Polite past form
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">した</span>
          </div>
          <div class="translation">
            to do → did
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>き</rt></ruby>た</span>
          </div>
          <div class="translation">
            to come → came
          </div>
          <template #note>
            Plain past form of exceptions
          </template>
        </GrammarExampleSentences>
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">しました</span>
          </div>
          <div class="translation">
            to do → did
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>き</rt></ruby>ました</span>
          </div>
          <div class="translation">
            to come → came
          </div>
          <template #note>
            Polite past form of irregular verbs
          </template>
        </GrammarExampleSentences>
      </div>
    </template>
  </GrammarStructure>
</template>
