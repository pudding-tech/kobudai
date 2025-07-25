<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { kotoNiSuru as meta, niSuru } from "./metadataN4";

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
      <div>Verb (plain present) + <span class="grammar-highlight">ことに<span v-if="isPolite">します</span><span v-else>する</span></span></div>
      <div class="structure-title small">Decide to do ... as a habit</div>
      <div>Verb (plain present) + <span class="grammar-highlight">ことにしてい<span v-if="isPolite">ます</span><span v-else>る</span></span></div>
    </template>
    <template #related>
      <div class="related-mb">See also:</div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: niSuru.slug } }" class="link">{{ niSuru.title }}</RouterLink></div>
    </template>
    <template #explanation>
      <span class="g">ことにする</span> is used to express a decision you make in terms of an action. It roughly translates as "decide to..." or "make a decision to..." in English.
      To use this structure, you take the plain present form of a verb and add <span class="g">ことにする</span> to it.
      <ul>
        <li>Verb (plain present) + <span class="g">ことにする</span></li>
      </ul>
      <GrammarExample>
        <template #example>
          <ruby>行<rt>い</rt></ruby>く<span class="g">ことにする</span>
        </template>
        <template #translation>
          I decide to go
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">ことにする</span> emphasizes a deliberate decision or conscious choice.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>毎朝<rt>まいあさ</rt></ruby>、パンケーキを<ruby>食<rt>た</rt></ruby>べない<span class="g">ことにしました</span>
        </template>
        <template #translation>
          I decided to not to eat pancakes every morning
        </template>
      </GrammarExample>
      For the equivalent with nouns, "to decide on something", see
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: niSuru.slug } }" class="link">{{ niSuru.title }}</RouterLink>.

      <div class="section">
        <div class="grammar-subtitle">Decide to do something as a habit</div>
        When する is conjugated into the present continuous, as in <span class="g">ことにしている</span>, the meaning is more about long-term habits
        or personal rules, something the speaker has decided to make a habit of doing or a routine they follow.
        <GrammarExample>
          <template #example>
            <ruby>毎日<rt>まいにち</rt></ruby>ジョギングをする<span class="g">ことにしている</span>
          </template>
          <template #translation>
            I make it a habit to jog every day
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            お<ruby>酒<rt>さけ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>まない<span class="g">ことにしています</span>
          </template>
          <template #translation>
            I make it a rule to not drink alcohol
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
