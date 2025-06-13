<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { qualifierSentences as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <span class="grammar-highlight">Plain-form sentence</span> + noun
    </template>
    <template #details>
      
    </template>
    <template #explanation>
      In Japanese, you can describe a noun by placing an entire sentence before it. This is called a <i>qualifying sentence</i> or a <i>relative clause</i>,
      and it works like "the book I read" or "a person who lives in Tokyo" in English.
      <br><br>
      Basic structure:
      <ul>
        <li><span class="g">[Plain-form sentence]</span> + noun</li>
      </ul>
      <GrammarExample>
        <template #example>
          <span class="g"><ruby>大阪<rt>おおさか</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる</span><ruby>人<rt>ひと</rt></ruby>
        </template>
        <template #translation>
          A person who lives in Osaka
        </template>
      </GrammarExample>
      You can qualify a noun with past, present, negative, or even complex sentences. The whole structure acts like a single, detailed noun phrase.
      <br><br>
      You can qualify a noun with a past, present, negative, or even complex sentence in Japanese. This is because words like verbs,
      い-adjectives, and な-adjectives can all directly precede and modify a noun.
      The crucial point is that these modifying words or the verb at the end of a qualifying clause must always be in their plain form.
      <GrammarExample>
        <template #example>
          <span class="g"><ruby>昨日<rt>きのう</rt></ruby><ruby>見<rt>み</rt></ruby>た</span><ruby>映画<rt>えいが</rt></ruby>は<ruby>面白<rt>おもしろ</rt></ruby>かったです
        </template>
        <template #translation>
          The movie I watched yesterday was interesting
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        When using a full sentence to describe a noun, が is typically used to mark the subject of the qualifying clause, instead of は.
        This is because the entire clause is acting like an adjective — it's focused on identifying or describing something specific, not making a general statement.
      </div>
      <GrammarExample>
        <template #example>
          <span class="g"><ruby>私<rt>わたし</rt></ruby>が<ruby>作<rt>つく</rt></ruby>った</span>ケーキは<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>美味<rt>おい</rt></ruby>しくなかったよ
        </template>
        <template #translation>
          The cake I made was really not good
        </template>
        <template #note>
          Note the use of が instead of は in the qualifying sentence
        </template>
      </GrammarExample>
      You can treat a noun modified by a qualifier sentence just like any other noun.
      In other words, a combination of a qualifier sentence plus a noun functions as a single, unified noun phrase. This means you can use it anywhere in a sentence where a noun is allowed.
    </template>
  </GrammarStructure>
</template>
