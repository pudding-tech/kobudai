<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { youda as meta, mitai, noyouni, sou } from "./metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div>Verb (plain form) + <span class="grammar-highlight">よう</span><span v-if="isPolite"> + です</span><span v-else> + だ</span></div>
      <div>い-adjective + <span class="grammar-highlight">よう</span><span v-if="isPolite"> + です</span><span v-else> + だ</span></div>
      <div>な-adjective + <span class="grammar-highlight"><span class="h">な</span>よう</span><span v-if="isPolite"> + です</span><span v-else> + だ</span></div>
      <div>Noun + <span class="grammar-highlight"><span class="h">の</span>よう</span><span v-if="isPolite"> + です</span><span v-else> + だ</span></div>
      <div>Past noun/な-adjective + <span class="grammar-highlight"><span class="h">だった</span>よう</span><span v-if="isPolite"> + です</span><span v-else> + だ</span></div>
    </template>
    <template #related>
      <div class="related-mb">Other ways of expressing "looks like":</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: sou.slug } }" class="link">{{ sou.title }}</RouterLink></div>
      <div style="margin-bottom: 10px">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: mitai.slug } }" class="link">{{ mitai.title }}</RouterLink></div>
      <div class="related-mb">See also:</div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: noyouni.slug } }" class="link">{{ noyouni.title }}</RouterLink></div>
    </template>
    <template #explanation>
      The grammar pattern <span class="g">ようだ</span> is used to express inference, appearance, or similarity based on some evidence, observation, or feeling.
      It is softer and more subjective than simply stating a fact, and it conveys that the speaker is making a guess or assumption.
      <GrammarExample>
        <template #example>
          <ruby>外<rt>そと</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby>い<span class="g">ようだ</span>
        </template>
        <template #translation>
          It seems that it's cold outside
        </template>
      </GrammarExample>
      <span class="g">ようだ</span> can follow verbs, い-adjectives, な-adjectives, and nouns. When used with a な-adjective,
      add <span class="h">な</span> before <span class="g">ようだ</span>. When used with a noun, add <span class="h">の</span> before <span class="g">ようだ</span>.
      <GrammarExample>
        <template #example>
          あの<ruby>人<rt>ひと</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby><span class="h">の</span><span class="g">よう</span>です
        </template>
        <template #translation>
          That person looks like a student
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        Grammatically, <span class="g">よう</span> is a な-adjective, so omitting だ at the end of a sentence is possible
        in casual speech — but in practice, it often sounds unnatural or incomplete without it.
      </div>

      <span class="g">ようだ</span> and its more casual counterpart <RouterLink :to="{ name: 'grammarLoader', params: { slug: mitai.slug } }" class="link">{{ mitai.title }}</RouterLink>
      both mean "it seems like" or "appears to be," but they differ in tone and usage. <span class="g">ようだ</span> is more formal and often
      used in written language, reports, or when speaking carefully. It tends to sound objective or reasoned, as if based on evidence or logical inference.
      In contrast, みたい is more casual and common in everyday conversation.
      <GrammarExample>
        <template #example>
          この<ruby>部屋<rt>へや</rt></ruby>は<ruby>静<rt>しず</rt></ruby>か<span class="h">だった</span><span class="g">ようだ</span>
        </template>
        <template #translation>
          It seems that this room was quiet
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        If you're using it to describe similarity, <RouterLink :to="{ name: 'grammarLoader', params: { slug: noyouni.slug } }" class="link">{{ noyouni.title }}</RouterLink>
        should be used instead (e.g. "quiet like a cat").
      </div>
    </template>
  </GrammarStructure>
</template>
