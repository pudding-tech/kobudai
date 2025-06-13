<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { tekara as meta, maeni } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">から</span>
    </template>
    <template #related>
      See also <RouterLink :to="{ name: 'grammarLoader', params: { slug: maeni.slug } }" class="link">{{ maeni.title }}</RouterLink> for doing something before another action
    </template>
    <template #explanation>
      The grammar pattern <span class="g">～てから</span> is used to express that one action takes place after another.
      It emphasizes the order of events: the action in the て-form happens first, and then the following action occurs.
      <ul>
        <li>Verb (<span class="g">て-form</span>) + <span class="g">から</span> + [second action]</li>
      </ul>

      <GrammarExample>
        <template #example>
          ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べ<span class="g">てから</span>、<ruby>勉強<rt>べんきょう</rt></ruby>する
        </template>
        <template #translation>
          I'll study after eating
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          <ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby><span class="g">てから</span>、レストランに<ruby>行<rt>い</rt></ruby>きました
        </template>
        <template #translation>
          After watching the movie, we went to a restaurant
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        The difference between <span class="g">～てから</span> and simply linking verbs with the ～て form is that <span class="g">～てから</span> emphasizes
        that the first action must be completed before the second one can begin — it highlights a clear sequence where the first action sets the stage for the second.
      </div>

      Using <span class="g">～てから</span> followed by a verb in the ～ている form usually expresses a continuous or repeated action
      or state that began after the first action. It adds a nuance of "since doing X, Y has been happening."
      <GrammarExample>
        <template #example>
          <ruby>新<rt>あたら</rt></ruby>しい<ruby>家<rt>いえ</rt></ruby>に<ruby>住<rt>す</rt></ruby>ん<span class="g">でから</span>、
          <ruby>毎日<rt>まいにち</rt></ruby><ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>っている
        </template>
        <template #translation>
          Since I started living in my new house, I've been cooking every day
        </template>
      </GrammarExample>
      Similarly, when <span class="g">～てから</span> is followed by an adjective or a noun (with です or だ),
      it often describes a state that began after the first action and has continued since.
      <GrammarExample>
        <template #example>
          <ruby>仕事<rt>しごと</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まっ<span class="g">てから</span>、いつも<ruby>忙<rt>いそが</rt></ruby>しいです
        </template>
        <template #translation>
          Since starting work, I've always been busy
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
