<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { kamoshirenai as meta } from "./metadataN4";

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
      <div>Verb (plain form) + <span class="grammar-highlight">かもしれ<span v-if="isPolite">ません</span><span v-else>ない</span></span></div>
      <div>い-adjective + <span class="grammar-highlight">かもしれ<span v-if="isPolite">ません</span><span v-else>ない</span></span></div>
      <div>な-adjective + <span class="grammar-highlight">かもしれ<span v-if="isPolite">ません</span><span v-else>ない</span></span></div>
      <div>Noun + <span class="grammar-highlight">かもしれ<span v-if="isPolite">ません</span><span v-else>ない</span></span></div>
    </template>
    <template #explanation>
      The grammar pattern <span class="g">かもしれない</span> is used to express possibility or uncertainty — similar to saying "might", "maybe", or "perhaps" in English.
      It implies that something could be true, though the speaker isn't sure.
      <br><br>
      <span class="g">かもしれない</span> attaches directly to the end of a verb or adjective (in plain form):
      <GrammarExample>
        <template #example>
          <ruby>食<rt>た</rt></ruby>べる<span class="g">かもしれない</span>
        </template>
        <template #translation>
          (I) might eat
        </template>
        <template #note>
          Use with a verb
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>高<rt>た</rt></ruby>い<span class="g">かもしれない</span>
        </template>
        <template #translation>
          Maybe it's expensive
        </template>
        <template #note>
          Use with an い-adjective
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>静<rt>しず</rt></ruby>か<span class="g">かもしれない</span>
        </template>
        <template #translation>
          It might be quiet
        </template>
        <template #note>
          Use with a な-adjective
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>雨<rt>あめ</rt></ruby><span class="g">かもしれない</span>
        </template>
        <template #translation>
          Maybe it's rain
        </template>
        <template #note>
          Use with a noun
        </template>
      </GrammarExample>
      In casual speech, <span class="g">かもしれない</span> is often shortened to <span class="g">かも</span>. This is very natural in conversations among friends.
      <GrammarExample>
        <template #example>
          あ、<ruby>忘<rt>わす</rt></ruby>れた<span class="g">かも</span>
        </template>
        <template #translation>
          Oh, I might have forgotten
        </template>
      </GrammarExample>
      <div class="note">
      <div class="note-title">Note:</div>
        Breaking down the word <span class="g">かもしれない</span> itself, we have the question marker か (introduces uncertainty or doubt) and the particle も ("also/even"),
        followed by しれない — the negative potential form of the verb 知る ("しる", to know).
        So <span class="g">かもしれない</span> literally means something like:
        <ul>
          <li>か (if / whether) + も (even) + しれない (cannot know)</li>
          <div class="note-style">→ "Even if that were the case, I can't know for sure"</div>
          <div class="note-style">→ "It might be so / It could be"</div>
        </ul>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Polite Form</div>
        In polite contexts, <span class="g">かもしれない</span> becomes <span class="g">かもしれません</span>. This is used in formal situations or when speaking to someone you don't know well.
        <GrammarExample>
          <template #example>
            <ruby>明日<rt>あした</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby><span class="g">かもしれません</span>
          </template>
          <template #translation>
            It might rain tomorrow
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Expressing "maybe not"</div>
        Even though <span class="g">かもしれない</span> has "not certain" in its meaning, it's not grammatically negative — so to say "maybe not,"
        you just negate the verb or adjective that comes before it.
        <GrammarExample>
          <template #example>
            <ruby>行<rt>い</rt></ruby>かない<span class="g">かもしれない</span>
          </template>
          <template #translation>
            (I) might not go
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>本物<rt>ほんもの</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>じゃない<span class="g">かもしれません</span>
          </template>
          <template #translation>
            They might not be a real teacher
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.note-style {
  margin-left: 8px;
  font-style: italic;
  opacity: 0.8;
}
</style>
