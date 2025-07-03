<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import RelatedGrammarList from "@/components/RelatedGrammarList.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import { causativeVerbs as meta, ba, causativeSentences, passiveVerbs, potentialVerbs, volitionalVerbs } from "./metadataN4";
  import { godan, godanNegative, godanNonPast, godanPast, godanPastNegative, ichidan, ichidanNegative, ichidanNonPast, ichidanPast, ichidanPastNegative, imperativeVerbs, teVerb } from "../n5/metadataN5";

  const isPolite = ref(false);
  const related: { slug: string, title: string }[] = [godan, ichidan, godanNonPast, ichidanNonPast, godanNegative, ichidanNegative, godanPast,
    ichidanPast, godanPastNegative, ichidanPastNegative, teVerb, imperativeVerbs, potentialVerbs, volitionalVerbs, { slug: ba.slug, title: "Conditional verb (～ば)" }, passiveVerbs];
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
        <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">わ</span>せ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt></ruby><span class="grammar-highlight"><span class="h">た</span>せ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt></ruby><span class="grammar-highlight"><span class="h">ら</span>せ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt></ruby><span class="grammar-highlight"><span class="h">ま</span>せ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt></ruby><span class="grammar-highlight"><span class="h">ば</span>せ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt></ruby><span class="grammar-highlight"><span class="h">な</span>せ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">か</span>せ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt></ruby><span class="grammar-highlight"><span class="h">が</span>せ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt></ruby><span class="grammar-highlight"><span class="h">さ</span>せ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="structure-title">
        Ichidan
      </div>
      <div class="kanji-mb">
        <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">させ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="structure-title">
        Exceptions
      </div>
      <div class="kanji-mb">
        <span>する</span> → <span class="grammar-highlight">させ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div>
        <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>こ</rt></ruby>させ{{ isPolite ? "ます" : "る"}}</span>
      </div>
    </template>
    <template #related>
      <div class="related-title">
        Further usage of the causative form:
      </div>
      <div style="margin-bottom: 20px;">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeSentences.slug } }" class="link">{{ causativeSentences.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Other verb conjugations:
      </div>
      <RelatedGrammarList :related="related" />
    </template>
    <template #explanation>
      <div class="grammar-title">The Causative Form of Verbs</div>
      The causative form in Japanese is used when someone causes or allows someone else to do something. It can express making, letting, or having someone do an action.
      <ul>
        <li><ruby>先生<rt>せんせい</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby><span class="h">ま</span><span class="g">せた</span> → "The teacher made/let the student read a book"</li>
      </ul>
      Whether the meaning of a causative verb is "make" or "let" depends on the context of the sentence, as well as the particles used.
      <div class="note">
        <div class="note-title">Note:</div>
        For more information on how to use the causative form in sentences, see
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeSentences.slug } }" class="link">Causative sentences</RouterLink>.
      </div>

      <div class="section">
        <div class="grammar-subtitle">Causative godan verbs</div>
        To form the causative of a godan verb, refer to the godan five-step chart below. Change the final syllable
        from the う row (the dictionary form) to the あ row to get the stem for the causative form.
        <div class="chart">
          <GodanChart :selected-row="1" :show-word-selection="false" />
        </div>
        Once we have the causative stem, add <span class="g">せる</span> to the end.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">ま</span><span class="g">せる</span>
          </div>
          <div class="translation">
            to read → to make/let someone read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">さ</span><span class="g">せる</span>
          </div>
          <div class="translation">
            to speak → to make/let someone speak
          </div>
          <div class="example">
            <ruby>聞<rt>き</rt></ruby>く → <ruby>聞<rt>き</rt></ruby><span class="h">か</span><span class="g">せる</span>
          </div>
          <div class="translation">
            to hear → to make/let someone hear
          </div>
          <template #note>
            Causative form (godan)
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Causative ichidan verbs</div>
        For ichidan verbs, forming the causative is straightforward. Simply replace the final <span class="g">る</span>
        of the verb with <span class="g">られる</span>.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">させる</span>
          </div>
          <div class="translation">
            to eat → to make/let someone eat
          </div>
          <div class="example">
            <ruby>教<rt>おし</rt></ruby>える → <ruby>教<rt>おし</rt></ruby>え<span class="g">させる</span>
          </div>
          <div class="translation">
            to teach → to make/let someone teach
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">させる</span>
          </div>
          <div class="translation">
            to see → to make/let someone see
          </div>
          <template #note>
            Causative form (ichidan)
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Polite form</div>
        Causative verbs can be conjugated into polite forms, just like any other verb.
        Interestingly, once a verb is in the causative form, it becomes an ichidan verb. This means all causative verbs always follow the conjugation patterns of ichidan verbs, regardless of their original type.
        <br><br>
        To form the polite version, drop the final <span class="g">る</span> from the causative form, then add the desired polite ending, such as <span class="g">ます</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">ま</span><span class="g">せます</span>
          </div>
          <div class="translation">
            to read → to make/let someone read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">さ</span><span class="g">せます</span>
          </div>
          <div class="translation">
            to speak → to make/let someone speak
          </div>
          <div class="example">
            <ruby>聞<rt>き</rt></ruby>く → <ruby>聞<rt>き</rt></ruby><span class="h">か</span><span class="g">せます</span>
          </div>
          <div class="translation">
            to hear → to make/let someone hear
          </div>
          <div class="example">
              <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">させます</span>
          </div>
          <div class="translation">
            to eat → to make/let someone eat
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">させます</span>
          </div>
          <div class="translation">
            to see → to make/let someone see
          </div>
          <template #note>
            Polite causative form
          </template>
        </GrammarExampleSentences>
        <div class="note">
          <div class="note-title">Note:</div>
          Most polite verb forms in Japanese are made by taking the continuative (ます) stem and adding a polite ending. But the causative form works differently —
          it becomes a new verb with full conjugation ability. This means it can be conjugated into the polite form by simply adding <span class="g">ます</span> to the end of the causative stem.
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">させる</span>
          </div>
          <div class="translation">
            to do → to make/let someone do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>させる</span>
          </div>
          <div class="translation">
            to come → to make/let someone come
          </div>
          <template #note>
            Causative form of exceptions
          </template>
        </GrammarExampleSentences>
        The polite versions follow the conjugation patterns of ichidan verbs.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">させます</span>
          </div>
          <div class="translation">
            to do → to make/let someone do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>させます</span>
          </div>
          <div class="translation">
            to come → to make/let someone come
          </div>
          <template #note>
            Causative form of exceptions
          </template>
        </GrammarExampleSentences>
      </div>
    </template>
  </GrammarStructure>
</template>
