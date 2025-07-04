<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import RelatedGrammarList from "@/components/RelatedGrammarList.vue";
  import { volitionalVerbs as meta, ba, causativePassiveVerbs, causativeVerbs, passiveVerbs, potentialVerbs } from "./metadataN4";
  import { godan, godanNegative, godanNonPast, godanPast, godanPastNegative, ichidan, ichidanNegative, ichidanNonPast, ichidanPast, ichidanPastNegative, imperativeVerbs, teVerb } from "../n5/metadataN5";

  const isPolite = ref(false);
  const related: { slug: string, title: string }[] = [godan, ichidan, godanNonPast, ichidanNonPast, godanNegative, ichidanNegative,
    godanPast, ichidanPast, godanPastNegative, ichidanPastNegative, teVerb, imperativeVerbs, potentialVerbs, { slug: ba.slug, title: "Conditional verb (～ば)" }, passiveVerbs, causativeVerbs, causativePassiveVerbs];
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
        <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt></ruby>
        <span class="grammar-highlight">
          <span v-if="isPolite"><span class="h">い</span>ましょう</span><span v-else><span class="h">お</span>う</span>
        </span>
      </div>
      <div class="kanji-mb">
        <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt></ruby>
        <span class="grammar-highlight">
          <span v-if="isPolite"><span class="h">ち</span>ましょう</span><span v-else><span class="h">と</span>う</span>
        </span>
      </div>
      <div class="kanji-mb">
        <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt></ruby>
        <span class="grammar-highlight">
          <span v-if="isPolite"><span class="h">り</span>ましょう</span><span v-else><span class="h">ろ</span>う</span>
        </span>
      </div>
      <div class="kanji-mb">
        <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt></ruby>
        <span class="grammar-highlight">
          <span v-if="isPolite"><span class="h">み</span>ましょう</span><span v-else><span class="h">も</span>う</span>
        </span>
      </div>
      <div class="kanji-mb">
        <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt></ruby>
        <span class="grammar-highlight">
          <span v-if="isPolite"><span class="h">び</span>ましょう</span><span v-else><span class="h">ぼ</span>う</span>
        </span>
      </div>
      <div class="kanji-mb">
        <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt></ruby>
        <span class="grammar-highlight">
          <span v-if="isPolite"><span class="h">に</span>ましょう</span><span v-else><span class="h">の</span>う</span>
        </span>
      </div>
      <div class="kanji-mb">
        <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt></ruby>
        <span class="grammar-highlight">
          <span v-if="isPolite"><span class="h">き</span>ましょう</span><span v-else><span class="h">こ</span>う</span>
        </span>
      </div>
      <div class="kanji-mb">
        <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt></ruby>
        <span class="grammar-highlight">
          <span v-if="isPolite"><span class="h">ぎ</span>ましょう</span><span v-else><span class="h">ご</span>う</span>
        </span>
      </div>
      <div class="kanji-mb">
        <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt></ruby>
        <span class="grammar-highlight">
          <span v-if="isPolite"><span class="h">し</span>ましょう</span><span v-else><span class="h">そ</span>う</span>
        </span>
      </div>
      <div class="structure-title">
        Ichidan
      </div>
      <div class="kanji-mb">
        <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">{{ isPolite ? "ましょう" : "よう"}}</span>
      </div>
      <div class="structure-title">
        Exceptions
      </div>
      <div class="kanji-mb">
        <span>する</span> → <span class="grammar-highlight">し{{ isPolite ? "ましょう" : "よう"}}</span>
      </div>
      <div>
        <span><ruby>来<rt>く</rt>る</ruby></span> →
        <span v-if="isPolite"><span class="grammar-highlight"><ruby>来<rt>き</rt></ruby>ましょう</span></span>
        <span v-else><span class="grammar-highlight"><ruby>来<rt>こ</rt></ruby>よう</span></span>
      </div>
    </template>
    <template #related>
      <div class="related-mb">
        Other verb conjugations:
      </div>
      <RelatedGrammarList :related="related" />
    </template>
    <template #explanation>
      <div class="grammar-title">The Volitional Form of Verbs</div>
      The volitional form is used to express an intention to do something or to suggest doing something together — much like "let's" or "shall we?" in English.
      <GrammarExample>
        <template #example>
          ラーメンを<ruby>食<rt>た</rt></ruby>べる → ラーメンを<ruby>食<rt>た</rt></ruby>べ<span class="g">よう</span>
        </template>
        <template #translation>
          (I) eat ramen → Let's eat ramen
        </template>
      </GrammarExample>
      
      <div class="section">
        <div class="grammar-title">Casual Volitional: ～う・～よう</div>
        This form is used in casual speech when suggesting something or expressing your own intent. The conjugation depends on the verb type:

        <div class="section">
          <div class="grammar-subtitle">Volitional godan verbs</div>
          To form the volitional of a godan verb, refer to the godan five-step chart below. Change the final syllable
          from the う row (the dictionary form) to the お row to get the stem for the volitional form.
          <div class="chart">
            <GodanChart :selected-row="5" :word-selection="1" :show-word-selection="false" />
          </div>
          Once we have the volitional stem, simply add <span class="g">う</span> to the end.
          <GrammarExampleSentences>
            <div class="example">
              <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">も</span><span class="g">う</span>
            </div>
            <div class="translation">
              to read → let's read
            </div>
            <div class="example">
              <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">そ</span><span class="g">う</span>
            </div>
            <div class="translation">
              to speak → let's speak
            </div>
            <div class="example">
              <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">こ</span><span class="g">う</span>
            </div>
            <div class="translation">
              to go → let's go
            </div>
            <template #note>
              Volitional form (godan)
            </template>
          </GrammarExampleSentences>
          <GrammarExample>
            <template #example>
              <ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby><span class="h">こ</span><span class="g">う</span>
            </template>
            <template #translation>
              Let's go watch a movie
            </template>
          </GrammarExample>
        </div>

        <div class="section">
          <div class="grammar-subtitle">Volitional ichidan verbs</div>
          For ichidan verbs, forming the volitional is straightforward. Simply replace the final <span class="g">る</span>
          of the verb with <span class="g">よう</span>.
          <GrammarExampleSentences>
            <div class="example">
              <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">よう</span>
            </div>
            <div class="translation">
              to eat → let's eat
            </div>
            <div class="example">
              <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">よう</span>
            </div>
            <div class="translation">
              to fall → let's fall
            </div>
            <div class="example">
              <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">よう</span>
            </div>
            <div class="translation">
              to see → let's see
            </div>
            <template #note>
              Volitional form (ichidan)
            </template>
          </GrammarExampleSentences>
          <GrammarExample>
            <template #example>
              <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に<ruby>出<rt>で</rt></ruby><span class="g">よう</span>
            </template>
            <template #translation>
              Let's go out before it rains
            </template>
          </GrammarExample>
        </div>
      </div>

      <div class="section">
        <div class="grammar-title">Polite Volitional: ～ましょう</div>
        The polite volitional form is actually formed not from the volitional stem, but from the continuative stem (ます-stem).
        <div class="chart">
          <GodanChart :selected-row="2" :word-selection="1" :show-word-selection="false" />
        </div>
        This is a result of how politeness in Japanese is modular — rather than inventing a new volitional conjugation for polite speech,
        Japanese reuses the politeness system (the ます-form) and simply attaches it to the verb's continuative stem.
        In that way, <span class="g">～ましょう</span> is not a true volitional conjugation on its own — it's just the polite way of expressing volition using the same stem that powers the rest of polite speech.
        <div class="note">
          <div class="note-title">Note:</div>
          This differs from the polite form of the <RouterLink :to="{ name: 'grammarLoader', params: { slug: potentialVerbs.slug } }" class="link">potential conjugation</RouterLink>,
          which is formed from the potential stem.
        </div>
        To form the polite version, Attach <span class="g">～ましょう</span> to the ます-stem of a verb.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">み</span><span class="g">ましょう</span>
          </div>
          <div class="translation">
            to read → let's read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">し</span><span class="g">ましょう</span>
          </div>
          <div class="translation">
            to speak → let's speak
          </div>
          <div class="example">
            <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">き</span><span class="g">ましょう</span>
          </div>
          <div class="translation">
            to go → let's go
          </div>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">ましょう</span>
          </div>
          <div class="translation">
            to eat → let's eat
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">ましょう</span>
          </div>
          <div class="translation">
            to see → let's see
          </div>
          <template #note>
            Polite volitional form
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-title">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">しよう</span>
          </div>
          <div class="translation">
            to do → let's do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>よう</span>
          </div>
          <div class="translation">
            to come → let's come
          </div>
          <template #note>
            Plain volitional form of exceptions
          </template>
        </GrammarExampleSentences>
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">しましょう</span>
          </div>
          <div class="translation">
            to do → let's do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>き</rt></ruby>ましょう</span>
          </div>
          <div class="translation">
            to come → let's come
          </div>
          <template #note>
            Polite volitional form of exceptions
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-title">Volitional Questions: "Shall we…?" / "Wanna…?"</div>
        The volitional form can also be used in questions to suggest doing something together. This is often done by adding the question particle か.
        <GrammarExample>
          <template #example>
            <ruby>行<rt>い</rt></ruby><span class="h">こ</span><span class="g">う</span>か？
          </template>
          <template #translation>
            Shall we go?
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>食<rt>た</rt></ruby>べに<ruby>行<rt>い</rt></ruby><span class="h">き</span><span class="g">ましょう</span>か？
          </template>
          <template #translation>
            Shall we go eat?
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          In casual speech, か is often dropped, and the volitional form is used on its own to suggest an action. This gives it a slightly softer, more relaxed tone.
        </div>
        <GrammarExample>
          <template #example>
            <ruby>帰<rt>かえ</rt></ruby><span class="h">ろ</span><span class="g">う</span>？
          </template>
          <template #translation>
            Wanna head home?
          </template>
        </GrammarExample>

        <div class="section">
          <div class="grammar-subtitle">Volitional for solo offers</div>
          The volitional form can also be used when the speaker is offering to do something themselves.
          In this case, it's still a suggestion, but from the speaker to the listener, often meaning "Shall I…?" or "Want me to…?"
          <GrammarExample>
            <template #example>
              <ruby>手伝<rt>てつだ</rt></ruby><span class="h">い</span><span class="g">ましょう</span>か？
            </template>
            <template #translation>
              Shall I help? / Would you like some help?
            </template>
          </GrammarExample>
          This usage is especially common with verbs like 手伝う (てつだう, to help), 持つ (もつ, to carry), or other actions that involve assisting someone.
        </div>
      </div>
    </template>
  </GrammarStructure>
</template>
