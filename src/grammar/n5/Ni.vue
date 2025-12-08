<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { ni as meta, he, de } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Noun + <span class="grammar-highlight">に</span>
    </template>
    <template #related>
      <div class="related-mb">
        Related particles:
      </div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: de.slug } }" class="link">{{ de.title + " (location of action)" }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: he.slug } }" class="link">{{ he.title + " (direction particle)" }}</RouterLink></div>
    </template>
    <template #explanation>
      The particle <span class="g">に</span> marks the existence of people or things, the goal toward which movement occurs,
      and specific points in time. It indicates where something is, where something goes, or when something happens.

      <div class="section">
        <div class="grammar-subtitle">Location of existence (at, in)</div>
        Use <span class="g">に</span> with verbs that express existence such as いる (to be, for animate beings) and ある (to be, for inanimate objects).
        <GrammarExample>
          <template #example>
            <ruby>猫<rt>ねこ</rt></ruby>がテーブル<span class="g">に</span>います
          </template>
          <template #translation>
            There is a cat on the table
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>本<rt>ほん</rt></ruby>がかばん<span class="g">に</span>あります
          </template>
          <template #translation>
            There is a book in the bag
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          <span class="g">に</span> is used only with verbs of existence (いる／ある); for actions that take place at a location you would use
          <RouterLink :to="{ name: 'grammarLoader', params: { slug: de.slug } }" class="link">{{ de.title }}</RouterLink> instead.
          <ul>
            <li><ruby>家<rt>いえ</rt></ruby><span class="g">に</span>。。。→ implies that something exists at home (like "there is a cat at home")</li>
            <li><ruby>家<rt>いえ</rt></ruby>で。。。→ implies that an action takes place at home (like "I study at home")</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Goal of movement (to, into)</div>
        <span class="g">に</span> marks the destination or goal of motion.
        <GrammarExample>
          <template #example>
            <ruby>日本<rt>にほん</rt></ruby><span class="g">に</span><ruby>行<rt>い</rt></ruby>きます
          </template>
          <template #translation>
            I am going to Japan
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>家<rt>うち</rt></ruby><span class="g">に</span><ruby>帰<rt>かえ</rt></ruby>ります
          </template>
          <template #translation>
            I will return home
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          Another particle, <RouterLink :to="{ name: 'grammarLoader', params: { slug: he.slug } }" class="link">{{ he.title }}</RouterLink>,
          can also indicate direction or destination, but it focuses more on the general direction rather than a specific endpoint.
          <ul>
            <li><ruby>京都<rt>きょうと</rt></ruby><span class="g">に</span>。。。→ emphasizes arrival in Kyoto ("I go to Kyoto")</li>
            <li><ruby>京都<rt>きょうと</rt></ruby>へ。。。→ emphasizes the direction toward Kyoto ("I'm heading toward Kyoto"; arrival is not the focus)</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Time (at, on, in)</div>
        Use <span class="g">に</span> to mark a specific point in time when an event occurs.
        <GrammarExample>
          <template #example>
            ７<ruby>時<rt>じ</rt></ruby><span class="g">に</span><ruby>起<rt>お</rt></ruby>きます
          </template>
          <template #translation>
            I wake up at 7 o'clock
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>火曜日<rt>かようび</rt></ruby><span class="g">に</span><ruby>試験<rt>しけん</rt></ruby>があります
          </template>
          <template #translation>
            I have an exam on Tuesday
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          <span class="g">に</span> is used with exact or clearly defined times. It is not used
          with general time expressions like "today", "tomorrow", "every day", "this week" etc.
          It can however be used with the words くらい (about, around) and ごろ (around, approximately) to
          indicate an approximate time.
          <ul>
            <li><ruby>１０分<rt>じゅっぷん</rt></ruby>くらい<span class="g">に</span>。。。→ in about 10 minutes</li>
            <li>３<ruby>時<rt>じ</rt></ruby>ごろ<span class="g">に</span>。。。→ around 3 o'clock</li>
          </ul>
        </div>
      </div>
    </template>
  </GrammarStructure>
</template>
