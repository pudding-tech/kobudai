<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { kore as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <span class="grammar-highlight">これ</span> (near the speaker)<br>
      <span class="grammar-highlight">それ</span> (near the listener)<br>
      <span class="grammar-highlight">あれ</span> (away from both speaker and listener)<br>
      <span class="grammar-highlight">どれ</span> (+ が)<br>
      <span class="grammar-highlight">どっち</span> (+ が)
    </template>
    <template #details>
      
    </template>
    <template #explanation>
      <span class="g">これ, それ, あれ</span>, and <span class="g">どれ</span> are demonstrative pronouns used to point out things based on their location relative to the speaker and listener.
      <br><br>
      <span class="g">これ</span> means "this" and is used for something near the speaker.
      <GrammarExample>
        <template #example>
          <span class="g">これ</span>はペンです
        </template>
        <template #translation>
          This is a pen
        </template>
      </GrammarExample>

      <span class="g">それ</span> means "that" and is used for something near the listener.
      <GrammarExample>
        <template #example>
          <span class="g">それ</span>は<ruby>本<rt>ほん</rt></ruby>ですか
        </template>
        <template #translation>
          Is that a book?
        </template>
      </GrammarExample>

      <span class="g">あれ</span> means "that (over there)" for something far from both speaker and listener.
      <GrammarExample>
        <template #example>
          <span class="g">あれ</span>は<ruby>山<rt>やま</rt></ruby>です
        </template>
        <template #translation>
          That over there is a mountain
        </template>
      </GrammarExample>

      <span class="g">どれ</span> means "which one" and is used to ask about multiple items.
      Note that this word can only be used when there are three or more items to choose from. When the choice is between two items another word <span class="g">どっち</span> is used.
      <br><br>
      Also note that like many question words <span class="g">どれ</span> and <span class="g">どっち</span> cannot be used with the particle は. Instead they must be followed by が when used in a question.
      <GrammarExample>
        <template #example>
          <span class="g">どれ</span>が<ruby>田中<rt>たなか</rt></ruby>さんのかばんですか
        </template>
        <template #translation>
          Which one is Tanaka's bag?
        </template>
        <template #note>
          Which of three or more potential bags
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <span class="g">どっち</span>が<ruby>田中<rt>たなか</rt></ruby>さんのかばんですか
        </template>
        <template #translation>
          Which one is Tanaka's bag?
        </template>
        <template #note>
          Which of two potential bags
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
