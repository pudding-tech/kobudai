<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teSumimasen as meta, teAgeruKureruMorau } from "./metadataN4";
  import { teAdjectiveNoun, teVerb } from "../n5/metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Clause (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">すみません</span></div>
      <div class="structure-title small">Other variations</div>
      <div>Clause (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">ごめんなさい</span></div>
      <div>Clause (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">ごめん</span></div>
    </template>
    <template #related>
      <div class="related-mb">Based on the て-form:</div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAdjectiveNoun.slug } }" class="link">{{ teAdjectiveNoun.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <span class="g">～てすみません</span> is used when apologizing for something you did, may have done, or a situation
      you're responsible for — whether it's an action, a state, or a condition. It's a polite and common way to show regret or consideration.
      <GrammarExample>
        <template #example>
          それを<ruby>食<rt>た</rt></ruby>べ<span class="g">てすみません</span>
        </template>
        <template #translation>
          I'm sorry for eating that
        </template>
      </GrammarExample>
      It can refer to past, present, or even future actions depending on context. Though when used in the past tense,
      it's common to add でした at the end.
      <GrammarExample>
        <template #example>
          <ruby>遅<rt>おく</rt></ruby>れ<span class="g">てすみません</span>でした
        </template>
        <template #translation>
          I'm sorry for being late
        </template>
      </GrammarExample>

      While most commonly used with verbs to apologize for an action, <span class="g">～てすみません</span> can also be used with adjectives and nouns.
      With い-adjectives, change い to くて. With な-adjectives and nouns, use the て-form of the copula, で.
      This allows you to apologize for a state or condition as well as an action.
      <GrammarExample>
        <template #example>
          <ruby>忙<rt>いそが</rt></ruby>しく<span class="g">てすみません</span>
        </template>
        <template #translation>
          I'm sorry for being busy
        </template>
        <template #note>
          With an い-adjective
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>失礼<rt>しつれい</rt></ruby><span class="g">ですみません</span>
        </template>
        <template #translation>
          I'm sorry for being rude
        </template>
        <template #note>
          With a な-adjective
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-title">Other Variations</div>
        <span class="g">～てごめんなさい</span> is a more casual way to apologize, often used among friends or in less formal situations.
        <GrammarExample>
          <template #example>
            <ruby>手伝<rt>てつだ</rt></ruby>ってくれ<span class="g">てごめんなさい</span>
          </template>
          <template #translation>
            I'm sorry for making you help me
          </template>
          <template #note>
            Here combined with
            <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAgeruKureruMorau.slug } }" class="link">～てくれる</RouterLink>
          </template>
        </GrammarExample>
        <span class="g">～てごめん</span> is an even more casual form, typically used in very informal contexts, like with near family or among close friends.
        <GrammarExample>
          <template #example>
            <ruby>忘<rt>わす</rt></ruby>れ<span class="g">てごめん</span>ね
          </template>
          <template #translation>
            Sorry I forgot
          </template>
          <template #note>
            Apologies can be softened further by adding ね
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-title">With negatives</div>
        You can use <span class="g">～てすみません</span> (and variations) to apologize not only for things you did, but also for things
        you didn't do — like not calling, not showing up, or not helping. In this case, you attach it to the negative て-form.
        <GrammarExample>
          <template #example>
            <ruby>来<rt>こ</rt></ruby>なく<span class="g">てすみません</span>
          </template>
          <template #translation>
            Sorry I didn't come
          </template>
        </GrammarExample>
        You can also add the adverb 本当に (ほんとうに, really) between the て-form and the apology to emphasize your sincerity.
        <GrammarExample>
          <template #example>
            <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>を<ruby>買<rt>か</rt></ruby>わなく<span class="g">て</span><ruby>本当<rt>ほんとう</rt></ruby>に<span class="g">すみません</span>
          </template>
          <template #translation>
            I'm truly sorry for not buying food
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
