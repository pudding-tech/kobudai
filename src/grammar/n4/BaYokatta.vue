<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { bayokatta as meta, ba } from "./metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div>Verb (<span class="grammar-highlight">ば</span>-form) + <span class="grammar-highlight">よかった</span><span v-if="isPolite"> + です</span></div>
      <div class="structure-title small">What someone else should have done (3rd person)</div>
      <div>Verb (<span class="grammar-highlight">ば</span>-form) + <span class="grammar-highlight">よかった</span>と<ruby>思<rt>おも</rt></ruby><span v-if="isPolite">います</span><span v-else>う</span></div>
    </template>
    <template #related>
      Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink> conditional form
    </template>
    <template #explanation>
      The structure <span class="g">～ばよかった</span> is used to express regret, remorse, or a missed opportunity about something you (or someone else)
      didn't do, but now wish had done.
      <br><br>
      To use this grammar point, take the conditional <span class="g">～ば</span> form of a verb and attach <span class="g">よかった</span> ("was good").
      <GrammarExample>
        <template #example>
          もっと<ruby>勉強<rt>べんきょう</rt></ruby>すれ<span class="g">ばよかった</span>
        </template>
        <template #translation>
          I should have studied more / I wish I had studied more
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        See <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">The conditional form (～ば)</RouterLink> for details on how to make the conditional form.
      </div>
      
      The phrase <span class="g">～ばよかった</span> conveys regret in a mild and introspective way. Rather than saying directly "I made a mistake" or "I regret it",
      you're saying, "It would have been better if I had..." — which sounds more like you're quietly wishing the past had gone differently.
      This nuance makes it feel less emotional or blaming, and more like a soft reflection.
      <GrammarExample>
        <template #example>
          あの<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>れ<span class="g">ばよかった</span>なあ
        </template>
        <template #translation>
          I wish I had seen that movie…
        </template>
        <template #note>
          The ending なあ adds a wistful tone, as if you're softly lamenting the missed opportunity
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-title">Talking About What Someone Else Should Have Done</div>
        Typically, <span class="g">～ばよかった</span> is mostly used to talk about your own actions.
        When you're referring to what someone else should have done, it's more natural and appropriate to use the pattern <span class="g">～ばよかった</span>と思う
        (～とおもう, "I think they should have…" or "I wish they…").
        <div class="note">
          <div class="note-title">Note:</div>
          Using <span class="g">～ばよかった</span> alone about someone else can sound presumptive in Japanese because it directly states what
          they should have done. Adding と思う softens this by expressing it as your personal opinion rather than a direct judgment.
        </div>
        <GrammarExample>
          <template #example>
            彼はもっと<ruby>早<rt>はや</rt></ruby>く<ruby>来<rt>こ</rt></ruby>れ<span class="g">ばよかった</span>と<ruby>思<rt>おも</rt></ruby>う
          </template>
          <template #translation>
            I wish he had come earlier
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
