<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { ichidanNegative as meta, ichidan, ichidanNonPast, ichidanPast, godanNegative } from "./metadataN5";
  import { ba, potentialVerbs, volitionalVerbs } from "@/grammar/n4/metadataN4";

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
      <div v-if="isPolite">
        <div class="kanji-mb">
          <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">ません</span>
        </div>
        <div class="kanji-mb">
          <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="grammar-highlight">ません</span>
        </div>
        <div class="structure-title">
          Exceptions
        </div>
        <div class="kanji-mb">
          <span>する</span> → <span class="grammar-highlight">しません</span>
        </div>
        <div>
          <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>き</rt></ruby>ません</span>
        </div>
      </div>
      <div v-else>
        <div class="kanji-mb">
          <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt>べ<span class="grammar-highlight">ない</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt><span class="grammar-highlight">ない</span></ruby>
        </div>
        <div class="structure-title">
          Exceptions
        </div>
        <div class="kanji-mb">
          <span>する</span> → <span class="grammar-highlight">しない</span>
        </div>
        <div>
          <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>こ</rt>ない</ruby></span>
        </div>
      </div>
    </template>
    <template #related>
      <div class="related-mb">
        Negative form of godan verbs:
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink>
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
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanPast.slug } }" class="link">{{ ichidanPast.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: potentialVerbs.slug } }" class="link">{{ potentialVerbs.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: volitionalVerbs.slug } }" class="link">{{ volitionalVerbs.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">Conditional verb (～ば)</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="grammar-title">The Negative Form of Ichidan Verbs</div>
      Negative forms of Japanese verbs indicate that an action is not taking place, or will not take place in the future.

      <div class="section">
        <div class="grammar-subtitle">Plain negative (informal)</div>
        To create the plain negative form of an ichidan verb we drop the final syllable る to get the verb stem.
        Then, simply add <span class="g">ない</span> to the end.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">ない</span>
          </div>
          <div class="translation">
            to eat → to not eat
          </div>
          <div class="example">
            <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">ない</span>
          </div>
          <div class="translation">
            to fall → to not fall
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">ない</span>
          </div>
          <div class="translation">
            to see → to not see
          </div>
          <div class="example">
            いる → い<span class="g">ない</span>
          </div>
          <div class="translation">
            to exist → to not exist (animate)
          </div>
          <template #note>
            Plain negative form
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Polite form</div>
        The polite form of a verb is used in formal situations, such as speaking with strangers or people of higher social status.
        The ichidan polite stem is the same stem as all the other conjugations use, which is found by dropping the final syllable る.
        For the polite negative form, add <span class="g">ません</span>.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">ません</span>
          </div>
          <div class="translation">
            to eat → to not eat
          </div>
          <div class="example">
            <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">ません</span>
          </div>
          <div class="translation">
            to fall → to not fall
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">ません</span>
          </div>
          <div class="translation">
            to see → to not see
          </div>
          <div class="example">
            いる → い<span class="g">ません</span>
          </div>
          <div class="translation">
            to exist → to not exist (animate)
          </div>
          <template #note>
            Polite negative form
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">しない</span>
          </div>
          <div class="translation">
            to do → to not do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>ない</span>
          </div>
          <div class="translation">
            to come → to not come
          </div>
          <template #note>
            Plain negative form of exceptions
          </template>
        </GrammarExampleSentences>
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">しません</span>
          </div>
          <div class="translation">
            to do → to not do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>き</rt></ruby>ません</span>
          </div>
          <div class="translation">
            to come → to not come
          </div>
          <template #note>
            Polite negative form of exceptions
          </template>
        </GrammarExampleSentences>
      </div>
    </template>
  </GrammarStructure>
</template>
