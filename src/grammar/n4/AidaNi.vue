<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { aidaNi as meta, nagara } from "./metadataN4";
  import { teIru } from "../n5/metadataN5";
</script>

<script lang="ts">
  export const title = meta.titlePlain ?? meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>
      <span v-html="meta.title" />
    </template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div class="structure-title small top">Event "B" happens during "A"</div>
      <div>A + <span class="grammar-highlight"><ruby>間<rt>あいだ</rt></ruby>に</span> + B</div>
      <div class="structure-title small">Event "B" lasts the duration of "A"</div>
      <div>A + <span class="grammar-highlight"><ruby>間<rt>あいだ</rt></ruby></span>、 + B</div>
      <div class="structure-inner">
        <div>Verb (～ている) + <span class="grammar-highlight"><ruby>間<rt>あいだ</rt></ruby>に</span> + B</div>
        <div>[Noun] + <span class="grammar-highlight"><span class="h">の</span><ruby>間<rt>あいだ</rt></ruby>に</span> + B</div>
        <div>な-Adjective + <span class="grammar-highlight"><span class="h">な</span><ruby>間<rt>あいだ</rt></ruby>に</span> + B</div>
        <div>い-Adjective + <span class="grammar-highlight"><ruby>間<rt>あいだ</rt></ruby>に</span> + B</div>
      </div>
    </template>
    <template #related>
      <div class="related-mb">Indicating simultanous actions:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: nagara.slug } }" class="link">{{ nagara.title }}</RouterLink></div>
    </template>
    <template #explanation>
      The grammar pattern <span class="g"><ruby>間<rt>あいだ</rt></ruby>に</span> is used to express that something happens during
      the span of another action or state. It highlights that the second event occurs at some point within the duration of the first.
      <span class="g">間</span> (あいだ) by itself means "interval" or "while". The particle に emphasizes that something happens within that time frame.
      <ul>
        <li><div>A + <span class="g"><ruby>間<rt>あいだ</rt></ruby>に</span> + B</div></li>
      </ul>
      The first part "A" is usually a continuous action or state expressed with the
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: teIru.slug } }" class="link">{{ teIru.title }}</RouterLink> form,
      a noun, or an adjective describing a period of time.

      <GrammarExample>
        <template #example>
          テレビを<ruby>見<rt>み</rt></ruby>ている<span class="g"><ruby>間<rt>あいだ</rt></ruby>に</span>、<ruby>電話<rt>でんわ</rt></ruby>が<ruby>鳴<rt>な</rt></ruby>った
        </template>
        <template #translation>
          While I was watching TV, the phone rang
        </template>
      </GrammarExample>
      When <ruby>間<rt>あいだ</rt></ruby> is used after a noun, it must be prefixed with the particle <span class="h">の</span>, forming <span class="h">の</span><span class="g"><ruby>間<rt>あいだ</rt></ruby>に</span>.
      Similarily, when used with な-adjectives, it takes the form <span class="h">な</span><span class="g"><ruby>間<rt>あいだ</rt></ruby>に</span>.
      <GrammarExample>
        <template #example>
          <ruby>休<rt>やす</rt></ruby>み<span class="h">の</span><span class="g"><ruby>間<rt>あいだ</rt></ruby>に</span>、この<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みたい
        </template>
        <template #translation>
          I want to read this book during the vacation
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        When using <span class="g"><ruby>間<rt>あいだ</rt></ruby>に</span>, "B" must be a shorter event that occurs within the duration of "A".
        If "B" extends throughout the time when "A" occurs, <span class="g"><ruby>間<rt>あいだ</rt></ruby></span> without the particle に should be used.
      </div>
      <GrammarExample>
        <template #example>
          テレビを<ruby>見<rt>み</rt></ruby>ている<span class="g"><ruby>間<rt>あいだ</rt></ruby></span>、<ruby>彼<rt>かれ</rt></ruby>は<ruby>勉強<rt>べんきょう</rt></ruby>していた
        </template>
        <template #translation>
          While I was watching TV, he was studying
        </template>
        <template #note>
          Implies that the "studying" lasted the entire duration of "watching TV"
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-title">Compared to ながら</div>
        <span class="g"><ruby>間<rt>あいだ</rt></ruby>に</span> expresses that something happened during a certain time period. A similar expression is
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: nagara.slug } }" class="link">{{ nagara.title }}</RouterLink>, which also means "while",
        but with a key difference: ながら is only used when the same person performs both actions simultaneously. It emphasizes doing two things
        at once, whereas <span class="g">間</span> focuses on the time span during which an event occurred.
        <GrammarExample>
          <template #example>
            <ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きながら、<ruby>運動<rt>うんどう</rt></ruby>します
          </template>
          <template #translation>
            I exercise while listening to music
          </template>
          <template #note>
            <ul class="example-list">
              <div>→ Same subject: The speaker must be doing both actions</div>
              <div>→ Focus on simultaneous actions</div>
              <div>→ Implies that listening to music is a background activity while the main action is exercising</div>
            </ul>
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>運動<rt>うんどう</rt></ruby>している<span class="g"><ruby>間<rt>あいだ</rt></ruby></span>、<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いている
          </template>
          <template #translation>
            (I) listen to music during the time that (I am) exercising
          </template>
          <template #note>
            <ul class="example-list">
              <div>→ Not necessarily the same subject: The speaker may be listening to music while someone else exercises</div>
              <div>→ Focuses on the time span during which something happens</div>
              <div>→ Emphasizes when listening to music happens, rather than simultaneity as such</div>
            </ul>
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.example-list {
  margin-top: 10px;
}
</style>
