<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import RelatedGrammarList from "@/components/RelatedGrammarList.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import { imperativeVerbs as meta, godan, godanNonPast, godanNegative, godanPast, godanPastNegative, ichidan, ichidanNegative, ichidanNonPast, ichidanPast, ichidanPastNegative, naideKudasai, teKudasai, teVerb } from "./metadataN5";
  import { ba, causativeVerbs, nasai, passiveVerbs, potentialVerbs, volitionalVerbs } from "../n4/metadataN4";

  const related: { slug: string, title: string }[] = [godan, ichidan, godanNonPast, ichidanNonPast, godanNegative, ichidanNegative,
    godanPast, ichidanPast, godanPastNegative, ichidanPastNegative, teVerb, potentialVerbs, volitionalVerbs, { slug: ba.slug, title: "Conditional verb (～ば)" }, passiveVerbs, causativeVerbs];
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div class="structure-title top">
        Godan
      </div>
      <div class="kanji-mb">
        <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt></ruby><span class="grammar-highlight h">え</span>
      </div>
      <div class="kanji-mb">
        <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt></ruby><span class="grammar-highlight h">て</span>
      </div>
      <div class="kanji-mb">
        <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt></ruby><span class="grammar-highlight h">れ</span>
      </div>
      <div class="kanji-mb">
        <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt></ruby><span class="grammar-highlight h">め</span>
      </div>
      <div class="kanji-mb">
        <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt></ruby><span class="grammar-highlight h">べ</span>
      </div>
      <div class="kanji-mb">
        <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt></ruby><span class="grammar-highlight h">ね</span>
      </div>
      <div class="kanji-mb">
        <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt></ruby><span class="grammar-highlight h">け</span>
      </div>
      <div class="kanji-mb">
        <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt></ruby><span class="grammar-highlight h h">げ</span>
      </div>
      <div class="kanji-mb">
        <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt></ruby><span class="grammar-highlight h">せ</span>
      </div>
      <div class="structure-title">
        Ichidan
      </div>
      <div class="kanji-mb">
        <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">ろ</span>
      </div>
      <div class="structure-title">
        Exceptions
      </div>
      <div class="kanji-mb">
        <span>する</span> → <span class="grammar-highlight">しろ</span>
      </div>
      <div class="kanji-mb">
        <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>こ</rt></ruby>い</span>
      </div>
      <div class="kanji-mb" style="margin-top: 8px;">
        <span>くれる</span> → <span class="grammar-highlight">くれ</span>
      </div>
      <div class="structure-title">
        Negative imperative
      </div>
      <div>
        <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べる<span class="grammar-highlight">な</span>
      </div>
    </template>
    <template #related>
      <div class="related-mb">
        Other verb conjugations:
      </div>
      <RelatedGrammarList :related="related" />
    </template>
    <template #explanation>
      The imperative form is used to give commands or strong requests. It tells someone to do something,
      and is similar to saying "do (something)!" in English. It's most commonly used in urgent situations,
      on signs and labels, or military and sports contexts.
      <div class="note">
        <div class="note-title">Note:</div>
        Be careful:
        Japanese imperative forms can sound very direct, blunt, or even rude, depending on the context,
        tone, and relationship between speakers.
        Avoid using them with superiors, elders, or strangers unless you're very confident it's appropriate.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>野菜<rt>やさい</rt></ruby>を<span class="g">食べろ</span>！
        </template>
        <template #translation>
          Eat your vegetables!
        </template>
      </GrammarExample>

      Because the standard imperative can sound harsh, Japanese often uses softer or more polite alternatives:
      <ul class="alternatives-list">
        <li><RouterLink :to="{ name: 'grammarLoader', params: { slug: nasai.slug } }" class="link">{{ nasai.title }}</RouterLink> (for softer commands)</li>
        <li><RouterLink :to="{ name: 'grammarLoader', params: { slug: teKudasai.slug } }" class="link">{{ teKudasai.title }}</RouterLink> (for polite requests)</li>
        <li><RouterLink :to="{ name: 'grammarLoader', params: { slug: naideKudasai.slug } }" class="link">{{ naideKudasai.title }}</RouterLink> (for negative requests)</li>
      </ul>

      <div class="section">
        <div class="grammar-subtitle">Imperative godan verbs</div>
        To form the imperative of a godan verb, refer to the godan five-step chart below, and change the final syllable
        from the う row (dictionary form) to the え row (imperative form).
        <div class="chart">
          <GodanChart :selected-row="4" :show-word-selection="false" />
        </div>
        Unlike most other godan conjugations, the imperative form does not use any suffixes, meaning that the verb stem itself is the imperative form.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">め</span>
          </div>
          <div class="translation">
            to read → read!
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">せ</span>
          </div>
          <div class="translation">
            to speak → speak!
          </div>
          <div class="example">
            <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">け</span>
          </div>
          <div class="translation">
            to go → go!
          </div>
          <template #note>
            Imperative form (godan)
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Imperative ichidan verbs</div>
        For ichidan verbs, you form the imperative by replacing the final る
        of the verb with <span class="g">ろ</span>.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">ろ</span>
          </div>
          <div class="translation">
            to eat → eat!
          </div>
          <div class="example">
            <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">ろ</span>
          </div>
          <div class="translation">
            to fall → fall!
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">ろ</span>
          </div>
          <div class="translation">
            to see → see!
          </div>
          <template #note>
            Imperative form (ichidan)
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        Additionally, the verb くれる (to give) also has an irregular imperative form.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">しろ</span>
          </div>
          <div class="translation">
            to do → do!
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>い</span>
          </div>
          <div class="translation">
            to come → come!
          </div>
          <div class="example">
            くれる → <span class="g">くれ</span>
          </div>
          <div class="translation">
            to give → give!
          </div>
          <template #note>
            Imperative form of exceptions
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-title">Negative Imperative</div>
        To tell someone not to do something, use:
        <ul>
          <li>[Verb in dictionary form] + <span class="g">な</span></li>
        </ul>
        Like the regular imperative form, the negative imperative is very direct and can sound blunt or harsh.
        It's generally best reserved for moments of urgency, strong emotion, or when speaking strictly to someone
        of lower status, like a child.
        <GrammarExample>
          <template #example>
            そのラーメンを<ruby>食<rt>た</rt></ruby>べる<span class="g">な</span>！
          </template>
          <template #translation>
            Don't eat that ramen!
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.alternatives-list {
  margin-top: 4px;

  li:not(:last-child) {
    margin-bottom: 4px;
  }
}
</style>
