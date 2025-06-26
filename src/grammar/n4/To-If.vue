<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { toIf as meta, ba, nara, tara } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Clause 1 + <span class="grammar-highlight">と</span> + clause 2</div>
      <div class="structure-inner">
        <div>Verb (plain form present) + <span class="grammar-highlight">と</span></div>
        <div>い-adjective (present) + <span class="grammar-highlight">と</span></div>
        <div>な-adjective (present) + <span class="grammar-highlight">だと</span></div>
        <div>Noun (present) + <span class="grammar-highlight">だと</span></div>
      </div>
    </template>
    <template #related>
      <div class="related-mb">Other conditionals:</div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: nara.slug } }" class="link">{{ nara.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      The particle <span class="g">と</span> is used to express natural or automatic consequences — something that always
      or usually happens as a result of something else. It can often be translated as "if", "when", or "whenever", depending on the context.

      <ul>
        <li>[Condition (present tense)] + <span class="g">と</span> + [Result / Consequence]</li>
      </ul>
      The result clause describes something that happens as a natural consequence, automatically, or habitually.

      <div class="note">
        <div class="note-title">Note:</div>
        The clause before <span class="g">と</span> is always in the present tense, even if the result is in the past.
      </div>

      <GrammarExample>
        <template #example>
          <ruby>春<rt>はる</rt></ruby>になる<span class="g">と</span>、<ruby>桜<rt>さくら</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きます
        </template>
        <template #translation>
          When spring comes, the cherry blossoms bloom
        </template>
      </GrammarExample>

      A very common construction using the <span class="g">と</span> conditional is having the second clause (result)
      be an adjective followed by ～くなる or になる — meaning "to become [adjective]".
      <GrammarExample>
        <template #example>
          <ruby>眠<rt>ねむ</rt></ruby>い<span class="g">と</span><ruby>寒<rt>さむ</rt></ruby>くなる
        </template>
        <template #translation>
          Whenever I'm sleepy, I become cold
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">と</span> implies that the second action always or inevitably follows the first — it's a certain result.
        This means it cannot be used for a request, command, suggestion, or invitation. You also cannot use it for hypotheticals, like "if this had happened, then...".
        For these cases it's instead better to use <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink>.
      </div>

      <GrammarExample>
        <template #example>
          <ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby><span class="g">だと</span>、<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れます
        </template>
        <template #translation>
          Whenever it's a rainy day, the trains are delayed
        </template>
        <template #note>
          When used with nouns and な-adjectives, だ is required before と
        </template>
      </GrammarExample>

      It can also be used with negative forms in the first clause.
      <GrammarExample>
        <template #example>
          <ruby>元気<rt>げんき</rt></ruby>じゃない<span class="g">と</span><ruby>運動<rt>うんどう</rt></ruby>できない
        </template>
        <template #translation>
          If I'm not feeling well, I can't exercise
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
