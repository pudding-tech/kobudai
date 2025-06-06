<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { ichidanNonPast as meta, ichidan, ichidanNegative, ichidanPast, godanNonPast } from "./metadataN5";
  import { ba, potentialVerbs, volitionalVerbs } from "@/grammar/n4/metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(polite) => isPolite = polite">
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div v-if="isPolite">
        <div class="kanji-mb">
          <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">ます</span>
        </div>
        <div class="kanji-mb">
          <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="grammar-highlight">ます</span>
        </div>
        <div class="structure-title">
          Exceptions
        </div>
        <div class="kanji-mb">
          <span>する</span> → <span class="grammar-highlight">します</span>
        </div>
        <div>
          <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>き</rt></ruby>ます</span>
        </div>
      </div>
      <div v-else>
        <div class="kanji-mb">
          <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">る</span>
        </div>
        <div class="kanji-mb">
          <ruby>見<rt>み</rt></ruby><span class="grammar-highlight">る</span>
        </div>
        <div class="structure-title">
          Irregular verbs
        </div>
        <div class="kanji-mb">
          <span class="grammar-highlight">する</span>
        </div>
        <div>
          <span class="grammar-highlight"><ruby>来<rt>く</rt>る</ruby></span>
        </div>
      </div>
    </template>
    <template #related>
      <div class="related-mb">
        Non-past form of godan verbs:
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNonPast.slug } }" class="link">{{ godanNonPast.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Other ichidan conjugations:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidan.slug } }" class="link">{{ ichidan.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanNegative.slug } }" class="link">{{ ichidanNegative.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanPast.slug } }" class="link">{{ ichidanPast.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: potentialVerbs.slug } }" class="link">{{ potentialVerbs.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: volitionalVerbs.slug } }" class="link">{{ volitionalVerbs.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">Conditional verb (～ば)</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="grammar-title">The Non-Past Form (Present/Future) of Ichidan Verbs</div>
      Japanese verbs do not have distinct forms to indicate the difference between present and future tense. Instead, Japanese uses a single verb form, often referred to as the <i>non-past form</i>, to express both present and future actions.
      The present tense does not indicate that an action is happening right now - see <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'ている' } }" class="link">ている</RouterLink> for that - but rather that it is a general or habitual action.
      <br><br>
      Context and additional words are usually what indicate whether a non-past verb is referring to the present or the future.
      For example, take the ichidan verb 食べ<span class="g">る</span> (たべる) which means “to eat”. This form can indicate both present and future actions, depending on the context.
      <GrammarExample>
        <template #example>
          ラーメンを<ruby>食<rt>た</rt></ruby>べ<span class="g">る</span>
        </template>
        <template #translation>
          I eat ramen
        </template>
        <template #note>
          This suggests a general or habitual action, but depending on the context, it could also mean "I will eat ramen" (as in the future)
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>明日<rt>あした</rt></ruby>、ラーメンを<ruby>食<rt>た</rt></ruby>べ<span class="g">る</span>
        </template>
        <template #translation>
          I will eat ramen tomorrow
        </template>
        <template #note>
          Adding a time expression like <ruby>明日<rt>あした</rt></ruby> makes it clear that the action will happen in the future
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">Dictionary form (plain)</div>
        The non-past form (also known as the dictionary or plain form) of an ichidan verb is used in informal contexts, such as when speaking with friends or people of the same social rank.
        <br><br>
        This is the form you will find in dictionaries, and serves as the base form for many grammatical constructions.
        It requires no further conjugation and can be used as-is.
        <GrammarExample>
          <template #example>
            <div><ruby>食<rt>た</rt></ruby>べ<span class="g">る</span> – to eat</div>
            <div><ruby>落<rt>お</rt></ruby>ち<span class="g">る</span> – to fall down</div>
            <div><ruby>見<rt>み</rt></ruby><span class="g">る</span> – to see</div>
            <div style="padding-top: 8px">い<span class="g">る</span> – to exist (living things)</div>
          </template>
          <template #note>
            Dictionary form
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Polite form</div>
        The polite form of a verb is used in formal situations, such as speaking with strangers or people of higher social status.
        Since ichidan verbs have only one possible conjugation pattern, conjugating them is straightforward.
        <br><br>
        To make an ichidan verb polite in the non-past form, you simply drop the last syllable <span class="g">る</span>, then add <span class="g">ます</span>.

        <GrammarExample>
          <template #example>
            <div><ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">ます</span></div>
            <div><ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">ます</span></div>
            <div><ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">ます</span></div>
            <div style="padding-top: 8px">いる → い<span class="g">ます</span></div>
          </template>
          <template #note>
            Polite non-past form
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <GrammarExample>
          <template #example>
            <div>する → <span class="g">します</span></div>
            <div><ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>き</rt></ruby>ます</span></div>
          </template>
          <template #note>
            Polite non-past form of exceptions
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
