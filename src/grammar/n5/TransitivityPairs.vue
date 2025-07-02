<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { transitivityPairs as meta, teIru } from "./metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div><span class="grammar-highlight">Transitive verbs</span> take a direct object — they describe actions that someone does to something.</div>
      <br>
      <div><span class="grammar-highlight">Intransitive verbs</span> do not take a direct object — they describe actions or changes that happen by themselves.</div>
    </template>
    <template #explanation>
      In Japanese, many verbs come in pairs that express whether the subject does something (transitive) or whether something happens on its own (intransitive). These are called transitivity pairs.
      <ul>
        <li><span class="g">Transitive verbs</span> (他動詞・たどうし) take a direct object — they describe actions that someone does to something.</li>
        <li><span class="g">Intransitive verbs</span> (自動詞・じどうし) do not take a direct object — they describe actions or changes that happen by themselves.</li>
      </ul>

      <GrammarExampleSentences>
        <div class="example">
          <ruby>上<rt>あ</rt></ruby>げる ↔ <ruby>上<rt>あ</rt></ruby>がる
        </div>
        <div class="translation">
          raise something ↔ something rises
        </div>
        <div class="example">
          <ruby>下<rt>さ</rt></ruby>げる ↔ <ruby>下<rt>さ</rt></ruby>がる
        </div>
        <div class="translation">
          lower something ↔ something goes down
        </div>
        <div class="example">
          <ruby>開<rt>あ</rt></ruby>ける ↔ <ruby>開<rt>あ</rt></ruby>く
        </div>
        <div class="translation">
          open something ↔ something opens
        </div>
        <div class="example">
          <ruby>閉<rt>し</rt></ruby>める ↔ <ruby>閉<rt>し</rt></ruby>まる
        </div>
        <div class="translation">
          close something ↔ something closes
        </div>
        <div class="example">
          <ruby>入<rt>い</rt></ruby>れる ↔ <ruby>入<rt>はい</rt></ruby>る
        </div>
        <div class="translation">
          put something in ↔ something goes in
        </div>
        <div class="example">
          <ruby>出<rt>だ</rt></ruby>す ↔ <ruby>出<rt>で</rt></ruby>る
        </div>
        <div class="translation">
          take something out ↔ something goes out
        </div>
        <div class="example">
          つける ↔ つく
        </div>
        <div class="translation">
          turn something on ↔ something turns on
        </div>
        <div class="example">
          <ruby>消<rt>け</rt></ruby>す ↔ <ruby>消<rt>き</rt></ruby>える
        </div>
        <div class="translation">
          turn something off ↔ something turns off
        </div>
        <div class="example">
          <ruby>始<rt>はじ</rt></ruby>める ↔ <ruby>始<rt>はじ</rt></ruby>まる
        </div>
        <div class="translation">
          start something ↔ something starts
        </div>
        <div class="example">
          <ruby>起<rt>お</rt></ruby>こす ↔ <ruby>起<rt>お</rt></ruby>きる
        </div>
        <div class="translation">
          wake someone up ↔ someone wakes up
        </div>
        <div class="example">
          <ruby>落<rt>お</rt></ruby>とす ↔ <ruby>落<rt>お</rt></ruby>ちる
        </div>
        <div class="translation">
          drop something ↔ something falls
        </div>
        <div class="example">
          <ruby>壊<rt>こわ</rt></ruby>す ↔ <ruby>壊<rt>こわ</rt></ruby>れる
        </div>
        <div class="translation">
          break something ↔ something breaks
        </div>
        <template #note>
          Selection of commonly used transitivity pairs
        </template>
      </GrammarExampleSentences>

      If <b>you</b> or <b>someone</b> cause an action to happen → use the <span class="g">transitive verb</span>.
      A transitive verb takes a direct object, marked with the particle <span class="h">を</span>.
      <GrammarExample>
        <template #example>
          <ruby>先生<rt>せんせい</rt></ruby>がドア<span class="h">を</span><ruby>開<rt>あ</rt></ruby>けました
        </template>
        <template #translation>
          The teacher opened the door
        </template>
        <template #note>
          "ドア" is the object being opened; it's marked with を
        </template>
      </GrammarExample>
      If something happens on its own or to itself → use the <span class="g">intransitive verb</span>.
      Intransitive verbs do not take a direct object — the subject itself experiences the action, usually marked with <span class="h">が</span>.
      <GrammarExample>
        <template #example>
          <ruby>ドア<rt>どあ</rt></ruby><span class="h">が</span><ruby>開<rt>あ</rt></ruby>きました
        </template>
        <template #translation>
          The door opened
        </template>
        <template #note>
          "ドア" is the subject that opened by itself; it's marked with が
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        Some verb pairs follow certain patterns (like ～eru vs ～aru, and ～ける vs ～く), but many must be memorized individually.
        When learning a new verb, always check whether it's transitive or intransitive — and whether it has a corresponding pair — to avoid
        confusion and ensure you use the correct particles (を vs. が).
      </div>
      <GrammarExampleSentences>
        <div class="example">
          <ruby>音楽<rt>おんがく</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めた
        </div>
        <div class="translation">
          I started the music
        </div>
        <div class="example">
          <ruby>音楽<rt>おんがく</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まった
        </div>
        <div class="translation">
          The music started (by itself)
        </div>
        <template #note>
          Notice how the transitive verb ends with an ～eru sound, and the intransitive verb ends with an ～aru sound.
          This is a common pattern, but not universal.
        </template>
      </GrammarExampleSentences>

      <div class="section">
        <div class="grammar-title">Using ～ている with Transitive vs Intransitive Verbs</div>
        The grammar pattern <RouterLink :to="{ name: 'grammarLoader', params: { slug: teIru.slug } }" class="link">{{ teIru.title }}</RouterLink>
        is used to describe ongoing actions or resulting states, but the nuance it conveys depends on which category the verb belongs to.
        While there are no hard-and-fast rules for determining this, there are some general patterns that can help you make educated guesses:
        <br><br>
        ～ている with transitive verbs generally describes an ongoing action being done by someone.
        <GrammarExample>
          <template #example>
            <ruby>彼<rt>かれ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こしています
          </template>
          <template #translation>
            I am waking him up
          </template>
          <template #note>
            Meaning, "I am in the process of waking him up"
          </template>
        </GrammarExample>

        ～ている with intransitive verbs often (but not always) describes a resulting state after an action has occurred.
        <GrammarExample>
          <template #example>
            <ruby>彼<rt>かれ</rt></ruby>が<ruby>起<rt>お</rt></ruby>きています
          </template>
          <template #translation>
            He is awake
          </template>
          <template #note>
            Meaning, "He is in the state of being awake"
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
