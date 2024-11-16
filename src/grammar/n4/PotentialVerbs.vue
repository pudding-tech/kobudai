<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import { potentialVerbs as meta } from "./metadataN4";
  import { godan, godanNegative, godanNonPast, godanPast, ichidan, ichidanNegative, ichidanNonPast, ichidanPast } from "../n5/metadataN5";

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
        <div class="structure-title top">
          Godan
        </div>
        <div class="kanji-mb">
          <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt><span class="grammar-highlight"><span class="h">え</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt><span class="grammar-highlight"><span class="h">て</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt><span class="grammar-highlight"><span class="h">れ</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt><span class="grammar-highlight"><span class="h">め</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt><span class="grammar-highlight"><span class="h">べ</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt><span class="grammar-highlight"><span class="h">ね</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt><span class="grammar-highlight"><span class="h">け</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt><span class="grammar-highlight"><span class="h">げ</span>ます</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt><span class="grammar-highlight"><span class="h">せ</span>ます</span></ruby>
        </div>
        <div class="structure-title">
          Ichidan
        </div>
        <div class="kanji-mb">
          <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt>べ<span class="grammar-highlight">られます</span></ruby>
        </div>
        <div class="structure-title">
          Exceptions
        </div>
        <div class="kanji-mb">
          <span>する</span> → <span class="grammar-highlight">できます</span>
        </div>
        <div>
          <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>こ</rt>られます</ruby></span>
        </div>
      </div>
      <div v-else>
        <div class="structure-title top">
          Godan
        </div>
        <div class="kanji-mb">
          <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt><span class="grammar-highlight"><span class="h">え</span>る</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt><span class="grammar-highlight"><span class="h">て</span>る</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt><span class="grammar-highlight"><span class="h">れ</span>る</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt><span class="grammar-highlight"><span class="h">め</span>る</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt><span class="grammar-highlight"><span class="h">べ</span>る</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt><span class="grammar-highlight"><span class="h">ね</span>る</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt><span class="grammar-highlight"><span class="h">け</span>る</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt><span class="grammar-highlight"><span class="h">げ</span>る</span></ruby>
        </div>
        <div class="kanji-mb">
          <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt><span class="grammar-highlight"><span class="h">せ</span>る</span></ruby>
        </div>
        <div class="structure-title">
          Ichidan
        </div>
        <div class="kanji-mb">
          <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt>べ<span class="grammar-highlight">られる</span></ruby>
        </div>
        <div class="structure-title">
          Exceptions
        </div>
        <div class="kanji-mb">
          <span>する</span> → <span class="grammar-highlight">できる</span>
        </div>
        <div>
          <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>こ</rt>られる</ruby></span>
        </div>
      </div>
    </template>
    <template #related>
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
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanNegative.slug } }" class="link">{{ ichidanNegative.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPast.slug } }" class="link">{{ godanPast.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanPast.slug } }" class="link">{{ ichidanPast.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="grammar-point-title">The Potential Form of Verbs</div>
      Potential verbs express the ability or possibility to perform an action. This is equivalent to saying "can" or "be able to" in English. For example, "I can eat" or "I am able to swim."
      The construction and use of potential verbs vary depending on whether the verb is godan or ichidan.
      <br><br>
      To indicate potentiality, the verb is conjugated into a specific form known as the potential form. This transformation alters the verb so it carries the meaning of ability or possibility.

      <div class="note mt">Note:</div>
      In sentences with potential verbs, the object of the action is typically marked with the particle が instead of を.
      <GrammarExample>
        <template #example>
          <div><ruby>魚<rt>さかな</rt></ruby>を<ruby>食<rt>た</rt></ruby>べる →
          <ruby>魚<rt>さかな</rt></ruby>が<ruby>食<rt>た</rt></ruby>べ<span class="g">られる</span><span class="et"></span></div>
        </template>
        <template #translation>
          I eat fish → I can eat fish
        </template>
      </GrammarExample>

      <div class="section">
        <div class="subtitle">Potential godan verbs</div>
        To create the portential form a godan verb we can take a look at the godan five-step chart again. Move down on the chart, from the う row to the え row, to find the stem for the potential form.
        <div class="chart">
          <GodanChart :selected-row="4" :show-word-selection="false" />
        </div>
        Once we have the potential stem, simply add <span class="g">る</span> to the end.

        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">め</span><span class="g">る</span><span class="et">(can read)</span></div>
            <div><ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">せ</span><span class="g">る</span><span class="et">(can speak)</span></div>
            <div><ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">け</span><span class="g">る</span><span class="et">(can go)</span></div>
          </template>
          <template #note>
            Potential form (godan)
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="subtitle">Potential ichidan verbs</div>
        For ichidan verbs, forming the potential is straightforward. Simply replace the final <span class="g">る</span>
        of the verb with <span class="g">られる</span>.

        <GrammarExample>
          <template #example>
            <div><ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">られる</span><span class="et">(can eat)</span></div>
            <div><ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">られる</span><span class="et">(can fall)</span></div>
            <div><ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">られる</span><span class="et">(can see)</span></div>
          </template>
          <template #note>
            Potential form (ichidan)
          </template>
        </GrammarExample>
        <div class="note">Note:</div>
        In modern Japanese, the <span class="g">ら</span> in <span class="g">られる</span> is often dropped for simplicity, especially in casual contexts.
        <GrammarExample>
          <template #example>
            <div><ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">れる</span><span class="et">(can eat)</span></div>
            <div><ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">れる</span><span class="et">(can fall)</span></div>
            <div><ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">れる</span><span class="et">(can see)</span></div>
          </template>
          <template #note>
            Common potential form of Ichidan verbs
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="subtitle">Polite form</div>
        Potential verbs can be conjugated into polite forms, just like any other verb.
        Interestingly, once a verb is in the potential form, it becomes an ichidan verb. This means all potential verbs always follow the conjugation patterns of ichidan verbs, regardless of their original type.
        <br><br>
        To form the polite version, drop the final <span class="g">る</span> from the potential form, then add the desired polite ending, such as <span class="g">ます</span>.

        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">め</span><span class="g">ます</span><span class="et">(can read)</span></div>
            <div><ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">せ</span><span class="g">ます</span><span class="et">(can speak)</span></div>
            <div><ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">け</span><span class="g">ます</span><span class="et">(can go)</span></div>
            <div><ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">られます</span><span class="et">(can eat)</span></div>
            <div><ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">られます</span><span class="et">(can see)</span></div>
          </template>
          <template #note>
            Polite potential form
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <GrammarExample>
          <template #example>
            <div>する → <span class="g">できる</span><span class="et">(can do)</span></div>
            <div><ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>られる</span><span class="et">(can come)</span></div>
          </template>
          <template #note>
            Potential form of exceptions
          </template>
        </GrammarExample>
        The polite versions follow the conjugation patterns of ichidan verbs.
        <GrammarExample>
          <template #example>
            <div>する → <span class="g">できます</span><span class="et">(can do)</span></div>
            <div><ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>られます</span><span class="et">(can come)</span></div>
          </template>
          <template #note>
            Polite potential form of exceptions
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
  /* color: #85ad9f; */
  opacity: 0.8;
  margin-bottom: 18px;
}

.mt {
  margin-top: 20px;
}
</style>
