<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import { godanPast as meta, godan, godanNonPast, godanNegative, godanPastNegative, ichidanPast, imperativeVerbs, teVerb } from "./metadataN5";
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
        <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt></ruby><span v-if="isPolite" class="grammar-highlight"><span class="h">い</span>ました</span><span v-else class="grammar-highlight">った</span>
      </div>
      <div class="kanji-mb">
        <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt></ruby><span v-if="isPolite" class="grammar-highlight"><span class="h">ち</span>ました</span><span v-else class="grammar-highlight">った</span>
      </div>
      <div class="kanji-mb">
        <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt></ruby><span v-if="isPolite" class="grammar-highlight"><span class="h">り</span>ました</span><span v-else class="grammar-highlight">った</span>
      </div>
      <div class="kanji-mb" style="margin-top: 15px">
        <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt></ruby><span v-if="isPolite" class="grammar-highlight"><span class="h">み</span>ました</span><span v-else class="grammar-highlight">んだ</span>
      </div>
      <div class="kanji-mb">
        <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt></ruby><span v-if="isPolite" class="grammar-highlight"><span class="h">び</span>ました</span><span v-else class="grammar-highlight">んだ</span>
      </div>
      <div class="kanji-mb">
        <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt></ruby><span v-if="isPolite" class="grammar-highlight"><span class="h">に</span>ました</span><span v-else class="grammar-highlight">んだ</span>
      </div>
      <div class="kanji-mb" style="margin-top: 15px">
        <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt></ruby><span v-if="isPolite" class="grammar-highlight"><span class="h">き</span>ました</span><span v-else class="grammar-highlight">いた</span>
      </div>
      <div class="kanji-mb">
        <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt></ruby><span v-if="isPolite" class="grammar-highlight"><span class="h">ぎ</span>ました</span><span v-else class="grammar-highlight">いだ</span>
      </div>
      <div class="kanji-mb">
        <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt></ruby><span v-if="isPolite" class="grammar-highlight"><span class="h">し</span>ました</span><span v-else class="grammar-highlight">した</span>
      </div>
      <div class="structure-title">
        Exceptions
      </div>
      <div class="kanji-mb">
        <span>する</span> → <span class="grammar-highlight">し{{ isPolite ? "ました" : "た"}}</span>
      </div>
      <div :class="{ 'kanji-mb': !isPolite }">
        <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>き</rt></ruby>{{ isPolite ? "ました" : "た"}}</span>
      </div>
      <div v-if="!isPolite">
        <span><ruby>行<rt>い</rt>く</ruby></span> → <span class="grammar-highlight"><ruby>行<rt>い</rt></ruby>った</span>
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
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPastNegative.slug } }" class="link">{{ godanPastNegative.title }}</RouterLink>
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
      <div class="grammar-title">The Past Form of Godan Verbs</div>
      The past form of Japanese verbs is used to describe actions that have already been completed, or events that have already happened.

      <div class="section">
        <div class="grammar-subtitle">Plain form (informal)</div>
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

        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="g">んだ</span>
          </div>
          <div class="translation">
            to read → read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="g">した</span>
          </div>
          <div class="translation">
            to speak → spoke
          </div>
          <div class="example">
            <ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby><span class="g">いた</span>
          </div>
          <div class="translation">
            to write → wrote
          </div>
          <div class="example">
            ある → あ<span class="g">った</span>
          </div>
          <div class="translation">
            to exist → existed (inanimate)
          </div>
          <template #note>
            Plain past form
          </template>
        </GrammarExampleSentences>

        <div class="note">
          <div class="note-title">Note:</div>
          This exact conjugation pattern is also used to construct the <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">て-form</RouterLink> of godan verbs.
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Polite form</div>
        The polite form of a verb is used in formal situations, such as speaking with strangers or people of higher social status.
        To make a godan verb polite, you first move the verb on the godan five-step chart to the い row.

        <div class="chart">
          <GodanChart :selected-row="2" :show-word-selection="false" />
        </div>
        From here the verb can be conjugated in various polite forms. For the past form, you take the verb stem in the polite form (now ending in an い sound), and then add <span class="g">ました</span>.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">み</span><span class="g">ました</span>
          </div>
          <div class="translation">
            to read → read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">し</span><span class="g">ました</span>
          </div>
          <div class="translation">
            to speak → spoke
          </div>
          <div class="example">
            <ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby><span class="h">き</span><span class="g">ました</span>
          </div>
          <div class="translation">
            to write → wrote
          </div>
          <div class="example">
            ある → あ<span class="h">り</span><span class="g">ました</span>
          </div>
          <div class="translation">
            to exist → existed (inanimate)
          </div>
          <template #note>
            Polite past form
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <div class="note">
          <div class="note-title">Note:</div>
          The verb 行く (to go) is irregular in its plain past form, changing to <span class="g">行った</span> instead of following typical conjugation patterns.
        </div>
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
          <div class="example">
            <ruby>行<rt>い</rt></ruby>く → <span class="g"><ruby>行<rt>い</rt></ruby>った</span>
          </div>
          <div class="translation">
            to go → went
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
