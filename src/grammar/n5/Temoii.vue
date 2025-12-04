<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { temoii as meta, teAdjectiveNoun, teVerb } from "./metadataN5";
  import { nakutemoii, teMo } from "../n4/metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <span class="grammar-highlight">て-form</span> + <span class="grammar-highlight">もいい</span><span v-if="isPolite"> + です</span>
      <div class="structure-inner">
        Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">もいい</span><span v-if="isPolite"> + です</span>
        <div>い-adjective <s class="remove">[い]</s> + <span class="grammar-highlight">くてもいい</span><span v-if="isPolite"> + です</span></div>
        <div>な-adjective + <span class="grammar-highlight">でもいい</span><span v-if="isPolite"> + です</span></div>
        <div>Noun + <span class="grammar-highlight">でもいい</span><span v-if="isPolite"> + です</span></div>
      </div>
    </template>
    <template #related>
      <div class="related-mb">Based on:</div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teMo.slug } }" class="link">{{ teMo.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAdjectiveNoun.slug } }" class="link">{{ teAdjectiveNoun.title }}</RouterLink>
      </div>
      <div style="margin-top: 20px">
        - To express "don't have to", see
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: nakutemoii.slug } }" class="link">{{ nakutemoii.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <span class="g">～てもいい</span> is a common Japanese grammar pattern used to express permission, meaning "it's okay to..." or "you may...".
      It's formed by putting a verb, adjective, or noun into the <span class="g">て</span>-form, followed by <span class="g">もいい</span>.
      This means the action or condition is allowed or acceptable.
      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べ<span class="g">てもいい</span>
        </template>
        <template #translation>
          You may eat / It's okay to eat
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">～てもいい</span> is actually a specialized use of the grammar point
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: teMo.slug } }" class="link">{{ teMo.title }}</RouterLink>.
        Literally, it means "even if [something], it's good".
      </div>

      To use <span class="g">～てもいい</span>, conjugate the verb, adjective, or noun as follows:
      <GrammarExampleSentences>
        <div class="example">
          <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>っ<span class="g">てもいい</span>
        </div>
        <div class="translation">
          to go → it's okay to go
        </div>
        <template #note>
          With a verb
        </template>
      </GrammarExampleSentences>
      <GrammarExampleSentences>
        <div class="example">
          <ruby>安<rt>やす</rt></ruby>い → <ruby>安<rt>やす</rt></ruby><span class="g">くてもいい</span>
        </div>
        <div class="translation">
          cheap → it's okay to be cheap
        </div>
        <template #note>
          With a い-adjective
        </template>
      </GrammarExampleSentences>
      <GrammarExampleSentences>
        <div class="example">
          <ruby>静<rt>しず</rt></ruby>か → <ruby>静<rt>しず</rt></ruby>か<span class="g">でもいい</span>
        </div>
        <div class="translation">
          quiet → it's okay to be quiet
        </div>
        <div class="example">
          <ruby>学生<rt>がくせい</rt></ruby> → <ruby>学生<rt>がくせい</rt></ruby><span class="g">でもいい</span>
        </div>
        <div class="translation">
          student → it's okay to be a student
        </div>
        <template #note>
          With a な-adjective and a noun
        </template>
      </GrammarExampleSentences>

      You can also add です to make it more polite.
      <GrammarExample>
        <template #example>
          <ruby>入<rt>はい</rt></ruby>っ<span class="g">てもいい</span>です
        </template>
        <template #translation>
          It's okay to come in
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        In casual speech, you can drop the <span class="g">も</span>, making it simply <span class="g">～ていい</span>.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>っ<span class="g">ていい</span>よ
        </template>
        <template #translation>
          You can take a photo, for sure
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">Using ～てもいい in Questions</div>
        When used in a question, <span class="g">～てもいい</span> asks for permission. This is a polite and natural way to ask to do something in Japanese.
        <GrammarExample>
          <template #example>
            ここに<ruby>座<rt>すわ</rt></ruby>っ<span class="g">てもいい</span>ですか？
          </template>
          <template #translation>
            May I sit here?
          </template>
        </GrammarExample>
        <span class="g">～てもいい</span> (with a rising intonation) can be used for asking in casual speech,
        but in polite situations, use <span class="g">～てもいい</span>ですか.
        <GrammarExample>
          <template #example>
            トイレに<ruby>行<rt>い</rt></ruby>っ<span class="g">てもいい</span>？
          </template>
          <template #translation>
            May I go to the bathroom?
          </template>
          <template #note>
            ～てもいい？ can be used in casual speech
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
