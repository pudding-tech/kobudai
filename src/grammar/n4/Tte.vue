<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { tte as meta } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Verb (short form) + <span class="grammar-highlight">って</span>(言ってた)</div>
      <div>い-adjective + <span class="grammar-highlight">って</span>(言ってた)</div>
      <div>な-adjective + <span class="grammar-highlight">だ</span> + <span class="grammar-highlight">って</span>(言ってた)</div>
      <div>Noun + <span class="grammar-highlight">だ</span> + <span class="grammar-highlight">って</span>(言ってた)</div>
    </template>
    <template #related>
      
    </template>
    <template #explanation>
      <span class="g">って</span> is a casual way to quote something someone said, heard, or thought. It's commonly used in spoken Japanese and is especially frequent in informal conversations.

      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">って</span> is a shortened form of と言っていた. In casual speech, <span class="g">って</span> is often used
        on its own — standing in for the full <span class="g">って</span>言っていた — with the verb omitted and understood from context.
      </div>

      <GrammarExample>
        <template #example>
          <ruby>行<rt>い</rt></ruby>くと<ruby>言<rt>い</rt></ruby>っていた → <ruby>行<rt>い</rt></ruby>く<span class="g">って</span>
        </template>
        <template #translation>
          (Someone) said they're going
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          <ruby>母<rt>はは</rt></ruby>は<ruby>美味<rt>おい</rt></ruby>しい<span class="g">って</span>
        </template>
        <template #translation>
          My mom said it's tasty
        </template>
      </GrammarExample>


      <GrammarExample>
        <template #example>
          <ruby>田中<rt>たなか</rt></ruby>さんは<ruby>来<rt>こ</rt></ruby>ない<span class="g">って</span>
        </template>
        <template #translation>
          Tanaka said he's not coming
        </template>
        <template #note>
          Shorthand of 来ないと言っていた
        </template>
      </GrammarExample>

      When used without specifying who said it, <span class="g">って</span> often carries the same casual, secondhand feeling
      as "I heard..." or "they say..." in English. "Supposedly" or "apparently" can also be valid translations, depending on the context.

      <GrammarExample>
        <template #example>
          つまらない<span class="g">って</span>
        </template>
        <template #translation>
          They say it's boring
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          そのジェットコースターは<ruby>楽<rt>たの</rt></ruby>しい<span class="g">って</span>
        </template>
        <template #translation>
          That rollercoaster's supposed to be fun
        </template>
      </GrammarExample>

      <GrammarExample>
        <template #example>
          <ruby>明日<rt>あした</rt></ruby>は<ruby>休<rt>やす</rt></ruby>み<span class="g">だって</span>
        </template>
        <template #translation>
          They said tomorrow's a day off
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        The use of <span class="g">って</span> instead of と isn't limited to just と言っていた — it can also
        replace と with other verbs that take the quotation particle, such as と思う → <span class="g">って</span>思う.
      </div>
    </template>
  </GrammarStructure>
</template>
