<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { nara as meta } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Sentence 1 + <span class="grammar-highlight">なら</span> + Sentence 2</div>
      <div class="structure-inner">
        <div>Noun + <span class="grammar-highlight">なら</span> + S2</div>
        <div>い-adjective + <span class="grammar-highlight">なら</span> + S2</div>
        <div>な-adjective + <span class="grammar-highlight">なら</span> + S2</div>
        <div>Verb (plain form) + <span class="grammar-highlight">なら</span> + S2</div>
      </div>
    </template>
    <template #related>
      
    </template>
    <template #explanation>
      The word <span class="g">なら</span> is used when you want to say something like "if that's the case…" or "if that's true…".
      It's often used when you're replying to someone else, or when you're talking about something that's already been mentioned.
      You can think of it as reacting to information, like giving advice or making a comment based on what someone else has said.
      <br><br>
      To use <span class="g">なら</span>, it should connect 2 sentences or clauses, where the first part is a condition or a topic that you accept as true,
      and the second part is your response or advice based on that condition.
      <ul>
        <li>(Clause 1) <span class="g">なら</span> (clause 2) → Meaning, "If it's true that (clause 1), then (clause 2)"</li>
      </ul>
      <span class="g">なら</span> can attach to nouns, い-adjectives, な-adjectives, and verbs in their plain form. Technically speaking, when attaching to a verb or an い-adjective,
      <span class="g">なら</span> should be preceded by の, which is a nominalizer that turns the verb or adjective into a noun-like phrase. This is because, technically, <span class="g">なら</span>
      should only be used with nouns. However, in modern Japanese, this の is mostly droppped, and <span class="g">なら</span> attaches to the word directly.

      <div class="note mt">Note:</div>
      Even though it often gets translated as "if", it cannot be used exactly the same as other Japanese words for "if" like たら or ば.
      <span class="g">なら</span> feels more like "if it's true that X…" or "speaking of X…". This means the speaker must believe that the condition is true.
      <GrammarExample>
        <template #example>
          <div>Aさん: <ruby>日本<rt>にほん</rt></ruby>に<ruby>行<rt>い</rt></ruby>くつもりだよ</div>
          <div>Bさん: <ruby>日本<rt>にほん</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<span class="g">なら</span>、<ruby>上野公園<rt>うえのこうえん</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったほうがいいよ</div>
        </template>
        <template #translation>
          <div>A: I'm planning to go to Japan</div>
          <div>B: If you're going to Japan, you should go to Ueno Park</div>
        </template>
      </GrammarExample>
      <span class="g">なら</span> can not be used to express hypothetical situations without a clear reason to believe that the condition is true.
      It also cannot be used with things that are always true or always happen. This means <span class="g">なら</span> should not be used with time.

      <div class="note mt">Note:</div>
      <span class="g">なら</span> comes from the more formal word <span class="g">ならば</span>, which is the hypothetical form of the old copula なり.
      In modern Japanese, <span class="g">ならば</span> is not very commonly used, but you might still see it in written texts or formal speeches.

      <div class="section">
        <div class="subtitle">なら Used to Contrast or Limit</div>
        One important way <span class="g">なら</span> is used in Japanese is to respond to a suggestion or condition and narrow down the situation.
        It often carries the nuance of "if it's that specific case, then..." — meaning the speaker is limiting what they're saying to only that case, or contrasting it with other possibilities.
        <GrammarExample>
          <template #example>
            <div>Aさん: <ruby>今週<rt>こんしゅう</rt></ruby>、<ruby>会<rt>あ</rt></ruby>えますか？</div>
            <div>Bさん: <ruby>明日<rt>あした</rt></ruby><span class="g">なら</span>、<ruby>時間<rt>じかん</rt></ruby>がありますよ。</div>
          </template>
          <template #translation>
            <div>A: Can we meet this week?</div>
            <div>B: If it's tomorrow, then I have time</div>
          </template>
        </GrammarExample>
        In this conversation, A asks a broad question: "Can we meet this week?"
        B responds with a limited condition: "If it's tomorrow, yes."
        This doesn't mean B is free all week — only that tomorrow works. The use of <span class="g">なら</span> helps clearly contrast "tomorrow" with the rest of the week and limits their availability to that day.

        In English, this kind of nuance can be translated in different ways depending on the tone:
        <ul>
          <li>"If it's tomorrow, I have time" (neutral)</li>
          <li>"Well, tomorrow works, at least" (limiting)</li>
          <li>"Only tomorrow works for me" (stronger contrast)</li>
        </ul>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.8;
  margin-bottom: 18px;
}
</style>
