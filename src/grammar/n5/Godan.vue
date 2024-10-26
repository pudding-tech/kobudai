<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GodanKanaChart from "@/components/GodanKanaChart.vue";
  import { godan as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      ～<span class="g">う</span>、～<span class="g">つ</span>、～<span class="g">る</span>、～<span class="g">む</span>、～<span class="g">ぶ</span>、～<span class="g">ぬ</span>、
      ～<span class="g">く</span>、～<span class="g">ぐ</span>、～<span class="g">す</span>
    </template>
    <template #details>
      <b>Type</b><br>
      Verb
    </template>
    <template #explanation>
      <div class="title-container">
        <div class="eng-title">
          <div>Godan Conjugation</div>
          <div class="subtitle">"Five steps" conjugation</div>
        </div>
        <div class="line"></div>
        <div class="godan-title">
          <ruby>五段<rt>ごだん</rt>活用<rt>かつよう</rt></ruby>
        </div>
      </div>
      Godan verbs, also commonly known as う-verbs, are one of the two main types of Japanese verbs.
      The term "godan"（<span class="k">五段</span>）- meaning "five steps" or "five levels" - refers to the five possible changes in the verb's final syllable during conjugation, depending on its grammatical form.
      <br><br>
      In their dictionary form, godan verbs end with a kana from the <span class="g">う</span> row of the godan kana chart, such as
      <span class="g">う</span>, <span class="g">つ</span>, <span class="g">る</span>, <span class="g">む</span>, <span class="g">ぶ</span>, <span class="g">ぬ</span>, <span class="g">く</span>, <span class="g">ぐ</span>, or <span class="g">す</span>.
      <br><br>
      This name, "godan", reflects how these verbs change predictably to one of five vowel sounds in various conjugations.
      The chart below shows these transformations: each row corresponds to a different syllable that a godan verb can take in its various forms.
      For instance, a verb ending in <span class="g">く</span> in its dictionary form may change to <span class="g">か</span>, <span class="g">き</span>, <span class="g">け</span>, or <span class="g">こ</span> depending on the conjugation.
      <div class="chart">
        <GodanKanaChart :show-word-selection="true" :show-links="true" />
      </div>
      Here's a short breakdown of the various forms:
      <ul>
        <li class="list"><b>Plain Negative Form:</b> The verb changes to end in a <span class="g">あ</span> sound before adding ない (e.g. 行かない).</li>
        <li class="list"><b>Polite Form:</b> The verb changes to end in a <span class="g">い</span> sound before adding ます (e.g. 行きます).</li>
        <ul>
          <li class="list">The polite form is used in formal situations, such as speaking with strangers or people of higher social status.</li>
          <li class="list">Within the polite form the are multiple conjugations that correspond to the plain forms, just with a polite tone, such as polite negative, polite past, and polite volitional.</li>
        </ul>
        <li class="list"><b>Continuative Form:</b> The verb changes to end in a <span class="g">い</span> sound.</li>
        <ul>
          <li class="list">The continuative form is often used to chain actions together or combine with helper verbs like ～たい.</li>
          <li class="list">
            This form is also the basis for the plain past and te-form conjugations, but in modern Japanese these conjugations have gone through a sound change.
            For more information about this, see <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'godan-past' } }" class="link">Godan verb (past)</RouterLink> or <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'て' } }" class="link">て-form</RouterLink>.
          </li>
        </ul>
        <li class="list"><b>Dictionary/Plain Form:</b> The base form of the verb, ending in a kana of the <span class="g">う</span> sound.</li>
        <li class="list"><b>Imperative, Potential, Hypothetical Form:</b> The verb changes to end in a <span class="g">え</span> sound (e.g. 行け, 行ける, 行けば).</li>
        <li class="list"><b>Volitional Form:</b> The verb changes to end in a <span class="g">お</span> sound before adding う (e.g. 行こう).</li>
      </ul>
      <br>
      Understanding the godan kana chart is essential for mastering Japanese verb conjugation, as it provides a clear and systematic way to predict how verbs will change in different grammatical contexts.
      <div class="section">
        <div class="title">How to Distinguish Godan Verbs from Ichidan Verbs</div>
        All verbs not ending in an <i>iru</i> or <i>eru</i> sound are godan verbs. Although most verbs ending in <i>iru</i> or <i>eru</i> are ichidan verbs, a few are godan, so caution is needed.
        <GrammarExample>
          <template #example>
            <div><ruby>買<rt>か</rt></ruby><span class="g">う</span> – to buy</div>
            <div><ruby>泳<rt>およ</rt></ruby><span class="g">ぐ</span> – to swim</div>
          </template>
          <template #note>
            Godan verbs because they end with <span class="g">う</span> and <span class="g">ぐ</span>, respectively
          </template>
        </GrammarExample>
        The following words may appear to be ichidan verbs according to the general rule, but they are actually godan verbs. These exceptions simply need to be memorized as godan verbs.
        <GrammarExample>
          <template #example>
            <div>い<span class="g">る</span> – to need</div>
            <div><ruby>入<rt>はい</rt></ruby><span class="g">る</span> – to enter</div>
            <div><ruby>走<rt>はし</rt></ruby><span class="g">る</span> – to run</div>
            <div><ruby>帰<rt>かえ</rt></ruby><span class="g">る</span> – to return home</div>
            <div><ruby>切<rt>き</rt></ruby><span class="g">る</span> – to cut</div>
            <div><ruby>喋<span class="g">る</span><rt>しゃべ</rt></ruby> – to speak</div>
            <div><ruby>知<rt>し</rt></ruby><span class="g">る</span> – to know</div>
            <div><ruby>滑<rt>すべ</rt></ruby><span class="g">る</span> – to slide</div>
            <div><ruby>蹴<rt>け</rt></ruby><span class="g">る</span> – to kick</div>
            <div><ruby>限<rt>かぎ</rt></ruby><span class="g">る</span> – to limit</div>
          </template>
          <template #note>
            These verbs are exceptions to the general rule and need to be memorized as godan verbs
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .line {
    border-left: 2px solid rgba(255, 255, 255, 0.2);
    height: 44px;
    margin-right: 20px;
  }
}

.godan-title {
  font-size: 1.5rem;
}

.eng-title {
  font-size: 1.3rem;
  opacity: 0.8;
  margin-right: 20px;

  .subtitle {
    font-size: 1rem;
    opacity: 0.8;
  }
}

.chart {
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
}

.section {
  margin-top: 40px;
}

.title {
  font-size: 1.3rem;
  opacity: 0.8;
  margin-bottom: 20px;
}

.list {
  margin-bottom: 6px;
}
</style>
