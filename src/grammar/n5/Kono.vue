<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { kono as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <span class="grammar-highlight">この</span> + Noun (near the speaker)<br>
      <span class="grammar-highlight">その</span> + Noun (near the listener)<br>
      <span class="grammar-highlight">あの</span> + Noun (away from both speaker and listener)<br>
      <span class="grammar-highlight">どの</span> + Noun<br>
      <span class="grammar-highlight">どっち</span> + の + Noun
    </template>
    <template #details>
      
    </template>
    <template #explanation>
      <span class="g">この, その, あの</span>, and <span class="g">どの</span> are used to modify nouns, pointing out specific items based on location.
      <br><br>
      <span class="g">この</span> means "this" and is used for something near the speaker.
      <GrammarExample>
        <template #example>
          <span class="g">この</span>ペンは<ruby>新<rt>あたら</rt></ruby>しいです
        </template>
        <template #translation>
          This pen is new
        </template>
      </GrammarExample>

      <span class="g">その</span> means "that" and is used for something near the listener.
      <GrammarExample>
        <template #example>
          <span class="g">その</span><ruby>本<rt>ほん</rt></ruby>は<ruby>面白<rt>おもしろ</rt></ruby>いですか
        </template>
        <template #translation>
          Is that book interesting?
        </template>
      </GrammarExample>

      <span class="g">あの</span> means "that (over there)" for something far from both speaker and listener.
      <GrammarExample>
        <template #example>
          <span class="g">あの</span><ruby>山<rt>やま</rt></ruby>は<ruby>高<rt>たか</rt>いです</ruby>
        </template>
        <template #translation>
          That mountain over there is tall
        </template>
      </GrammarExample>

      <span class="g">どの</span> means "which" and is used to ask about specific items.
      Note that this word can only be use when there are three or more items to choose from. When the choice is between two items another word <span class="g">どっち</span>(の) is used.
      <br><br>
      Also note that like many question words <span class="g">どの</span> and <span class="g">どっち</span>(の) cannot be used with the particle は. Instead they must be followed by が when used in a question.
      <GrammarExample>
        <template #example>
          <span class="g">どの</span>かばんが<ruby>田中<rt>たなか</rt></ruby>さんのですか
        </template>
        <template #translation>
          Which bag is Tanaka's?
        </template>
        <template #note>
          Which of three or more potential bags
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <span class="g">どっち</span>のかばんが<ruby>田中<rt>たなか</rt></ruby>さんのですか
        </template>
        <template #translation>
          Which bag is Tanaka's?
        </template>
        <template #note>
          Which of two potential bags
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
