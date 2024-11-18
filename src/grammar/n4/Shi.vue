<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { breakpointService } from "@/services/breakpointService";
  import { shi as meta } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Reason + <span class="grammar-highlight">し</span> + reason + <span class="grammar-highlight">し</span> + situation</div>
      <div class="structure-inner" :class="breakpointService.isMobile() ? 'mobile': 'color'">
        <div>(Verb) + <span class="grammar-highlight">し</span></div>
        <div>(い-adjective) + <span class="grammar-highlight">し</span></div>
        <div>(な-adjective) + <span class="grammar-highlight">だし</span></div>
        <div>(Noun) + <span class="grammar-highlight">だし</span></div>
      </div>
    </template>
    <template #related>
      Other ways of giving reasons:
      <div>- から</div>
      <div>- ので</div>
    </template>
    <template #explanation>
      The <span class="g">〜し</span> form in Japanese is a versatile grammatical structure used to list multiple reasons or justifications.
      When a verb, adjective, or noun clause is followed by <span class="g">し</span>, the clause behaves grammatically as if it were a predicate on its own.
      This makes it possible to stack multiple reasons together seamlessly, unlike other common structures for giving a reason for something.
      <br><br>
      To use <span class="g">〜し</span>, simply conjugate the verb, adjective, or noun clause as follows:
      <ul style="padding-right: 40px;">
        <li>For verbs: Attach し after the plain form.</li>
        <GrammarExample>
          <template #example>
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べる<span class="g">し</span>
          </template>
          <template #note>
            Using し with verbs
          </template>
        </GrammarExample>
        <li>For い-adjectives: Attach し after the plain form.</li>
        <GrammarExample>
          <template #example>
            <ruby>安<rt>やす</rt></ruby>い → <ruby>安<rt>やす</rt></ruby>い<span class="g">し</span>
          </template>
          <template #note>
            Using し with い-adjectives
          </template>
        </GrammarExample>
        <li>For な-adjectives and nouns: Attach だし after the plain form.</li>
        <GrammarExample>
          <template #example>
            <div><ruby>静<rt>しず</rt></ruby>か → <ruby>静<rt>しず</rt></ruby>か<span class="g">だし</span></div>
            <div><ruby>学生<rt>がくせい</rt></ruby> → <ruby>学生<rt>がくせい</rt></ruby><span class="g">だし</span></div>
          </template>
          <template #note>
            Using し with な-adjectives and nouns
          </template>
        </GrammarExample>
      </ul>
      This structure is particularly useful for expressing multiple reasons or adding a sense of "and also" to your statements. For example:
      <GrammarExample>
        <template #example>
          このレストランは<ruby>安<rt>やす</rt></ruby>い<span class="g">し</span>、<ruby>美味<rt>おい</rt></ruby>しい<span class="g">し</span>、サービスもいいです
        </template>
        <template #translation>
          This restaurant is cheap, delicious, and has good service
        </template>
      </GrammarExample>
      In this way, <span class="g">〜し</span> not only allows you to list reasons but also conveys a tone of justification or emphasis, making it a key tool for more nuanced expressions.
      <br><br>
      You can also use <span class="g">〜し</span> with only one stated 'reason'. Unlike other similar grammatical structures, this usage implies that the mentioned reason is just one of many possible reasons,
      even if the others are not explicitly stated. This gives the sentence an open-ended or suggestive nuance.
      <GrammarExample>
        <template #example>
          この<ruby>店<rt>みせ</rt></ruby>は<ruby>安<rt>やす</rt></ruby>い<span class="g">し</span>、よく行く
        </template>
        <template #translation>
          This store is cheap (among other things), so I often go there
        </template>
        <template #note>
          Usage of a singular し implies there are other reasons as well
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.structure-inner {
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: var(--p-content-border-radius);
  line-height: 1.7;
  word-break: keep-all;

  &.color {
    background-color: var(--grammar-structure-inner-color);
  }

  &.mobile {
    border: 1px solid var(--line-color);
  }
}
</style>
