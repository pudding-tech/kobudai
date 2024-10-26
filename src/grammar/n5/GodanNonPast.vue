<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GodanKanaChart from "@/components/GodanKanaChart.vue";
  import { godanNonPast as meta } from "./metadataN5";

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
          <ruby>買<rt>か</rt><span class="grammar-highlight">う</span></ruby> → <ruby>買<rt>か</rt><span class="grammar-highlight">います</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>待<rt>ま</rt><span class="grammar-highlight">つ</span></ruby> → <ruby>待<rt>ま</rt><span class="grammar-highlight">ちます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>取<rt>と</rt><span class="grammar-highlight">る</span></ruby> → <ruby>取<rt>と</rt><span class="grammar-highlight">ります</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>読<rt>よ</rt><span class="grammar-highlight">む</span></ruby> → <ruby>読<rt>よ</rt><span class="grammar-highlight">みます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>遊<rt>あそ</rt><span class="grammar-highlight">ぶ</span></ruby> → <ruby>遊<rt>あそ</rt><span class="grammar-highlight">びます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>死<rt>し</rt><span class="grammar-highlight">ぬ</span></ruby> → <ruby>死<rt>し</rt><span class="grammar-highlight">にます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>書<rt>か</rt><span class="grammar-highlight">く</span></ruby> → <ruby>書<rt>か</rt><span class="grammar-highlight">きます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>泳<rt>およ</rt><span class="grammar-highlight">ぐ</span></ruby> → <ruby>泳<rt>およ</rt><span class="grammar-highlight">ぎます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>話<rt>はな</rt><span class="grammar-highlight">す</span></ruby> → <ruby>話<rt>はな</rt><span class="grammar-highlight">します</span></ruby>
        </div>
        <div class="irregular-verbs">
          Irregular verbs:
        </div>
        <div class="kanji-mb">
          <span class="grammar-highlight">する</span> → <span class="grammar-highlight">します</span>
        </div>
        <div>
          <span class="grammar-highlight">来る</span> → <span tooltip.right="'きます'" class="grammar-highlight">来ます</span>
        </div>
      </div>
      <div v-else>
        <div class="kanji-mb">
          <ruby>買<rt>か</rt><span class="grammar-highlight">う</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>待<rt>ま</rt><span class="grammar-highlight">つ</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>取<rt>と</rt><span class="grammar-highlight">る</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>読<rt>よ</rt><span class="grammar-highlight">む</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>遊<rt>あそ</rt><span class="grammar-highlight">ぶ</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>死<rt>し</rt><span class="grammar-highlight">ぬ</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>書<rt>か</rt><span class="grammar-highlight">く</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>泳<rt>およ</rt><span class="grammar-highlight">ぐ</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>話<rt>はな</rt><span class="grammar-highlight">す</span></ruby>
        </div>
        <div class="irregular-verbs">
          Irregular verbs:
        </div>
        <div class="kanji-mb">
          <span class="grammar-highlight">する</span>
        </div>
        <div>
          <span class="grammar-highlight">来る</span>
        </div>
      </div>
    </template>
    <template #details>
      <div style="font-size: 1.5rem">
        <b><ruby>五段<rt>ごだん</rt>活用<rt>かつよう</rt></ruby></b>
      </div>
      <b>Type</b><br>
      Verb
    </template>
    <template #explanation>
      Godan verbs (also known as う-verbs) are one of the two main verb types in Japanese. The name "godan" (literally "five steps") refers to the five possible changes in the final syllable of the verb stem when conjugating,
      depending on the verb's usage. In their dictionary form, godan verbs typically end in a kana that belongs to the う row of the godan kana chart, such as う, つ, る, む, ぶ, ぬ, く, ぐ, or す.

      <div class="section">
        <div class="title">Godan - Present/Non-past Forms</div>
        Japanese verbs do not differentiate between present and future tense, so the same form is used to describe both actions happening now and actions that will happen.
        <div class="subtitle">Dictionary form (informal)</div>
        The dictionary form (also called the plain form) of a godan verb is used in informal contexts, such as when speaking with friends or people of the same social rank.
        <GodanKanaChart :selected-row="3" />
        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby> <span class="g">む</span> – to read</div>
            <div><ruby>話<rt>はな</rt></ruby><span class="g">す</span> – to speak</div>
            <div><ruby>書<rt>か</rt></ruby><span class="g">く</span> – to write</div>
          </template>
          <template #note>
            Dictionary form
          </template>
        </GrammarExample>
        This is the form you will find in dictionaries, and it is the base form used in many grammatical constructions.
      </div>

      <div class="section">
        <div class="subtitle">Polite form</div>
        To make a godan verb polite, you conjugate the verb by changing the ending. For godan verbs, you take the verb stem, change the final <b>u</b> vowel sound to <b>i</b>, and then add <span class="g">ます</span> (for affirmative sentences).
        <GodanKanaChart :selected-row="2" />
        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby><span class="g">む</span> → <ruby>読<rt>よ</rt></ruby><span class="g">みます</span></div>
            <div><ruby>話<rt>はな</rt></ruby><span class="g">す</span> → <ruby>話<rt>はな</rt></ruby><span class="g">します</span></div>
            <div><ruby>書<rt>か</rt></ruby><span class="g">く</span> → <ruby>書<rt>か</rt></ruby><span class="g">きます</span></div>
          </template>
          <template #note>
            Polite form (final syllable's vowel to changed to <b>i</b>, then added <b>ます</b>)
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.section {
  margin-top: 40px;
}

.title {
  font-size: 1.3rem;
  opacity: 0.8;
  margin-bottom: 20px;
}

.subtitle {
  font-weight: bold;
  opacity: 0.8;
  margin-top: 30px;
  margin-bottom: 14px;
}
</style>
