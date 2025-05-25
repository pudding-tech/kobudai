<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teAdjective as meta, godan, godanNonPast, godanNegative, godanPast } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      
    </template>
    <template #related>
      <div class="related-mb">
        Further usage of the て-form:
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godan.slug } }" class="link">{{ godan.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Other verb conjugations:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godan.slug } }" class="link">{{ godan.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNonPast.slug } }" class="link">{{ godanNonPast.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPast.slug } }" class="link">{{ godanPast.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="grammar-point-title">The Te-Form of Adjectives</div>
      The <span class="g">て</span>-form is one of the most versatile verb forms in Japanese, serving a wide range of grammatical purposes.
      It's essential for connecting clauses, giving commands, asking for permission, expressing continuous actions, and much more.
      <br><br>
      <div class="subtitle">Connecting clauses (conjunctive function)</div>
      The most basic and common use of the <span class="g">て</span>-form is its conjunctive function, which links sequential or simultaneous actions.
      <GrammarExample>
        <template #example>
          <ruby>朝<rt>あさ</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby><ruby>食<rt>た</rt></ruby>べ<span class="g">て</span>、<ruby>仕事<rt>しごと</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます
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
      <div class="subtitle">Making requests</div>
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
      For a more polite way of using the <span class="g">て</span>-form for giving requests - see <RouterLink :to="{ name: 'grammarLoader', params: { slug: null } }" class="link">～てください</RouterLink>
      <br><br>
      <div class="note">Note:</div>
      While we called the <span class="g">て</span>-form a "verb form" earlier, it is really a grammatical form used across various word types, including verbs, adjectives, and even nouns.
      See <RouterLink :to="{ name: 'grammarLoader', params: { slug: null } }" class="link">て-form (adjective, noun)</RouterLink> for usage in adjectives and nouns.

      <div class="section">
        <div class="grammar-point-title">How the て-Form is Created</div>
        <div class="subtitle">Godan verbs</div>
        Godan verbs follow specific patterns based on their ending consonant in the dictionary form
        Here’s a breakdown of the changes:

        <ul>
          <li>う, つ, る → <span class="g">って</span></li>
          <li>む, ぶ, ぬ → <span class="g">んで</span></li>
          <li>く → <span class="g">いて</span></li>
          <li>ぐ → <span class="g">いで</span></li>
          <li>す → <span class="g">して</span></li>
        </ul>

        Technically, the <span class="g">て</span>-form of a godan verb is based on the い-row of the godan five-step chart. However, this form has undergone a sound change
        known as 音便 (おんびん, sound convenience), which explains why the final verb stems don’t look like what one might predict.
        <br><br>
        "Sound convenience" refers to changes in pronunciation that make words easier to say, similar to how "want to" becomes "wanna" in English. In ancient Japanese, speakers modified verb roots
        to ease pronunciation with certain /t/-sound conjugations, leading to unique conjugation patterns still used today.

        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="g">んで</span></div>
            <div><ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="g">して</span></div>
            <div><ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby><span class="g">いて</span></div>
            <div style="padding-top: 8px">ある → あ<span class="g">って</span></div>
          </template>
          <template #note>
            Godan verbs in て-form
          </template>
        </GrammarExample>

        <span class="note">Note:</span>
        This exact conjugation pattern is also used to construct the <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPast.slug } }" class="link">past form</RouterLink> of godan verbs.
      </div>

      <div class="section">
        <div class="subtitle">Ichidan verbs</div>
        For ichidan verbs, creating the <span class="g">て</span>-form is straightforward:
        Drop the final る and replace it with <span class="g">て</span>.
        <GrammarExample>
          <template #example>
            <div><ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">て</span></div>
            <div><ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">て</span></div>
            <div><ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">て</span></div>
          </template>
          <template #note>
            Ichidan verbs in て-form
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <div class="note mt">Note:</div>
        The verb 行く (to go) is irregular in the <span class="g">て</span>-form, changing to <span class="g">行って</span> instead of following typical conjugation patterns.
        <GrammarExample>
          <template #example>
            <div>する → <span class="g">して</span></div>
            <div><ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>き</rt></ruby>て</span></div>
            <div><ruby>行<rt>い</rt></ruby>く → <span class="g"><ruby>行<rt>い</rt></ruby>って</span></div>
          </template>
          <template #note>
            て-form of exceptions
          </template>
        </GrammarExample>
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
