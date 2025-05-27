<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { sou as meta } from "./metadataN4";
  import { adverbs } from "@/grammar/n5/metadataN5";

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
      <div>い-adjective <s class="remove">[い]</s> + <span class="grammar-highlight">そう</span> + <span v-if="isPolite">です</span><span v-else>だ</span></div>
      <div>な-adjective + <span class="grammar-highlight">そう</span> + <span v-if="isPolite">です</span><span v-else>だ</span></div>
      <div>Verb (ます stem) + <span class="grammar-highlight">そう</span> + <span v-if="isPolite">です</span><span v-else>だ</span></div>
      <div class="structure-title">Negative</div>
      <div>い-adjective (negative) <s class="remove">[い]</s> + <span class="h">さ</span> + <span class="grammar-highlight">そう</span> + <span v-if="isPolite">です</span><span v-else>だ</span></div>
      <div>な-adjective (negative) <s class="remove">[い]</s> + <span class="h">さ</span> + <span class="grammar-highlight">そう</span> + <span v-if="isPolite">です</span><span v-else>だ</span></div>
      <div>Verb (negative) <s class="remove">[い]</s> + <span class="grammar-highlight">そう</span> + <span v-if="isPolite">です</span><span v-else>だ</span></div>
      <div class="structure-title">Exception</div>
      <div>いい → よい <s class="remove">[い]</s> + <span class="h">さ</span> + そう + <span v-if="isPolite">です</span><span v-else>だ</span></div>
    </template>
    <template #related>
      <div>Other ways of expressing "looks like":</div>
      <div>- みたい</div>
      Do not confuse with the other そう, which implies hearsay.
    </template>
    <template #explanation>
      The grammar pattern <span class="g">～そう</span> is used to express what something looks like based on visual or immediate impressions.
      In English, it can be translated as "looks like", "seems like", or "appears to be".
      In polite contexts, <span class="g">～そう</span> is followed by です. In casual conversation, it's technically followed by だ,
      although だ is often dropped in everyday use.
      <br><br>
      To use <span class="g">～そう</span>, you can attach it to an い-adjective, な-adjective, or a verb stem.
      <ul style="padding-right: 40px;">
        <li>For い-adjectives: Remove the final い and attach <span class="g">そう</span>.</li>
        <GrammarExample>
          <template #example>
            <ruby>楽<rt>たの</rt></ruby>しい → <ruby>楽<rt>たの</rt></ruby>し<span class="g">そう</span>だ
          </template>
          <template #translation>
            Looks fun
          </template>
        </GrammarExample>
        <li>For な-adjectives: Attach <span class="g">そう</span> directly.</li>
        <GrammarExample>
          <template #example>
            <div><ruby>静<rt>しず</rt></ruby>か → <ruby>静<rt>しず</rt></ruby>か<span class="g">そう</span></div>
          </template>
          <template #translation>
            Seems quiet
          </template>
          <template #note>
            だ is often dropped in casual conversation
          </template>
        </GrammarExample>
        <li>For verbs: Use the continuative verb stem (ます stem) and attach <span class="g">そう</span>.</li>
        <GrammarExample>
          <template #example>
            <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ります → <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>り<span class="g">そう</span>です
          </template>
          <template #translation>
            Looks like it's going to rain
          </template>
          <template #note>
            です added for politeness
          </template>
        </GrammarExample>
      </ul>
      Although <span class="g">～そう</span> is often used when something looks a certain way, it's not limited to just visual impressions.
      The key idea is that <span class="g">～そう</span> expresses a conclusion made without solid proof. For example, you might say a cookie is おいしそう ("looks delicious") before tasting it — you're making a guess based on how it appears.
      But after tasting it, you'd say おいしい, because you now have direct evidence. However, for adjectives where appearance is the deciding factor — like きれい ("pretty") — we don't typically use <span class="g">～そう</span>.
      If something looks pretty, we just say きれい, since the appearance alone is enough to make that judgment.
      <div class="note mt">Note:</div>
      いい is an exception from the general rule. It becomes よい when conjugated, then you remove the い and add <span class="h">さ</span> before <span class="g">そう</span>.
      <GrammarExample>
        <template #example>
          いい → <ruby>良<rt>よ</rt></ruby>さ<span class="g">そう</span>
        </template>
        <template #translation>
          Looks good
        </template>
      </GrammarExample>
      <div class="note mt">Caution:</div>
      A common mistake is using the phrase かわいそう, which one might think means "looks cute". However, かわいそう is a word in itself,
      and actually means "pitiful" or "poor thing". It is used to express sympathy or compassion for someone or something that is in a difficult situation.
      可愛い (かわいい, "cute") is as discussed above based on appearence, and thus does not use <span class="g">～そう</span> in this context.

      <div class="section">
        <div class="grammar-subtitle">Negative</div>
        <span class="g">～そう</span> can also be used with the negative forms, to express "doesn't look like" or "doesn't seem like".
        <ul style="padding-right: 40px;">
          <li>For negative い-adjectives: Remove the final い from くない, then add <span class="h">さ</span> and <span class="g">そう</span>.</li>
          <GrammarExample>
            <template #example>
              <ruby>美味<rt>おい</rt></ruby>しくない → <ruby>美味<rt>おい</rt></ruby>しくなさ<span class="g">そう</span>
            </template>
            <template #translation>
              Doesn't look tasty
            </template>
          </GrammarExample>
          <li>For negative な-adjectives: Remove the final い from じゃない, then add <span class="h">さ</span> and <span class="g">そう</span>.</li>
          <GrammarExample>
            <template #example>
              <ruby>元気<rt>げんき</rt></ruby>じゃない → <ruby>元気<rt>げんき</rt></ruby>じゃなさ<span class="g">そう</span>
            </template>
            <template #translation>
              Doesn't seem healthy
            </template>
          </GrammarExample>
          <li>For negative verbs: Remove the final い from ない, then add <span class="g">そう</span>.</li>
          <GrammarExample>
            <template #example>
              <ruby>来<rt>こ</rt></ruby>ない → <ruby>来<rt>こ</rt></ruby>な<span class="g">そう</span>
            </template>
            <template #translation>
              Doesn't look like (someone) will come
            </template>
          </GrammarExample>
        </ul>
        Another way to express "doesn't look like" is by using the positive versions, and putting the negative on the <span class="g">～そう</span> itself.
        This way is grammatically easier for learners, but both ways are common in everyday use.
        <GrammarExample>
          <template #example>
            <ruby>美味<rt>おい</rt></ruby>し<span class="g">そう</span>じゃない
          </template>
          <template #translation>
            Doesn't look tasty
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Modifying nouns and verbs</div>
        The adjective + <span class="g">～そう</span> combination can also be used to modify nouns and verbs.
        <span class="g">そう</span> is itself a な-adjective, so it can be used to modify nouns just like any other な-adjective.
        <GrammarExample>
          <template #example>
            <ruby>美味<rt>おい</rt></ruby>し<span class="g">そう</span>なケーキ
          </template>
          <template #translation>
            A cake that looks delicious
          </template>
          <template #note>
            そう is used as a な-adjective modifying a noun — hence the な
          </template>
        </GrammarExample>
        Similarly, when modifying verbs, we use the adverbial form of a な-adjective, which is formed by attaching に.
        <GrammarExample>
          <template #example>
            <ruby>眠<rt>ねむ</rt></ruby><span class="g">そう</span>に<ruby>歩<rt>ある</rt></ruby>く
          </template>
          <template #translation>
            Walk as if sleepy
          </template>
          <template #note>
            Literally: "Walk in a way that seems sleepy"
          </template>
        </GrammarExample>
        See <RouterLink :to="{ name: 'grammarLoader', params: { slug: adverbs.slug } }" class="link">{{ adverbs.title + " 「" + adverbs.subtitle }}」</RouterLink> for more details on adverbs.
      </div>

      <div class="note mt">Caution:</div>
      Be careful not to confuse <span class="g">～そう</span> with <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'そうだ' } }" class="link">～そうだ</RouterLink>, which is used to express hearsay or information received from someone else.
      <GrammarExample>
        <template #example>
          <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るそう
        </template>
        <template #translation>
          <i>I heard it will rain</i>
        </template>
        <template #note>
           The grammatical structure is different in this meaning
        </template>
      </GrammarExample>
      To avoid confusion, pay attention to whether you're making a guess based on appearance or reporting information.
    </template>
  </GrammarStructure>
</template>

<style scoped>
.structure-title {
  font-size: 0.9em;
  margin-top: 8px;
}
</style>
