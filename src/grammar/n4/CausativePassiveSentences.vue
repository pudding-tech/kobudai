<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { causativePassiveSentences as meta, causativePassiveVerbs, causativeSentences, passiveSentences } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>(Doer) <span class="h">は</span>/<span class="h">が</span> + (commander) <span class="h">に</span> + <span class="g">(causative-passive verb)</span></div>
    </template>
    <template #related>
      Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativePassiveVerbs.slug } }" class="link">{{ causativePassiveVerbs.title }}</RouterLink> form
      <div class="related-mb" style="margin-top: 10px;">See also:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: passiveSentences.slug } }" class="link">{{ passiveSentences.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeSentences.slug } }" class="link">{{ causativeSentences.title }}</RouterLink></div>
    </template>
    <template #explanation>
      Causative-passive sentences express that someone was made to do something by someone else,
      usually against their will or with some degree of reluctance. This construction combines the idea of being
      caused to act with the nuance of being affected — often negatively — by that situation. It emphasizes that the subject
      did not choose the action themselves, but was compelled into it by another person or force.
      <div class="note">
        <div class="note-title">Note:</div>
        Sentences in the <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeSentences.slug } }" class="link">causative form</RouterLink>
        can mean to either "make" or "let" someone do something, but a causative-passive form sentence is always "to be made to do" something.
      </div>
      This form is commonly used to express complaint, obligation, or emotional burden, especially in conversations about school,
      work, or childhood experiences. It captures both the lack of control (from the passive) and the
      external pressure (from the causative), making it particularly expressive in contexts of forced behavior.
      <div class="note">
        <div class="note-title">Note:</div>
        See <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativePassiveVerbs.slug } }" class="link">{{ causativePassiveVerbs.title }}</RouterLink>
        for how to conjugate verbs into their causative-passive form.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>早<rt>はや</rt></ruby>く<span class="g"><ruby>寝<rt>ね</rt></ruby>させられた</span>
        </template>
        <template #translation>
          Made to go to bed early
        </template>
      </GrammarExample>
      In a causative-passive sentence, the "doer" (the one being forced to do something) is marked with the <span class="h">は</span> particle,
      while the "commander" (the one forcing the action) is marked with the <span class="h">に</span>.
      <ul>
        <li>[Doer] <span class="h">は</span> [commander] <span class="h">に</span> <span class="g">[action - causative-passive verb]</span></li>
      </ul>
      <GrammarExample>
        <template #example>
          <ruby>私<rt>わたし</rt></ruby><span class="h">は</span><ruby>親<rt>おや</rt></ruby><span class="h">に</span><ruby>野菜<rt>やさい</rt></ruby>を<span class="g"><ruby>食<rt>た</rt></ruby>べさせられた</span>
        </template>
        <template #translation>
          I was made to eat my vegetables by my parents
        </template>
      </GrammarExample>
      Compare this to the causative sentence:<br>
      <ul>
        <ruby>親<rt>おや</rt></ruby><span class="h">は</span><ruby>私<rt>わたし</rt></ruby><span class="h">に</span><ruby>野菜<rt>やさい</rt></ruby>を<span class="g"><ruby>食<rt>た</rt></ruby>べさせた</span>
        → "My parents made me eat my vegetables"
      </ul>
      Compared to regular causative sentences, causative-passive sentences reverse the roles of the particles used for the 'doer' and the 'commander'.

      <GrammarExample>
        <template #example>
          みんな<span class="h">は</span><ruby>社長<rt>しゃちょう</rt></ruby><span class="h">に</span><ruby>会議<rt>かいぎ</rt></ruby>に<span class="g"><ruby>出席<rt>しゅうせき</rt></ruby>させられました</span>
        </template>
        <template #translation>
          Everyone was forced to attend the meeting by the company president
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.particles-table {
  border-collapse: collapse; 
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: left;

  tr:not(:last-child) {
    border-bottom: 1px solid #cccccc24;
  }

  th, td {
    padding: 8px 8px;
  }
}
</style>
