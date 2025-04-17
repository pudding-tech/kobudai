<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { desu as meta, ha } from "./metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(polite) => isPolite = polite">
    <template #title> {{ meta.title }}</template>
    <template #subtitle> {{ meta.subtitle }}</template>
    <template #structure>
      <div v-if="isPolite">
        Noun + <span class="grammar-highlight">です</span><br>
        Adjective + <span class="grammar-highlight">です</span><br>
      </div>
      <div v-else>
        Noun + <span class="grammar-highlight">だ</span><br>
        な-Adjective + <span class="grammar-highlight">だ</span>
      </div>
    </template>
    <template #related>
      Commonly used with&nbsp;<RouterLink :to="{ name: 'grammarLoader', params: { slug: ha.slug } }" class="link">は (topic marking particle)</RouterLink>
    </template>
    <template #explanation>
      Both <span class="g">だ</span> and <span class="g">です</span> are auxiliary verbs that function as copulas - they attach to other words to indicate a state of being or identity.
      Essentially, they express that something "is" or "exists in a certain way". Their role is to affirm that something is the case, but do not specify <i>what</i> the subject is.
      <br><br>
      <!-- Instead, <span class="g">だ</span> and <span class="g">です</span> merely indicate a state of being or identity.  -->
      This leads to one of the defining features of the Japanese language:
      Even a minimal sentence, reduced to just a verb, can still be grammatically complete. For example, while a sentence like "is a pen" would be incomplete and nonsensical in English, it is perfectly natural in Japanese.
      <GrammarExample>
        <template #example>
          ペン<span class="g">です</span>
        </template>
        <template #translation>
          (It) is a pen
        </template>
        <template #note>
          What "it" is, is not specified, but inferred
        </template>
      </GrammarExample>
      It’s common to hear that <span class="g">だ</span> and <span class="g">です</span> mean "to be" in English, and while they serve a similar role,
      that comparison is somewhat simplified. In English, “to be” is a full verb that can inflect for person and tense (is, am, are, was, were, etc.).
      While <span class="g">だ</span> and <span class="g">です</span> do have past-tense forms (だった and でした), they don’t conjugate as fully as typical Japanese verbs,
      and they mainly serve to link ideas and indicate politeness or assertion — not to express actions or a wide range of tenses like the English verb "to be".
      <br><br>
      <div class="note">Note:</div>
      When specifying what we are referring to, there are numerous ways to do so, but arguably the most common approach is using the
      topic marking particle <RouterLink :to="{ name: 'grammarLoader', params: { slug: ha.slug } }" class="link">は</RouterLink>.
      This structure — [topic] は [statement] — is often how speakers set up their sentences.
      <br><br>
      You might be wondering why there are two different copulas, <span class="g">だ</span> and <span class="g">です</span>, when they appear to serve the same purpose.
      Their levels of formality and specific applications set them apart, however.

      <div class="section">
        <div class="subtitle">The だ copula: Casual present affirmative</div>
        <span class="g">だ</span> is a small but significant word in Japanese grammar, primarily used to assert that a noun or な-adjective is true and relevant in the present.
        Essentially, it acts as a marker of present tense and affirmation, confirming that something "is" or "exists in a certain way", here and now.
        <span class="g">だ</span> itself can be said to be "plain", as it's used in casual conversation or among friends.
        <GrammarExample>
          <template #example>
            <ruby>猫<rt>ねこ</rt></ruby><span class="g">だ</span>
          </template>
          <template #translation>
            (It) is a cat
          </template>
        </GrammarExample>
        Unlike verbs or い-adjectives, which have their own ways to express tense and positivity, nouns and な-adjectives rely on auxiliary words like <span class="g">だ</span> to convey this grammatical information.
        <span class="g">だ</span> is exclusive to these types of words and cannot be attached to verbs or い-adjectives, which inherently express their own tense and affirmative or negative state.
        <br><br>
        In terms of politeness, <span class="g">だ</span> is firmly associated with the plain form, making it suitable for informal speech or casual writing.
        However, when <span class="g">だ</span> is used at the end of a sentence in spoken Japanese or casual texts, it can take on additional nuances depending on the tone and context.
        Notably, sentence-final <span class="g">だ</span> is optional in many cases, particularly in casual conversation.
        <br><br>
        For example, you might hear someone say 彼は学生 (かれはがくせい, “he is a student”) without explicitly adding <span class="g">だ</span>,
        which can still be understood as the present tense and in the affirmative.
        However, including <span class="g">だ</span> often gives the sentence a stronger sense of determination or clarity, emphasizing the truth of the statement.
        For instance, saying それが答え<span class="g">だ</span> (それがこたえだ, “that’s the answer”) might sound neutral or assertive, but with a more emphatic tone, it could come across as firm or even confrontational.
      </div>

      <div class="section">
        <div class="subtitle">The です copula: Polite present affirmative - and politeness marker</div>
        <span class="g">です</span> shares many characteristics with <span class="g">だ</span>, but also has additional functions. It is often described as the polite version of <span class="g">だ</span>,
        though this isn't entirely accurate — である would be the true formal counterpart. Like <span class="g">だ</span>, <span class="g">です</span> attaches to words to form a present affirmative sentence, but its primary role is to mark politeness.
        <GrammarExample>
          <template #example>
            <ruby>猫<rt>ねこ</rt></ruby><span class="g">です</span>
          </template>
          <template #translation>
            (It) is a cat
          </template>
          <template #note>
            The meaning is the same as the だ counterpart, just expressed in a polite way
          </template>
        </GrammarExample>
        This means that unlike <span class="g">だ</span>, the copula <span class="g">です</span> also be used with い-adjectives. Since い-adjectives already have the ability to conjugate into different tenses,
        <span class="g">です</span> functions here purely as a politeness marker.
        As for verbs, since they can already conjugate into polite forms on their own, <span class="g">です</span> is not used with most verb conjugations.
        <GrammarExample>
          <template #example>
            <ruby>寒<rt>さむ</rt></ruby>い<span class="g">です</span>
          </template>
          <template #translation>
            It's cold
          </template>
          <template #note>
            です can modify an い-adjective to be polite
          </template>
        </GrammarExample>
        <div class="note">Note:</div>
        While it is common to attach <span class="g">です</span> to い-adjectives, some might consider this incorrect in formal Japanese, and it is best avoided in highly formal writing.
        However, in everyday spoken and written language, it is perfectly acceptable and widely used.
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.8;
  margin-bottom: 18px;
}
</style>
