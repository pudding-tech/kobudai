<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { teIru as meta, teVerb, transitivityPairs } from "./metadataN5";
  import { teAru } from "../n4/metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight"><span v-if="!isPolite">いる</span><span v-else>います</span></span>
      <div v-if="!isPolite">
        <div class="structure-title small">Casual variant</div>
        <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">る</span></div>
      </div>
    </template>
    <template #related>
      <div style="margin-bottom: 20px;">Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink></div>
      <div class="related-mb">See also:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: transitivityPairs.slug } }" class="link">{{ transitivityPairs.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAru.slug } }" class="link">{{ teAru.title }}</RouterLink></div>
    </template>
    <template #explanation>
      The <span class="g">～ている</span> form is one of the most important and versatile verb forms in Japanese. It combines the <span class="g">て-form</span> of a verb
      with the auxiliary verb <span class="g">いる</span>, and it can express several related but distinct meanings depending on the verb.
      <br><br>
      To form this structure, take the <span class="g">て-form</span> of a verb and add <span class="g">いる</span>, or <span class="g">います</span> in
      more polite contexts.
      <div class="note">
        <div class="note-title">Note:</div>
        In casual contexts, <span class="g">いる</span> is often contracted to just <span class="g">る</span>, so you might hear people say <ruby>食<rt>た</rt></ruby>べ<span class="g">てる</span>
        instead of <ruby>食<rt>た</rt></ruby>べ<span class="g">ている</span>.
      </div>

      <div class="section">
        <div class="grammar-title">Ongoing Actions (Present Continuous)</div>
        When used with action verbs, <span class="g">～ている</span> indicates an action that is currently in progress or ongoing at the moment of speaking.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べ<span class="g">ている</span>
          </div>
          <div class="translation">
            (I) am eating
          </div>
          <div class="example">
            <ruby>書<rt>か</rt></ruby>い<span class="g">ている</span>
          </div>
          <div class="translation">
            (I) am writing
          </div>
          <div class="example">
            <ruby>泳<rt>およ</rt></ruby>い<span class="g">でいる</span>
          </div>
          <div class="translation">
            (I) am swimming
          </div>
        </GrammarExampleSentences>
        This usage is similar to the English present continuous tense ("-ing"), and verbs in this form can be both transitive and intransitive.
        <GrammarExample>
          <template #example>
            <ruby>田中<rt>たなか</rt></ruby>さんは<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>ん<span class="g">でいます</span>
          </template>
          <template #translation>
            Mr. Tanaka is reading a book
          </template>
          <template #note>
            The focus is on the ongoing action of reading
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-title">Resulting State of Past Change</div>
        When <span class="g">～ている</span> is used with intransitive verbs, it often describes a state that is the result of a completed action.
        Instead of focusing on the action itself, it emphasizes the ongoing condition caused by that action.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>開<rt>あ</rt></ruby>い<span class="g">ている</span>
          </div>
          <div class="translation">
            (It) is open (and is in the state of being open)
          </div>
          <div class="example">
            つい<span class="g">ている</span>
          </div>
          <div class="translation">
            (It) is on (and is in the state of being on)
          </div>
          <div class="example">
            <ruby>知<rt>し</rt></ruby>っ<span class="g">ている</span>
          </div>
          <div class="translation">
            (I) know (and am in the state of knowing)
          </div>
        </GrammarExampleSentences>

        In these cases, the verb is describing the current state, not the act of performing the action that led to that state.
        <GrammarExample>
          <template #example>
            <ruby>田中<rt>たなか</rt></ruby>さんは<ruby>傘<rt>かさ</rt></ruby>を<ruby>持<rt>も</rt></ruby>っ<span class="g">ています</span>
          </template>
          <template #translation>
            Mr. Tanaka has an umbrella (and is in the state of having it)
          </template>
          <template #note>
            The focus is on the current state of having the umbrella, not the action of holding it
          </template>
        </GrammarExample>

        <div class="note">
          <div class="note-title">Note:</div>
          Be cautious with the use of <span class="g">～ている</span> with <ruby>行<rt>い</rt></ruby>く and <ruby>来<rt>き</rt></ruby>る.
          You might think they would mean "going" or "coming" in the present continuous sense, but they actually describe a state of having gone or come.
          <ul>
            <li><ruby>行<rt>い</rt></ruby>っ<span class="g">ている</span> → "Has gone (and is still there)"</li>
            <li><ruby>来<rt>き</rt></ruby><span class="g">ている</span> → "Has come here (and is still here)"</li>
          </ul>
          This is in contrast to the past tense forms, for example <ruby>行<rt>い</rt></ruby>った, which simply means "went" without any implication
          that the subject is still there (current state).
        </div>
        <GrammarExample>
          <template #example>
            <ruby>田中<rt>たなか</rt></ruby>さんはあの<ruby>店<rt>みせ</rt></ruby>に<ruby>行<rt>い</rt></ruby>っ<span class="g">ている</span>
          </template>
          <template #translation>
            Mr. Tanaka has gone to that store (and is still there)
          </template>
          <template #note>
            The focus is on the current state of having gone, not the action of going
          </template>
        </GrammarExample>

        There's no strict rule for determining whether a verb expresses an ongoing action or a resulting state when used
        with <span class="g">～ている</span> — it often depends on the verb itself and must be learned individually. However, clues like whether
        the verb is transitive or intransitive can help you make educated guesses.
      </div>
    </template>
  </GrammarStructure>
</template>
