<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { nagara as meta, aidaNi } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div>Verb (ます stem) + <span class="grammar-highlight">ながら</span> + (main action)</div>
    </template>
    <template #related>
      <div class="related-mb">Describing two events happening at the same time:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: aidaNi.slug } }" class="link">{{ aidaNi.titlePlain }}</RouterLink></div>
    </template>
    <template #explanation>
      The grammar pattern <span class="g">ながら</span> is used to describe two actions happening at the same time,
      performed by the same subject. It is usually translated as "while doing..." in English.
      <br><br>
      To use <span class="g">ながら</span>, take the ます-stem of a verb and attach ながら, then follow it with the main action.
      <ul>
        <li>[Verb ます stem] + <span class="g">ながら</span> + [Main action]</li>
      </ul>
      <GrammarExample>
        <template #example>
          <ruby>話<rt>はな</rt></ruby>し<span class="g">ながら</span>、<ruby>歩<rt>ある</rt></ruby>く
        </template>
        <template #translation>
          Walk while talking
        </template>
      </GrammarExample>
      The <span class="g">ながら</span> action (the first verb) is usually considered secondary or background to the main verb,
      which expresses the primary action or focus of the sentence. In other words, the speaker is doing both things at the same time,
      but the second verb (the main verb) is more important or intentional, while the <span class="g">ながら</span> verb happens alongside it.
      <GrammarExample>
        <template #example>
          テレビを<ruby>見<rt>み</rt></ruby><span class="g">ながら</span>、<ruby>夜<rt>よる</rt></ruby>ごはんを<ruby>食<rt>た</rt></ruby>べる
        </template>
        <template #translation>
          Eat dinner while watching TV
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        Both actions must share the same subject when using this construction. This means that the person doing both actions
        must be the same — one subject is performing two simultaneous actions.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>昨日<rt>きのう</rt></ruby>、<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>き<span class="g">ながら</span><ruby>勉強<rt>べんきょう</rt></ruby>しました
        </template>
        <template #translation>
          Yesterday, I studied while listening to music
        </template>
        <template #note>
          The tense of the entire sentence is determined by the main verb
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
