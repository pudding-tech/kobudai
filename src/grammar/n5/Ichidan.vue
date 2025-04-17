<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import IchidanChart from "@/grammar/common/IchidanChart.vue";
  import DistinguishVerbTypes from "../common/DistinguishVerbTypes.vue";
  import IrregularVerbs from "../common/IrregularVerbs.vue";
  import { breakpointService } from "@/services/breakpointService";
  import { ichidan as meta, godan, ichidanNonPast } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      ～<span class="g">る</span>（～<span class="g">iru/eru</span>）
    </template>
    <template #related>
      <div class="related-mb">See the other verb type:</div>
      - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godan.slug } }" class="link">{{ godan.title }}</RouterLink>
    </template>
    <template #explanation>
      <div class="title-container" :class="{ 'mobile': breakpointService.isMobile() }">
        <div class="eng-title">
          <div>Ichidan Conjugation</div>
          <div class="subtitle">"One step" conjugation</div>
        </div>
        <div class="line"></div>
        <div class="ichidan-title" :class="{ 'mobile': breakpointService.isMobile() }">
          <ruby>一段<rt>いちだん</rt>活用<rt>かつよう</rt></ruby>
        </div>
      </div>
      Ichidan verbs, often called <span class="g">る</span>-verbs or <span class="g">iru/eru</span>-verbs, are one of the two main types of Japanese verbs.
      The term "ichidan"（<span class="k">一段</span>）- meaning "one step" or "one level" - reflects the fact that unlike godan verbs, which have five possible verb stems, ichidan verbs only have one stem.
      <br><br>
      In their dictionary form, all ichidan verbs end in <span class="g">る</span>. Additionally, the sound before the <span class="g">る</span> is always either <i>i</i> or <i>e</i>, so ichidan verbs consistently end in either <span class="g">iru</span> or <span class="g">eru</span>.
      Using romaji can be particularly helpful here; for example, both 始め<span class="g">る</span> and 食べ<span class="g">る</span> end with the <span class="g">eru</span> sound,
      indicating their (potential) classification as ichidan verbs, even if the hiragana the <i>e</i> sound comes from differ between them (め and べ respectively).
      <br><br><div class="note">Note:</div>
      Just because a verb ends in <span class="g">iru</span> or <span class="g">eru</span> does not definitely mean it is an ichidan verb; see the section below for details.
      <br><br>
      Conjugating ichidan verbs is straightforward. Instead of changing the final syllable, you simply remove the <span class="g">る</span> from the dictionary form to find the verb stem, then add the appropriate conjugation ending.
      The simplicity of ichidan conjugation stands in contrast to godan verbs, which move through different syllable endings.
      Study the chart below to see how ichidan verbs use the same verb stem throughout all conjugations — hence, the term "one step".
      <div class="chart">
        <IchidanChart :show-word-selection="true" :show-links="true" />
      </div>
      Here's a short breakdown of the various forms:
      <ul>
        <li class="list"><b>Plain Negative (Past) Form:</b> Verb stem (drop the <span class="g">る</span>), then add ない (e.g. 食べない) or なかった (e.g. 食べなかった).</li>
        <li class="list"><b>Polite Form:</b> Verb stem (drop the <span class="g">る</span>), then add ます (e.g. 食べます).</li>
        <ul>
          <li class="list">The polite form is used in formal situations, such as speaking with strangers or people of higher social status.</li>
          <li class="list">Within the polite form the are multiple conjugations that correspond to the plain forms, just with a polite tone, such as polite negative, polite past, and polite volitional.</li>
        </ul>
        <li class="list"><b>Continuative Form:</b> Verb stem (drop the <span class="g">る</span>).</li>
        <ul>
          <li class="list">The continuative form is often used to chain actions together or combine with helper verbs like ～たい.</li>
          <li class="list">
            This form is also the basis for the plain past and te-form conjugations, but in modern Japanese these conjugations have gone through a sound change.
            For more information about this, see
            <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidanNonPast.slug } }" class="link">{{ ichidanNonPast.title }}</RouterLink> or
            <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'て' } }" class="link">て-form</RouterLink>.
          </li>
        </ul>
        <li class="list"><b>Dictionary/Plain Form:</b> The base form of the verb, ending in an <i>iru/eru</i> sound.</li>
        <li class="list"><b>Imperative, Potential, Conditional Form:</b> Verb stem (drop the <span class="g">る</span>), then a suffix can be added to create the different forms (e.g. 食べ, 食べられる, 食べれば).</li>
        <li class="list"><b>Volitional Form:</b> Verb stem (drop the <span class="g">る</span>) sound, then add よう (e.g. 食べよう).</li>
      </ul>
      <br>
      Understanding the five-step chart is essential for mastering Japanese verb conjugation, as it provides a clear and systematic way to predict how verbs will change in different grammatical contexts.
      <div class="section">
        <DistinguishVerbTypes type="ichidan" />
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
  white-space: nowrap;

  &.mobile {
    justify-content: space-between;
  }

  .line {
    border-left: 2px solid var(--line-color);
    height: 44px;
    margin-right: 20px;
  }
}

.ichidan-title {
  font-size: 1.5rem;
  position: relative;
  top: 2px;

  &.mobile {
    font-size: 1.2rem;
    top: 4px;
  }
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

.list {
  margin-bottom: 6px;
}
</style>
