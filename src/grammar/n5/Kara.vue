<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { kara as meta } from "./metadataN5";
  import { shi } from "../n4/metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div>Reason + <span class="grammar-highlight">から</span> + situation</div>
      <div class="structure-inner">
        <div>Verb + <span class="grammar-highlight">から</span></div>
        <div>い-adjective + <span class="grammar-highlight">から</span></div>
        <div>な-adjective + <span class="grammar-highlight"><span v-if="isPolite" class="h">です</span><span v-else class="h">だ</span>から</span></div>
        <div>Noun + <span class="grammar-highlight"><span v-if="isPolite" class="h">です</span><span v-else class="h">だ</span>から</span></div>
      </div>
    </template>
    <template #related>
      <div class="related-mb">Other ways of giving reasons:</div>
      <div class="related-mb">- ので</div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: shi.slug } }" class="link">{{ shi.title }}</RouterLink></div>
    </template>
    <template #explanation>
      The particle <span class="g">から</span> is used to give a reason or cause for an action, situation, or statement.
      In English it corresponds to "because". In Japanese, the reason comes first,
      followed by <span class="g">から</span>, and then the result.
      <ul>
        <li>Reason + <span class="g">から</span> + situation/result</li>
      </ul>
      This order is opposite of English, where "because" usually comes before the reason ("I'm tired because I didn't sleep").
      For this reason, it's often helpful to translate it to "so", because it better matches the Japanese structure
      ("I didn't sleep, so I'm tired").
      <GrammarExample>
        <template #example>
          <ruby>疲<rt>つか</rt></ruby>れた<span class="g">から</span>、<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>ます
        </template>
        <template #translation>
          I'll go to bed early because I'm tired
        </template>
        <template #note>
          Alternately, "I'm tired, so I will go to bed early"
        </template>
      </GrammarExample>

      To use <span class="g">から</span> with な-adjectives and nouns, you need to add <span class="h">だ</span> between the plain form
      and <span class="g">から</span>, forming <span class="h">だ</span><span class="g">から</span>.
      <GrammarExample>
        <template #example>
          <ruby>雨<rt>あめ</rt></ruby><span class="h">だ</span><span class="g">から</span>、<ruby>出<rt>で</rt></ruby>かけない
        </template>
        <template #translation>
          I won't go out since it's raining
        </template>
      </GrammarExample>

      から can follow both the plain form and the polite form of verbs, adjectives, and nouns.
      When using the polite form with な-adjectives and nouns, use <span class="h">です</span> instead of <span class="h">だ</span>, forming
      <span class="h">です</span><span class="g">から</span>.
      This pattern is very common in polite requests, explanations, and customer-service dialogue.
      <GrammarExample>
        <template #example>
          こちらのほうが<ruby>安<rt>やす</rt></ruby>い<span class="h">です</span><span class="g">から</span>、おすすめです
        </template>
        <template #translation>
          This one is cheaper, so I recommend it
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        Using a polite form before <span class="g">から</span> does not make the entire sentence polite. You must also end the sentence politely.
        A sentence like:
        <ul>
          <li><ruby>忙<rt>いそが</rt></ruby>しい<span class="h">です</span><span class="g">から</span>、<ruby>行<rt>い</rt></ruby>かない</li>
        </ul>
        sounds unnatural because the middle part is polite but the ending is plain. Instead, use either fully polite or fully plain.
      </div>

      <br>
      The <span class="g">から</span> structure doesn't always have to follow the patterns we've seen so far. It's also possible to flip the sentence,
      presenting the situation first, followed by one or more reasons introduced with <span class="g">から</span>. This is very natural in Japanese, especially in conversation.
      <GrammarExample>
        <template #example>
          <ruby>今日<rt>きょう</rt></ruby>は<ruby>行<rt>い</rt></ruby>かない。<ruby>疲<rt>つか</rt></ruby>れている<span class="g">から</span>
        </template>
        <template #translation>
          I'm not going today. (Because) I'm tired.
        </template>
        <template #note>
          Here the situation is stated first, and the reason follows after
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
