<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { toori as meta } from "./metadataN3";
  import { noyouni, youni } from "../n4/metadataN4";
</script>

<script lang="ts">
  export const title = meta.titlePlain ?? meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div>Verb (positive plain) + <span class="grammar-highlight">とおり</span> + (に)</div>
      <div>Noun + <span class="grammar-highlight"><span class="h">の</span>とおり</span> + (に)</div>
      <div>Noun + <span class="grammar-highlight">どおり</span> + (に)</div>
    </template>
    <template #related>
      <div class="related-mb">See also:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: youni.slug } }" class="link">{{ youni.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: noyouni.slug } }" class="link">{{ noyouni.title }}</RouterLink></div>
    </template>
    <template #explanation>
      <span class="g">とおり</span> means "exactly as...", "just as...," or "in the way that...".
      It is used when something happens or is done in the same way as some instruction, explanation, plan, expectation, or example.
      <br><br>
      It can only follow a verb in the positive plain form (most commonly either the dictionary form or the past form), or a noun.
      <GrammarExample>
        <template #example>
          <ruby>先生<rt>せんせい</rt></ruby>が<ruby>言<rt>い</rt></ruby>った<span class="g">とおり</span>に、してください
        </template>
        <template #translation>
          Please do exactly as the teacher said
        </template>
      </GrammarExample>

      This sentence structure is commonly used with verbs that express one's opinion or thoughts, such as:
      <ul>
        <li><ruby>言<rt>い</rt></ruby>う - to say</li>
        <li><ruby>話<rt>はな</rt></ruby>す - to speak</li>
        <li><ruby>聞<rt>き</rt></ruby>く - to listen</li>
        <li><ruby>思<rt>おも</rt></ruby>う - to think</li>
        <li><ruby>考<rt>かんが</rt></ruby>える - to consider</li>
      </ul>

      When used with a noun, the particle の must be used to connect the noun to <span class="g">とおり</span>, forming <span class="h">の</span><span class="g">とおり</span>.
      There is also an alternative form, <span class="g">どおり</span>, which requires no の.
      <GrammarExample>
        <template #example>
          <ruby>説明書<rt>せつめいしょ</rt></ruby><span class="h">の</span><span class="g">とおり</span>に、<ruby>組<rt>く</rt></ruby>み<ruby>立<rt>た</rt></ruby>てました
        </template>
        <template #translation>
          I assembled it exactly according to the instructions
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          レシピ<span class="g">どおり</span>、<ruby>作<rt>つく</rt></ruby>った
        </template>
        <template #translation>
          I made it exactly according to the recipe
        </template>
      </GrammarExample>

      In usage, <span class="h">の</span><span class="g">とおり</span> often sounds a little more explicit or formal,
      while <span class="g">どおり</span> sounds more compact and natural with common set expressions, such as:
      <ul>
        <li><ruby>予定<rt>よてい</rt></ruby><span class="g">どおり</span> - as planned</li>
        <li><ruby>予想<rt>よそう</rt></ruby><span class="g">どおり</span> - as expected</li>
        <li><ruby>計画<rt>けいかく</rt></ruby><span class="g">どおり</span> - according to plan</li>
        <li><ruby>説明<rt>せつめい</rt></ruby><span class="g">どおり</span> - as explained</li>
      </ul>

      <div class="note">
        <div class="note-title">Note:</div>
        When the construction following <span class="g">とおり</span> is an "action" verb, the particle に is often
        used (but not required) after <span class="g">とおり</span>. If what follows is any other part of speech,
        like a copula or a descriptive phrase, に cannot be used.
      </div>

      <GrammarExample>
        <template #example>
          <ruby>予想<rt>よそう</rt></ruby><span class="g">どおり</span>、<ruby>試験<rt>しけん</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しかったです
        </template>
        <template #translation>
          Just as expected, the exam was difficult
        </template>
        <template #note>
          に cannot be used here because the following phrase is not an action
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">Compared to ように</div>
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: youni.slug } }" class="link">{{ youni.title }}</RouterLink>
        can also mean "as..." or "in the way that...", but it is usually less strict than <span class="g">とおり</span>.
        It focuses more on doing something in a similar way, or following the general manner of something.

        <GrammarExample>
          <template #example>
            <ruby>先生<rt>せんせい</rt></ruby>が<ruby>言<rt>い</rt></ruby>ったように、してください
          </template>
          <template #translation>
            Please do it as the teacher said
          </template>
          <template #note>
            Compare this to the earlier example with とおり
          </template>
        </GrammarExample>
        Here, <span class="g">とおり</span> sounds more exact: follow what the teacher said closely.
        ように sounds a little broader: do it in the way the teacher explained.
      </div>
    </template>
  </GrammarStructure>
</template>
