<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { gahoshi as meta } from "./metadataN4";

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
      <div>Noun + <span class="grammar-highlight">がほしい<span v-if="isPolite">です</span></span></div>
      <div class="structure-title small">Talking about someone else's desire (3rd person)</div>
      <div>Noun + <span class="grammar-highlight">をほしが<span v-if="isPolite">ります</span><span v-else>る</span></span></div>
    </template>
    <template #explanation>
      The word <span class="g">ほしい</span> is used to express wanting a thing (not an action). It attaches to a noun marked by <span class="g">が</span>, and is used when the speaker is the one who wants something.
      <span class="g">ほしい</span> is often written in either only hiragana or with its kanji (<span class="g">欲しい</span>). Both forms are commonly used in Japanese writing.
      <GrammarExample>
        <template #example>
          <ruby>温<rt>あたた</rt></ruby>かい<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby><span class="g">が<ruby>欲<rt>ほ</rt></ruby>しい</span>
        </template>
        <template #translation>
          I want a warm drink
        </template>
      </GrammarExample>
      <span class="g">ほしい</span> is an い-adjective, so it can be conjugated like any other い-adjective. This includes making polite statements, which can be done by adding です to the end of the sentence.
      <GrammarExample>
        <template #example>
          <ruby>本<rt>ほん</rt></ruby>があまり<span class="g"><ruby>欲<rt>ほ</rt></ruby>しくないです</span>
        </template>
        <template #translation>
          I don't really want a book
        </template>
        <template #note>
          Negative polite form
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">Expressing what others want</div>
        Japanese has a subtle but important cultural rule: you generally cannot speak directly about someone else's internal emotional state, including what they "want".
        So, when talking about a third person's desire, you cannot use <span class="g">〜がほしい</span> directly. Instead you use the verb form:
        <ul>
          <li><span class="g">〜をほしがる</span> (or with kanji, <span class="g"><ruby>欲<rt>ほ</rt></ruby>しがる</span>)</li>
        </ul>
        Which means "to appear to want" or "to show signs of wanting".
        Since <span class="g">ほしがる</span> is a godan verb, it can be conjugated like any other godan verb. The most natural form for everyday use is the 〜ている progressive form.
        <GrammarExample>
          <template #example>
            <ruby>父<rt>ちち</rt></ruby>は<ruby>新<rt>あたら</rt></ruby>しいテレビ<span class="g">を<ruby>欲<rt>ほ</rt></ruby>しがっている</span>
          </template>
          <template #translation>
            My father wants a new TV
          </template>
          <template #note>
            Literally, "My father appears to want a new TV"
          </template>
        </GrammarExample>
        This way of speaking gives some emotional distance, which fits the Japanese tendency to avoid assuming the feelings of others.

        <div class="note">
          <div class="note-title">Note:</div>
          Note that <span class="g">欲しがる</span> is only used to describe the desires of someone else, not when speaking to the person or asking them directly.
        </div>
        <GrammarExample>
          <template #example>
            この<ruby>店<rt>みせ</rt></ruby>で<ruby>何<rt>なに</rt></ruby>か<span class="g"><ruby>欲<rt>ほ</rt></ruby>しい</span>？
          </template>
          <template #translation>
            Do you want something from this store?
          </template>
          <template #note>
            Note: The が is often dropped in casual conversation
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <!-- <div class="grammar-subtitle">Someone says they want</div> -->
         If someone says they want something, it is also possible to say what they desire by using <span class="g">〜がほしい</span> together with と言っている.
         This is because you're reporting their own words, not assuming their feelings.
        <GrammarExample>
          <template #example>
            <ruby>友達<rt>ともだち</rt></ruby>はすてきな<ruby>自転車<rt>じてんしゃ</rt></ruby><span class="g">が<ruby>欲<rt>ほ</rt></ruby>しい</span>と<ruby>言<rt>い</rt></ruby>っている
          </template>
          <template #translation>
            My friend says they want a nice bike
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
