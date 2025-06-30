<script setup lang="ts">
  import { ref } from "vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import RelatedGrammarList from "@/components/RelatedGrammarList.vue";
  import { potentialVerbs as meta, ba, passiveVerbs, volitionalVerbs } from "./metadataN4";
  import { godan, godanNegative, godanNonPast, godanPast, godanPastNegative, ichidan, ichidanNegative, ichidanNonPast, ichidanPast, ichidanPastNegative } from "../n5/metadataN5";

  const isPolite = ref(false);
  const related: { slug: string, title: string }[] = [godan, ichidan, godanNonPast, ichidanNonPast, godanNegative, ichidanNegative,
    godanPast, ichidanPast, godanPastNegative, ichidanPastNegative, volitionalVerbs, { slug: ba.slug, title: "Conditional verb (～ば)" }, passiveVerbs];
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div class="structure-title top">
        Godan
      </div>
      <div class="kanji-mb">
        <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">え</span>{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt></ruby><span class="grammar-highlight"><span class="h">て</span>{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt></ruby><span class="grammar-highlight"><span class="h">れ</span>{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt></ruby><span class="grammar-highlight"><span class="h">め</span>{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt></ruby><span class="grammar-highlight"><span class="h">べ</span>{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt></ruby><span class="grammar-highlight"><span class="h">ね</span>{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">け</span>{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt></ruby><span class="grammar-highlight"><span class="h">げ</span>{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt></ruby><span class="grammar-highlight"><span class="h">せ</span>{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="structure-title">
        Ichidan
      </div>
      <div class="kanji-mb">
        <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">られ{{ isPolite ? "ます" : "る"}}</span> ( <span class="grammar-highlight">れ{{ isPolite ? "ます" : "る"}}</span> )
      </div>
      <div class="structure-title">
        Exceptions
      </div>
      <div class="kanji-mb">
        <span>する</span> → <span class="grammar-highlight">でき{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div>
        <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>こ</rt></ruby>られ{{ isPolite ? "ます" : "る"}}</span>
      </div>
    </template>
    <template #related>
      <div class="related-mb">
        Other verb conjugations:
      </div>
      <RelatedGrammarList :related="related" />
    </template>
    <template #explanation>
      <div class="grammar-title">The Potential Form of Verbs</div>
      Potential verbs express the ability or possibility to perform an action. This is equivalent to saying "can" or "be able to" in English. For example, "I can eat" or "I am able to swim."
      The construction and use of potential verbs vary depending on whether the verb is godan or ichidan.
      <br><br>
      To indicate potentiality, the verb is conjugated into a specific form known as the potential form. This transformation alters the verb so it carries the meaning of ability or possibility.

      <div class="note">
        <div class="note-title">Note:</div>
        In sentences with potential verbs, the object of the action is typically marked with the particle が instead of を.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>魚<rt>さかな</rt></ruby>を<ruby>食<rt>た</rt></ruby>べる →
          <ruby>魚<rt>さかな</rt></ruby>が<ruby>食<rt>た</rt></ruby>べ<span class="g">られる</span>
        </template>
        <template #translation>
          I eat fish → I can eat fish
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">Potential godan verbs</div>
        To create the potential form a godan verb we can take a look at the godan five-step chart again. Move down on the chart, from the う row to the え row, to find the stem for the potential form.
        <div class="chart">
          <GodanChart :selected-row="4" :show-word-selection="false" />
        </div>
        Once we have the potential stem, simply add <span class="g">る</span> to the end.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">め</span><span class="g">る</span>
          </div>
          <div class="translation">
            to read → can read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">せ</span><span class="g">る</span>
          </div>
          <div class="translation">
            to speak → can speak
          </div>
          <div class="example">
            <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">け</span><span class="g">る</span>
          </div>
          <div class="translation">
            to go → can go
          </div>
          <template #note>
            Potential form (godan)
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Potential ichidan verbs</div>
        For ichidan verbs, forming the potential is straightforward. Simply replace the final <span class="g">る</span>
        of the verb with <span class="g">られる</span>.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">られる</span>
          </div>
          <div class="translation">
            to eat → can eat
          </div>
          <div class="example">
            <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">られる</span>
          </div>
          <div class="translation">
            to fall → can fall
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">られる</span>
          </div>
          <div class="translation">
            to see → can see
          </div>
          <template #note>
            Potential form (ichidan)
          </template>
        </GrammarExampleSentences>
        <div class="note">
          <div class="note-title">Note:</div>
          In modern Japanese, the <span class="g">ら</span> in <span class="g">られる</span> is often dropped for simplicity, especially in casual contexts.
        </div>
        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">れる</span>
          </div>
          <div class="translation">
            to eat → can eat
          </div>
          <div class="example">
            <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">れる</span>
          </div>
          <div class="translation">
            to fall → can fall
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">れる</span>
          </div>
          <div class="translation">
            to see → can see
          </div>
          <template #note>
            Common potential form of Ichidan verbs
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Polite form</div>
        Potential verbs can be conjugated into polite forms, just like any other verb.
        Interestingly, once a verb is in the potential form, it becomes an ichidan verb. This means all potential verbs always follow the conjugation patterns of ichidan verbs, regardless of their original type.
        <br><br>
        To form the polite version, drop the final <span class="g">る</span> from the potential form, then add the desired polite ending, such as <span class="g">ます</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">め</span><span class="g">ます</span>
          </div>
          <div class="translation">
            to read → can read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">せ</span><span class="g">ます</span>
          </div>
          <div class="translation">
            to speak → can speak
          </div>
          <div class="example">
            <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">け</span><span class="g">ます</span>
          </div>
          <div class="translation">
            to go → can go
          </div>
          <div class="example">
              <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">られます</span>
          </div>
          <div class="translation">
            to eat → can eat
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">られます</span>
          </div>
          <div class="translation">
            to see → can see
          </div>
          <template #note>
            Polite potential form
          </template>
        </GrammarExampleSentences>
        <div class="note">
          <div class="note-title">Note:</div>
          Most polite verb forms in Japanese are made by taking the continuative (ます) stem and adding a polite ending. But the potential form works differently —
          it becomes a new verb with full conjugation ability. This means it can be conjugated into the polite form by simply adding <span class="g">ます</span> to the end of the potential stem.
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">できる</span>
          </div>
          <div class="translation">
            to do → can do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>られる</span>
          </div>
          <div class="translation">
            to come → can come
          </div>
          <template #note>
            Potential form of exceptions
          </template>
        </GrammarExampleSentences>
        The polite versions follow the conjugation patterns of ichidan verbs.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">できます</span>
          </div>
          <div class="translation">
            to do → can do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>られます</span>
          </div>
          <div class="translation">
            to come → can come
          </div>
          <template #note>
            Polite potential form of exceptions
          </template>
        </GrammarExampleSentences>
      </div>
    </template>
  </GrammarStructure>
</template>
