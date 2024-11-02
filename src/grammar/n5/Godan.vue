<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GodanChart from "@/components/GodanChart.vue";
  import DistinguishVerbTypes from "../common/DistinguishVerbTypes.vue";
  import IrregularVerbs from "../common/IrregularVerbs.vue";
  import { godan as meta, godanNegative, ichidan } from "./metadataN5";
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
    <template #related>
      <div class="related-mb">See the other verb type:</div>
      - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidan.slug } }" class="link">{{ ichidan.title }}</RouterLink>
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
      In their dictionary form, all verbs end with a kana from the <span class="g">う</span> row of a hiragana chart, meaning
      <span class="g">う</span>, <span class="g">つ</span>, <span class="g">る</span>, <span class="g">む</span>, <span class="g">ぶ</span>, <span class="g">ぬ</span>, <span class="g">く</span>, <span class="g">ぐ</span>, or <span class="g">す</span>.
      Godan verbs can end in any of these hiraganas, unlike ichidan verbs which always end in an <i>iru</i> or <i>eru</i> sound.
      <br><br>
      This name, "godan", reflects how these verbs change predictably to one of five vowel sounds in various conjugations.
      The chart below shows these transformations: each row corresponds to a different syllable that a godan verb can take in its various forms.
      For instance, a verb ending in <span class="h">く</span> in its dictionary form may change to <span class="h">か</span>, <span class="h">き</span>, <span class="h">け</span>, or <span class="h">こ</span> depending on the conjugation.
      <div class="chart">
        <GodanChart :show-word-selection="true" :show-links="true" />
      </div>
      Here's a short breakdown of the various forms:
      <ul>
        <li class="list"><b>Plain Negative Form:</b> The verb changes to end in a <span class="h">あ</span> sound before adding ない (e.g. 行かない).</li>
        <ul>
          <li class="list">Note that when the verb ends in <span class="h">う</span> it becomes <span class="h">わ</span>, not あ. See <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink> for more information.</li>
        </ul>
        <li class="list"><b>Polite Form:</b> The verb changes to end in a <span class="h">い</span> sound before adding ます (e.g. 行きます).</li>
        <ul>
          <li class="list">The polite form is used in formal situations, such as speaking with strangers or people of higher social status.</li>
          <li class="list">Within the polite form the are multiple conjugations that correspond to the plain forms, just with a polite tone, such as polite negative, polite past, and polite volitional.</li>
        </ul>
        <li class="list"><b>Continuative Form:</b> The verb changes to end in a <span class="h">い</span> sound.</li>
        <ul>
          <li class="list">The continuative form is often used to chain actions together or combine with helper verbs like ～たい.</li>
          <li class="list">
            This form is also the basis for the plain past and te-form conjugations, but in modern Japanese these conjugations have gone through a sound change.
            For more information about this, see <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'godan-past' } }" class="link">Godan verb (past)</RouterLink> or <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'て' } }" class="link">て-form</RouterLink>.
          </li>
        </ul>
        <li class="list"><b>Dictionary/Plain Form:</b> The base form of the verb, ending in a kana of the <span class="h">う</span> sound.</li>
        <li class="list"><b>Imperative, Potential, Conditional Form:</b> The verb changes to end in a <span class="h">え</span> sound, then a suffix can be added to create the different forms (e.g. 行け, 行ける, 行けば).</li>
        <li class="list"><b>Volitional Form:</b> The verb changes to end in a <span class="h">お</span> sound before adding う (e.g. 行こう).</li>
      </ul>
      <br>
      Understanding the five step chart is essential for mastering godan verb conjugation, as it provides a clear and systematic way to predict how verbs will change in different grammatical contexts.
      <div class="section">
        <DistinguishVerbTypes type="godan" />
      </div>
      <div class="section">
        <IrregularVerbs />
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
    margin-top: -4px;
  }
}

.section {
  margin-top: 40px;
}

.list {
  margin-bottom: 6px;
}
</style>
