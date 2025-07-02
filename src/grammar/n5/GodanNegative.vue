<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import { godanNegative as meta, godan, godanNonPast, godanPast, godanPastNegative, ichidanNegative, imperativeVerbs, teVerb } from "./metadataN5";
  import { ba, causativeVerbs, passiveVerbs, potentialVerbs, volitionalVerbs } from "@/grammar/n4/metadataN4";

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
        <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">{{ isPolite ? "い" : "わ"}}</span>{{ isPolite ? "ません" : "ない"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt></ruby><span class="grammar-highlight"><span class="h">{{ isPolite ? "ち" : "た"}}</span>{{ isPolite ? "ません" : "ない"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt></ruby><span class="grammar-highlight"><span class="h">{{ isPolite ? "り" : "ら"}}</span>{{ isPolite ? "ません" : "ない"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt></ruby><span class="grammar-highlight"><span class="h">{{ isPolite ? "み" : "ま"}}</span>{{ isPolite ? "ません" : "ない"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt></ruby><span class="grammar-highlight"><span class="h">{{ isPolite ? "び" : "ば"}}</span>{{ isPolite ? "ません" : "ない"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt></ruby><span class="grammar-highlight"><span class="h">{{ isPolite ? "に" : "な"}}</span>{{ isPolite ? "ません" : "ない"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">{{ isPolite ? "き" : "か"}}</span>{{ isPolite ? "ません" : "ない"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt></ruby><span class="grammar-highlight"><span class="h">{{ isPolite ? "ぎ" : "が"}}</span>{{ isPolite ? "ません" : "ない"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt></ruby><span class="grammar-highlight"><span class="h">{{ isPolite ? "し" : "さ"}}</span>{{ isPolite ? "ません" : "ない"}}</span>
      </div>
      <div class="structure-title">
        Exceptions
      </div>
      <div class="kanji-mb">
        <span>する</span> → <span class="grammar-highlight">し{{ isPolite ? "ません" : "ない"}}</span>
      </div>
      <div>
        <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>{{ isPolite ? "き" : "こ"}}</rt>{{ isPolite ? "ません" : "ない"}}</ruby></span>
      </div>
      <div v-if="!isPolite" style="padding-top: 10px">
        <span>ある</span> → <span class="grammar-highlight">ない</span>
      </div>
    </template>
    <template #related>
      <div class="related-mb">
        Negative form of ichidan verbs:
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanNegative.slug } }" class="link">{{ ichidanNegative.title }}</RouterLink>
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
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPast.slug } }" class="link">{{ godanPast.title }}</RouterLink>
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
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeVerbs.slug } }" class="link">{{ causativeVerbs.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="grammar-title">The Negative Form of Godan Verbs</div>
      Negative forms of Japanese verbs indicate that an action is not taking place, or will not take place in the future.

      <div class="section">
        <div class="grammar-subtitle">Plain negative (informal)</div>
        To create the plain negative form of a godan verb we can take a look at the godan five-step chart again. Move up on the chart, from the う row to the あ row, changing the sound of the final syllable.
        <div class="chart">
          <GodanChart :selected-row="1" :word-selection="2" :show-word-selection="false" />
        </div>
        Once we have the plain negative stem, simply add <span class="g">ない</span> to the end.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">ま</span><span class="g">ない</span>
          </div>
          <div class="translation">
            to read → to not read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">さ</span><span class="g">ない</span>
          </div>
          <div class="translation">
            to speak → to not speak
          </div>
          <div class="example">
            <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">か</span><span class="g">ない</span>
          </div>
          <div class="translation">
            to go → to not go
          </div>
          <template #note>
            Plain negative form
          </template>
        </GrammarExampleSentences>
        <div class="note">
          <div class="note-title">Note:</div>
          The negative plain forms of verbs that end with the hiragana う change into <span class="h">わ</span>, not あ — making the negative <span class="h">わ</span><span class="g">ない</span>, and not あない.
        </div>
        <GrammarExampleSentences>
          <div class="example">
            <ruby>買<rt>か</rt></ruby>う → <ruby>買<rt>か</rt></ruby><span class="h">わ</span><span class="g">ない</span>
          </div>
          <div class="translation">
            to buy → to not buy
          </div>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Polite form</div>
        The polite form of a verb is used in formal situations, such as speaking with strangers or people of higher social status.
        To find the godan polite stem, first move the verb on the godan five-step chart to the い row.

        <div class="chart">
          <GodanChart :selected-row="2" :show-word-selection="false" />
        </div>
        From here the verb can be conjugated in various polite forms. For the negative form, you take the verb stem in the polite form (now ending in an い sound), and then add <span class="g">ません</span>.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">み</span><span class="g">ません</span>
          </div>
          <div class="translation">
            to read → to not read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">し</span><span class="g">ません</span>
          </div>
          <div class="translation">
            to speak → to not speak
          </div>
          <div class="example">
            <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">き</span><span class="g">ません</span>
          </div>
          <div class="translation">
            to go → to not go
          </div>
          <div class="example">
            ある → あ<span class="h">り</span><span class="g">ません</span>
          </div>
          <div class="translation">
            to exist → to not exist (inanimate)
          </div>
          <template #note>
            Polite negative form
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <div class="note">
          <div class="note-title">Note:</div>
          The verb ある (to exist, for inanimate objects) is irregular in its plain negative form, transforming to <span class="g">ない</span> instead of following typical conjugation patterns.
        </div>
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
          <div class="example">
            ある → <span class="g">ない</span>
          </div>
          <div class="translation">
            to exist → to not exist (inanimate)
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
