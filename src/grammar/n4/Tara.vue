<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { tara as meta, ba, nara } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Sentence 1 + <span class="grammar-highlight">～たら</span> + Sentence 2</div>
      <div class="structure-inner">
        <div>Verb (plain past form) + <span class="grammar-highlight">ら</span></div>
        <div>い-adjective (past form) + <span class="grammar-highlight">ら</span></div>
        <div>な-adjective + だった + <span class="grammar-highlight">ら</span></div>
        <div>Noun + だった + <span class="grammar-highlight">ら</span></div>
      </div>
    </template>
    <template #related>
      Other conditionals:
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: nara.slug } }" class="link">{{ nara.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink></div>
    </template>
    <template #explanation>
      The word <span class="g">～たら</span> is one of the most common ways to say "if" in Japanese.
      It's used when talking about what will happen after something else happens, or when talking about hypothetical situations.
      You can think of it as meaning "if" or "when," depending on the context.
      <br><br>
      To use <span class="g">～たら</span>, take the past tense (た-form) of a verb, adjective, or copula, and add <span class="g">ら</span> to the end.
      This structure connects two clauses: the first one is the condition, and the second one is the result or action that follows.
      <ul>
        <li>(Clause 1 in た-form) + <span class="g">ら</span> + (Clause 2) → Meaning: "If/when (Clause 1) happens, then (Clause 2)."</li>
      </ul>
      <GrammarExample>
        <template #example>
          <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>った<span class="g">ら</span>、<ruby>出<rt>で</rt></ruby>かけないかもしれない
        </template>
        <template #translation>
          If it rains, I might not go out
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べた<span class="g">ら</span>、<ruby>続<rt>つづ</rt></ruby>けましょう
        </template>
        <template #translation>
          When we've eaten, let's continue
        </template>
        <template #note>
          ～たら could be used here to mean "if" here too, depending on the context
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">～たら</span> can be used for both real and hypothetical conditions, meaning the condition doesn't have to be known or believed to be true.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>私<rt>わたし</rt></ruby>が<ruby>先生<rt>せんせい</rt></ruby>だった<span class="g">ら</span>、もっとやさしく<ruby>教<rt>おし</rt></ruby>える
        </template>
        <template #translation>
          If I were the teacher, I would teach more kindly
        </template>
        <template #note>
          Hypothetical scenario
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">Using ～たら with Negative Forms</div>
        The <span class="g">～たら</span> form can also be made negative to express conditions that don't happen, aren't true, or won't be the case.
        To do this, simply conjugate the verb, adjective, or noun into the negative ～なかった or ～じゃなかった form before adding <span class="g">ら</span>.
        <GrammarExample>
          <template #example>
            <ruby>安<rt>やす</rt></ruby>くなかった<span class="g">ら</span>、<ruby>買<rt>か</rt></ruby>いません
          </template>
          <template #translation>
            If it's not cheap, I won't buy it
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-title">～たら Compared to なら and ～ば</div>
        While <span class="g">～たら</span> is used to talk about what happens when a condition becomes true — regardless of whether it's currently true or likely —
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: nara.slug } }" class="link">{{ nara.title }}</RouterLink> is more about reacting to known or assumed conditions,
        often based on what someone just said.
        A third conditional, <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink>,
        expresses a more neutral or logical "if", often used for general truths or cause-effect relationships.
        <ul>
          <li><span class="g">～たら</span> = "If/when something happens…" → Describes what will (or might) happen next</li>
          <li>～ば = "If something is (generally) true…" → States a natural or expected result</li>
          <li>なら = "If it's true that…" → Reacts to or comments on a situation</li>
        </ul>
        One key feature of <span class="g">～たら</span> is that the second action typically follows the first in time. In contrast,
        with <RouterLink :to="{ name: 'grammarLoader', params: { slug: nara.slug } }" class="link">{{ nara.title }}</RouterLink>, the second action doesn't
        have to come after the first — it just depends on the condition being accepted as true.
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink>, on the other hand, doesn't
        necessarily imply a time sequence; it's more about stating what would logically or naturally follow if the condition holds.
        <br><br>
        <span class="g">～たら</span> is very common in everyday conversation and casual speech, especially when talking about events that happen in sequence.
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink> sounds a bit more formal
        or literary, often appearing in written Japanese, official statements, or when expressing logical or general truths.
        <GrammarExample>
          <template #example>
            <ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>った<span class="g">ら</span>、<ruby>電話<rt>でんわ</rt></ruby>してください
          </template>
          <template #translation>
            When you get home, please call me
          </template>
          <template #note>
            The phone call happens <i>after</i> the person gets home. The condition (going home) must be fulfilled first, then the action follows.
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>れば、<ruby>電話<rt>でんわ</rt></ruby>してください
          </template>
          <template #translation>
            If you go home, please call me
          </template>
          <template #note>
            This sounds a bit more formal or logical. It expresses a general conditional: if that condition is met, then please do the action.
            It doesn't strongly emphasize time order like ～たら, and it's a bit more detached than なら.
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>るなら、<ruby>電話<rt>でんわ</rt></ruby>してください
          </template>
          <template #translation>
            If (it's true that) you're going home, please call me
          </template>
          <template #note>
            This assumes or accepts that the person is going home. It's more like a suggestion based on that premise, not necessarily implying the order of actions.
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
