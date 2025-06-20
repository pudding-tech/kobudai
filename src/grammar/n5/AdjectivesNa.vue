<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { adjectivesNa as meta, adjectivesI } from "./metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(polite) => isPolite = polite">
    <template #title> {{ meta.title }}</template>
    <template #subtitle> {{ meta.subtitle }}</template>
    <template #structure>
      <div>...は + <span class="grammar-highlight">な-adjective</span> + <span class="grammar-highlight"><span v-if="isPolite">です</span><span v-else>だ</span></span></div>
      <div style="margin-bottom: 10px"><span class="grammar-highlight">な-adjective</span> + <span class="grammar-highlight">な</span> + noun + <span class="grammar-highlight"><span v-if="isPolite">です</span><span v-else>だ</span></span></div>
      <table class="structure-table">
        <thead>
          <tr>
            <th>Form</th>
            <th>Ending</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Present</td>
            <td><span class="grammar-highlight"><span v-if="isPolite">です</span><span v-else>だ</span></span></td>
            <td><span class="grammar-highlight"><ruby>静<rt>しず</rt></ruby>か<span v-if="isPolite">です</span><span v-else>だ</span></span></td>
          </tr>
          <tr>
            <td>Negative</td>
            <td><span class="grammar-highlight"><span v-if="isPolite">じゃないです</span><span v-else>じゃない</span></span></td>
            <td><span class="grammar-highlight"><ruby>静<rt>しず</rt></ruby>か<span v-if="isPolite">じゃないです</span><span v-else>じゃない</span></span></td>
          </tr>
          <tr>
            <td>Past</td>
            <td><span class="grammar-highlight"><span v-if="isPolite">でした</span><span v-else>だった</span></span></td>
            <td><span class="grammar-highlight"><ruby>静<rt>しず</rt></ruby>か<span v-if="isPolite">でした</span><span v-else>だった</span></span></td>
          </tr>
          <tr>
            <td>Past Negative</td>
            <td><span class="grammar-highlight"><span v-if="isPolite">じゃなかったです</span><span v-else>じゃなかった</span></span></td>
            <td><span class="grammar-highlight"><ruby>静<rt>しず</rt></ruby>か<span v-if="isPolite">じゃなかったです</span><span v-else>じゃなかった</span></span></td>
          </tr>
        </tbody>
      </table>
    </template>
    <template #related>
      Other type of adjective:
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: adjectivesI.slug } }" class="link">{{ adjectivesI.title }}</RouterLink>
    </template>
    <template #explanation>
      Adjectives are used to describe or modify nouns. In Japanese, there are two main types of adjectives:
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: adjectivesI.slug } }" class="link">い-adjectives</RouterLink> and <span class="g">な-adjectives</span>.
      <br><br>
      This section focuses on <span class="g">な-adjectives</span>, which is a category of Japanese adjectives that function more like nouns in terms of grammar.
      Unlike い-adjectives, which inflect on their own, な-adjectives rely on copulas like だ or です to express tense and politeness, and on the particle <span class="g">な</span> when modifying nouns.
      They are sometimes called "quasi-adjectives" or "adjectival nouns".
      <GrammarExample>
        <template #example>
          <span class="g"><ruby>静<rt>しず</rt></ruby>かな</span><ruby>町<rt>まち</rt></ruby>
        </template>
        <template #translation>
          A quiet town
        </template>
        <template #note>
          な-adjective modifying a noun
        </template>
      </GrammarExample>
      Like い-adjectives, な-adjectives can be used:
      <ul>
        <li>Before a noun to describe it</li>
        <li>At the end of a sentence as the predicate</li>
      </ul>
      Unline い-adjectives, they require some helper words to both modify nouns and to express tense.
      <br><br>
      When a な-adjective is used to modify a noun directly, it must be followed by <span class="g">な</span>.
      <GrammarExample>
        <template #example>
          ここは<span class="g"><ruby>綺麗<rt>きれい</rt></ruby>な</span><ruby>部屋<rt>へや</rt></ruby>だ
        </template>
        <template #translation>
          This is a clean room
        </template>
        <template #note>
          Note the use of な to modify the noun 部屋 (room)
        </template>
      </GrammarExample>
      When used at the end of a sentence (as a predicate), a な-adjective requires a copula to complete the sentence.
      In casual speech, this is usually だ, while in polite speech, it's です.
      <GrammarExample>
        <template #example>
          この<ruby>部屋<rt>へや</rt></ruby>は<span class="g"><ruby>綺麗<rt>きれい</rt></ruby>だ</span>
        </template>
        <template #translation>
          This room is clean
        </template>
        <template #note>
          Note the use of だ after the な-adjective to complete the sentence
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        な-adjectives are not true adjectives in the same way い-adjectives are. They are closer to nouns in that they do not conjugate
        by themselves and require grammatical support (だ/です) to express tense and politeness.
        <br><br>
        This means, in negative or past forms, the copula is conjugated, not the adjective itself.
      </div>

      <div class="section">
        <div class="grammar-subtitle">Negative Form</div>
        To express negation, replace だ with <span class="g">じゃない</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>元気<rt>げんき</rt></ruby> → <ruby>元気<rt>げんき</rt></ruby><span class="g">じゃない</span>
          </div>
          <div class="translation">
            healthy → not healthy
          </div>
        </GrammarExampleSentences>
        <GrammarExample>
          <template #example>
            <ruby>今日<rt>きょう</rt></ruby>は<ruby>元気<rt>げんき</rt></ruby><span class="g">じゃないです</span>
          </template>
          <template #translation>
            I'm not feeling well today
          </template>
        </GrammarExample>
        It is also possible to use <span class="g">ありません</span> instead of <span class="g">ない</span> to make the sentence more polite, but this is less common in everyday speech.
        When using <span class="g">ありません</span>, it should not be used with です, as it is already a polite form.
        <GrammarExample>
          <template #example>
            <ruby>今日<rt>きょう</rt></ruby>は<ruby>元気<rt>げんき</rt></ruby><span class="g">じゃありません</span>
          </template>
          <template #translation>
            I'm not feeling well today
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Past Form</div>
        To express the past tense, だ becomes <span class="g">だった</span> (plain) or <span class="g">でした</span> (polite).
        <GrammarExampleSentences>
          <div class="example">
            <ruby>賑<rt>にぎ</rt></ruby>やか → <ruby>賑<rt>にぎ</rt></ruby>やか<span class="g">だった</span>
          </div>
          <div class="translation">
            lively → not lively
          </div>
        </GrammarExampleSentences>
        <GrammarExample>
          <template #example>
            お<ruby>祭<rt>まつ</rt></ruby>りは<ruby>賑<rt>にぎ</rt></ruby>やか<span class="g">でした</span>
          </template>
          <template #translation>
            The festival was lively
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Past Negative Form</div>
        To express past and negative, use <span class="g">じゃなかった</span> (plain) or <span class="g">じゃなかったです</span> (polite).
        <GrammarExampleSentences>
          <div class="example">
            <ruby>好<rt>す</rt></ruby>き → <ruby>好<rt>す</rt></ruby>き<span class="g">じゃなかった</span>
          </div>
          <div class="translation">
            likeable → not likeable
          </div>
        </GrammarExampleSentences>
        <GrammarExample>
          <template #example>
            <ruby>子<rt>こ</rt></ruby>どもの<ruby>時<rt>とき</rt></ruby>、<ruby>野菜<rt>やさい</rt></ruby>が<ruby>好<rt>す</rt></ruby>き<span class="g">じゃなかったです</span>
          </template>
          <template #translation>
            When I was a child, I didn't like vegetables
          </template>
        </GrammarExample>
        It is also possible to use <span class="g">ありませんでした</span> instead of <span class="g">なかったです</span> to make the sentence more polite. This is less common in everyday speech,
        but is often used in writing.
        <GrammarExample>
          <template #example>
            <ruby>子<rt>こ</rt></ruby>どもの<ruby>時<rt>とき</rt></ruby>、<ruby>野菜<rt>やさい</rt></ruby>が<ruby>好<rt>す</rt></ruby>き<span class="g">じゃありませんでした</span>
          </template>
          <template #translation>
            When I was a child, I didn't like vegetables
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.structure-table {
  width: 100%;
  border-collapse: collapse; 
  text-align: left;

  thead tr,
  tr:not(:last-child) {
    border-bottom: 1px solid #cccccc24;
  }

  th, td {
    padding: 8px 8px;
  }
}
</style>
