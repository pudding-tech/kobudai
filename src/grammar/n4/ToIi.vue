<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { toIi as meta, potentialVerbs } from "./metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(polite) => isPolite = polite">
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Short form (non-past) + <span class="grammar-highlight">といい<span v-if="isPolite">ですね</span><span v-else>ね</span></span></div>
      <div class="structure-title small">For myself:</div>
      <div>Short form (non-past) + <span class="grammar-highlight">といいん<span v-if="isPolite">ですが</span><span v-else>だけど</span></span></div>
    </template>
    <template #related>

    </template>
    <template #explanation>
      The structure <span class="g">～といい</span> is used to express a hope or wish that something happens or turns out well. It can be
      translated as "I hope...", "It would be good if...", or "I wish that...". It's commonly used when talking about things outside your control,
      such as events or outcomes that you'd like to happen.
      The form changes slightly depending on who the wish is about and how polite or casual you want to be.

      <div class="section">
        <div class="grammar-title">Structure of といい</div>
        <div class="grammar-subtitle">Hope for others</div>
        <span class="g">～といい</span>, or <span class="g">～といいですね</span> in polite settings, is used when expressing hope for
        someone else or for something general (not directly related to yourself).
        <GrammarExample>
          <template #example>
            <ruby>明日<rt>あした</rt></ruby>、<ruby>晴<rt>は</rt></ruby>れる<span class="g">といいですね</span>
          </template>
          <template #translation>
            I hope it will be sunny tomorrow
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>する<span class="g">といいね</span>
          </template>
          <template #translation>
            I hope you pass the exam
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Hope for myself</div>
        <span class="g">といいんだけど</span>, or <span class="g">～といいんですが</span> in polite settings, is used when
        expressing hopes for yourself — something you wish would happen, but which is outside your control.
        This construction adds a subtle, soft nuance, making the hope sound more tentative or uncertain — as if you're not
        expecting it to come true, but still quietly wishing for it.
        <GrammarExample>
          <template #example>
            バスがすぐ<ruby>来<rt>く</rt></ruby>る<span class="g">といいんだけど</span>
          </template>
          <template #translation>
            I hope the bus comes soon
          </template>
          <template #note>
            The bus coming benefits the speaker, so といいんだけど is appropriate here
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>彼<rt>かれ</rt></ruby>が<ruby>来<rt>き</rt></ruby>てくれる<span class="g">といいんですが</span>
          </template>
          <template #translation>
            I hope he comes
          </template>
          <template #note>
            Note the use of くれる, indicating that the action is done for the speaker's benefit
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-title">Nuances of といい</div>
        <span class="g">といい</span> is most commonly used with verbs, but it can also follow other elements
        like adjectives and nouns, especially when you're hoping for a state rather than an action.
        <GrammarExample>
          <template #example>
            <ruby>楽<rt>たの</rt></ruby>しい<span class="g">といいね</span>
          </template>
          <template #translation>
            I hope it's fun (for you)
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>安<rt>やす</rt></ruby>い<span class="g">といいんですが</span>
          </template>
          <template #translation>
            I hope it's cheap (for my sake)
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            いいレストランだ<span class="g">といいんだけど</span>
          </template>
          <template #translation>
            I hope it's a good restaurant (for my sake)
          </template>
          <template #note>
            When used with nouns, だ must be placed after the noun before といい
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          When used with verbs, the verb must represent something that's not fully in the speaker's control.
          If the action is under the speaker's own control (like "I study" or "I call my friend"),
          then using <span class="g">といい</span> sounds odd or unnatural.
          <br><br>
          Instead, you'd either avoid this structure, or change the verb to its
          <RouterLink :to="{ name: 'grammarLoader', params: { slug: potentialVerbs.slug } }" class="link">potential form</RouterLink>
          (which shifts the focus to whether something is possible or able to happen, and feels more appropriate for expressing hope).
        </div>
        <GrammarExample>
          <template #example>
            <ruby>食<rt>た</rt></ruby>べられる<span class="g">といいんだけど</span>
          </template>
          <template #translation>
            I hope I can eat it
          </template>
          <template #note>
            This introduces some uncertainty or external dependency, which makes it valid for expressing hope
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>宿題<rt>しゅくだい</rt></ruby>ができる<span class="g">といいんですが</span>
          </template>
          <template #translation>
            I hope I can do my homework
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
