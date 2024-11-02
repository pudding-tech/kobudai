<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GodanChart from "@/components/GodanChart.vue";
  import { ichidanNonPast as meta, ichidan, godanNonPast, godanNegative } from "./metadataN5";

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
          <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">る</span> → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">ます</span>
        </div>
        <div class="kanji-mb">
          <ruby>見<rt>み</rt></ruby><span class="grammar-highlight">る</span> → <ruby>見<rt>み</rt></ruby><span class="grammar-highlight">ます</span>
        </div>
        <div class="irregular-verbs">
          Irregular verbs:
        </div>
        <div class="kanji-mb">
          <span class="grammar-highlight">する</span> → <span class="grammar-highlight">します</span>
        </div>
        <div>
          <span class="grammar-highlight"><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>き</rt></ruby>ます</span>
        </div>
      </div>
      <div v-else>
        <div class="kanji-mb">
          <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">る</span>
        </div>
        <div class="kanji-mb">
          <ruby>見<rt>み</rt></ruby><span class="grammar-highlight">る</span>
        </div>
        <div class="irregular-verbs">
          Irregular verbs:
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
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="title">Ichidan - Non-Past Form</div>
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
          <ruby>明日<rt>あした</rt></ruby>ラーメンを<ruby>食<rt>た</rt></ruby>べ<span class="g">る</span>
        </template>
        <template #translation>
          I will eat ramen tomorrow
        </template>
        <template #note>
          Adding a time expression like <ruby>明日<rt>あした</rt></ruby> makes it clear that the action will happen in the future
        </template>
      </GrammarExample>
      <div class="subtitle">Dictionary form (informal)</div>
      The dictionary form (also called the plain form) of a godan verb is used in informal contexts, such as when speaking with friends or people of the same social rank.
      In the godan five step chart the dictionary form is the form that ends in the <span class="g">う</span> sound.

      <div class="chart">
        <GodanChart :selected-row="3" :show-word-selection="false" />
      </div>
      
      This is the form you will find in dictionaries, and it is the base form used in many grammatical constructions.
      <GrammarExample>
        <template #example>
          <div><ruby>読<rt>よ</rt></ruby> <span class="g">む</span> – to read</div>
          <div><ruby>話<rt>はな</rt></ruby><span class="g">す</span> – to speak</div>
          <div><ruby>書<rt>か</rt></ruby><span class="g">く</span> – to write</div>
        </template>
        <template #note>
          Dictionary form
        </template>
      </GrammarExample>

      <div class="section">
        <div class="subtitle">Polite form</div>
        The polite form of a verb is used in formal situations, such as speaking with strangers or people of higher social status.
        To make a godan verb polite, you move the verb on the godan five step chart to the い row.

        <div class="chart">
          <GodanChart :selected-row="2" :show-word-selection="false" />
        </div>
        From here the verb can be conjugated in various polite forms. For the non-past form (present/future tense), you take the verb stem in the polite form (now ending in a い sound), and then add <span class="g">ます</span>.

        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby><span class="g">む</span> → <ruby>読<rt>よ</rt></ruby><span class="g">みます</span></div>
            <div><ruby>話<rt>はな</rt></ruby><span class="g">す</span> → <ruby>話<rt>はな</rt></ruby><span class="g">します</span></div>
            <div><ruby>書<rt>か</rt></ruby><span class="g">く</span> → <ruby>書<rt>か</rt></ruby><span class="g">きます</span></div>
          </template>
          <template #note>
            Polite form (final syllable's vowel to changed to <b>i</b>, then added <b>ます</b>)
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.section {
  margin-top: 40px;
}

.title {
  font-size: 1.3rem;
  opacity: 0.8;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.8;
  margin-top: 40px;
  margin-bottom: 18px;
}
</style>
