<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { adjectivesI as meta, adjectivesNa } from "./metadataN5";

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
      <div><span class="grammar-highlight">い-adjective</span> <span v-if="isPolite"> + です</span></div>
      <div style="margin-bottom: 10px"><span class="grammar-highlight">い-adjective</span> + noun + <span v-if="isPolite">です</span><span v-else>だ</span></div>
      <table class="structure-table">
        <tr>
          <th>Form</th>
          <th>Ending</th>
          <th>Example</th>
        </tr>
        <tr>
          <td>Present</td>
          <td><span class="grammar-highlight">～い</span><span v-if="isPolite">です</span></td>
          <td><span class="grammar-highlight"><ruby>高<rt>たか</rt></ruby>い</span><span v-if="isPolite">です</span></td>
        </tr>
        <tr>
          <td>Negative</td>
          <td><span class="grammar-highlight">～くない</span><span v-if="isPolite">です</span></td>
          <td><span class="grammar-highlight"><ruby>高<rt>たか</rt></ruby>くない</span><span v-if="isPolite">です</span></td>
        </tr>
        <tr>
          <td>Past</td>
          <td><span class="grammar-highlight">～かった</span><span v-if="isPolite">です</span></td>
          <td><span class="grammar-highlight"><ruby>高<rt>たか</rt></ruby>かった</span><span v-if="isPolite">です</span></td>
        </tr>
        <tr>
          <td>Past Negative</td>
          <td><span class="grammar-highlight">～くなかった</span><span v-if="isPolite">です</span></td>
          <td><span class="grammar-highlight"><ruby>高<rt>たか</rt></ruby>くなかった</span><span v-if="isPolite">です</span></td>
        </tr>
      </table>
      <div class="structure-title small">Irregular</div>
      いい → <span class="grammar-highlight">よくない</span> / <span class="grammar-highlight">よかった</span> / <span class="grammar-highlight">よくなかった</span>
    </template>
    <template #related>
      Other type of adjective:
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: adjectivesNa.slug } }" class="link">{{ adjectivesNa.title }}</RouterLink>
    </template>
    <template #explanation>
      Adjectives are used to describe or modify nouns. In Japanese, there are two main types of adjectives:
      <span class="g">い-adjectives</span> and <RouterLink :to="{ name: 'grammarLoader', params: { slug: adjectivesNa.slug } }" class="link">な-adjectives</RouterLink>.
      <br><br>
      This section focuses on <span class="g">い-adjectives</span>, which are called that because they always end in the syllable い in their dictionary form.
      They can appear before nouns or at the end of sentences and can directly change tense without needing extra words like "to be".
      <GrammarExample>
        <template #example>
          <span class="g"><ruby>高<rt>たか</rt></ruby>い</span>ビル
        </template>
        <template #translation>
          A tall building
        </template>
        <template #note>
          い-adjectives can be used directly before nouns to describe them
        </template>
      </GrammarExample>

      い-adjectives can be used:
      <ul>
        <li>Before a noun to describe it</li>
        <li>At the end of a sentence as the predicate</li>
      </ul>
      Before a noun:
      <GrammarExample>
        <template #example>
          <ruby>今日<rt>きょう</rt></ruby>は<span class="g"><ruby>暑<rt>あつ</rt></ruby>い</span><ruby>日<rt>ひ</rt></ruby>だ
        </template>
        <template #translation>
          Today is a hot day
        </template>
      </GrammarExample>
      As a predicate:
      <GrammarExample>
        <template #example>
          <ruby>今日<rt>きょう</rt></ruby>は<span class="g"><ruby>暑<rt>あつ</rt></ruby>い</span>
        </template>
        <template #translation>
          Today is hot
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        い-adjectives are often called "true adjectives" because they behave like standalone predicates without needing extra words.
        That means they can directly modify nouns or end a sentence with no need for a linking verb like "to be". This is different from な-adjectives,
        which need な before nouns and often require です or だ to act as predicates.
        <br><br>
        You can add です after an い-adjective to make the sentence more polite, but in that case, です is only a politeness marker and does not change the grammar.
        This means using です in any other tense or form after an い-adjective is not allowed.
      </div>

      <div class="section">
        <div class="grammar-subtitle">Negative Form</div>
        To make an い-adjective negative, drop the final い and add <span class="g">くない</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>高<rt>たか</rt></ruby>い → <ruby>高<rt>たか</rt></ruby><span class="g">くない</span>
          </div>
          <div class="translation">
            expensive → not expensive
          </div>
        </GrammarExampleSentences>
        <GrammarExample>
          <template #example>
            このりんごは<ruby>高<rt>たか</rt></ruby><span class="g">くない</span>です
          </template>
          <template #translation>
            This apple is not expensive
          </template>
        </GrammarExample>
        It is also possible to use <span class="g">ありません</span> instead of <span class="g">ない</span> to make the sentence more polite, but this is less common in everyday speech.
        When using <span class="g">ありません</span>, it should not be used with です, as it is already a polite form.
        <GrammarExample>
          <template #example>
            このりんごは<ruby>高<rt>たか</rt></ruby><span class="g">くありません</span>
          </template>
          <template #translation>
            This apple is not expensive
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Past Form</div>
        To make an い-adjective past tense, drop the い and add <span class="g">かった</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>面白<rt>おもしろ</rt></ruby>い → <ruby>面白<rt>おもしろ</rt></ruby><span class="g">かった</span>
          </div>
          <div class="translation">
            interesting → not interesting
          </div>
        </GrammarExampleSentences>
        <GrammarExample>
          <template #example>
            <ruby>映画<rt>えいが</rt></ruby>は<ruby>面白<rt>おもしろ</rt></ruby><span class="g">かった</span>です
          </template>
          <template #translation>
            The movie was interesting
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Past Negative Form</div>
        To say something "was not [adjective]", use the negative form and then make that past.
        In other words, drop the い from the present affirmative and add <span class="g">くなかった</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>寒<rt>さむ</rt></ruby>い → <ruby>寒<rt>さむ</rt></ruby><span class="g">くなかった</span>
          </div>
          <div class="translation">
            cold → was not cold
          </div>
        </GrammarExampleSentences>
        <GrammarExample>
          <template #example>
            <ruby>昨日<rt>きのう</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby><span class="g">くなかった</span>です
          </template>
          <template #translation>
            It was not cold yesterday
          </template>
        </GrammarExample>
        It is also possible to use <span class="g">ありませんでした</span> instead of <span class="g">なかったです</span> to make the sentence more polite. This is less common in everyday speech,
        but is often used in writing.
        <GrammarExample>
          <template #example>
            <ruby>昨日<rt>きのう</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby><span class="g">くありませんでした</span>
          </template>
          <template #translation>
            It was not cold yesterday
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

  tr:not(:last-child) {
    border-bottom: 1px solid #cccccc24;
  }

  th, td {
    padding: 8px 8px;
  }
}
</style>
