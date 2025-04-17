<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { ichidanNegative as meta, ichidan, ichidanNonPast, ichidanPast, godanNegative } from "./metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(polite) => isPolite = polite">
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
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanPast.slug } }" class="link">{{ ichidanPast.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="grammar-point-title">The Negative Form of Ichidan Verbs</div>
      Negative forms of Japanese verbs indicate that an action is not taking place, or will not take place in the future.

      <div class="section">
        <div class="subtitle">Plain negative (informal)</div>
        To create the plain negative form of an ichidan verb we drop the final syllable る to get the verb stem.
        Then, simply add <span class="g">ない</span> to the end.

        <GrammarExample>
          <template #example>
            <div><ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">ない</span></div>
            <div><ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">ない</span></div>
            <div><ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">ない</span></div>
            <div style="padding-top: 8px">いる → い<span class="g">ない</span></div>
          </template>
          <template #note>
            Plain negative form
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="subtitle">Polite form</div>
        The polite form of a verb is used in formal situations, such as speaking with strangers or people of higher social status.
        The ichidan polite stem is the same stem as all the other conjugations use, which is found by dropping the final syllable る.
        For the polite negative form, add <span class="g">ません</span>.

        <GrammarExample>
          <template #example>
            <div><ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">ません</span></div>
            <div><ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">ません</span></div>
            <div><ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">ません</span></div>
            <div style="padding-top: 8px">いる → い<span class="g">ません</span></div>
          </template>
          <template #note>
            Polite negative form
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <GrammarExample>
          <template #example>
            <div>する → <span class="g">しない</span></div>
            <div><ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>ない</span></div>
          </template>
          <template #note>
            Plain negative form of exceptions
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <div>する → <span class="g">しません</span></div>
            <div><ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>き</rt></ruby>ません</span></div>
          </template>
          <template #note>
            Polite negative form of exceptions
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.8;
  margin-bottom: 18px;
}
</style>
