<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { toieba as meta } from "./metadataN3";
  import { ba, toIu } from "../n4/metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Noun + <span class="grammar-highlight">といえば</span>
    </template>
    <template #related>
      <div class="related-mb">See also:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: toIu.slug } }" class="link">{{ toIu.titlePlain }}</RouterLink></div>
    </template>
    <template #explanation>
      <span class="g">といえば</span> is used to mean "speaking of...", "when it comes to...", or "if we're talking about...".
      It is often used to bring up a related topic or to mention something that naturally comes to mind when a certain topic is named.
      <GrammarExampleSentences>
        <div class="example">
          Aさん: <ruby>田中<rt>たなか</rt></ruby>さんは<ruby>面白<rt>おもしろ</rt></ruby>い<ruby>人<rt>ひと</rt></ruby>ですね
        </div>
        <div class="translation strong">
          A: Mr. Tanaka sure is a funny person.
        </div>
        <div class="example">
          Bさん: <ruby>田中<rt>たなか</rt></ruby>さん<span class="g">といえば</span>、<ruby>今日<rt>きょう</rt></ruby>ここに<ruby>来<rt>こ</rt></ruby>ないんですか？
        </div>
        <div class="translation strong">
          B: Speaking of Mr. Tanaka, isn't he coming here today?
        </div>
        <template #note>
          Here, B uses といえば to pick up the topic of Tanaka and connect it to another thought
        </template>
      </GrammarExampleSentences>
      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">といえば</span> is actually the <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink>
        conditional form of <RouterLink :to="{ name: 'grammarLoader', params: { slug: toIu.slug } }" class="link">{{ toIu.titlePlain }}</RouterLink> (という, to say),
        so a very literal translation would be "if one says...". In practice, however, it is usually used as a fixed expression for introducing a topic or association,
        rather than as a normal conditional.
      </div>

      Furthermore, <span class="g">といえば</span> can also be used when mentioning something strongly associated with a topic.
      In this use, it is quite close to the literal meaning of "if I say..." or "when it comes to...".
      <GrammarExample>
        <template #example>
          <ruby>日本<rt>にほん</rt></ruby>の<ruby>料理<rt>りょうり</rt></ruby><span class="g">といえば</span>、ナマコ<ruby>酢<rt>す</rt></ruby>は<ruby>最悪<rt>さいあく</rt></ruby>でしょ
        </template>
        <template #translation>
          When it comes to Japanese cuisine, vinegared sea cucumber is the worst, right?
        </template>
      </GrammarExample>

      This structure is quite common in questions, where the speaker is asking for the listener's opinion on a specific topic.
      <GrammarExample>
        <template #example>
          <ruby>夏<rt>なつ</rt></ruby><span class="g">といえば</span>、<ruby>何<rt>なに</rt></ruby>が<ruby>思<rt>おも</rt></ruby>いつきますか？
        </template>
        <template #translation>
          If I say summer, what do you think of?
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
