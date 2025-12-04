<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teMo as meta, nakutemoii } from "./metadataN4";
  import { teAdjectiveNoun, temoii, teVerb } from "@/grammar/n5/metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">も</span></div>
      <div>い-adjective <s class="remove">[い]</s> + <span class="grammar-highlight">くても</span></div>
      <div>な-adjective + <span class="grammar-highlight">でも</span></div>
      <div>Noun + <span class="grammar-highlight">でも</span></div>
    </template>
    <template #related>
      <div class="related-mb">Based on:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAdjectiveNoun.slug } }" class="link">{{ teAdjectiveNoun.title }}</RouterLink></div>
      <div class="related-mb" style="margin-top: 10px;">See also:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: temoii.slug } }" class="link">{{ temoii.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: nakutemoii.slug } }" class="link">{{ nakutemoii.title }}</RouterLink></div>
    </template>
    <template #explanation>
      The grammar pattern <span class="g">～ても</span> is used to express contrast, meaning "even if...".
      It shows that the result in the second part of the sentence will happen regardless of the condition in the first part.
      <br><br>
      It can be used with the <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">て-form</RouterLink> of verbs,
      as well as the <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAdjectiveNoun.slug } }" class="link">て-form</RouterLink> of adjectives and nouns.
      <GrammarExample>
        <template #example>
          <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っ<span class="g">ても</span>、<ruby>行<rt>い</rt></ruby>きます
        </template>
        <template #translation>
          Even if it rains, I will go
        </template>
        <template #note>
          With a verb
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>忙<rt>いそが</rt></ruby>し<span class="g">くても</span>、<ruby>来<rt>き</rt></ruby>ます
        </template>
        <template #translation>
          Even if I'm busy, I will come
        </template>
        <template #note>
          With an い-adjective
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>静<rt>しず</rt></ruby>か<span class="g">でも</span>、<ruby>勉強<rt>べんきょう</rt></ruby>できない
        </template>
        <template #translation>
          Even if it's quiet, I can't study
        </template>
        <template #note>
          With a な-adjective
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>休日<rt>きゅうじつ</rt></ruby><span class="g">でも</span>、<ruby>仕事<rt>しごと</rt></ruby>があります
        </template>
        <template #translation>
          Even on holidays, I have work
        </template>
        <template #note>
          With a noun
        </template>
      </GrammarExample>

      It can also be used with negatives to express "even if not":
      <GrammarExample>
        <template #example>
          お<ruby>金<rt>かね</rt></ruby>がな<span class="g">くても</span>、<ruby>幸<rt>しあわ</rt></ruby>せです
        </template>
        <template #translation>
          Even if I don't have money, I'm happy
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>元気<rt>げんき</rt></ruby>じゃな<span class="g">くても</span>、<ruby>来<rt>こ</rt></ruby>なければいけない
        </template>
        <template #translation>
          Even if you're not well, you have to come
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        The grammar points <RouterLink :to="{ name: 'grammarLoader', params: { slug: temoii.slug } }" class="link">{{ temoii.title }}</RouterLink>
        and <RouterLink :to="{ name: 'grammarLoader', params: { slug: nakutemoii.slug } }" class="link">{{ nakutemoii.title }}</RouterLink> are built on this pattern,
        meaning that "～てもいい" and "～なくてもいい" are just specialied uses of this grammar point.
        Literally they mean "even if [something], it's good" and "even if not [something], it's good".
      </div>
      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べ<span class="g">ても</span>いい
        </template>
        <template #translation>
          You may eat
        </template>
        <template #note>
          Literally, "even if you eat, it's good"
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
