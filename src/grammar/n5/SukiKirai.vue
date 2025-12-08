<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { sukiKirai as meta, adjectivesNa } from "./metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.titlePlain ?? meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div class="kanji-mb">Noun + が + <span class="grammar-highlight"><ruby>好<rt>す</rt></ruby>き</span> + <span v-if="isPolite">です</span><span v-else>だ</span></div>
      <div>Noun + が + <span class="grammar-highlight"><ruby>嫌<rt>きら</rt></ruby>い</span> + <span v-if="isPolite">です</span><span v-else>だ</span></div>
    </template>
    <template #related>
      For more on な-adjectives, see <RouterLink :to="{ name: 'grammarLoader', params: { slug: adjectivesNa.slug } }" class="link">{{ adjectivesNa.title }}</RouterLink>.
    </template>
    <template #explanation>
      The adjectives <span class="g">好き</span> (<span class="g">すき</span>) "like" and <span class="g">嫌い</span> (<span class="g">きらい</span>) "dislike"
      are な-adjectives that describe your feelings toward something.
      <div class="note">
        <div class="note-title">Note:</div>
        In English, "to like" and "to dislike" are verbs that take an object ("I like apples"). In Japanese, however, these words are adjectives, not verbs.
        They describe your feeling or preference, rather than an action you perform.
      </div>
      Because they are adjectives, the thing that is liked or disliked is treated as the subject of the sentence and marked with が.
      So the sentence:
      <ul>
        <li>りんごが<span class="g">好<rt>す</rt>き</span>だ</li>
      </ul>
      literally translates to "as for apples, they are likable", even though we translate it naturally as "I like apples".
      <GrammarExample>
        <template #example>
          <ruby>猫<rt>ねこ</rt></ruby>が<span class="g"><ruby>好<rt>す</rt></ruby>き</span>です
        </template>
        <template #translation>
          I like cats
        </template>
        <template #note>
          Literally, "As for cats, they are likable (to me)."
        </template>
      </GrammarExample>
      <span class="g">嫌い</span> (<span class="g">きらい</span>) is the opposite of <span class="g">好き</span> (<span class="g">すき</span>).
      It means "disliked" or "unpleasant," and works the same way.
      <GrammarExample>
        <template #example>
          にんじんが<span class="g"><ruby>嫌<rt>きら</rt></ruby>い</span>だった
        </template>
        <template #translation>
          I disliked carrots
        </template>
        <template #note>
          Literally, "As for carrots, they were unpleasant (to me)."
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">嫌い</span> (<span class="g">きらい</span>) can feel quite strong — closer to "hate" — depending on context.
        For milder dislike, Japanese often uses phrases like:
        <ul>
          <li>あまり<span class="g"><ruby>好<rt>す</rt></ruby>き</span>じゃないです → "I don't really like it"</li>
        </ul>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Intensifying 好き and 嫌い with 大 (だい)</div>
        You can strengthen the meaning of <span class="g">好き</span> (<span class="g">すき</span>) and
        <span class="g">嫌い</span> (<span class="g">きらい</span>) by adding 大 (だい) in front of them:
        <ul>
          <li><span class="g"><ruby>大<rt>だい</rt></ruby><ruby>好<rt>す</rt></ruby>き</span> → "really like / love"</li>
          <li><span class="g"><ruby>大<rt>だい</rt></ruby><ruby>嫌<rt>きら</rt></ruby>い</span> → "strongly dislike / hate"</li>
        </ul>
        <GrammarExample>
          <template #example>
            かわいい<ruby>犬<rt>いぬ</rt></ruby>が<span class="g"><ruby>大<rt>だい</rt></ruby><ruby>好<rt>す</rt></ruby>き</span>です
          </template>
          <template #translation>
            I love cute dogs
          </template>
          <template #note>
            Literally, "As for cute dogs, they are really likable (to me)."
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>虫<rt>むし</rt></ruby>が<span class="g"><ruby>大<rt>だい</rt></ruby><ruby>嫌<rt>きら</rt></ruby>い</span>だ
          </template>
          <template #translation>
            I hate insects
          </template>
          <template #note>
            Literally, "As for insects, they are strongly unpleasant (to me)."
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
