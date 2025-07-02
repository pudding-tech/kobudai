<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import HiraganaChart from "../common/HiraganaChart.vue";
  import GodanMoveChart from "../common/GodanMoveChart.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  // import DistinguishVerbTypes from "../common/DistinguishVerbTypes.vue";
  import IrregularVerbs from "../common/IrregularVerbs.vue";
  import { breakpointService } from "@/services/breakpointService";
  import { godan as meta, godanNegative, godanNonPast, godanPast, godanPastNegative, ichidan, imperativeVerbs, teVerb } from "./metadataN5";
  import { ba, causativeVerbs, passiveVerbs, potentialVerbs, volitionalVerbs } from "../n4/metadataN4";
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
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidan.slug } }" class="link">{{ ichidan.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Basic godan conjugations:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNonPast.slug } }" class="link">{{ godanNonPast.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPast.slug } }" class="link">{{ godanPast.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPastNegative.slug } }" class="link">{{ godanPastNegative.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="title-container" :class="{ 'mobile': breakpointService.isMobile() }">
        <div class="eng-title">
          <div>Godan Conjugation</div>
          <div class="subtitle">"Five steps" conjugation</div>
        </div>
        <div class="line"></div>
        <div class="godan-title" :class="{ 'mobile': breakpointService.isMobile() }">
          <ruby>五段<rt>ごだん</rt>活用<rt>かつよう</rt></ruby>
        </div>
      </div>
      Godan verbs, also commonly known as <span class="g">う</span>-verbs, are one of the two main types of Japanese verbs.
      The term "godan"（<span class="k">五段</span>）- meaning "five steps" or "five levels" - refers to the five possible stem forms a godan verb can have.
      <br><br>
      In their "base" form (also known as the dictionary form), all verbs end with a kana from the <span class="g">う</span>-column of the hiragana chart:
      <span class="g">う</span>, <span class="g">つ</span>, <span class="g">る</span>, <span class="g">む</span>, <span class="g">ぶ</span>, <span class="g">ぬ</span>, <span class="g">く</span>, <span class="g">ぐ</span>, or <span class="g">す</span>.
      Unlike ichidan verbs, which end only in an <i>-iru</i> or <i>-eru</i> sound, godan verbs can end in any of these kana.
      <br><br>
      <!-- <Fieldset legend="Hiragana chart" toggleable :collapsed="true">
        <HiraganaChart :selected-column="'u'" />
      </Fieldset> -->
      <Panel header="Hiragana chart" toggleable :collapsed="true">
        <HiraganaChart :selected-column="'u'" />
      </Panel>
      <br>
      Each conjugation form is built on a modified verb stem, where the final syllable of the stem shifts to a different vowel sound (あ, い, う, え, or お) depending on the conjugation.
      This transformation is the basis for the "five steps" of godan verbs.

      <div class="move-chart">
        <GodanMoveChart />
      </div>

      As shown above, a verb ending in <span class="h">う</span> in its dictionary form might shift to <span class="h">あ</span>, <span class="h">い</span>, <span class="h">え</span>, or <span class="h">お</span> depending on the conjugation.
      This pattern continues down the hiragana chart, so similarly, a verb ending in <span class="h">く</span> may change to <span class="h">か</span>, <span class="h">き</span>, <span class="h">け</span>, or <span class="h">こ</span> in different forms.
      This systematic shift applies to all godan verbs, giving each verb five possible stems and allowing for a range of conjugations.
      <div class="chart">
        <GodanChart :show-word-selection="true" :show-links="true" />
      </div>
      Here's a short breakdown of the various forms:
      <ul>
        <li class="list"><b>Plain negative, Plain negative past, Passive, Causative:</b> The verb stem changes to end in a <span class="h">あ</span> sound.</li>
        <div v-if="breakpointService.isMobile()">
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink></div>
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPastNegative.slug } }" class="link">{{ godanPastNegative.title }}</RouterLink></div>
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: passiveVerbs.slug } }" class="link">{{ passiveVerbs.title }}</RouterLink></div>
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeVerbs.slug } }" class="link">{{ causativeVerbs.title }}</RouterLink></div>
        </div>
        <ul>
          <li class="list">For the plain negative form one adds ない to the stem (e.g. 行かない, to not go).</li>
          <li class="list">For the plain negative past form one adds なかった to the stem (e.g. 行かなかった, did not go).</li>
          <span class="h">*</span> Note that when the verb ends in <span class="h">う</span> it becomes <span class="h">わ</span>, not あ.
          See <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink> for more information.
          <li class="list">For the passive form one adds られる to the stem (e.g. 行かれる, to be gone).</li>
          <li class="list">For the causative form one adds させる to the stem (e.g. 行かせる, to make someone go).</li>
        </ul>
        <li class="list"><b>Continuative, Polite form:</b> The verb stem changes to end in a <span class="h">い</span> sound.</li>
        <div v-if="breakpointService.isMobile()">
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNonPast.slug } }" class="link">{{ godanNonPast.title }}</RouterLink></div>
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNegative.slug } }" class="link">{{ godanNegative.title }}</RouterLink></div>
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPast.slug } }" class="link">{{ godanPast.title }}</RouterLink></div>
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink></div>
        </div>
        <ul>
          <li class="list">The continuative form is often called "the stem form" as it's used for many different conjugations, perhaps most notably the polite form.</li>
          <li class="list">The polite form is used in formal situations, such as speaking with strangers or people of higher social status. In polite conjugations one adds some variation of ます to the stem (e.g. 行きます, to go).</li>
          <li class="list">Within the polite form the are multiple conjugations that correspond to the plain forms, just with a polite tone, such as polite negative, polite past, and polite volitional.</li>
          <li class="list">
            This form is also the basis for the plain past and て-form conjugations, but in modern Japanese these conjugations have gone through a sound change.
            For more information about this, see
            <RouterLink :to="{ name: 'grammarLoader', params: { slug: godanPast.slug } }" class="link">{{ godanPast.title }}</RouterLink> or
            <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">て-form</RouterLink>.
          </li>
        </ul>
        <li class="list"><b>Dictionary/Plain form:</b> The base form of the verb, ending in a kana of the <span class="h">う</span> sound.</li>
        <div v-if="breakpointService.isMobile()">
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: godanNonPast.slug } }" class="link">{{ godanNonPast.title }}</RouterLink></div>
        </div>
        <li class="list"><b>Imperative, Potential, Conditional form:</b> The verb changes to end in a <span class="h">え</span> sound, then a suffix can be added to create the different forms (e.g. 行け, 行ける, 行けば).</li>
        <div v-if="breakpointService.isMobile()">
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: imperativeVerbs.slug } }" class="link">{{ imperativeVerbs.title }}</RouterLink></div>
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: potentialVerbs.slug } }" class="link">{{ potentialVerbs.title }}</RouterLink></div>
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">Conditional verb</RouterLink></div>
        </div>
        <li class="list"><b>Volitional form:</b> The verb changes to end in a <span class="h">お</span> sound before adding う (e.g. 行こう).</li>
        <div v-if="breakpointService.isMobile()">
          <div style="margin-bottom: 5px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: volitionalVerbs.slug } }" class="link">{{ volitionalVerbs.title }}</RouterLink></div>
        </div>
      </ul>
      <br>
      Understanding the five-step chart is essential for mastering godan verb conjugation, as it provides a clear and systematic way to predict how verbs will change in different grammatical contexts.
      <!-- <div class="section">
        <DistinguishVerbTypes type="godan" />
      </div> -->
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

.godan-title {
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

.move-chart {
  margin: 40px 0;
}
</style>
