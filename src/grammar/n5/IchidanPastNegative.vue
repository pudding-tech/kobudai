<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { ichidanPastNegative as meta, godanPastNegative, ichidan, ichidanNegative, ichidanNonPast, ichidanPast, imperativeVerbs, teVerb } from "./metadataN5";
  import { ba, causativePassiveVerbs, causativeVerbs, passiveVerbs, potentialVerbs, volitionalVerbs } from "@/grammar/n4/metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div class="kanji-mb">
        <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">{{ isPolite ? "ませんでした" : "なかった"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="grammar-highlight">{{ isPolite ? "ませんでした" : "なかった"}}</span>
      </div>
      <div class="structure-title">
        Exceptions
      </div>
      <div class="kanji-mb">
        <span>する</span> → <span class="grammar-highlight">し{{ isPolite ? "ませんでした" : "なかった"}}</span>
      </div>
      <div>
        <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>{{ isPolite ? "き" : "こ"}}</rt></ruby>{{ isPolite ? "ませんでした" : "なかった"}}</span>
      </div>
    </template>
    <template #related>
      <div class="related-mb">
        Past negative form of godan verbs:
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPastNegative.slug } }" class="link">{{ godanPastNegative.title }}</RouterLink>
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
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanPast.slug } }" class="link">{{ ichidanPast.title }}</RouterLink>
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
      <div class="grammar-title">The Past Negative Form of Ichidan Verbs</div>
      The past negative form of Japanese verbs expresses that an action did not take place in the past.

      <div class="section">
        <div class="grammar-subtitle">Plain past negative (informal)</div>
        To create the plain past negative form of an ichidan verb we drop the final syllable る to get the verb stem.
        Then, simply add <span class="g">なかった</span> to the end.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">なかった</span>
          </div>
          <div class="translation">
            to eat → did not eat
          </div>
          <div class="example">
            <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">なかった</span>
          </div>
          <div class="translation">
            to fall → did not fall
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">なかった</span>
          </div>
          <div class="translation">
            to see → did not see
          </div>
          <div class="example">
            いる → い<span class="g">なかった</span>
          </div>
          <div class="translation">
            to exist → did not exist (animate)
          </div>
          <template #note>
            Plain past negative form
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Polite form</div>
        The polite form of a verb is used in formal situations, such as speaking with strangers or people of higher social status.
        The ichidan polite stem is the same stem as all the other conjugations use, which is found by dropping the final syllable る.
        For the polite past negative form, add <span class="g">ませんでした</span>.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">ませんでした</span>
          </div>
          <div class="translation">
            to eat → did not eat
          </div>
          <div class="example">
            <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">ませんでした</span>
          </div>
          <div class="translation">
            to fall → did not fall
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">ませんでした</span>
          </div>
          <div class="translation">
            to see → did not see
          </div>
          <div class="example">
            いる → い<span class="g">ませんでした</span>
          </div>
          <div class="translation">
            to exist → did not exist (animate)
          </div>
          <template #note>
            Polite past negative form
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">しなかった</span>
          </div>
          <div class="translation">
            to do → did not do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>なかった</span>
          </div>
          <div class="translation">
            to come → did not come
          </div>
          <template #note>
            Plain past negative form of exceptions
          </template>
        </GrammarExampleSentences>
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">しませんでした</span>
          </div>
          <div class="translation">
            to do → did not do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>き</rt></ruby>ませんでした</span>
          </div>
          <div class="translation">
            to come → did not come
          </div>
          <template #note>
            Polite past negative form of exceptions
          </template>
        </GrammarExampleSentences>
      </div>
    </template>
  </GrammarStructure>
</template>
