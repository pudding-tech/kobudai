<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { nasai as meta } from "./metadataN4";
  import { imperativeVerbs, naideKudasai, teHaIkenai, teKudasai } from "../n5/metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Verb (ます stem) + <span class="grammar-highlight">なさい</span></div>
      <div class="structure-title small">Stop doing...</div>
      <div>Verb (plain affirmative) + <span class="grammar-highlight">のをやめなさい</span></div>
    </template>
    <template #related>
      <div class="related-mb">Other ways to give commands/requests:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: imperativeVerbs.slug } }" class="link">{{ imperativeVerbs.title }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: teKudasai.slug } }" class="link">{{ teKudasai.title }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: naideKudasai.slug } }" class="link">{{ naideKudasai.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: teHaIkenai.slug } }" class="link">{{ teHaIkenai.title }}</RouterLink></div>
    </template>
    <template #explanation>
      <span class="g">なさい</span> is used to give polite but firm instructions or commands.
      It is more respectful than using the plain <RouterLink :to="{ name: 'grammarLoader', params: { slug: imperativeVerbs.slug } }" class="link">imperative form</RouterLink>,
      (like 読め or 行け) but still carries authority. You'll often hear it in situations where someone has higher status or authority,
      such as teachers, parents, or caregivers speaking to children or subordinates. It is also a popular form in educational materials, especially in exams and tests.
      <br><br>
      To form the command form, attach <span class="g">なさい</span> to the verb stem (the same stem used for ~ます form).
      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べ<span class="g">なさい</span>
        </template>
        <template #translation>
          Eat
        </template>
      </GrammarExample>
      <span class="g">なさい</span> is not used when speaking to superiors or in casual speech between equals. It can sound bossy if misused.
      <div class="note">
        <div class="note-title">Note:</div>
        There is no direct negative version of <span class="g">なさい</span>, but a common way to tell someone not to do something is to use the plain affirmative
        verb followed by <span class="g">のをやめなさい</span>, which comes from the verb やめる ("to stop").
        As this essentially means "stop doing (something)", it only makes sense for actions that are already happening.
        <br><br>
        Otherwise, constructions like
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: teHaIkenai.slug } }" class="link">{{ teHaIkenai.title }}</RouterLink> or
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: naideKudasai.slug } }" class="link">{{ naideKudasai.title }}</RouterLink>
        can also used for telling someone not to do something.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>泣<rt>な</rt></ruby>く<span class="g">のをやめなさい</span>
        </template>
        <template #translation>
          Stop crying
        </template>
      </GrammarExample>

      In casual contexts, you might hear <span class="g">なさい</span> shortened to just <span class="g">な</span>. This gives a more gentle nuance to the command.
      <GrammarExample>
        <template #example>
          あ、それを<ruby>食<rt>た</rt></ruby>べ<span class="g">な</span>
        </template>
        <template #translation>
          Ah, (go ahead and) eat that
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
