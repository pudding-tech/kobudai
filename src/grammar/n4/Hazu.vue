<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { hazu as meta } from "./metadataN4";

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
      <div>Plain form + <span class="grammar-highlight">はず</span> + <span v-if="isPolite">です</span><span v-else>だ</span></div>
      <div class="structure-inner">
        <div>Verb (plain form) + <span class="grammar-highlight">はず</span></div>
        <div>い-adjective + <span class="grammar-highlight">はず</span></div>
        <div>な-adjective + <span class="grammar-highlight"><span class="h">な</span>はず</span></div>
        <div>Noun + <span class="grammar-highlight"><span class="h">の</span>はず</span></div>
      </div>
    </template>
    <template #explanation>
      The grammar pattern <span class="g">はず</span> expresses the speaker's expectation or assumption that something
      is true based on logic, prior knowledge, or context. It's often translated as "should be true",
      "expected to be true", or "supposed to be the case", or any similar construction.
      <br><br>
      To form this structure, add <span class="g">はず</span> to the plain form of a verb, noun, or adjective.
      <GrammarExample>
        <template #example>
          <ruby>美味<rt>おい</rt></ruby>しい<span class="g">はず</span>だ
        </template>
        <template #translation>
          I expect it to be delicious
        </template>
      </GrammarExample>

      A sentence using <span class="g">はず</span> expresses what you believe to be true or likely, though you don't have any conclusive proof.
      It's used when the surrounding circumstances or common sense strongly suggest that something is the case.
      However, note that <span class="g">はず</span> is not used when referring to obligations or duties — such as things
      you are expected to do because of rules, responsibilities, or laws.

      <div class="note">
        <div class="note-title">Note:</div>
        When using <span class="g">はず</span> with a noun, it becomes <span class="h">の</span><span class="g">はず</span>.
        Similarily, with な-adjectives, it becomes <span class="h">な</span><span class="g">はず</span>.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>今日<rt>きょう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>み<span class="h">の</span><span class="g">はず</span>です
        </template>
        <template #translation>
          It should be a day off today
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-title">With the Past Tense</div>
        When the clause before <span class="g">はず</span> is in the past tense, you're expressing a belief about something that has already happened.
        <GrammarExample>
          <template #example>
             <ruby>電車<rt>でんしゃ</rt></ruby>はもう<ruby>出発<rt>しゅっぱつ</rt></ruby>した<span class="g">はず</span>だ
          </template>
          <template #translation>
            I believe the train has already departed
          </template>
        </GrammarExample>
        You can also use the past tense form <span class="g">はず</span>だった (or <span class="g">はず</span>でした) to describe something that was
        expected or supposed to happen, but in reality, didn't.
        <GrammarExample>
          <template #example>
            <ruby>今日<rt>きょう</rt></ruby>は<ruby>晴<rt>は</rt></ruby>れる<span class="g">はず</span>だったけど、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っている
          </template>
          <template #translation>
            It was supposed to be sunny today, but it's raining
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
