<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { adjectiveSuru as meta } from "./metadataN4";
  import { adverbs } from "../n5/metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div>い-adjective <s class="remove">[い]</s> + <span class="grammar-highlight">く</span> + <span class="grammar-highlight">する</span></div>
      <div>な-adjective + <span class="grammar-highlight">に</span> + <span class="grammar-highlight">する</span></div>
    </template>
    <template #related>
      <div class="related-mb">See also:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: adverbs.slug } }" class="link">{{ adverbs.title }}</RouterLink></div>
    </template>
    <template #explanation>
      This grammar pattern is used to describe causing a change in state — specifically, making something more [adjective], or changing it to a certain condition,
      as in "to make something [adjective]".
      <br><br>
      To form this construction, modify the adjective as follows:
      <ul>
        <li>い-adjective → replace final い with <span class="g">く</span>, then add <span class="g">する</span></li>
        <li>な-adjective → add <span class="g">に</span>, then <span class="g">する</span></li>
      </ul>
      You might notice that the adjectives are changed similar to the way adverbs are formed in Japanese, but in this construction, the adjectives are not
      functioning as adverbs. Instead, they describe the new state or condition that something is being made into.
      <GrammarExampleSentences>
        <div class="example">
          <ruby>楽<rt>たの</rt></ruby>しい → <ruby>楽<rt>たの</rt></ruby>し<span class="g">くする</span>
        </div>
        <div class="translation">
          fun → to make (it) fun / more fun
        </div>
        <div class="example">
          <ruby>大<rt>おお</rt></ruby>きい → <ruby>大<rt>おお</rt></ruby>き<span class="g">くする</span>
        </div>
        <div class="translation">
          big → to make (it) big / bigger
        </div>
        <div class="example">
          <ruby>温<rt>あたた</rt></ruby>かい → <ruby>温<rt>あたた</rt></ruby>か<span class="g">くする</span>
        </div>
        <div class="translation">
          warm → to make (it) warm / warmer
        </div>
        <template #note>
          With い-adjectives
        </template>
      </GrammarExampleSentences>
      <GrammarExampleSentences>
        <div class="example">
          <ruby>綺麗<rt>きれい</rt></ruby> → <ruby>綺麗<rt>きれい</rt></ruby><span class="g">にする</span>
        </div>
        <div class="translation">
          pretty → to make (it) pretty / more pretty
        </div>
        <div class="example">
          <ruby>安全<rt>あんぜん</rt></ruby> → <ruby>安全<rt>あんぜん</rt></ruby><span class="g">にする</span>
        </div>
        <div class="translation">
          safe → to make (it) safe / safer
        </div>
        <div class="example">
          <ruby>静<rt>しず</rt></ruby>か → <ruby>静<rt>しず</rt></ruby>か<span class="g">にする</span>
        </div>
        <div class="translation">
          quiet → to make (it) quiet / quieter
        </div>
        <template #note>
          With な-adjectives
        </template>
      </GrammarExampleSentences>
      This pattern is commonly used for giving instructions, adjusting settings, or describing changes made to something.
      <GrammarExample>
        <template #example>
          カーテンを<ruby>開<rt>あ</rt></ruby>けて、<ruby>部屋<rt>へや</rt></ruby>を<ruby>明<rt>あか</rt></ruby>る<span class="g">くする</span>
        </template>
        <template #translation>
          Open the curtains to make the room brighter
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          この<ruby>庭<rt>にわ</rt></ruby>で<ruby>草<rt>くさ</rt></ruby>を<ruby>短<rt>みじか</rt></ruby><span class="g">くしました</span>
        </template>
        <template #translation>
          I made the grass short in this garden
        </template>
      </GrammarExample>

      Whether the meaning is "to make something [adjective]" (a one-time change) or "to make something more [adjective]" (a comparative change)
      depends on the context. For example:
      <br><br>
      <ruby>部屋<rt>へや</rt></ruby>を<ruby>明<rt>あか</rt></ruby>る<span class="g">くする</span>
      can mean either:
      <ul class="example-list">
        <li>"To make the room bright" (e.g., turning on the lights, implying it was dark)</li>
        <li>"To make the room brighter" (e.g., opening the curtains to improve the lighting)</li>
      </ul>
      The exact nuance depends on what the current state is and what the speaker intends.
      <GrammarExample>
        <template #example>
          <ruby>色<rt>いろ</rt></ruby>を<ruby>赤<rt>あか</rt></ruby><span class="g">くする</span>ペンを使ってください
        </template>
        <template #translation>
          Please use the pen that makes the color red
        </template>
        <template #note>
          Most likely means "to make the color red" (a one-time change)
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">～くする</span> and <span class="g">にする</span> express a deliberate change, as in caused by someone.
        Be careful to distinguish it from 「～くなる・になる」, "to become [adjective]", which expresses natural
        or gradual change, not necessarily caused by someone.
        <ul class="example-list">
          <li><ruby>部屋<rt>へや</rt></ruby>が<ruby>明<rt>あか</rt></ruby>るくなる → "The room will become brighter"</li>
          <i>The room will become brighter naturally or gradually, maybe because the sun is coming out</i>
        </ul>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.example-list {
  margin-top: 10px;
}
</style>
