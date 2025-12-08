<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { de as meta, he, ni } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div>Place + <span class="grammar-highlight">で</span> + verb (location for action)</div>
      <div>Noun + <span class="grammar-highlight">で</span> (as a means/method)</div>
    </template>
    <template #related>
      <div class="related-mb">
        Related particles:
      </div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ni.slug } }" class="link">{{ ni.title + " (location, movement)" }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: he.slug } }" class="link">{{ he.title + " (direction particle)" }}</RouterLink></div>
    </template>
    <template #explanation>
      The particle <span class="g">で</span> marks the location of an action, as well as the means or method, by which something is done.
      It indicates where an action takes place or how something is carried out.

      <div class="section">
        <div class="grammar-subtitle">Location of an action (at, in)</div>
        Use <span class="g">で</span> to mark the place where an active event or action occurs.
        <GrammarExample>
          <template #example>
            <ruby>学校<rt>がっこう</rt></ruby><span class="g">で</span><ruby>勉強<rt>べんきょう</rt></ruby>する
          </template>
          <template #translation>
            I study at school
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            レストラン<span class="g">で</span><ruby>食<rt>た</rt></ruby>べない
          </template>
          <template #translation>
            I don't eat at restaurants
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          <span class="g">で</span> is used for places where actions happen. Compare with the particle
          <RouterLink :to="{ name: 'grammarLoader', params: { slug: ni.slug } }" class="link">{{ ni.title }}</RouterLink>, which marks the location of existence,
          such as "there is/are".
          <ul>
            <li><ruby>家<rt>いえ</rt></ruby>に。。。→ implies that something exists at home (like "there is a cat at home")</li>
            <li><ruby>家<rt>いえ</rt></ruby><span class="g">で</span>。。。→ implies that an action takes place at home (like "I study at home")</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Means or method (by, with, using)</div>
        The particle <span class="g">で</span> can also indicate how something is done — tools, methods, vehicles, languages, etc.
        <GrammarExample>
          <template #example>
            バス<span class="g">で</span><ruby>行<rt>い</rt></ruby>きます
          </template>
          <template #translation>
            I go by bus
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>箸<rt>はし</rt></ruby><span class="g">で</span><ruby>食<rt>た</rt></ruby>べる
          </template>
          <template #translation>
            I eat with chopsticks
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>日本語<rt>にほんご</rt></ruby><span class="g">で</span><ruby>話<rt>はな</rt></ruby>します
          </template>
          <template #translation>
            I speak in Japanese
          </template>
        </GrammarExample>
      </div>

    </template>
  </GrammarStructure>
</template>
