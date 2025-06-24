<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teoku as meta } from "./metadataN4";
  import { teVerb } from "../n5/metadataN5";

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
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">お<span v-if="!isPolite">く</span><span v-else>きます</span></span></div>
      <div v-if="!isPolite">
        <div class="structure-title small">Casual variant</div>
        <div>Verb (<span class="grammar-highlight">て-form</span>) <s class="remove">[て]</s> + <span class="grammar-highlight">とく</span></div>
      </div>
    </template>
    <template #related>
      Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink>
    </template>
    <template #explanation>
      The grammar pattern <span class="g">～ておく</span> is used when you do something in preparation for a future purpose or event. It often translates to "do something in advance",
      "do something in preparation (for something)", or "get something done beforehand".
      <br><br>
      To form the <span class="g">～ておく</span> pattern, take the <span class="g">て-form</span> of a verb and add <span class="g">おく</span>.
      <GrammarExample>
        <template #example>
          <ruby>明日<rt>あした</rt></ruby>のために、<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をし<span class="g">ておく</span>
        </template>
        <template #translation>
          I will do shopping in preparation for tomorrow
        </template>
        <template #note>
          
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">おく</span> is a godan verb, and conjugates as such.
      </div>
      <span class="g">～ておく</span> often implies foresight or efficiency — you're doing something now so you don't have to worry about it later.
      <GrammarExample>
        <template #example>
          <ruby>試験<rt>しけん</rt></ruby>があるから、<ruby>宿題<rt>しゅくだい</rt></ruby>をやっ<span class="g">ておきます</span>
        </template>
        <template #translation>
          Because there's a test, I'll get the homework done ahead of time
        </template>
      </GrammarExample>
      It's not necessary to say exactly what you're preparing for when using <span class="g">～ておく</span> — the purpose is often clear from context.
      However, including the reason can help make your intention more explicit. Without it, the listener will simply infer the purpose based on the situation.
      <GrammarExample>
        <template #example>
          <ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>に<ruby>水<rt>みず</rt></ruby>を<ruby>入<rt>い</rt></ruby>れ<span class="g">ておいた</span>
        </template>
        <template #translation>
          I put some water in the fridge (in advance)
        </template>
        <template #note>
          The reason isn't stated, but it might be because guests are coming or you want cold water for later.
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">おく</span> comes from the verb <span class="g">おく</span> (置く), which means "to put" or "to place". In this context, it implies that you are putting something in a state of readiness for later use.
        Note that when used in the pattern <span class="g">～ておく</span> is should not be written in kanji, as it is a fixed expression.
      </div>
      <span class="g">～ておく</span> can also be used without a specific future event in mind, simply indicating that you're doing something now to make things easier later on. In English, this can
      be expressed as "just to have it ready" or "just to be prepared", or even simply "just in case".
      <GrammarExample>
        <template #example>
          パンを<ruby>買<rt>か</rt></ruby>っ<span class="g">ておく</span>
        </template>
        <template #translation>
          I'll buy some bread (just in case)
        </template>
        <template #note>
          This can be said even without a specific reason in mind — it might just be to have some on hand for later, like when you get hungry
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">Casual variant</div>
        In casual speech, <span class="g">～ておく</span> often contracts to <span class="g">～とく</span>.
        This contraction is common in informal conversation, especially when speaking quickly.
        <GrammarExample>
          <template #example>
            <ruby>買<rt>か</rt></ruby>っ<span class="g">ておく</span> → <ruby>買<rt>か</rt></ruby>っ<span class="g">とく</span>
          </template>
          <template #translation>
            Buy (in preparation)
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>勉強<rt>べんきょう</rt></ruby>し<span class="g">とこう</span>
          </template>
          <template #translation>
            Let's study (in preparation)
          </template>
          <template #note>
            Contracted form of 勉強しておこう
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          When a verb in the て-form ends with で, the contraction of <span class="g">～でおく</span> becomes <span class="g">～どく</span> instead.
        </div>
        <GrammarExample>
          <template #example>
            <ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>ん<span class="g">どきます</span>
          </template>
          <template #translation>
            I'll read the book (in preparation)
          </template>
        </GrammarExample>
        Keep in mind the polite or formal form is not contracted — contractions like <span class="g">～とく</span> and <span class="g">～どく</span> are only used in casual settings, typically among friends or family.
        These forms are very natural in everyday conversation, and you'll often hear them used for actions done in advance, just in case, or to be ready for something.
      </div>
    </template>
  </GrammarStructure>
</template>
