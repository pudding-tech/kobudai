<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teShimau as meta } from "./metadataN4";
  import { teVerb } from "../n5/metadataN5";

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
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">しま<span v-if="!isPolite">う</span><span v-else>います</span></span></div>
      <div v-if="!isPolite">
        <div class="structure-title small">Casual variants</div>
        <div>Verb (<span class="grammar-highlight">て-form</span>) <s class="remove">[て]</s> + <span class="grammar-highlight">ちゃう</span></div>
        <div>Verb (<span class="grammar-highlight">て-form</span>) <s class="remove">[で]</s> + <span class="grammar-highlight">じゃう</span></div>
      </div>
    </template>
    <template #related>
      Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink>
    </template>
    <template #explanation>
      The grammar pattern <span class="g">～てしまう</span> has two main meanings, and which one is intended depends heavily on context. It can mean:
      <ul>
        <li>To do something completely / finish something entirely.</li>
        <li>To do something regrettably, accidentally, or unintentionally.</li>
      </ul>

      In formal or neutral contexts, <span class="g">～てしまう</span> often simply expresses completion of an action, especially when something
      has been thoroughly or finally done.
      <GrammarExample>
        <template #example>
          <ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>ん<span class="g">でしまった</span>
        </template>
        <template #translation>
          I completely finished reading the book
        </template>
      </GrammarExample>

      However, in everyday conversation, this form is frequently used to express regret, mistakes, or unintended actions. This meaning is very common,
      especially with verbs that involve forgetting, losing, breaking, or making a blunder.
      <GrammarExample>
        <template #example>
          <ruby>財布<rt>さいふ</rt></ruby>を<ruby>落<rt>お</rt></ruby>とし<span class="g">てしまいました</span>
        </template>
        <template #translation>
          I regrettably dropped my wallet
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        Even though both meanings are possible, the nuance of regret or unintended consequence is very common in spoken Japanese, so listeners
        will often interpret <span class="g">～てしまう</span> that way unless the context clearly suggests otherwise.
        To avoid confusion:
        <ul>
          <li>Use it with positive or neutral verbs in formal contexts to express completion.</li>
          <li>Expect it to be heard as regretful when used with negative or accident-prone actions.</li>
        </ul>
      </div>

      <div class="section">
        <div class="grammar-title">Casual Variants</div>
        In informal or conversational Japanese, <span class="g">～てしまう</span> often contracts to
        <span class="g">～ちゃう</span>, and <span class="g">～でしまう</span> becomes <span class="g">～じゃう</span>.
        These shortened forms are very common in casual speech. While they still carry the basic
        meaning of completing an action, they almost always imply a sense of regret, surprise, or that the action
        happened unintentionally. Because of this nuance, they're frequently used when talking about accidents,
        mistakes, or things that happened against one's intention.
        <GrammarExample>
          <template #example>
            あ、<ruby>忘<rt>わす</rt></ruby>れ<span class="g">ちゃった</span>！
          </template>
          <template #translation>
            Oh, I completely forgot!
          </template>
          <template #note>
            The nuance is that the speaker forgot something unintentionally or regrettably
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>飲<rt>の</rt></ruby>ん<span class="g">じゃう</span>
          </template>
          <template #translation>
            I will drink it all up (...and might regret it)
          </template>
          <template #note>
            Here, the phrase means 'drink it all up', with an implied nuance that the speaker might regret it later
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
