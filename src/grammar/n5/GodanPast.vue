<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import { godanPast as meta, godan, godanNonPast, godanNegative, ichidanPast, te } from "./metadataN5";

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
          <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt><span class="grammar-highlight"><span class="h">い</span>ました</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt><span class="grammar-highlight"><span class="h">ち</span>ました</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt><span class="grammar-highlight"><span class="h">り</span>ました</span></ruby>
        </div>
        <div class="kanji-mb" style="margin-top: 15px">
          <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt><span class="grammar-highlight"><span class="h">み</span>ました</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt><span class="grammar-highlight"><span class="h">び</span>ました</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt><span class="grammar-highlight"><span class="h">に</span>ました</span></ruby>
        </div>
        <div class="kanji-mb" style="margin-top: 15px">
          <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt><span class="grammar-highlight"><span class="h">き</span>ました</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt><span class="grammar-highlight"><span class="h">ぎ</span>ました</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt><span class="grammar-highlight"><span class="h">し</span>ました</span></ruby>
        </div>
        <div class="structure-title">
          Exceptions
        </div>
        <div class="kanji-mb">
          <span>する</span> → <span class="grammar-highlight">しました</span>
        </div>
        <div>
          <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>き</rt></ruby>ました</span>
        </div>
      </div>
      <div v-else>
        <div class="kanji-mb">
          <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt><span class="grammar-highlight">った</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt><span class="grammar-highlight">った</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt><span class="grammar-highlight">った</span></ruby>
        </div>
        <div class="kanji-mb" style="margin-top: 15px">
          <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt><span class="grammar-highlight">んだ</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt><span class="grammar-highlight">んだ</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt><span class="grammar-highlight">んだ</span></ruby>
        </div>
        <div class="kanji-mb" style="margin-top: 15px">
          <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt><span class="grammar-highlight">いた</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt><span class="grammar-highlight">いだ</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt><span class="grammar-highlight">した</span></ruby>
        </div>
        <div class="structure-title">
          Exceptions
        </div>
        <div class="kanji-mb">
          <span>する</span> → <span class="grammar-highlight">した</span>
        </div>
        <div class="kanji-mb">
          <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>き</rt></ruby>た</span>
        </div>
        <div>
          <span><ruby>行<rt>い</rt>く</ruby></span> → <span class="grammar-highlight"><ruby>行<rt>い</rt></ruby>った</span>
        </div>
      </div>
    </template>
    <template #related>
      <div class="related-mb">
        Past form of ichidan verbs:
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanPast.slug } }" class="link">{{ ichidanPast.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Other godan conjugations:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godan.slug } }" class="link">{{ godan.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNonPast.slug } }" class="link">{{ godanNonPast.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="grammar-point-title">The Past Form of Godan Verbs</div>
      The past form of Japanese verbs is used to describe actions that have already been completed, or events that have already happened.

      <div class="section">
        <div class="subtitle">Plain form (informal)</div>
        The plain past tense form of godan verbs is created by changing the final syllable of the verb according to specific rules,
        depending on the ending sound of the verb in its dictionary form. Here’s a breakdown of the changes:

        <ul>
          <li>う, つ, る → <span class="g">った</span></li>
          <li>む, ぶ, ぬ → <span class="g">んだ</span></li>
          <li>く → <span class="g">いた</span></li>
          <li>ぐ → <span class="g">いだ</span></li>
          <li>す → <span class="g">した</span></li>
        </ul>

        Technically, the past form of a godan verb is based on the い-row of the godan five-step chart. However, this form has undergone a sound change
        known as 音便 (おんびん, sound convenience), which explains why the final verb stems don’t look like what one might predict.
        <br><br>
        "Sound convenience" refers to changes in pronunciation that make words easier to say, similar to how "want to" becomes "wanna" in English. In ancient Japanese, speakers modified verb roots
        to ease pronunciation with certain /t/-sound conjugations, leading to unique conjugation patterns still used today.

        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="g">んだ</span></div>
            <div><ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="g">した</span></div>
            <div><ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby><span class="g">いた</span></div>
            <div style="padding-top: 8px">ある → あ<span class="g">った</span></div>
          </template>
          <template #note>
            Plain past form
          </template>
        </GrammarExample>

        <span class="note">Note:</span>
        This exact conjugation pattern is also used to construct the <RouterLink :to="{ name: 'grammarLoader', params: { slug: te.slug } }" class="link">て-form</RouterLink> of godan verbs.
      </div>

      <div class="section">
        <div class="subtitle">Polite form</div>
        The polite form of a verb is used in formal situations, such as speaking with strangers or people of higher social status.
        To make a godan verb polite, you first move the verb on the godan five-step chart to the い row.

        <div class="chart">
          <GodanChart :selected-row="2" :show-word-selection="false" />
        </div>
        From here the verb can be conjugated in various polite forms. For the past form, you take the verb stem in the polite form (now ending in an い sound), and then add <span class="g">ました</span>.

        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">み</span><span class="g">ました</span></div>
            <div><ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">し</span><span class="g">ました</span></div>
            <div><ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby><span class="h">き</span><span class="g">ました</span></div>
            <div style="padding-top: 8px">ある → あ<span class="h">り</span><span class="g">ました</span></div>
          </template>
          <template #note>
            Polite past form
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <div class="note mt">Note:</div>
        The verb 行く (to go) is irregular in its plain past form, changing to <span class="g">行った</span> instead of following typical conjugation patterns.
        <GrammarExample>
          <template #example>
            <div>する → <span class="g">した</span></div>
            <div><ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>き</rt></ruby>た</span></div>
            <div><ruby>行<rt>い</rt></ruby>く → <span class="g"><ruby>行<rt>い</rt></ruby>った</span></div>
          </template>
          <template #note>
            Plain past form of exceptions
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <div>する → <span class="g">しました</span></div>
            <div><ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>き</rt></ruby>ました</span></div>
          </template>
          <template #note>
            Polite past form of irregular verbs
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

.subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.8;
  margin-bottom: 18px;
}

.mt {
  margin-top: 20px;
}
</style>
