<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import { godanNonPast as meta, ichidanNonPast, godan, godanNegative, godanPast } from "./metadataN5";

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
          <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt><span class="grammar-highlight"><span class="h">い</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt><span class="grammar-highlight"><span class="h">ち</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt><span class="grammar-highlight"><span class="h">り</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt><span class="grammar-highlight"><span class="h">み</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt><span class="grammar-highlight"><span class="h">び</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt><span class="grammar-highlight"><span class="h">に</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt><span class="grammar-highlight"><span class="h">き</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt><span class="grammar-highlight"><span class="h">ぎ</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt><span class="grammar-highlight"><span class="h">し</span>ます</span></ruby>
        </div>
        <div class="exceptions">
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
          <ruby>買<rt>か</rt><span class="grammar-highlight">う</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>待<rt>ま</rt><span class="grammar-highlight">つ</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>取<rt>と</rt><span class="grammar-highlight">る</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>読<rt>よ</rt><span class="grammar-highlight">む</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>遊<rt>あそ</rt><span class="grammar-highlight">ぶ</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>死<rt>し</rt><span class="grammar-highlight">ぬ</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>書<rt>か</rt><span class="grammar-highlight">く</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>泳<rt>およ</rt><span class="grammar-highlight">ぐ</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>話<rt>はな</rt><span class="grammar-highlight">す</span></ruby>
        </div>
        <div class="exceptions">
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
        Non-past form of ichidan verbs:
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanNonPast.slug } }" class="link">{{ ichidanNonPast.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Other godan conjugations:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godan.slug } }" class="link">{{ godan.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPast.slug } }" class="link">{{ godanPast.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="grammar-point-title">The Non-Past Form (Present/Future) of Godan Verbs</div>
      Japanese verbs do not have distinct forms to indicate the difference between present and future tense. Instead, Japanese uses a single verb form, often referred to as the <i>non-past form</i>, to express both present and future actions.
      The present tense does not indicate that an action is happening right now - see <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'ている' } }" class="link">ている</RouterLink> for that - but rather that it is a general or habitual action.
      <br><br>
      Context and additional words are usually what indicate whether a non-past verb is referring to the present or the future.
      For example, take the godan verb 読<span class="g">む</span> (よむ) which means “to read”. This form can indicate both present and future actions, depending on the context.
      <GrammarExample>
        <template #example>
          <ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby><span class="g">む</span>
        </template>
        <template #translation>
          I read books
        </template>
        <template #note>
          This suggests a general or habitual action, but depending on the context, it could also mean "I will read a book" (as in the future)
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>明日<rt>あした</rt></ruby>、<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby><span class="g">む</span>
        </template>
        <template #translation>
          I will read a book tomorrow
        </template>
        <template #note>
          Adding a time expression like <ruby>明日<rt>あした</rt></ruby> makes it clear that the action will happen in the future
        </template>
      </GrammarExample>

      <div class="section">
        <div class="subtitle">Dictionary form (plain)</div>
        The non-past form (also known as the dictionary or plain form) of a godan verb is used in informal contexts, such as when speaking with friends or people of the same social rank.
        In the godan five-step chart the dictionary form is the form that ends in the <span class="g">う</span> sound.

        <div class="chart">
          <GodanChart :selected-row="3" :show-word-selection="false" />
        </div>
        
        This is the form you will find in dictionaries, and serves as the base form for many grammatical constructions.
        It requires no further conjugation and can be used as-is.
        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby><span class="g">む</span> – to read</div>
            <div><ruby>話<rt>はな</rt></ruby><span class="g">す</span> – to speak</div>
            <div><ruby>行<rt>い</rt></ruby><span class="g">く</span> – to go</div>
            <div style="padding-top: 8px">あ<span class="g">る</span> – to exist (inanimate objects)</div>
          </template>
          <template #note>
            Dictionary form
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="subtitle">Polite form</div>
        The polite form of a verb is used in formal situations, such as speaking with strangers or people of higher social status.
        To make a godan verb polite, you first move the verb on the godan five-step chart to the い row.

        <div class="chart">
          <GodanChart :selected-row="2" :show-word-selection="false" />
        </div>
        From here the verb can be conjugated in various polite forms. For the non-past form (present/future tense), you take the verb stem in the polite form (now ending in an い sound), and then add <span class="g">ます</span>.

        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">み</span><span class="g">ます</span></div>
            <div><ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">し</span><span class="g">ます</span></div>
            <div><ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">き</span><span class="g">ます</span></div>
            <div style="padding-top: 8px">ある → あ<span class="h">り</span><span class="g">ます</span></div>
          </template>
          <template #note>
            Polite non-past form
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="subtitle">Exceptions</div>
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

<style scoped>
.section {
  margin-top: 40px;
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.8;
  margin-bottom: 18px;
}
</style>
