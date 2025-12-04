<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teKudasai as meta, naideKudasai, ne, teVerb } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">ください</span></div>
      <div class="structure-title small">Casual variant</div>
      <div>Verb (<span class="grammar-highlight">て-form</span>)</div>
    </template>
    <template #related>
      <div class="related-mb">- Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink></div>
      <div>- See <RouterLink :to="{ name: 'grammarLoader', params: { slug: naideKudasai.slug } }" class="link">{{ naideKudasai.title }}</RouterLink> for the negative request form</div>
    </template>
    <template #explanation>
      The grammar structure <span class="g">～てください</span> is used to make polite requests, asking someone to do something.
      It is formed by taking the <span class="g">て</span>-form of a verb and adding <span class="g">ください</span>.

      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べ<span class="g">てください</span>
        </template>
        <template #translation>
          Please eat (it)
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>座<rt>す</rt></ruby>わっ<span class="g">てください</span>
        </template>
        <template #translation>
          Please sit down
        </template>
      </GrammarExample>
      This form is commonly used in everyday polite speech, such as giving directions, instructions, or gentle requests.
      It is polite but not overly formal, making it suitable for most social situations — including customer service,
      classrooms, and conversations with people you don't know well.

      <div class="section">
        <div class="grammar-subtitle">Casual variant</div>
        In casual speech, especially with friends or people of equal/lower status, the <span class="g">ください</span> is often dropped,
        leaving just the て-form. This makes the expression softer and more informal, though it can also sound a bit abrupt depending on tone and context.
    
        <GrammarExample>
          <template #example>
            ちょっと<ruby>待<rt>ま</rt></ruby>っ<span class="g">て</span>
          </template>
          <template #translation>
            Wait a bit
          </template>
        </GrammarExample>
        Without <span class="g">ください</span>, it feels more direct or urgent, and is often used in real-time situations
        or when talking to someone very close to you (like a friend or child).
        <br><br>
        You can also add <RouterLink :to="{ name: 'grammarLoader', params: { slug: ne.slug } }" class="link">{{ ne.title }}</RouterLink>
        at the end to soften the tone and sound friendlier or more caring. This adds warmth or encouragement to the request,
        and is common in casual or affectionate speech.
        <GrammarExample>
          <template #example>
            <ruby>食<rt>た</rt></ruby>べ<span class="g">て</span>ね
          </template>
          <template #translation>
            Eat, (please)
          </template>
          <template #note>
            Can be said when you want to encourage someone to eat
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
