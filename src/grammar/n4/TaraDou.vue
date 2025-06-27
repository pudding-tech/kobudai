<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { taradou as meta, tara } from "./metadataN4";

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
      <div>Verb (plain past form) + <span class="grammar-highlight">らどう<span v-if="isPolite">ですか</span></span></div>
    </template>
    <template #related>
      Based on the conditional form <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink>
    </template>
    <template #explanation>
      The pattern <span class="g">～たらどう</span> is a common way to give advice or suggestions, especially when someone has expressed a problem or asked for input.
      It literally means "How about if you did…?", or more naturally translated, "Why don't you…?" or "How about…?".
      <div class="note">
        <div class="note-title">Note:</div>
        This pattern is based on the conditional form <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink>.
      </div>
      To form this, take the past tense (<span class="g">た</span>-form) of a verb and add <span class="g">らどう</span>.
      <GrammarExample>
        <template #example>
          もう<ruby>少<rt>すこ</rt></ruby>し<ruby>寝<rt>ね</rt></ruby><span class="g">たらどう</span>？
        </template>
        <template #translation>
          Why don't you sleep a bit more?
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Caution:</div>
        Even though <span class="g">～たらどう</span> translates as "why don't you…?" or "how about…?", unlike in English it is not used for invitations or suggestions without
        any preceeding context. For example, using it to say "How about we go out?" without any context can sound pushy or even rude.
        Instead, <span class="g">～たらどう</span> is used to offer advice in response to a situation or concern that's already been mentioned.
        It's meant to address a problem or give a solution to something already established, not make spontaneous invitations.
      </div>
      For a more polite version, simply add <span class="g">ですか</span> to the end, forming <span class="g">～たらどうですか</span>.
      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べ<span class="g">たらどうですか</span>？
        </template>
        <template #translation>
          Why don't you eat?
        </template>
      </GrammarExample>
      This structure can sound gently encouraging, neutral, or even mildly critical, depending on your tone of voice and the situation.
      With the right intonation, it can be supportive — but if used carelessly, it might sound like you're implying the other person isn't doing the obvious or right thing.
    </template>
  </GrammarStructure>
</template>
