<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { naide as meta } from "./metadataN4";
  import { naideKudasai } from "../n5/metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Negative verb (plain form) + <span class="grammar-highlight">で</span> + main action
    </template>
    <template #explanation>
      The grammar pattern <span class="g">～ないで</span> is used to express doing something without doing something else.
      It is formed by attaching で to the plain negative form of a verb, and often translated as "without doing [X]".
      Essentially, it shows that one action was done while another expected or usual action was not done.
      <br><br>
      This structure is usually followed by another verb or clause that indicates the main action — the thing that was done.
      Without that follow-up, the sentence would feel incomplete or ambiguous. In other words, <span class="g">～ないで</span> sets up a contrast,
      so it typically needs a second action to contrast it with.

      <GrammarExampleSentences>
        <div class="example">
          <ruby>食<rt>た</rt></ruby>べない → <ruby>食<rt>た</rt></ruby>べ<span class="g">ないで</span>…
        </div>
        <div class="translation">
          to not eat → without eating (…)
        </div>
        <div class="example">
          <ruby>言<rt>い</rt></ruby>わない → <ruby>言<rt>い</rt></ruby>わ<span class="g">ないで</span>…
        </div>
        <div class="translation">
          to not say → without saying (…)
        </div>
        <div class="example">
          <ruby>見<rt>み</rt></ruby>ない → <ruby>見<rt>み</rt></ruby><span class="g">ないで</span>…
        </div>
        <div class="translation">
          to not see → without seeing (…)
        </div>
      </GrammarExampleSentences>
      <div class="note">
        <div class="note-title">Note:</div>
        Be careful — the form <span class="g">～ないで</span> can also be used to casually tell someone not to do something (see
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: naideKudasai.slug } }" class="link">{{ naideKudasai.title }}</RouterLink>).
        However, when <span class="g">～ないで</span> is used to mean "without doing…", it will usually be followed by another action,
        indicating what was done instead or afterward. To avoid confusion, make sure the sentence continues with a second
        action if you want to express "without doing…".
      </div>

      <GrammarExample>
        <template #example>
          <ruby>寝<rt>ね</rt></ruby><span class="g">ないで</span>、<ruby>仕事<rt>しごと</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます
        </template>
        <template #translation>
          I will go to work without sleeping
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        The present tense form <span class="g">～ないで</span> is used for both present and past actions.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>何<rt>なに</rt></ruby>も<ruby>買<rt>か</rt></ruby>わ<span class="g">ないで</span><ruby>店<rt>みせ</rt></ruby>に<ruby>行<rt>い</rt></ruby>った
        </template>
        <template #translation>
          I went to the store without buying anything
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
