<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import { ba as meta, nara, tara, potentialVerbs, volitionalVerbs } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Sentence 1 + <span class="grammar-highlight">～ば</span> + Sentence 2</div>
      <div class="structure-inner">
        <div>い-adjective <s class="remove">[い]</s> + <span class="grammar-highlight">ければ</span></div>
        <div>な-adjective + <span class="grammar-highlight">ならば</span> or <span class="grammar-highlight">であれば</span></div>
        <div>Noun + <span class="grammar-highlight">ならば</span> or <span class="grammar-highlight">であれば</span></div>
        <div class="structure-title small top">Godan verbs</div>
        <div class="kanji-mb">
          <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">え</span>ば</span>
        </div>
        <div class="kanji-mb">
          <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt></ruby><span class="grammar-highlight"><span class="h">て</span>ば</span>
        </div>
        <div class="kanji-mb">
          <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt></ruby><span class="grammar-highlight"><span class="h">れ</span>ば</span>
        </div>
        <div class="kanji-mb">
          <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt></ruby><span class="grammar-highlight"><span class="h">め</span>ば</span>
        </div>
        <div class="kanji-mb">
          <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt></ruby><span class="grammar-highlight"><span class="h">べ</span>ば</span>
        </div>
        <div class="kanji-mb">
          <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt></ruby><span class="grammar-highlight"><span class="h">ね</span>ば</span>
        </div>
        <div class="kanji-mb">
          <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">け</span>ば</span>
        </div>
        <div class="kanji-mb">
          <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt></ruby><span class="grammar-highlight"><span class="h">げ</span>ば</span>
        </div>
        <div class="kanji-mb">
          <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt></ruby><span class="grammar-highlight"><span class="h">せ</span>ば</span>
        </div>
        <div class="structure-title small top">Ichidan verbs</div>
        <div class="kanji-mb">
          <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">れば</span>
        </div>
        <div class="structure-title small top">Verb Exceptions</div>
        <div class="kanji-mb">
          <span>する</span> → <span class="grammar-highlight">すれば</span>
        </div>
        <div>
          <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>く</rt></ruby>れば</span>
        </div>
        <div class="structure-title small top">Negatives</div>
        <div>Negative verb (あ column) + な<s class="remove">[い]</s><span class="grammar-highlight">ければ</span></div>
        <div>Negative い-adj + くな<s class="remove">[い]</s><span class="grammar-highlight">ければ</span></div>
        <div>Negative noun/な-adj + じゃな<s class="remove">[い]</s><span class="grammar-highlight">ければ</span></div>
      </div>
    </template>
    <template #related>
      <div class="related-mb">Other conditionals:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: nara.slug } }" class="link">{{ nara.title }}</RouterLink></div>
      <div class="related-mb" style="margin-top: 20px">Other verb conjugations:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: potentialVerbs.slug } }" class="link">{{ potentialVerbs.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: volitionalVerbs.slug } }" class="link">{{ volitionalVerbs.title }}</RouterLink></div>
    </template>
    <template #explanation>
      The <span class="g">～ば</span> form is another way to say "if" in Japanese. It's a more formal or neutral-sounding conditional, and it tends to focus on natural results, general truths, or logical outcomes.
      You'll often see it in written Japanese, instructions, or polite conversation.
      <br><br>
      Think of it like saying: "If X happens, then Y will naturally follow." or "Whenever X happens, Y tends to happen."
      <GrammarExample>
        <template #example>
          <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>れ<span class="g">ば</span>、<ruby>濡<rt>ぬ</rt></ruby>れる
        </template>
        <template #translation>
          If it rains, you will get wet
        </template>
        <template #note>
          There is a natural consequence of getting wet when it rains
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-title">How to Form the ～ば Conditional</div>
        <div class="grammar-subtitle">Godan verbs</div>
        For godan verbs, let's take a look at the godan five-step chart again.
        Move down on the chart, from the う row to the え row, to find the stem for the conditional form.
        You'll notice that it's the same stem as for the imperative and potential forms.
        <div class="chart">
          <GodanChart :selected-row="4" :word-selection="1" :show-word-selection="false" />
        </div>
        Once we have the conditional stem, simply add <span class="g">ば</span> to the end.
        <GrammarExample>
          <template #example>
            <div><ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">め</span><span class="g">ば</span></div>
            <div><ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">せ</span><span class="g">ば</span></div>
            <div><ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">け</span><span class="g">ば</span></div>
          </template>
          <template #note>
            Conditional verbs (godan)
          </template>
        </GrammarExample>
        <div class="grammar-subtitle">Ichidan verbs</div>
        For ichidan verbs, forming the conditional is done by replacing the final る of the verb with <span class="g">れば</span>.
        <GrammarExample>
          <template #example>
            <div><ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">れば</span></div>
            <div><ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="g">れば</span></div>
            <div><ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">れば</span></div>
          </template>
          <template #note>
            Conditional verbs (ichidan)
          </template>
        </GrammarExample>
        <div class="grammar-subtitle">い-adjectives</div>
        For い-adjectives, drop the final い and add <span class="g">ければ</span>.
        <GrammarExample>
          <template #example>
            <div><ruby>高<rt>たか</rt></ruby>い → <ruby>高<rt>たか</rt></ruby><span class="g">ければ</span></div>
            <div><ruby>安<rt>やす</rt></ruby>い → <ruby>安<rt>やす</rt></ruby><span class="g">ければ</span></div>
          </template>
          <template #note>
            With い-adjectives
          </template>
        </GrammarExample>
        <div class="grammar-subtitle">な-adjectives and nouns</div>
        For な-adjectives and nouns, use the plain form followed by <span class="g">ならば</span> or <span class="g">であれば</span>.
        <span class="g">であれば</span> is more formal and commonly used in writing or professional contexts,
        while <span class="g">ならば</span> also has a formal tone but sounds a bit more literary or old-fashioned. Both can feel somewhat stiff in casual conversation.
        <GrammarExample>
          <template #example>
            <div><ruby>便利<rt>べんり</rt></ruby> → <ruby>便利<rt>べんり</rt></ruby><span class="g">ならば</span></div>
            <div><ruby>学生<rt>がくせい</rt></ruby> → <ruby>学生<rt>がくせい</rt></ruby><span class="g">であれば</span></div>
          </template>
          <template #note>
            With な-adjectives and nouns
          </template>
        </GrammarExample>
        <div class="grammar-subtitle">Using ～ば with negatives</div>
        To make the negative ～ば form of adjectives, verbs, and nouns, you use the negative form and drop the い from ない, then add <span class="g">ければ</span>.
        <GrammarExample>
          <template #example>
            <div><ruby>食<rt>た</rt></ruby>べない → <ruby>食<rt>た</rt></ruby>べな<span class="g">ければ</span></div>
            <div><ruby>高<rt>たか</rt></ruby>くない → <ruby>高<rt>たか</rt></ruby>くな<span class="g">ければ</span></div>
            <div><ruby>学生<rt>がくせい</rt></ruby>じゃない → <ruby>学生<rt>がくせい</rt></ruby>じゃな<span class="g">ければ</span></div>
          </template>
          <template #note>
            Negative conditionals
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-title">～ば Compared to ～たら and なら</div>
         While <span class="g">～ば</span> is used to express a more neutral or logical "if," often describing general truths,
        cause-effect relationships, or expected outcomes, <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink>
        focuses more on what happens after a specific condition becomes true.
        Meanwhile, <RouterLink :to="{ name: 'grammarLoader', params: { slug: nara.slug } }" class="link">{{ nara.title }}</RouterLink>
        is often used to react to something assumed or known — such as what someone just said — and makes suggestions or comments based on that assumption.
        <ul>
          <li><span class="g">～ば</span> = "If something is (generally) true…" → States a natural or expected result</li>
          <li>～たら = "If/when something happens…" → Describes what will (or might) happen next</li>
          <li>なら = "If it's true that…" → Reacts to or comments on a situation</li>
        </ul>
        One notable feature of <span class="g">～ば</span> is its focus on logical relationships rather than time. It doesn't necessarily imply that the second action
        comes after the first — it's more about what would naturally follow.
        By contrast, with <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink>,
        the second action typically follows the first in time, making it suitable for sequences of events.
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: nara.slug } }" class="link">{{ nara.title }}</RouterLink>, on the other hand,
        doesn't require a time relationship at all — it's used to make a statement based on a premise that's accepted or assumed to be true.
        <br><br>
        <span class="g">～ば</span> tends to sound a bit more formal or literary and is often found in written Japanese, official statements,
        or more logical explanations. <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink>
        is more common in everyday conversation and casual speech, especially when describing events unfolding in time.
        <GrammarExample>
          <template #example>
            <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>れ<span class="g">ば</span>、<ruby>出<rt>で</rt></ruby>かけない
          </template>
          <template #translation>
            If it rains, I won't go out
          </template>
          <template #note>
            Neutral and logical. A general cause-effect relationship.
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ったら、<ruby>出<rt>で</rt></ruby>かけない
          </template>
          <template #translation>
            If it rains, I won't go out
          </template>
          <template #note>
            Emphasizes that the action (not going out) happens <i>after</i> the condition (rain starts)
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るなら、<ruby>出<rt>で</rt></ruby>かけない
          </template>
          <template #translation>
            If it's (true that) it's going to rain, I won't go out
          </template>
          <template #note>
            This assumes that the speaker is reacting to information — maybe someone just said it might rain. It's based on accepting that premise and making a comment or decision accordingly.
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
