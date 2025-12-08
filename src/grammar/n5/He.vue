<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { he as meta, ni, de } from "./metadataN5";
import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Noun + <span class="grammar-highlight">へ</span>
    </template>
    <template #related>
      <div class="related-mb">
        Related particles:
      </div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ni.slug } }" class="link">{{ ni.title + " (location, movement)" }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: de.slug } }" class="link">{{ de.title + " (location of action)" }}</RouterLink></div>
    </template>
    <template #explanation>
      The particle <span class="g">へ</span> marks the direction of movement. It indicates the general course or path toward which someone or something moves.
      Unlike <RouterLink :to="{ name: 'grammarLoader', params: { slug: ni.slug } }" class="link">{{ ni.title }}</RouterLink>,
      which emphasizes arrival at a destination, <span class="g">へ</span> highlights movement in the direction of that place.
      <br><br>
      Use <span class="g">へ</span> with verbs of motion such as <ruby>行<rt>い</rt></ruby>く (to go), <ruby>来<rt>く</rt></ruby>る (to come), and <ruby>帰<rt>かえ</rt></ruby>る (to return).

      <GrammarExample>
        <template #example>
          <ruby>仕事<rt>しごと</rt></ruby><span class="g">へ</span><ruby>行<rt>い</rt></ruby>く
        </template>
        <template #translation>
          I am going towards work
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>駅<rt>えき</rt></ruby><span class="g">へ</span><ruby>走<rt>はし</rt></ruby>る
        </template>
        <template #translation>
          I will run towards the station
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">Nuance compared to に</div>
        Both <RouterLink :to="{ name: 'grammarLoader', params: { slug: ni.slug } }" class="link">{{ ni.title }}</RouterLink> and <span class="g">へ</span>
        can be used with movement verbs, but they express slightly different nuances:
        <ul>
          <li>に emphasizes the destination as the focus of the statement.</li>
          <li><span class="g">へ</span> emphasizes direction toward the destination, focusing on the movement itself.</li>
        </ul>
        <GrammarExampleSentences>
          <div class="example">
            <ruby>日本<rt>にほん</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます
          </div>
          <div class="translation">
            I am going to Japan (focus on arriving in Japan)
          </div>
          <div class="example">
            <ruby>日本<rt>にほん</rt></ruby><span class="g">へ</span><ruby>行<rt>い</rt></ruby>きます
          </div>
          <div class="translation">
            I am going to Japan (focus on heading toward Japan - destination less emphasized)
          </div>
        </GrammarExampleSentences>
      </div>
    </template>
  </GrammarStructure>
</template>
