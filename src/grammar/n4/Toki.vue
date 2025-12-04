<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { toki as meta } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.titlePlain ?? meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div>(Time reference event) + <span class="grammar-highlight"><ruby>時<rt>とき</rt></ruby></span> + (main event)</div>
      <div class="structure-inner">
        <div>Verb (plain present/past) + <span class="grammar-highlight"><ruby>時<rt>とき</rt></ruby></span></div>
        <div>い-adjective + <span class="grammar-highlight"><ruby>時<rt>とき</rt></ruby></span></div>
        <div>な-adjective + <span class="grammar-highlight"><span class="h">な</span><ruby>時<rt>とき</rt></ruby></span></div>
        <div>Noun + <span class="grammar-highlight"><span class="h">の</span><ruby>時<rt>とき</rt></ruby></span></div>
      </div>
    </template>
    <template #explanation>
      The grammar pattern <span class="g">～時</span> (とき) connects two actions or events in time. It's used to express when something happens, or what was going on when something else occurred.
      <br><br>
      In this structure:
      <ul>
        <li>The clause before <span class="g">時</span> (the "time reference") describes when the main action happens.</li>
        <li>The main clause describes the event that takes place at that time.</li>
        <br>
      </ul>
      <div class="grammar-box">
        [Time reference event] + <span class="g"><ruby>時<rt>とき</rt></ruby></span>、[main event/action]
      </div>
      The verb, adjective, or noun before <span class="g">時</span> determines the timing of the main event in relation to the first action or state.
      The particle <span class="g">時</span> itself means "time" or "when", and can be used with verbs, adjectives, or nouns.
      When used with な-adjectives, it requires <span class="h">な</span> before <span class="g">時</span>, and when used with nouns,
      it requires <span class="h">の</span> before <span class="g">時</span>.

      <div class="section">
        <div class="grammar-subtitle">Present Tense of Time Reference Event</div>
        When the time reference event is in the present tense, the main event occurs <b>during</b> or <b>just as the time reference begins</b>.
        <GrammarExample>
          <template #example>
            <ruby>友<rt>とも</rt></ruby>だちに<ruby>会<rt>あ</rt></ruby>う<span class="g"><ruby>時<rt>とき</rt></ruby></span>、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ります
          </template>
          <template #translation>
            When I meet my friend, I will take a photo
          </template>
          <template #note>
            Implies that the action of taking a photo happens at the same time as meeting the friend
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>元気<rt>げんき</rt></ruby><span class="h">な</span><span class="g"><ruby>時<rt>とき</rt></ruby></span>、<ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>る
          </template>
          <template #translation>
            When I'm energetic, I climb mountains
          </template>
          <template #note>
            Two present tense clauses can imply a habitual action, like a routine or regular occurrence,
            which is often the case when the time reference is a state or condition
          </template>
        </GrammarExample>

        When the main event is in the past tense, it indicates that the whole sentence happened in the past, but the main event still happened
        <b>during</b> or <b>just as the time reference begins</b>.
        <GrammarExample>
          <template #example>
            <ruby>友<rt>とも</rt></ruby>だちに<ruby>会<rt>あ</rt></ruby>う<span class="g"><ruby>時<rt>とき</rt></ruby></span>、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>りました
          </template>
          <template #translation>
            When I met my friend, I took a photo
          </template>
          <template #note>
            Still describing a photo taken during or at the time of meeting, but now it's in the past
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>学生<rt>がくせい</rt></ruby><span class="h">の</span><span class="g"><ruby>時<rt>とき</rt></ruby></span>、<ruby>日本<rt>にほん</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいました
          </template>
          <template #translation>
            When I was a student, I lived in Japan
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Past Tense of Time Reference Event</div>
        When the time reference event is in the past tense, the main event occurs <b>after</b> the time reference event has already finished.
        <br><br>
        This structure can often feel a bit awkward or unnatural if used with just any sentence. Like if we apply it to the earlier example:
        <GrammarExample>
          <template #example>
            <ruby>友<rt>とも</rt></ruby>だちに<ruby>会<rt>あ</rt></ruby>った<span class="g"><ruby>時<rt>とき</rt></ruby></span>、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ります
          </template>
          <template #translation>
            When I have met my friend, I will take a photo
          </template>
          <template #note>
            You'll take a photo after meeting. Slightly awkward but grammatically correct.
          </template>
        </GrammarExample>

        Instead, this construction is most naturally used when the time-reference event is completed, and the main event follows as a result of the time-reference event being completed.
        <GrammarExample>
          <template #example>
            カードを<ruby>入<rt>い</rt></ruby>れた<span class="g"><ruby>時<rt>とき</rt></ruby></span>、お<ruby>金<rt>かね</rt></ruby>が<ruby>出<rt>で</rt></ruby>ます
          </template>
          <template #translation>
            When I have inserted the card, money comes out
          </template>
          <template #note>
            The past tense indicates a completed action (inserted the card), followed by a present result (money comes out)
          </template>
        </GrammarExample>

        <div class="note">
          <div class="note-title">Note:</div>
          If the time-reference event is in the past tense it means the main event happens after the reference action finished.
          This is in contrast to when the time-reference event is in present tense, which implies the main event happens during, or right before the reference action occurs.
        </div>

        When the main event is in the past tense, it indicates that the everything happened in the past, but that the main event still happened
        <b>after</b> the time reference event was completed.
        <GrammarExample>
          <template #example>
            <ruby>友<rt>とも</rt></ruby>だちに<ruby>会<rt>あ</rt></ruby>った<span class="g"><ruby>時<rt>とき</rt></ruby></span>、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>りました
          </template>
          <template #translation>
            When I met my friend, I took a photo
          </template>
          <template #note>
            The photo was taken after meeting the friend, but both actions are in the past
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>外<rt>そと</rt></ruby>に<ruby>行<rt>い</rt></ruby>った<span class="g"><ruby>時<rt>とき</rt></ruby></span>、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>りました
          </template>
          <template #translation>
            When I went outside, it rained
          </template>
          <template #note>
            First you went outside, and afterward, it rained
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.grammar-box {
  top: -20px;
}
</style>
