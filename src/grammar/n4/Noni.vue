<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { noni as meta } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div>(Plain form) + <span class="grammar-highlight">のに</span> + (unexpected fact) </div>
      <div class="structure-inner">
        <div>Verb (plain present/past) + <span class="grammar-highlight">のに</span></div>
        <div>い-adjective + <span class="grammar-highlight">のに</span></div>
        <div>な-adjective + <span class="grammar-highlight"><span class="h">な</span>のに</span></div>
        <div>Noun + <span class="grammar-highlight"><span class="h">な</span>のに</span></div>
        <div>Past noun/な-adjective + <span class="grammar-highlight"><span class="h">だった</span>のに</span></div>
      </div>
    </template>
    <template #explanation>
      The grammar structure <span class="g">のに</span> is used to connect two clauses, expressing contrast between them.
      The first part states a fact or situation, and the second part shows an unexpected or contradictory result.
      Think of it like saying: 
      <ul>
        <li>"Even though [A], [B]", or</li>
        <li>"Despite [A], [B]"</li>
      </ul>
      The second part (after <span class="g">のに</span>) often expresses something surprising, disappointing, or contrary to expectation.
      <GrammarExample>
        <template #example>
          <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っている<span class="g">のに</span>、<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>出<rt>で</rt></ruby>かけました
        </template>
        <template #translation>
          Even though it's raining, she went out
        </template>
      </GrammarExample>
      To use <span class="g">のに</span>, the first clause must be in the plain form,
      and the way <span class="g">のに</span> attaches depends on the type of word that comes before it:
      <ul>
        <li>For verbs, use the plain present or past form + <span class="g">のに</span></li>
        <li>For い-adjectives, use the plain present or past form + <span class="g">のに</span></li>
        <li>For な-adjectives and nouns, use the plain present form + <span class="g"><span class="h">な</span>のに</span></li>
        <li>For nouns or な-adjectives in the past tense, use the past form <span class="g"><span class="h">だった</span></span> + <span class="g">のに</span></li>
      </ul>
      <GrammarExample>
        <template #example>
          <ruby>忙<rt>いそが</rt></ruby>しい<span class="g">のに</span>、<ruby>彼<rt>かれ</rt></ruby>は<ruby>手伝<rt>てつだ</rt></ruby>ってくれた
        </template>
        <template #translation>
          Despite being busy, he helped me
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>子供<rt>こども</rt></ruby><span class="h">な</span><span class="g">のに</span>、とても<ruby>礼儀正<rt>れいぎただ</rt></ruby>しいです
        </template>
        <template #translation>
          Even though they are children, they are very polite
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">のに</span> can only be used to connect two facts or statements. Because of this, it cannot be
        used when the second clause is a command, request, invitation, or suggestion.
        <ul>
          <li>✅ OK: Even though it's cold, I went outside.</li>
          <li>❌ Not OK: Even though it's cold, please go outside.</li>
        </ul>
      </div>

      <GrammarExample>
        <template #example>
          <ruby>先生<rt>せんせい</rt></ruby><span class="h">だった</span><span class="g">のに</span>、<ruby>何<rt>なに</rt></ruby>も<ruby>教<rt>おし</rt></ruby>えてくれなかった
        </template>
        <template #translation>
          Even though he was a teacher, he didn't teach us anything
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
