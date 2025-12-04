<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { tai as meta } from "./metadataN5";
  import { gaHoshii, teHoshii } from "../n4/metadataN4";
  
  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div>Verb (ます stem) + <span class="grammar-highlight">たい</span><span v-if="isPolite"> + です</span></div>
      <div class="structure-title small">Talking about someone else's desire (3rd person)</div>
      <div>Verb (ます stem) + <span class="grammar-highlight">たが<span v-if="isPolite">ります</span><span v-else>る</span></span></div>
    </template>
    <template #related>
      <div class="related-mb">See also:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: teHoshii.slug } }" class="link">{{ teHoshii.title }}</RouterLink> (for what you want someone else to do)</div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: gaHoshii.slug } }" class="link">{{ gaHoshii.title }}</RouterLink> (for what you want to have)</div>
    </template>
    <template #explanation>
      The <span class="g">～たい</span> form is used when you want to do something. It attaches to the stem of a verb (the ます-stem),
      and allows you to say things like "I want to eat" or "I want to go".
      <GrammarExample>
        <template #example>
          <ruby>行<rt>い</rt></ruby>き<span class="g">たい</span>
        </template>
        <template #translation>
          I want to go
        </template>
      </GrammarExample>

      When you add <span class="g">たい</span> to a verb, it becomes an い-adjective. This means you can conjugate it like any other い-adjective.
      <ul class="example-list">
        <li><ruby>食<rt>た</rt></ruby>べ<span class="g">たくない</span> → "Don't want to eat"</li>
        <li><ruby>泳<rt>およ</rt></ruby>ぎ<span class="g">たかった</span> → "Wanted to swim"</li>
        <li><ruby>行<rt>い</rt></ruby>き<span class="g">たくなかった</span> → "Didn't want to go"</li>
      </ul>
      This also goes for the polite form, which is made by adding です to the end of the sentence.
      <GrammarExample>
        <template #example>
          この<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby><span class="g">たくない</span>です
        </template>
        <template #translation>
          I don't want to watch this movie
        </template>
        <template #note>
          Negative polite form
        </template>
      </GrammarExample>

      Because <span class="g">～たい</span> turns the verb into an adjective, the object of the verb is often marked with が instead of を.
      However, using を is also common in everyday Japanese, especially with concrete direct actions.
      <GrammarExample>
        <template #example>
          <ruby>寿司<rt>すし</rt></ruby>が<ruby>食<rt>た</rt></ruby>べ<span class="g">たい</span>
        </template>
        <template #translation>
          I want to eat sushi
        </template>
        <template #note>
          Both が or を can be used to mark the object of the verb
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-title">Expressing What Others Want to Do</div>
        Japanese has a subtle but important cultural rule: you generally cannot speak directly about someone else's internal emotional state, including what they "want to do".
        So, when talking about a third person's desire, you cannot use <span class="g">〜たい</span> directly. Instead you use the auxiliary verb:
        <ul>
          <li><span class="g">〜たがる</span></li>
        </ul>
        Which means "to appear to want to" or "to seem eager to".
        Since <span class="g">たがる</span> is a godan verb, it can be conjugated like any other godan verb. The most natural form for everyday use is the 〜ている progressive form.
        <GrammarExample>
          <template #example>
            <ruby>友<rt>とも</rt></ruby>だちは<ruby>帰<rt>かえ</rt></ruby>り<span class="g">たがっている</span>
          </template>
          <template #translation>
            My friend wants to go home
          </template>
          <template #note>
            Literally, "My friend seems to want to go home"
          </template>
        </GrammarExample>
        This way of speaking gives some emotional distance, which fits the Japanese tendency to avoid assuming the feelings of others.

        <div class="note">
          <div class="note-title">Note:</div>
          Note that <span class="g">たがる</span> is only used to describe the desires of someone else, not when speaking to the person or asking them directly.
        </div>
        <GrammarExample>
          <template #example>
            この<ruby>店<rt>みせ</rt></ruby>で<ruby>何<rt>なに</rt></ruby>か<ruby>買<rt>か</rt></ruby>い<span class="g">たい</span>？
          </template>
          <template #translation>
            Do you want to buy something at this store?
          </template>
          <template #note>
            Note: The direct object marker is often dropped in casual conversation
          </template>
        </GrammarExample>
      </div>

      <div class="section">
         If someone says they want to do something, it is also possible to say what they desire by using <span class="g">〜たい</span> together with と言っている.
         This is because you're reporting their own words, not assuming their feelings.
        <GrammarExample>
          <template #example>
            <ruby>田中<rt>たなか</rt></ruby>さんは<ruby>日本<rt>にほん</rt></ruby>に<ruby>行<rt>い</rt></ruby>き<span class="g">たい</span>と<ruby>言<rt>い</rt></ruby>っていた
          </template>
          <template #translation>
            Mr. Tanaka said he wants to go to Japan
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
