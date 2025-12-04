<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { numberShika as meta, numberMo } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Noun + が／を + <span class="grammar-highlight">number</span> + <span class="grammar-highlight">しか</span> + <span class="grammar-highlight">verb (negative)</span>
    </template>
    <template #related>
      Similarly, to say "as many as", see <RouterLink :to="{ name: 'grammarLoader', params: { slug: numberMo.slug } }" class="link">{{ numberMo.title }}</RouterLink>
    </template>
    <template #explanation>
      The structure <span class="g">number</span> + <span class="g">しか</span> + <span class="g">～ない</span> is used
      to say that only that small amount exists or happened, and nothing more. It emphasizes how little or insufficient something is.
      <GrammarExample>
        <template #example>
          りんごを１<ruby>個<rt>こ</rt></ruby><span class="g">しか</span><ruby>食<rt>た</rt></ruby>べ<span class="g">なかった</span>
        </template>
        <template #translation>
          I only ate one apple
        </template>
        <template #note>
          Implying that one apple is not much at all
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">しか</span> is always followed by a verb in the negative form, like <span class="g">～ない</span> or <span class="g">～なかった</span>.
      </div>
      Unlike だけ, which also means "only" but is neutral, <span class="g">しか～ない</span> carries a stronger feeling of limitation or insufficiency.
      This means it's not typically used in positive contexts, but rather when the speaker wants to emphasize that the amount is less than expected or desired.
      <br>
      Compare:
      <ul>
        <li>１人だけ来た – Only one person came (just a neutral statement)</li>
        <li>１人しか来なかった – Only one person came (implies: That's too few / less than expected / disappointing)</li>
      </ul>
      <GrammarExample>
        <template #example>
          お<ruby>昼<rt>ひる</rt></ruby>ごはんを<ruby>買<rt>か</rt></ruby>いたいけど、１００円<span class="g">しかない</span>
        </template>
        <template #translation>
          I want to buy lunch, but I only have 100 yen
        </template>
        <template #note>
          Note that the verb here is the negative form of ある
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        It is also possible to use <span class="g">しか</span> after a noun without a number, which implies that there is only that one thing and nothing else.
      </div>
      <GrammarExample>
        <template #example>
          パン<span class="g">しか</span>食べ<span class="g">ない</span>
        </template>
        <template #translation>
          I eat nothing but bread
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
