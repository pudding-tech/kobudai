<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { souda as meta, sou } from "./metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div>Verb (short form) + <span class="grammar-highlight">そう<span v-if="isPolite">です</span><span v-else>だ</span></span></div>
      <div>い-adjective + <span class="grammar-highlight">そう<span v-if="isPolite">です</span><span v-else>だ</span></span></div>
      <div>な-adjective + <span class="grammar-highlight"><span class="h">だ</span>そう<span v-if="isPolite">です</span><span v-else>だ</span></span></div>
      <div>Noun + <span class="grammar-highlight"><span class="h">だ</span>そう<span v-if="isPolite">です</span><span v-else>だ</span></span></div>
    </template>
    <template #related>
      Do not confuse with <RouterLink :to="{ name: 'grammarLoader', params: { slug: sou.slug } }" class="link">{{ sou.title }}</RouterLink>, which means "looks/seems like".
    </template>
    <template #explanation>
      <span class="g">そうだ</span> is used to report information you heard from someone else — like secondhand information, rumors, or hearsay.
      It translates naturally to things like: "I heard that…", "They say…", or "It seems (according to others)…"
      <br><br>
      To form <span class="g">そうだ</span>, attach <span class="g">そうだ</span> directly to the short form (plain form) of verbs, い-adjectives, and nouns.
      Note: <span class="g">そうだ</span> can be attached to words of all tenses, like present and past, as well as both positives and negatives.
      <GrammarExample>
        <template #example>
          <ruby>行<rt>い</rt></ruby>く<span class="g">そうだ</span>
        </template>
        <template #translation>
          I hear (they) are going
        </template>
        <template #note>
          With a verb
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          この<ruby>映画<rt>えいが</rt></ruby>は<ruby>面白<rt>おもしろ</rt></ruby>い<span class="g">そうです</span>
        </template>
        <template #translation>
          I heard that this movie is interesting
        </template>
        <template #note>
          With an い-adjective
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          <ruby>彼<rt>かれ</rt></ruby>は<ruby>元気<rt>げんき</rt></ruby><span class="h">だ</span><span class="g">そうです</span>
        </template>
        <template #translation>
          I hear he is well
        </template>
        <template #note>
          With a な-adjective
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          あの<ruby>人<rt>ひと</rt></ruby>は<ruby>医者<rt>いしゃ</rt></ruby><span class="h">だ</span><span class="g">そうだ</span>
        </template>
        <template #translation>
          I hear that person is a doctor
        </template>
        <template #note>
          With a noun
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        When using <span class="g">そうだ</span> to express hearsay it functions like a sentence-ending expression, summarizing what you've heard or been told.
        Because of this, it needs to be treated grammatically like a na-adjective or noun, which means it must be followed by だ or です to form a complete sentence.
        In casual settings however, the sentence-ending だ may be dropped, just like with regular nouns.
      </div>

      <GrammarExample>
        <template #example>
          ジョンさんは<ruby>明日<rt>あした</rt></ruby>オフィスに<ruby>行<rt>い</rt></ruby>く<span class="g">そうです</span>
        </template>
        <template #translation>
          I heard that John is going to the office tomorrow
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          <ruby>昨日<rt>きのう</rt></ruby>、<ruby>火事<rt>かじ</rt></ruby>だった<span class="g">そうです</span>
        </template>
        <template #translation>
          I heard that there was a fire yesterday
        </template>
        <template #note>
          This use of だったそうです is the standard way to report hearsay in the past tense for nouns or な-adjectives
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          <ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>まない<span class="g">そうだ</span>
        </template>
        <template #translation>
          I heard that Yamada-san doesn't drink water
        </template>
        <template #note>
          With a negative
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Caution:</div>
        Be careful not to confuse this with the other <RouterLink :to="{ name: 'grammarLoader', params: { slug: sou.slug } }" class="link">{{ sou.slug }}</RouterLink>
        grammar point that means "looks like" or "seems like."
        That one attaches differently (e.g., 雨が降りそう, "It looks like it's going to rain").
      </div>
    </template>
  </GrammarStructure>
</template>
