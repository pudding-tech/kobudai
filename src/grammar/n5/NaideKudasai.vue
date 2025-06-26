<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { naideKudasai as meta, teKudasai } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Negative verb (plain form) + <span class="grammar-highlight">でください</span></div>
      <div class="structure-title small">Casual variant</div>
      <div>Negative verb (plain form) + <span class="grammar-highlight">で</span></div>
    </template>
    <template #related>
      Negative form of <RouterLink :to="{ name: 'grammarLoader', params: { slug: teKudasai.slug } }" class="link">{{ teKudasai.title }}</RouterLink>
    </template>
    <template #explanation>
      The grammar structure <span class="g">～ないでください</span> is used to make polite negative requests, asking someone not to do something.
      It is formed by taking the negative plain form of a verb, ending in <span class="g">～ない</span>, and adding <span class="g">でください</span>.

      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べ<span class="g">ないでください</span>
        </template>
        <template #translation>
          Please don't eat (it)
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          ドアを<ruby>開<rt>あ</rt></ruby>け<span class="g">ないでください</span>
        </template>
        <template #translation>
          Please don't open the door
        </template>
      </GrammarExample>
      This is often used in formal situations, such as signs, customer service, or when politely asking someone
      to refrain from doing something.

      <div class="section">
        <div class="grammar-subtitle">Casual variant</div>
        In casual speech, especially among friends or close acquaintances, the <span class="g">ください</span> can be dropped,
        leaving just <span class="g">～ないで</span>.
        <GrammarExample>
          <template #example>
            <ruby>行<rt>い</rt></ruby>か<span class="g">ないで</span>！
          </template>
          <template #translation>
            Don't go!
          </template>
        </GrammarExample>
        Without <span class="g">ください</span>, it sounds more direct and emotional, and is often used in urgent or emotional
        contexts — for example, when stopping someone from doing something in the moment.

        <div class="note">
          <div class="note-title">Note:</div>
          Be careful not to confuse this with the "without doing" meaning of <span class="g">～ないで</span>. When followed by another verb,
          it usually means "without doing", as in 食べないで行く (たべないでいく, "to go without eating").
        </div>
      </div>
    </template>
  </GrammarStructure>
</template>
