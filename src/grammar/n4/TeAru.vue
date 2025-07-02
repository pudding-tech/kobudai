<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import RelatedGrammarList from "@/components/RelatedGrammarList.vue";
  import { teAru as meta, teOku } from "./metadataN4";
  import { teIru, teVerb, transitivityPairs } from "../n5/metadataN5";

  const isPolite = ref(false);
  const related = [teVerb, transitivityPairs, teIru, teOku];
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight"><span v-if="!isPolite">ある</span><span v-else>あります</span></span>
    </template>
    <template #related>
      <RelatedGrammarList :related="related" />
    </template>
    <template #explanation>
      The grammar pattern <span class="g">～てある</span> is used to express that something has been done intentionally and the resulting state remains.
      The emphasis is on the outcome rather than the action itself, meaning there is no mention the doer of the action.
      This pattern is only used with transitive verbs, because the action is performed on something by someone (even if the doer is not mentioned).
      It is often translated as "has been done" or "is (intentionally) done...".
      <br><br>
      To form this structure, take the <span class="g">て-form</span> of a verb and add <span class="g">ある</span>.
      <ul>
        <li>[Object] は／が + [<span class="g">transitive verb in て-form</span>] + <span class="g">ある</span></li>
      </ul>
      <GrammarExample>
        <template #example>
          <ruby>夜<rt>よる</rt></ruby>ごはんは作っ<span class="g">てある</span>
        </template>
        <template #translation>
          Dinner has been made
        </template>
      </GrammarExample>
      Note that <span class="g">～てある</span> implies that the resulting state is still valid or relevant at the time of speaking.
      <GrammarExample>
        <template #example>
          <ruby>予約<rt>よやく</rt></ruby>がし<span class="g">てあります</span>
        </template>
        <template #translation>
          The reservation has been made (and is still valid)
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        The verb used with <span class="g">～てある</span> must be transitive because it describes a state resulting
        from a deliberate action done to something. Since transitive verbs take a direct object, they can show that
        something was done and left in that state — which intransitive verbs cannot do.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>が<ruby>買<rt>か</rt></ruby>っ<span class="g">てあります</span>か？
        </template>
        <template #translation>
          Has milk been bought?
        </template>
        <template #note>
          "Who" bought the milk is not mentioned, the focus is on the fact that milk has been bought and is available
        </template>
      </GrammarExample>

      One way to think about <span class="g">～てある</span> is as the resulting state of an intentional action that might
      have previously been described using <RouterLink :to="{ name: 'grammarLoader', params: { slug: teOku.slug } }" class="link">{{ teOku.title }}</RouterLink>.
      While ～ておく focuses on the act of doing something in preparation, <span class="g">～てある</span> highlights that the result of that action still remains.
      <GrammarExampleSentences>
        <div class="example">
          お<ruby>弁当<rt>べんとう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>っておいた
        </div>
        <div class="translation">
          I made a bento lunch (in preparation for later)
        </div>
        <div class="example">
          お<ruby>弁当<rt>べんとう</rt></ruby>が<ruby>作<rt>つく</rt></ruby>っ<span class="g">てある</span>
        </div>
        <div class="translation">
          A bento lunch has been made (and is ready)
        </div>
      </GrammarExampleSentences>

      <div class="section">
        <div class="grammar-title">Compared with ～ている</div>
        Both <span class="g">～てある</span> and <RouterLink :to="{ name: 'grammarLoader', params: { slug: teIru.slug } }" class="link">{{ teIru.title }}</RouterLink>
        can describe the resulting state of an action, but they differ in how the result came to be, and what kind of verbs they can be used with.
        <br><br>
        <span class="g">～てある</span> expresses a resulting state from an intentional action done by someone (even if the doer is not mentioned).
        It is only used with transitive verbs — that is, verbs that act on a direct object. The focus is on the result being intentional, and the state remains as a result of that action.
        <GrammarExample>
          <template #example>
            ドアが<ruby>閉<rt>し</rt></ruby>め<span class="g">てある</span>
          </template>
          <template #translation>
            The door has been closed (intentionally)
          </template>
          <template #note>
            Someone closed it, and it's still in that state
          </template>
        </GrammarExample>

        ～ている has two main uses: it can describe an ongoing action, or it can describe a resulting state.
        In the latter case, which is often used with intransitive verbs, the meaning may seem similar to <span class="g">～てある</span>, but there are key differences in nuance.
        <br><br>
        Unlike <span class="g">～てある</span>, ～ている does not imply that the action was done intentionally, nor does it suggest that someone
        caused the state to happen. The focus is simply on the current condition of the subject, without any attention to who (or whether anyone) made it that way.
        <GrammarExample>
          <template #example>
            ドアが<ruby>閉<rt>し</rt></ruby>まっ<span class="g">ている</span>
          </template>
          <template #translation>
            The door is closed
          </template>
          <template #note>
            The door is in a closed state — we don't know if someone closed it
          </template>
        </GrammarExample>

        <div class="note">
          <div class="note-title">Note:</div>
          A quick way to think of <span class="g">～てある</span> is as the "resulting state" of a transitive verb
          where ～ている expresses an "ongoing action".
        </div>
        <GrammarExampleSentences>
          <div class="example">
            <ruby>電気<rt>でんき</rt></ruby>がついている
          </div>
          <div class="translation">
            The light is on
          </div>
          <div class="example">
            <ruby>電気<rt>でんき</rt></ruby>つけ<span class="g">てある</span>
          </div>
          <div class="translation">
            The light has been turned on (intentionally)
          </div>
          <template #note>
            Here with the intransitive verb つく and the transitive verb つける
          </template>
        </GrammarExampleSentences>
      </div>
    </template>
  </GrammarStructure>
</template>
