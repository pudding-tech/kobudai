<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import RelatedGrammarList from "@/components/RelatedGrammarList.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import { passiveVerbs as meta, ba, causativeVerbs, passiveSentences, potentialVerbs, volitionalVerbs } from "./metadataN4";
  import { godan, godanNegative, godanNonPast, godanPast, godanPastNegative, ichidan, ichidanNegative, ichidanNonPast, ichidanPast, ichidanPastNegative, imperativeVerbs, teVerb } from "../n5/metadataN5";

  const isPolite = ref(false);
  const related: { slug: string, title: string }[] = [godan, ichidan, godanNonPast, ichidanNonPast, godanNegative, ichidanNegative, godanPast,
    ichidanPast, godanPastNegative, ichidanPastNegative, teVerb, imperativeVerbs, potentialVerbs, volitionalVerbs, { slug: ba.slug, title: "Conditional verb (～ば)" }, causativeVerbs];
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
        <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">わ</span>れ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt></ruby><span class="grammar-highlight"><span class="h">た</span>れ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt></ruby><span class="grammar-highlight"><span class="h">ら</span>れ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt></ruby><span class="grammar-highlight"><span class="h">ま</span>れ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt></ruby><span class="grammar-highlight"><span class="h">ば</span>れ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt></ruby><span class="grammar-highlight"><span class="h">な</span>れ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">か</span>れ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt></ruby><span class="grammar-highlight"><span class="h">が</span>れ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt></ruby><span class="grammar-highlight"><span class="h">さ</span>れ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="structure-title">
        Ichidan
      </div>
      <div class="kanji-mb">
        <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">られ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="structure-title">
        Exceptions
      </div>
      <div class="kanji-mb">
        <span>する</span> → <span class="grammar-highlight">され{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div>
        <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>こ</rt></ruby>られ{{ isPolite ? "ます" : "る"}}</span>
      </div>
    </template>
    <template #related>
      <div class="related-title">
        Further usage of the passive form:
      </div>
      <div style="margin-bottom: 20px;">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: passiveSentences.slug } }" class="link">{{ passiveSentences.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Other verb conjugations:
      </div>
      <RelatedGrammarList :related="related" />
    </template>
    <template #explanation>
      <div class="grammar-title">The Passive Form of Verbs</div>
      Japanese passive voice is used to express that something is done to someone, often with a nuance of inconvenience, surprise, or lack of control.
      It corresponds to the English "to be [verb]ed", like "was told", "was eaten", or "was seen".
      <br><br>
      The passive form changes the focus of the sentence from the <b>doer</b> to the <b>receiver</b> of the action.
      <ul>
        <li><ruby>犬<rt>いぬ</rt></ruby>が<ruby>私<rt>わたし</rt></ruby>を<ruby>噛<rt>か</rt></ruby>んだ → "The dog bit me"</li>
        <li><ruby>私<rt>わたし</rt></ruby>は<ruby>犬<rt>いぬ</rt></ruby>に<ruby>噛<rt>か</rt></ruby><span class="h">ま</span><span class="g">れた</span> → "I was bitten by the dog" (emphasis on me)</li>
      </ul>
      <div class="note">
        <div class="note-title">Note:</div>
        For more information on how to use the passive form in sentences, see
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: passiveSentences.slug } }" class="link">Passive sentences</RouterLink>.
      </div>

      <div class="section">
        <div class="grammar-subtitle">Passive godan verbs</div>
        To create the passive form a godan verb we can take a look at the godan five-step chart again. Move up on the chart, from the う row to the あ row, to find the stem for the passive form.
        <div class="chart">
          <GodanChart :selected-row="1" :show-word-selection="false" />
        </div>
        Once we have the passive stem, add <span class="g">れる</span> to the end.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">ま</span><span class="g">れる</span>
          </div>
          <div class="translation">
            to read → to be read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">さ</span><span class="g">れる</span>
          </div>
          <div class="translation">
            to speak → to be talked about
          </div>
          <div class="example">
            <ruby>聞<rt>き</rt></ruby>く → <ruby>聞<rt>き</rt></ruby><span class="h">か</span><span class="g">れる</span>
          </div>
          <div class="translation">
            to hear → to be heard
          </div>
          <template #note>
            Passive form (godan)
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Passive ichidan verbs</div>
        For ichidan verbs, forming the passive is straightforward. Simply replace the final <span class="g">る</span>
        of the verb with <span class="g">られる</span>.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">られる</span>
          </div>
          <div class="translation">
            to eat → to be eaten
          </div>
          <div class="example">
            <ruby>教<rt>おし</rt></ruby>える → <ruby>教<rt>おし</rt></ruby>え<span class="g">られる</span>
          </div>
          <div class="translation">
            to teach → to be taught
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">られる</span>
          </div>
          <div class="translation">
            to see → to be seen
          </div>
          <template #note>
            Passive form (ichidan)
          </template>
        </GrammarExampleSentences>
        <div class="note">
          <div class="note-title">Note:</div>
          You might notice that the passive form of ichidan verbs is identical to the
          <RouterLink :to="{ name: 'grammarLoader', params: { slug: potentialVerbs.slug } }" class="link">potential form</RouterLink>,
          as they both use the same ending <span class="g">られる</span>. Which usage is intended depends on the context of the sentence,
          as well as the particles used.
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Polite form</div>
        Passive verbs can be conjugated into polite forms, just like any other verb.
        Interestingly, once a verb is in the passive form, it becomes an ichidan verb. This means all passive verbs always follow the conjugation patterns of ichidan verbs, regardless of their original type.
        <br><br>
        To form the polite version, drop the final <span class="g">る</span> from the passive form, then add the desired polite ending, such as <span class="g">ます</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">ま</span><span class="g">れます</span>
          </div>
          <div class="translation">
            to read → to be read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">さ</span><span class="g">れます</span>
          </div>
          <div class="translation">
            to speak → to be talked about
          </div>
          <div class="example">
            <ruby>聞<rt>き</rt></ruby>く → <ruby>聞<rt>き</rt></ruby><span class="h">か</span><span class="g">れます</span>
          </div>
          <div class="translation">
            to hear → to be heard
          </div>
          <div class="example">
              <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">られます</span>
          </div>
          <div class="translation">
            to eat → to be eaten
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">られます</span>
          </div>
          <div class="translation">
            to see → to be seen
          </div>
          <template #note>
            Polite passive form
          </template>
        </GrammarExampleSentences>
        <div class="note">
          <div class="note-title">Note:</div>
          Most polite verb forms in Japanese are made by taking the continuative (ます) stem and adding a polite ending. But the passive form works differently —
          it becomes a new verb with full conjugation ability. This means it can be conjugated into the polite form by simply adding <span class="g">ます</span> to the end of the passive stem.
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">される</span>
          </div>
          <div class="translation">
            to do → to be done
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>られる</span>
          </div>
          <div class="translation">
            to come → to be come to
          </div>
          <template #note>
            Passive form of exceptions
          </template>
        </GrammarExampleSentences>
        The polite versions follow the conjugation patterns of ichidan verbs.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">されます</span>
          </div>
          <div class="translation">
            to do → to be done
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>られます</span>
          </div>
          <div class="translation">
            to come → to be come to
          </div>
          <template #note>
            Polite passive form of exceptions
          </template>
        </GrammarExampleSentences>
      </div>
    </template>
  </GrammarStructure>
</template>
