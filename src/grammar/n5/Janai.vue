<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { janai as meta } from "./metadataN5";
  import { breakpointService } from "@/services/breakpointService";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div v-if="isPolite">
        Noun + <span class="grammar-highlight">じゃないです</span><br>
        Noun + <span class="grammar-highlight">ではありません</span><br>
        な-adjective + <span class="grammar-highlight">じゃないです</span><br>
        な-adjective + <span class="grammar-highlight">ではありません</span>
      </div>
      <div v-else>
        Noun + <span class="grammar-highlight">じゃない</span><br>
        な-adjective + <span class="grammar-highlight">じゃない</span>
      </div>
    </template>
    <template #related>
      Negative form of <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'です' } }" class="link">です</RouterLink>
    </template>
    <template #explanation>
      <span class="g">じゃない</span> is an informal way to express negation in Japanese. It means "is not" or "am not" and is used to negate nouns or adjectives in casual conversation. It is the casual counterpart of the more formal structure:
      <ul>
        <li><span class="g">ではありません</span> → the full, polite negation form</li>
      </ul>
      There are a few common variations of this structure that differ in formality:
      <table class="janai-table">
        <thead>
          <tr>
            <th>Form</th>
            <th v-if="!breakpointService.isMobile()">Level of Formality</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="g">ではありません</span></td>
            <td v-if="!breakpointService.isMobile()">Very formal</td>
            <td>Standard polite form</td>
          </tr>
          <tr>
            <td><span class="g">ではない</span></td>
            <td v-if="!breakpointService.isMobile()">Plain/formal-ish</td>
            <td>Often used in writing</td>
          </tr>
          <tr>
            <td><span class="g">じゃありません</span></td>
            <td v-if="!breakpointService.isMobile()">Polite</td>
            <td>Spoken, softer than ではありません</td>
          </tr>
          <tr>
            <td><span class="g">じゃない</span></td>
            <td v-if="!breakpointService.isMobile()">Casual</td>
            <td>Common in daily conversation</td>
          </tr>
        </tbody>
      </table>
      <br>
      <span class="g">じゃない</span> is actually a contraction:
      <ul>
        <li><span class="g">ではありません</span> → <span class="g">ではない</span> / <span class="g">じゃありません</span> → <span class="g">じゃない</span></li>
      </ul>
      <GrammarExample>
        <template #example>
          <ruby>先生<rt>せんせい</rt></ruby><span class="g">じゃない</span>
        </template>
        <template #translation>
          (I am) not a teacher
        </template>
      </GrammarExample>
      Over time, a hybrid form became popular in modern Japanese: <span class="g">じゃないです</span>, where the general politeness marker です is added to the end of the casual <span class="g">じゃない</span>.
      This form is widely used in speech because it softens the casual <span class="g">じゃない</span> by adding です, which makes it sound a bit more polite — even though it's technically redundant.
      After all, ない is already the plain negative form of ありません, so saying <span class="g">じゃないです</span> is like saying "is not" and then tacking on "is" again.
      Grammatically speaking, it's not ideal — but socially, it's accepted and very common in most everyday contexts. It should however be avoided in formal writing or speeches.
      <GrammarExample>
        <template #example>
          <ruby>先生<rt>せんせい</rt></ruby><span class="g">じゃないです</span>
        </template>
        <template #translation>
          (I am) not a teacher
        </template>
        <template #note>
          Common polite form
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>先生<rt>せんせい</rt></ruby><span class="g">ではありません</span>
        </template>
        <template #translation>
          (I am) not a teacher
        </template>
        <template #note>
          Formal polite form
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        Only nouns and な-adjectives can be used with <span class="g">じゃない</span>. That's because these do not conjugate on their own for negation, so they require an auxiliary form like <span class="g">じゃない</span> to express "is not."
        In contrast, い-adjectives and verbs can conjugate directly to show negation (e.g. 行かない for "not go"), so using <span class="g">じゃない</span> with them would be grammatically incorrect.
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.janai-table {
  width: 100%;
  border-collapse: collapse; 
  margin-top: 1rem;
  text-align: left;

  tr:not(:last-child) {
    border-bottom: 1px solid #cccccc24;
  }

  th, td {
    padding: 8px 8px;
  }
}
</style>
