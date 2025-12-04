<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { niFrequency as meta } from "../n4/metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Period of time + <span class="grammar-highlight">に</span> + number of times
    </template>
    <template #explanation>
      The particle <span class="g">に</span> is commonly used with expressions of time to indicate how often something happens over a specific period.
      The structure is:
      <ul>
        <li>Period of time <span class="g">に</span> Number of times (frequency)</li>
      </ul>
      This pattern is used to say things like "twice a week", "three times a day", or "once a month".
      <GrammarExample>
        <template #example>
          <ruby>一日<rt>いちにち</rt></ruby><span class="g">に</span><ruby>三回<rt>さんかい</rt></ruby>
        </template>
        <template #translation>
          Three times a day
        </template>
        <template #note>
          Literally: "In one day, three times"
        </template>
      </GrammarExample>
      Here, 一日 indicates the period of time (one day), and 三回 indicates the frequency (three times).
      This structure can be used with various time periods such as days, weeks, months, or years, and can be adapted to fit different contexts.
      <GrammarExample>
        <template #example>
          <ruby>一週間<rt>いっしゅかん</rt></ruby><span class="g">に</span><ruby>一回<rt>いっかい</rt></ruby>
        </template>
        <template #translation>
          Once a week
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>一か月<rt>いっかげつ</rt></ruby><span class="g">に</span><ruby>二回<rt>にかい</rt></ruby>
        </template>
        <template #translation>
          Twice a month
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>一年<rt>一年</rt></ruby><span class="g">に</span><ruby>四回<rt>よんかい</rt></ruby>
        </template>
        <template #translation>
          Four times a year
        </template>
      </GrammarExample>
      When used in sentences, this pattern is often followed by an action verb, to show what happens at that frequency.
      <GrammarExample>
        <template #example>
          <ruby>一日<rt>いちにち</rt></ruby><span class="g">に</span><ruby>二回<rt>にかい</rt></ruby>歯をみがきます
        </template>
        <template #translation>
          I brush my teeth twice a day
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>学生<rt>がくせい</rt></ruby>たちは<ruby>一週間<rt>いっしゅかん</rt></ruby><span class="g">に</span>
          <ruby>一回<rt>いっかい</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>と<ruby>勉強<rt>べんきょう</rt></ruby>します
        </template>
        <template #translation>
          The students study with a teacher once a week
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
