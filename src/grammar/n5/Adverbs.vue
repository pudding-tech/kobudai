<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { adverbs as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title> {{ meta.title }}</template>
    <template #subtitle> {{ meta.subtitle }}</template>
    <template #structure>
      <div>い-adjective <s class="remove">[い]</s> + <span class="grammar-highlight">く</span> + verb</div>
      <div>な-adjective + <span class="grammar-highlight">に</span> + verb</div>
    </template>
    <template #related>

    </template>
    <template #explanation>
      In Japanese, adverbs describe how an action is performed — similar to English words like quickly, happily, or quietly.
      Many Japanese adverbs are formed by modifying adjectives.
      Since Japanese has two main types of adjectives — い-adjectives and な-adjectives — each follows its own rule when turning into an adverb.
      <br><br>
      To turn an い-adjective into an adverb, drop the final い and replace it with <span class="g">く</span>.
      <GrammarExample>
        <template #example>
          <div><ruby>速<rt>はや</rt></ruby>い → <ruby>速<rt>はや</rt></ruby><span class="g">く</span></div>
          <div><ruby>強<rt>つよ</rt></ruby>い → <ruby>強<rt>つよ</rt></ruby><span class="g">く</span></div>
          <div><ruby>楽<rt>たの</rt></ruby>しい → <ruby>楽<rt>たの</rt></ruby>し<span class="g">く</span></div>
        </template>
        <template #translation>
          <div>Fast → Quickly</div>
          <div>Strong → Strongly</div>
          <div>Fun → Enjoyably, Happily</div>
        </template>
      </GrammarExample>
      For な-adjectives, just add <span class="g">に</span> (instead of な) to form the adverb.
      <GrammarExample>
        <template #example>
          <div><ruby>静<rt>しず</rt></ruby>か → <ruby>静<rt>しず</rt></ruby>か<span class="g">に</span></div>
          <div><ruby>簡単<rt>かんたん</rt></ruby> → <ruby>簡単<rt>かんたん</rt></ruby><span class="g">に</span></div>
          <div><ruby>安全<rt>あんぜん</rt></ruby> → <ruby>安全<rt>あんぜん</rt></ruby><span class="g">に</span></div>
        </template>
        <template #translation>
          <div>Quiet → Quietly</div>
          <div>Easy → Easily</div>
          <div>Safe → Safely</div>
        </template>
      </GrammarExample>
      You're changing the adjective — which normally describes nouns — into an adverb that describes verbs instead.
      Compare:
      <ul>
        <li>はやい 車 (a fast car) → adjective describing a noun</li>
        <li>はや<span class="g">く</span> 走る (to run quickly) → adverb describing an action</li>
      </ul>

      <div class="note mt">Note:</div>
      When using adverbs, they typically come before the verb they modify, just like in English.
      <GrammarExample>
        <template #example>
          <div><ruby>今日<rt>きょう</rt></ruby>は<ruby>目覚<rt>めざ</rt></ruby>ましをセットし<ruby>忘<rt>わす</rt></ruby>れて、<ruby>遅<rt>おそ</rt></ruby><span class="g">く</span><ruby>起<rt>お</rt></ruby>きた</div>
        </template>
        <template #translation>
          Today, I forgot to set my alarm and woke up late
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>初<rt>はじ</rt></ruby>めて<ruby>作<rt>つく</rt></ruby>ったけど、<div>ケーキが<ruby>上手<rt>じょうず</rt></ruby><span class="g">に</span><ruby>出来<rt>でき</rt></ruby>ました</div>
        </template>
        <template #translation>
          It was my first time making it, but the cake turned out well
        </template>
        <template #note>
          (Literally: "...but the cake was able to be done skillfully")
        </template>
      </GrammarExample>

      Note that there are also many adverbs that don't derive from adjectives, often called "pure adverbs" or "independent adverbs".
      These adverbs don't change form and are used directly in sentences. Some examples include:
      <ul>
        <li>よく (often, well)</li>
        <li>たくさん (a lot, many)</li>
        <li>すこし (a little, a few)</li>
        <li>すぐ (immediately, right away)</li>
        <li>もう (already, anymore)</li>
        <li>まだ (still, not yet)</li>
        <li>いつも (always)</li>
        <li>ぜんぜん (not at all, never)</li>
        <li>とても (very)</li>
        <li>あまり (not very, not much)</li>
        <li>たいてい (usually)</li>
      </ul>
    </template>
  </GrammarStructure>
</template>
