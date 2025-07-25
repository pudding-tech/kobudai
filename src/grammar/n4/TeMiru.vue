<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teMiru as meta } from "./metadataN4";
  import { teVerb } from "../n5/metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">み<span v-if="!isPolite">る</span><span v-else>ます</span></span>
    </template>
    <template #related>
      Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink>
    </template>
    <template #explanation>
      The grammar pattern <span class="g">～てみる</span> is used when you attempt to do something or try something out to see what happens. It implies testing or experimenting, often for the first time.
      <br><br>
      To create this form, take the <span class="g">て-form</span> of a verb and attach <span class="g">みる</span>.
      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べ<span class="g">てみる</span>
        </template>
        <template #translation>
          Try to eat
        </template>
      </GrammarExample>

      The verb <span class="g">みる</span> here comes from 見る (みる, "to see"), which reflects the idea of "trying and seeing what happens".
      Because 見る (and thus <span class="g">みる</span>) is an ichidan verb, it can be conjugated just like any other ichidan verb to express different tenses or politeness levels.
      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べ<span class="g">てみた</span>
        </template>
        <template #translation>
          Tried to eat
        </template>
        <template #note>
          Past form
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>読<rt>よ</rt></ruby>ん<span class="g">でみない</span>
        </template>
        <template #translation>
          Won't try to read
        </template>
        <template #note>
          Negative form
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>話<rt>はな</rt></ruby>し<span class="g">てみます</span>
        </template>
        <template #translation>
          Try to talk (to someone)
        </template>
        <template #note>
          Polite form
        </template>
      </GrammarExample>
      Even conjugations like "want to" can be used with "try to", so it becomes "want to try to do something".
      <GrammarExample>
        <template #example>
          <ruby>怖<rt>こわ</rt></ruby>い<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby><span class="g">てみたい</span>？
        </template>
        <template #translation>
          Do you want to try watching a scary movie?
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        Even though <span class="g">みる</span> comes from 見る (みる, "to see"), when used in this grammar pattern, it is never written in kanji.
        Always write it as <span class="g">～てみる</span>, with hiragana only.
      </div>
    </template>
  </GrammarStructure>
</template>
