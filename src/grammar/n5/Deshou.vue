<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { deshou as meta, ne } from "./metadataN5";
  import { kamoshirenai } from "../n4/metadataN4";

  const isPolite = ref(true);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" :default-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      Noun + <span class="grammar-highlight"><span v-if="isPolite">でしょう</span><span v-else>だろう</span></span><br>
      Adjective + <span class="grammar-highlight"><span v-if="isPolite">でしょう</span><span v-else>だろう</span></span><br>
      Verb (plain form) + <span class="grammar-highlight"><span v-if="isPolite">でしょう</span><span v-else>だろう</span></span><br>
    </template>
    <template #related>
      <div class="related-mb">See also:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ne.slug } }" class="link">ね (seeking agreement)</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: kamoshirenai.slug } }" class="link">{{ kamoshirenai.title }}</RouterLink></div>
    </template>
    <template #explanation>
      The expressions <span class="g">でしょう</span> and <span class="g">だろう</span> are used to express that the speaker believes something is probably true. They indicate a guess, assumption, or prediction
      based on the information available to the speaker. The speaker is not completely certain, but considers the statement likely to be correct.
      <br><br>
      Grammatically, <span class="g">でしょう</span> and <span class="g">だろう</span> attach to a noun, or the plain form of a verb or adjective.
      <GrammarExample>
        <template #example>
          <ruby>明日<rt>あした</rt></ruby>、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>る<span class="g">でしょう</span>
        </template>
        <template #translation>
          It will probably rain tomorrow
        </template>
        <template #note>
          でしょう is very common in weather forecasts, as the meteorologist is making a prediction based on available data
        </template>
      </GrammarExample>
      The form <span class="g">でしょう</span> is the polite version, while <span class="g">だろう</span> is the casual version.
      The meaning is the same, but the level of politeness differs.
      <GrammarExampleSentences>
        <div class="example">
          <ruby>今日<rt>きょう</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby>い<span class="g">でしょう</span>
        </div>
        <div class="translation">
          It's probably cold today
        </div>
        <div class="example">
          <ruby>今日<rt>きょう</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby>い<span class="g">だろう</span>
        </div>
        <div class="translation">
          It's probably cold today
        </div>
      </GrammarExampleSentences>

      Compared to expressions such as <RouterLink :to="{ name: 'grammarLoader', params: { slug: ne.slug } }" class="link">{{ ne.title }}</RouterLink> or
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: kamoshirenai.slug } }" class="link">{{ kamoshirenai.title }}</RouterLink>,
      <span class="g">でしょう</span> / <span class="g">だろう</span> express a different level of certainty. The particle ね is mainly used to seek agreement
      about something the speaker believes both speaker and listener already know. On the other hand, かもしれない expresses greater uncertainty, similar to "maybe".
      <br><br>
      <span class="g">でしょう</span> / <span class="g">だろう</span> fall between these two. They indicate that the speaker believes something is likely to be true,
      based on their own reasoning or available information, but they are not completely certain.

      <div class="section">
        <div class="grammar-title">Seeking Confirmation</div>
        The polite version, <span class="g">でしょう</span>, can also be used when the speaker asks for confirmation from the listener.
        In that case it is often pronounced with a rising intonation, similar to "right?" or "isn't it?" in English.
        <div class="note">
          <div class="note-title">Note:</div>
          Grammatically, <span class="g">だろう</span> can also be used in this way, but it sounds very assertive and masculine.
          In practice it's much more common to use the polite form <span class="g">でしょう</span> (or a slightly more casual variant, <span class="g">でしょ</span>)
          when seeking confirmation, even in casual conversations.
        </div>
        <GrammarExample>
          <template #example>
            これは<ruby>高<rt>たか</rt></ruby>い<span class="g">でしょ</span>？
          </template>
          <template #translation>
            This is expensive, right?
          </template>
          <template #note>
            The speaker already has an opinion, but invites the listener to confirm it
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
