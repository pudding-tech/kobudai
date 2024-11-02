<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { godanNegative as meta } from "./metadataN5";

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
          <ruby>買<rt>か</rt><span class="grammar-highlight">う</span></ruby> → <ruby>買<rt>か</rt><span class="grammar-highlight"><span class="h">い</span>ません</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>待<rt>ま</rt><span class="grammar-highlight">つ</span></ruby> → <ruby>待<rt>ま</rt><span class="grammar-highlight"><span class="h">ち</span>ません</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>取<rt>と</rt><span class="grammar-highlight">る</span></ruby> → <ruby>取<rt>と</rt><span class="grammar-highlight"><span class="h">り</span>ません</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>読<rt>よ</rt><span class="grammar-highlight">む</span></ruby> → <ruby>読<rt>よ</rt><span class="grammar-highlight"><span class="h">み</span>ません</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>遊<rt>あそ</rt><span class="grammar-highlight">ぶ</span></ruby> → <ruby>遊<rt>あそ</rt><span class="grammar-highlight"><span class="h">び</span>ません</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>死<rt>し</rt><span class="grammar-highlight">ぬ</span></ruby> → <ruby>死<rt>し</rt><span class="grammar-highlight"><span class="h">に</span>ません</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>書<rt>か</rt><span class="grammar-highlight">く</span></ruby> → <ruby>書<rt>か</rt><span class="grammar-highlight"><span class="h">き</span>ません</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>泳<rt>およ</rt><span class="grammar-highlight">ぐ</span></ruby> → <ruby>泳<rt>およ</rt><span class="grammar-highlight"><span class="h">ぎ</span>ません</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>話<rt>はな</rt><span class="grammar-highlight">す</span></ruby> → <ruby>話<rt>はな</rt><span class="grammar-highlight"><span class="h">し</span>ません</span></ruby>
        </div>
        <div class="irregular-verbs">
          Irregular verbs:
        </div>
        <div class="kanji-mb">
          <span class="grammar-highlight">する</span> → <span class="grammar-highlight">しません</span>
        </div>
        <div>
          <span class="grammar-highlight"><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>き</rt>ません</ruby></span>
        </div>
      </div>
      <div v-else>
        <div class="kanji-mb">
          <ruby>買<rt>か</rt><span class="grammar-highlight">う</span></ruby> → <ruby>買<rt>か</rt><span class="grammar-highlight"><span class="h">わ</span>ない</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>待<rt>ま</rt><span class="grammar-highlight">つ</span></ruby> → <ruby>待<rt>ま</rt><span class="grammar-highlight"><span class="h">た</span>ない</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>取<rt>と</rt><span class="grammar-highlight">る</span></ruby> → <ruby>取<rt>と</rt><span class="grammar-highlight"><span class="h">ら</span>ない</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>読<rt>よ</rt><span class="grammar-highlight">む</span></ruby> → <ruby>読<rt>よ</rt><span class="grammar-highlight"><span class="h">ま</span>ない</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>遊<rt>あそ</rt><span class="grammar-highlight">ぶ</span></ruby> → <ruby>遊<rt>あそ</rt><span class="grammar-highlight"><span class="h">ば</span>ない</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>死<rt>し</rt><span class="grammar-highlight">ぬ</span></ruby> → <ruby>死<rt>し</rt><span class="grammar-highlight"><span class="h">な</span>ない</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>書<rt>か</rt><span class="grammar-highlight">く</span></ruby> → <ruby>書<rt>か</rt><span class="grammar-highlight"><span class="h">か</span>ない</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>泳<rt>およ</rt><span class="grammar-highlight">ぐ</span></ruby> → <ruby>泳<rt>およ</rt><span class="grammar-highlight"><span class="h">が</span>ない</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>話<rt>はな</rt><span class="grammar-highlight">す</span></ruby> → <ruby>話<rt>はな</rt><span class="grammar-highlight"><span class="h">さ</span>ない</span></ruby>
        </div>
        <div class="irregular-verbs">
          Irregular verbs:
        </div>
        <div class="kanji-mb">
          <span class="grammar-highlight">する</span> → <span class="grammar-highlight">しない</span>
        </div>
        <div class="kanji-mb">
          <span class="grammar-highlight"><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>こ</rt>ない</ruby></span>
        </div>
        <div style="padding-top: 10px">
          <span class="grammar-highlight">ある</span> → <span class="grammar-highlight">ない</span>
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
      Negative forms of godan verbs are created by conjugating the verb into its negative version, which indicates that an action is not taking place.
      The negative form for godan verbs is formed by changing the final <b>u</b> sound to <b>a</b> + <span class="g">ない</span> in the plain form or to <span class="g">ません</span> in the polite form.

      <div class="section">
        <div class="title">Negative Forms</div>
        <div class="subtitle">Plain negative (informal)</div>
        To create the plain negative form of a godan verb, take the verb's stem (the part before the final <b>u</b>), and add <b>a</b> + <span class="g">ない</span>.
        What is really happening here is that the final hiragana moves one row on the godan five step chart, from the う row to the あ row, changing the sound of the final syllable.
        For example, <span class="g">く</span> becomes <span class="g">か</span>, <span class="g">つ</span> becomes <span class="g">た</span>, and so on.
        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby><span class="g">む</span> → <ruby>読<rt>よ</rt></ruby><span class="h">ま</span><span class="g">ない</span></div>
            <div><ruby>話<rt>はな</rt></ruby><span class="g">す</span> → <ruby>話<rt>はな</rt></ruby><span class="h">さ</span><span class="g">ない</span></div>
            <div><ruby>書<rt>か</rt></ruby><span class="g">く</span> → <ruby>書<rt>か</rt></ruby><span class="h">か</span><span class="g">ない</span></div>
            <div><ruby>買<rt>か</rt></ruby><span class="g">う</span> → <ruby>買<rt>か</rt></ruby><span class="h">わ</span><span class="g">ない</span></div>
          </template>
        </GrammarExample>
        <div class="note">Note:</div>
        The negative plain forms of verbs that end with the hiragana <b>う</b> change into a <span class="g">わ</span>, not あ, making the negative <span class="g">わない</span>, and not あない.
      </div>

      <div class="section">
        <div class="subtitle">Polite form</div>
        To make a godan verb polite, you conjugate the verb by changing the ending. For godan verbs, you take the verb stem, change the final <b>u</b> vowel sound to <b>i</b>, and then add <span class="g">ます</span> (for affirmative sentences).
        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt><span class="g">む</span></ruby> → 読<span class="g">みます</span></div>
            <div><ruby>話<rt>はな</rt><span class="g">す</span></ruby> → 話<span class="g">します</span></div>
            <div><ruby>書<rt>か</rt><span class="g">く</span></ruby> → 書<span class="g">きます</span></div>
          </template>
          <template #note>
            Polite form (final syllable's vowel to changed to <b>i</b>, then added <b>ます</b>)
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="title">How to Distinguish Godan Verbs</div>
        All verbs not ending with る are godan verbs. While the remaining verbs are mostly ichidan verbs, there are some godan verbs ending with る, so be careful.
        <GrammarExample>
          <template #example>
            <div><ruby>買<rt>か</rt></ruby><span class="g">う</span> (to buy) – godan verb because ends with <span class="g">う</span></div>
            <div><ruby>待<rt>ま</rt></ruby><span class="g">つ</span> (to wait) – godan verb because ends with <span class="g">つ</span></div>
            <div><ruby>帰<rt>かえ</rt></ruby><span class="g">る</span> (to return home) – godan verb even if ends with <span class="g">る</span></div>
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
