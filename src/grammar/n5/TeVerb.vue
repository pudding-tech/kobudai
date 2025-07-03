<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { teVerb as meta, godan, godanNonPast, godanPast, ichidan, ichidanNonPast, ichidanPast, naideKudasai, teAdjectiveNoun, teIru, teKara, teKudasai, temoii } from "./metadataN5";
  import { teAgeruKureruMorau, teAru, teHoshii, teItadakemasenka, teMiru, teOku, teShimau, teSumimasen } from "../n4/metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div class="structure-title top">
        Godan
      </div>
      <div class="kanji-mb">
        <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt><span class="grammar-highlight">って</span></ruby>
      </div>
      <div class="kanji-mb">
        <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt><span class="grammar-highlight">って</span></ruby>
      </div>
      <div class="kanji-mb">
        <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt><span class="grammar-highlight">って</span></ruby>
      </div>
      <div class="kanji-mb" style="margin-top: 15px">
        <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt><span class="grammar-highlight">んで</span></ruby>
      </div>
      <div class="kanji-mb">
        <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt><span class="grammar-highlight">んで</span></ruby>
      </div>
      <div class="kanji-mb">
        <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt><span class="grammar-highlight">んで</span></ruby>
      </div>
      <div class="kanji-mb" style="margin-top: 15px">
        <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt><span class="grammar-highlight">いて</span></ruby>
      </div>
      <div class="kanji-mb">
        <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt><span class="grammar-highlight">いで</span></ruby>
      </div>
      <div class="kanji-mb">
        <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt><span class="grammar-highlight">して</span></ruby>
      </div>
      <div class="structure-title">
        Ichidan
      </div>
      <div class="kanji-mb">
        <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">て</span>
      </div>
      <div class="structure-title">
        Exceptions
      </div>
      <div class="kanji-mb">
        <span>する</span> → <span class="grammar-highlight">して</span>
      </div>
      <div class="kanji-mb">
        <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>き</rt></ruby>て</span>
      </div>
      <div class="kanji-mb">
        <span><ruby>行<rt>い</rt>く</ruby></span> → <span class="grammar-highlight"><ruby>行<rt>い</rt></ruby>って</span>
      </div>
      <div class="structure-title">
        Negatives
      </div>
      <div>
        ～ない → ～な<span class="grammar-highlight">くて</span>
      </div>
    </template>
    <template #related>
      <div class="related-mb">
        Also see て-form of adjectives and nouns:
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAdjectiveNoun.slug } }" class="link">{{ teAdjectiveNoun.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Further usage of the て-form:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teIru.slug } }" class="link">{{ teIru.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teKudasai.slug } }" class="link">{{ teKudasai.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: temoii.slug } }" class="link">{{ temoii.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teMiru.slug } }" class="link">{{ teMiru.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teOku.slug } }" class="link">{{ teOku.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAgeruKureruMorau.slug } }" class="link">{{ teAgeruKureruMorau.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teItadakemasenka.slug } }" class="link">{{ teItadakemasenka.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teSumimasen.slug } }" class="link">{{ teSumimasen.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teKara.slug } }" class="link">{{ teKara.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teShimau.slug } }" class="link">{{ teShimau.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAru.slug } }" class="link">{{ teAru.title }}</RouterLink>
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teHoshii.slug } }" class="link">{{ teHoshii.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Other verb conjugations:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godan.slug } }" class="link">{{ godan.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidan.slug } }" class="link">{{ ichidan.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNonPast.slug } }" class="link">{{ godanNonPast.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanNonPast.slug } }" class="link">{{ ichidanNonPast.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPast.slug } }" class="link">{{ godanPast.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanPast.slug } }" class="link">{{ ichidanPast.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="grammar-title">The て-Form of Verbs</div>
      The <span class="g">て</span>-form is one of the most versatile verb forms in Japanese, serving a wide range of grammatical purposes.
      It's essential for connecting clauses, giving commands, asking for permission, expressing continuous actions, and much more.
      <br><br>
      <div class="grammar-subtitle">Connecting clauses (conjunctive function)</div>
      The most basic and common use of the <span class="g">て</span>-form is its conjunctive function, which links sequential or simultaneous actions.
      <GrammarExample>
        <template #example>
          <ruby>朝<rt>あさ</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べ<span class="g">て</span>、<ruby>仕事<rt>しごと</rt></ruby>に<ruby>行<rt>い</rt></ruby>く
        </template>
        <template #translation>
          I eat breakfast and then go to work
        </template>
      </GrammarExample>
      When the <span class="g">て</span>-form is used with past events, it connects actions that happened in sequence or describes related past actions.
      The verb at the end of the sentence determines the tense, so the <span class="g">て</span>-form itself neither changes nor indicates past tense, but relies on the main verb to convey it.
      <GrammarExample>
        <template #example>
          <ruby>友達<rt>ともだち</rt></ruby>に<ruby>合<rt>あ</rt></ruby><span class="g">って</span>、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ました
        </template>
        <template #translation>
          I met a friend and watched a movie
        </template>
      </GrammarExample>
      <div class="grammar-subtitle">Making requests</div>
      Another common use of the plain <span class="g">て</span>-form is for making casual requests.
      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べ<span class="g">て</span>
        </template>
        <template #translation>
          (Please) eat
        </template>
        <template #note>
          The level of politeness depends on the tone of voice — when said gently, it may sound like a request, but in a harsher tone, it could come across as a command
        </template>
      </GrammarExample>
      For a more polite way of using the <span class="g">て</span>-form for making requests - see
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: teKudasai.slug } }" class="link">{{ teKudasai.title }}</RouterLink>
      <div class="note">
        <div class="note-title">Note:</div>
        While we called the <span class="g">て</span>-form a "verb form" earlier, it is really a grammatical form used across various word types, including verbs, adjectives, and even nouns.
        See <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAdjectiveNoun.slug } }" class="link">{{ teAdjectiveNoun.title }}</RouterLink> for usage in adjectives and nouns.
      </div>

      <div class="section">
        <div class="grammar-title">How the て-Form is Created</div>
        <div class="grammar-subtitle">Godan verbs</div>
        Godan verbs follow specific patterns based on their ending consonant in the dictionary form
        Here's a breakdown of the changes:

        <ul>
          <li>う, つ, る → <span class="g">って</span></li>
          <li>む, ぶ, ぬ → <span class="g">んで</span></li>
          <li>く → <span class="g">いて</span></li>
          <li>ぐ → <span class="g">いで</span></li>
          <li>す → <span class="g">して</span></li>
        </ul>

        Technically, the <span class="g">て</span>-form of a godan verb is based on the い-row of the godan five-step chart. However, this form has undergone a sound change
        known as 音便 (おんびん, sound convenience), which explains why the final verb stems don't look like what one might predict.
        <br><br>
        "Sound convenience" refers to changes in pronunciation that make words easier to say, similar to how "want to" becomes "wanna" in English. In ancient Japanese, speakers modified verb roots
        to ease pronunciation with certain /t/-sound conjugations, leading to unique conjugation patterns still used today.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="g">んで</span>
          </div>
          <div class="translation">
            to read → read (and...)
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="g">して</span>
          </div>
          <div class="translation">
            to speak → speak (and...)
          </div>
          <div class="example">
            <ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby><span class="g">いて</span>
          </div>
          <div class="translation">
            to write → write (and...)
          </div>
          <div class="example">
            ある → あ<span class="g">って</span>
          </div>
          <div class="translation">
            to exist → exist (and...)
          </div>
          <template #note>
            Godan verbs in て-form
          </template>
        </GrammarExampleSentences>

        <div class="note">
          <div class="note-title">Note:</div>
          This exact conjugation pattern is also used to construct the <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPast.slug } }" class="link">past form</RouterLink> of godan verbs.
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Ichidan verbs</div>
        For ichidan verbs, creating the <span class="g">て</span>-form is straightforward:
        Drop the final る and replace it with <span class="g">て</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">て</span>
          </div>
          <div class="translation">
            to eat → eat (and...)
          </div>
          <div class="example">
            <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">て</span>
          </div>
          <div class="translation">
            to fall → fall (and...)
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">て</span>
          </div>
          <div class="translation">
            to see → see (and...)
          </div>
          <template #note>
            Ichidan verbs in て-form
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <div class="note">
          <div class="note-title">Note:</div>
          The verb 行く (to go) is irregular in the <span class="g">て</span>-form, changing to <span class="g">行って</span> instead of following typical conjugation patterns.
        </div>
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">して</span>
          </div>
          <div class="translation">
            to do → do (and...)
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>き</rt></ruby>て</span>
          </div>
          <div class="translation">
            to come → come (and...)
          </div>
          <div class="example">
            <ruby>行<rt>い</rt></ruby>く → <span class="g"><ruby>行<rt>い</rt></ruby>って</span>
          </div>
          <div class="translation">
            to go → go (and...)
          </div>
          <template #note>
            て-form of exceptions
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Using the て-form with negative verbs</div>
        To use the <span class="g">て</span>-form with a negative verb, you first conjugate the verb into its ない-form,
        and then replace ない with な<span class="g">くて</span>. This form is used to connect clauses involving negative actions or states.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べない → <ruby>食<rt>た</rt></ruby>べな<span class="g">くて</span>
          </div>
          <div class="translation">
            to not eat → not eat (and...)
          </div>
          <template #note>
            て-form of negative verbs
          </template>
        </GrammarExampleSentences>
        This form is often used to explain a reason or cause for the following action, much like saying "because (I didn't)..."" in English.
        <GrammarExample>
          <template #example>
            お<ruby>金<rt>かね</rt></ruby>がな<span class="g">くて</span>、<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>かなかった
          </template>
          <template #translation>
            I didn't go on a trip, because I didn't have money
          </template>
        </GrammarExample>
        It's not used for making negative requests — that requires a different structure like
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: naideKudasai.slug } }" class="link">{{ naideKudasai.title }}</RouterLink>.
      </div>
    </template>
  </GrammarStructure>
</template>
