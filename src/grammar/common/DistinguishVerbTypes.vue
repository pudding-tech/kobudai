<script setup lang="ts">
  import GrammarExample from "@/components/GrammarExample.vue";

  const props = defineProps<{
    type: "godan" | "ichidan";
  }>();
</script>

<template>
  <div class="grammar-point-title">How to Distinguish Ichidan Verbs from Godan Verbs?</div>
  While most verbs ending in <i>iru</i> or <i>eru</i> are ichidan verbs, there is no foolproof way to determine if a verb is ichidan solely based on its ending.
  However, there are a couple helpful pointers that can help suggest whether a verb is likely ichidan or godan.
  <br><br>
  Many <i>iru/eru</i> verbs have the <i>i</i> or <i>e</i> sound as part of the verb stem rather than the okurigana, which is often a sign that the verb may actually be a godan verb.
  For example, 帰<span class="g">る</span> (かえる, “to return”) and 走<span class="g">る</span> (はしる, “to run”) are godan verbs, even though they end in <i>eru</i> and <i>iru</i> respectively.
  <br><br>
  Likewise, if the <i>i</i> or <i>e</i> sound appears within the okurigana (such as in the ending 〜べる), the verb is more likely to be ichidan.
  For instance, 食べ<span class="g">る</span> (たべる, “to eat”) is an ichidan verb, with the <i>e</i> sound contained in the okurigana.
  <br><br>
  There are exceptions to these patterns, however. For example, 見<span class="g">る</span> (みる, “to see”) is an ichidan verb, even though the <i>i</i> sound is part of the verb stem.
  Likewise, 交じ<span class="g">る</span> (まじる, “to be mixed”) is a godan verb, even though the <i>i</i> sound is part of the okurigana.
  Careful study and memorization are often necessary to identify these exceptions.
  <br><br>
  In summary, the position of the <i>i</i> or <i>e</i> sound (kanji vs. okurigana) can be a helpful guideline, but it's not definitive.
  It's best to treat it as a loose pattern rather than a reliable rule, as memorization or a dictionary check is still needed.

  <GrammarExample v-if="props.type === 'godan'">
    <template #example>
      <div><ruby>買<rt>か</rt></ruby><span class="g">う</span> – to buy</div>
      <div><ruby>泳<rt>およ</rt></ruby><span class="g">ぐ</span> – to swim</div>
    </template>
    <template #note>
      Godan verbs because they end with <span class="g">う</span> and <span class="g">ぐ</span>, respectively
    </template>
  </GrammarExample>
  <GrammarExample v-else>
    <template #example>
      <div><ruby>起<rt>お</rt></ruby>き<span class="g">る</span> – to wake up</div>
      <div><ruby>開<rt>あ</rt></ruby>け<span class="g">る</span> – to open</div>
      <div><ruby>見<rt>み</rt></ruby><span class="g">る</span> – to see</div>
    </template>
    <template #note>
      Ichidan verbs - note that they end with <i>iru</i>, <i>eru</i>, and <i>iru</i>, respectively
    </template>
  </GrammarExample>

  Below is a list of words that may appear to be ichidan verbs according to the general <i>iru/eru</i> rule, but are actually godan verbs. Exceptions like these simply need to be memorized as godan verbs.
  <GrammarExample>
    <template #example>
      <div>い<span class="g">る</span> – to need</div>
      <div><ruby>入<rt>はい</rt></ruby><span class="g">る</span> – to enter</div>
      <div><ruby>走<rt>はし</rt></ruby><span class="g">る</span> – to run</div>
      <div><ruby>帰<rt>かえ</rt></ruby><span class="g">る</span> – to return home</div>
      <div><ruby>切<rt>き</rt></ruby><span class="g">る</span> – to cut</div>
      <div><ruby>喋<span class="g">る</span><rt>しゃべ</rt></ruby> – to talk</div>
      <div><ruby>知<rt>し</rt></ruby><span class="g">る</span> – to know</div>
      <div><ruby>滑<rt>すべ</rt></ruby><span class="g">る</span> – to slide</div>
      <div><ruby>蹴<rt>け</rt></ruby><span class="g">る</span> – to kick</div>
      <div><ruby>焦<rt>あせ</rt></ruby><span class="g">る</span> – to rush</div>
      <div><ruby>減<rt>へ</rt></ruby><span class="g">る</span> – to reduce</div>
      <div><ruby>限<rt>かぎ</rt></ruby><span class="g">る</span> – to limit</div>
      <div><ruby>交<rt>ま</rt></ruby>じ<span class="g">る</span> – to be mixed</div>
    </template>
    <template #note>
      These verbs are actually godan verbs, and need to be memorized as such
    </template>
  </GrammarExample>
</template>
