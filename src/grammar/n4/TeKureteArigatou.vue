<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teKureteArigatou as meta, ageruKureruMorau, teAgeruKureruMorau } from "./metadataN4";
  import { teVerb } from "../n5/metadataN5";
  import { breakpointService } from "@/services/breakpointService";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #title>
      <div v-if="breakpointService.isMobile()" style="word-break: normal;">
        {{ meta.title }}
      </div>
      <span v-else>
        {{ meta.title }}
      </span>
    </template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">くれてありがとう<span v-if="isPolite">ございます</span></span>
    </template>
    <template #related>
      <div class="related-mb">Based on</div>
       <div class="related-mb">
         - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink>
       </div>
       <div class="related-mb">
         - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAgeruKureruMorau.slug } }" class="link">{{ teAgeruKureruMorau.title }}</RouterLink>
       </div>
    </template>
    <template #explanation>
      <span class="g">～てくれてありがとう</span> is used to express gratitude for someone doing something for you. It literally
      means "thank you for doing (something for me)", and is a combination of:
      <ul>
        <li style="margin-bottom: 6px;">
          <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">～て-form</RouterLink>
          of a verb (used to connect actions or show cause/effect).
        </li>
        <li style="margin-bottom: 6px;">
          <RouterLink :to="{ name: 'grammarLoader', params: { slug: ageruKureruMorau.slug } }" class="link">くれる</RouterLink>
          (also in the て-form), which implies that someone did something for your benefit.
        </li>
        <li>
          <span class="g">ありがとう</span>, meaning "thank you".
        </li>
      </ul>
      Because <span class="g">くれる</span> implies that the action was done for your sake, this expression is used
      when the speaker is thankful for an action someone else did for them.

      <GrammarExample>
        <template #example>
          <ruby>手伝<rt>てつだ</rt></ruby>っ<span class="g">てくれてありがとう</span>
        </template>
        <template #translation>
          Thank you for helping me
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>来<rt>き</rt></ruby><span class="g">てくれてありがとう</span>
        </template>
        <template #translation>
          Thank you for coming
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        The phrase <span class="g">～てくれてありがとう</span> is used when someone does something for your benefit,
        and you're thanking them for that. If the action wasn't done for you or didn't involve you directly,
        then using <span class="g">～てくれてありがとう</span> sounds unnatural or wrong.
        In such cases, a different expression (like a standard <span class="g">ありがとう</span>) is more appropriate.
      </div>

      In more polite contexts, you can add the polite suffix <span class="g">ございます</span>.
      <GrammarExample>
        <template #example>
          <ruby>待<rt>ま</rt></ruby>っ<span class="g">てくれてありがとうございます</span>
        </template>
        <template #translation>
          Thank you for waiting (for me)
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
