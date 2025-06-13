<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { nakutemoii as meta } from "./metadataN4";
  import { temoii } from "../n5/metadataN5";

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
      <span class="grammar-highlight">Negative て-form</span> + <span class="grammar-highlight">もいい</span><span v-if="isPolite"> + です</span>
      <div class="structure-inner">
        <div>Verb (negative) <s class="remove">[い]</s> + <span class="grammar-highlight">くてもいい</span><span v-if="isPolite"> + です</span></div>
        <div>い-adjective (negative) <s class="remove">[い]</s> + <span class="grammar-highlight">くてもいい</span><span v-if="isPolite"> + です</span></div>
        <div>な-adjective + じゃない <s class="remove">[い]</s> + <span class="grammar-highlight">くてもいい</span><span v-if="isPolite"> + です</span></div>
        <div>Noun + じゃない <s class="remove">[い]</s> + <span class="grammar-highlight">くてもいい</span><span v-if="isPolite"> + です</span></div>
      </div>
    </template>
    <template #related>
      To express "you may", see
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: temoii.slug } }" class="link">{{ temoii.title }}</RouterLink>
    </template>
    <template #explanation>
      <span class="g">～なくてもいい</span> is a common grammar pattern in Japanese that expresses that something does not need to be done, or that it's okay not to do or be something.
      It's the negative counterpart to <RouterLink :to="{ name: 'grammarLoader', params: { slug: temoii.slug } }" class="link">{{ temoii.title }}</RouterLink>, which expresses permission.
      <br><br>
      It's formed by putting a verb, adjective, or noun into the <span class="g">negative て-form</span>, followed by <span class="g">もいい</span>.
      This means the action or condition is not required, or acceptable to skip.
      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べ<span class="g">なくてもいい</span>
        </template>
        <template #translation>
          You don't have to eat / It's okay not to eat
        </template>
      </GrammarExample>

      To use <span class="g">～なくてもいい</span>, conjugate the negative verb, adjective, or noun as follows:
      <GrammarExampleSentences>
        <div class="example">
          <ruby>行<rt>い</rt></ruby>かない → <ruby>行<rt>い</rt></ruby>か<span class="g">なくてもいい</span>
        </div>
        <div class="translation">
          to not go → don't have to go
        </div>
        <template #note>
          With a negative verb
        </template>
      </GrammarExampleSentences>
      <GrammarExampleSentences>
        <div class="example">
          <ruby>安<rt>やす</rt></ruby>くない → <ruby>安<rt>やす</rt></ruby>く<span class="g">なくてもいい</span>
        </div>
        <div class="translation">
          not cheap → doesn't have to be cheap
        </div>
        <template #note>
          With a negative い-adjective
        </template>
      </GrammarExampleSentences>
      <GrammarExampleSentences>
        <div class="example">
          <ruby>静<rt>しず</rt></ruby>かじゃない → <ruby>静<rt>しず</rt></ruby>かじゃ<span class="g">なくてもいい</span>
        </div>
        <div class="translation">
          not quiet → doesn't have to be quiet
        </div>
        <div class="example">
          <ruby>学生<rt>がくせい</rt></ruby>じゃない → <ruby>学生<rt>がくせい</rt></ruby>じゃ<span class="g">なくてもいい</span>
        </div>
        <div class="translation">
          not a student → doesn't have to be a student
        </div>
        <template #note>
          With a negative な-adjective and a negative noun
        </template>
      </GrammarExampleSentences>

      You can also add です to make it more polite.
      <GrammarExample>
        <template #example>
          <ruby>宿題<rt>しゅくだい</rt></ruby>は<ruby>今日<rt>きょう</rt></ruby>やら<span class="g">なくてもいい</span>です
        </template>
        <template #translation>
          You don't have to do the homework today
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        In casual speech, you can drop the <span class="g">も</span>, making it simply <span class="g">～なくていい</span>.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>先生<rt>せんせい</rt></ruby>じゃ<span class="g">なくていい</span>よ
        </template>
        <template #translation>
          It doesn't have to be a teacher, you know
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">Using ～なくてもいい in Questions</div>
        You can also use <span class="g">～なくてもいい</span> to ask for permission not to do something.
        <GrammarExample>
          <template #example>
            <ruby>行<rt>い</rt></ruby>か<span class="g">なくてもいい</span>ですか？
          </template>
          <template #translation>
            Is it okay if I don't go?
          </template>
        </GrammarExample>
        <span class="g">～なくてもいい</span> (with a rising intonation) can be used for asking in casual speech,
        but in polite situations, use <span class="g">～なくてもいい</span>ですか.
        <GrammarExample>
          <template #example>
            <ruby>天気<rt>てんき</rt></ruby>は<ruby>良<rt>よ</rt></ruby>く<span class="g">なくてもいい</span>？
          </template>
          <template #translation>
            Is it okay if the weather is not good?
          </template>
          <template #note>
            ～なくてもいい？ can be used in casual speech
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
