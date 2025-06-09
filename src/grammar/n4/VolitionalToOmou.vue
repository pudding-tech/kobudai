<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { volitionalToOmou as meta, volitionalVerbs } from "./metadataN4";

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
      <div>Verb (<span class="grammar-highlight">volitional</span>) + <span class="grammar-highlight">と<ruby>思<rt>おも</rt></ruby><span v-if="isPolite">います</span><span v-else>う</span></span></div>
      <div>Verb (<span class="grammar-highlight">volitional</span>) + <span class="grammar-highlight">と<ruby>思<rt>おも</rt></ruby>ってい<span v-if="isPolite">ます</span><span v-else>る</span></span></div>
    </template>
    <template #related>
      Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: volitionalVerbs.slug } }" class="link">Volitional verb form</RouterLink>
    </template>
    <template #explanation>
      This grammar pattern is used to express what you intend to do, or what you are thinking about doing.
      It literally translates to "I think I will…" or "I'm planning to…".
      <div class="note">
        <div class="note-title">Note:</div>
        This pattern is based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: volitionalVerbs.slug } }" class="link">volitional verb form.</RouterLink>
      </div>
      To form this pattern, first convert the verb to its volitional form, then add <span class="g">と思う</span>.
      <GrammarExample>
        <template #example>
          <ruby>今日<rt>きょう</rt></ruby>は<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby><span class="g">ようと<ruby>思<rt>おも</rt></ruby>う</span>
        </template>
        <template #translation>
          I think I'll go to bed early today
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        When forming this pattern, the verb must be in the plain volitional form, meaning ～ましょう cannot be used.
      </div>
      Another variation is to use the continuous form <span class="g">と思っている</span>, which indicates an ongoing intention or that the decision has already been made.
      <GrammarExample>
        <template #example>
          このテレビを<ruby>買<rt>か</rt></ruby><span class="g">おうと<ruby>思<rt>おも</rt></ruby>っている</span>
        </template>
        <template #translation>
          I have been thinking of buying this TV
        </template>
      </GrammarExample>
      In contrast, <span class="g">と思う</span> is used to express a thought or decision made on the spot.
      <GrammarExample>
        <template #example>
          このテレビを<ruby>買<rt>か</rt></ruby><span class="g">おうと<ruby>思<rt>おも</rt></ruby>う</span>
        </template>
        <template #translation>
          I think I'll buy this TV
        </template>
        <template #note>
          Indicates a spontaneous decision, not a premeditated one
        </template>
      </GrammarExample>
      There's an important difference between using the volitional form and the present tense with <span class="g">と思う</span> or <span class="g">と思っている</span>.
      When you use the volitional form, you're expressing your intention — something you're thinking about doing.
      When you use the present tense, you're expressing a prediction — something you think will happen.
      <div class="note">
        <div class="note-title">Note:</div>
        Don't use this form to express someone else's intention unless you're clearly stating it's your interpretation.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>彼<rt>かれ</rt></ruby>は<ruby>来<rt>こ</rt></ruby><span class="g">ようと<ruby>思おも<rt></rt></ruby>っている</span>みたいです
        </template>
        <template #translation>
          It seems like he's thinking of coming
        </template>
        <template #note>
          This works because the <RouterLink :to="{ name: 'grammarLoader', params: { slug: volitionalVerbs.slug } }" class="link">～みたい</RouterLink>
          construction makes it clear that you're expressing your interpretation of someone else's intention
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">Polite forms</div>
        The polite form of this grammar pattern is formed by adding <span class="g">と思います</span> or <span class="g">と思っています</span> to the volitional verb.
        <GrammarExample>
          <template #example>
            <ruby>明日<rt>あした</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>き<span class="g">ようと<ruby>思<rt>おも</rt></ruby>います</span>
          </template>
          <template #translation>
            I think I'll wake up early tomorrow
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
