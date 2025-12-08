<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { wo as meta, de, ha, he, ni, mo, to, transitivityPairs } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Noun + <span class="grammar-highlight">を</span> + verb
    </template>
    <template #related>
      <div class="related-mb">
        Other common particles:
      </div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ha.slug } }" class="link">{{ ha.title + " (topic particle)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ni.slug } }" class="link">{{ ni.title + " (location, movement)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: de.slug } }" class="link">{{ de.title + " (location particle)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: he.slug } }" class="link">{{ he.title + " (direction particle)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: to.slug } }" class="link">{{ to.title + " (and, with)" }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: mo.slug } }" class="link">{{ mo.title + " (also, too)" }}</RouterLink></div>
    </template>
    <template #explanation>
      The particle <span class="g">を</span> marks the direct object of a verb — the thing that is acted upon.
      It comes directly after the noun receiving the action.
      <GrammarExample>
        <template #example>
          パン<span class="g">を</span><ruby>食<rt>た</rt></ruby>べる
        </template>
        <template #translation>
          I eat bread
        </template>
      </GrammarExample>

      This particle can not be used with all verbs, as not all verbs take a direct object. This works the same as in English, like how
      you can "eat" something, but you can't "sleep" something. For more information on which verbs take the direct object particle, see the
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: transitivityPairs.slug } }" class="link">{{ transitivityPairs.title }}</RouterLink> grammar point.

      <GrammarExample>
        <template #example>
          <ruby>本<rt>ほん</rt></ruby><span class="g">を</span><ruby>読<rt>よ</rt></ruby>む
        </template>
        <template #translation>
          I will read a book
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        Normally, <span class="g">を</span> is pronounced "o", but in more literary speech you might hear it pronounced closer to "wo".
      </div>
    </template>
  </GrammarStructure>
</template>
