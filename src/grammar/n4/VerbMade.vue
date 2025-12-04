<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { verbMade as meta } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Verb (dictionary form) + <span class="grammar-highlight">まで</span>
    </template>
    <template #explanation>
      A verb in dictionary form followed by <span class="g">まで</span> means "until (someone does something)" or "up to the point of doing...".
      The particle <span class="g">まで</span> itself means "until", and when used after a verb in its dictionary form,
      it refers to a point in time or condition when an action or state ends.
      <GrammarExample>
        <template #example>
          <ruby>来<rt>く</rt></ruby>る<span class="g">まで</span>
        </template>
        <template #translation>
          Until (someone) comes
        </template>
      </GrammarExample>

      This construction is often used to describe how long something continues, or what must happen before something else begins.
      <GrammarExample>
        <template #example>
          <ruby>映画<rt>えいが</rt></ruby>が<ruby>終<rt>お</rt></ruby>わる<span class="g">まで</span>、<ruby>待<rt>ま</rt></ruby>ちます
        </template>
        <template #translation>
          I will wait until the movie ends
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>終<rt>お</rt></ruby>わる<span class="g">まで</span>、ゲームをしない
        </template>
        <template #translation>
          I won't play games until I finish all my homework
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        While the verb before <span class="g">まで</span> must be in its dictionary form, the tense of the entire sentence
        is determined by the clause that follows.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>母<rt>はは</rt></ruby>が<ruby>帰<rt>かえ</rt></ruby>ってくる<span class="g">まで</span>、テレビを<ruby>見<rt>み</rt></ruby>た
        </template>
        <template #translation>
          I watched TV until my mom came home
        </template>
        <template #note>
          Note that when the subject in the first clause is different from the subject in the second clause, the former is marked by が
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
