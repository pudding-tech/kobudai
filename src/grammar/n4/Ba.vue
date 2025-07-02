<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import { ba as meta, causativeVerbs, nara, tara, potentialVerbs, toIf, passiveVerbs, volitionalVerbs } from "./metadataN4";
  import { godan, ichidan, imperativeVerbs } from "../n5/metadataN5";
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
        <div class="structure-title small">Godan verbs</div>
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
        <div class="structure-title small">Ichidan verbs</div>
        <div class="kanji-mb">
          <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight"><span class="h">れ</span>ば</span>
        </div>
        <div class="structure-title small">Irregular verbs</div>
        <div class="kanji-mb">
          <span>する</span> → す<span class="grammar-highlight"><span class="h">れ</span>ば</span>
        </div>
        <div>
          <span><ruby>来<rt>く</rt>る</ruby></span> → <ruby>来<rt>く</rt></ruby><span class="grammar-highlight"><span class="h">れ</span>ば</span>
        </div>
        <div class="structure-title small">Negatives</div>
        <div>Negative verb (あ column) + な<s class="remove">[い]</s><span class="grammar-highlight">ければ</span></div>
        <div>Negative い-adj + くな<s class="remove">[い]</s><span class="grammar-highlight">ければ</span></div>
        <div>Negative noun/な-adj + じゃな<s class="remove">[い]</s><span class="grammar-highlight">ければ</span></div>
      </div>
    </template>
    <template #related>
      <div class="related-mb">Other conditionals:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: nara.slug } }" class="link">{{ nara.title }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: toIf.slug } }" class="link">{{ toIf.title }}</RouterLink></div>
      <div class="related-mb" style="margin-top: 20px">Other verb conjugations:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: godan.slug } }" class="link">{{ godan.title }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ichidan.slug } }" class="link">{{ ichidan.title }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: imperativeVerbs.slug } }" class="link">{{ imperativeVerbs.title }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: potentialVerbs.slug } }" class="link">{{ potentialVerbs.title }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: volitionalVerbs.slug } }" class="link">{{ volitionalVerbs.title }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: passiveVerbs.slug } }" class="link">{{ passiveVerbs.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeVerbs.slug } }" class="link">{{ causativeVerbs.title }}</RouterLink></div>
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
        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">め</span><span class="g">ば</span>
          </div>
          <div class="translation">
            to read → if (...) read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">せ</span><span class="g">ば</span>
          </div>
          <div class="translation">
            to speak → if (...) speak
          </div>
          <div class="example">
            <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby><span class="h">け</span><span class="g">ば</span>
          </div>
          <div class="translation">
            to go → if (...) go
          </div>
          <template #note>
            Conditional verbs (godan)
          </template>
        </GrammarExampleSentences>
        <div class="grammar-subtitle">Ichidan verbs</div>
        You will notice that ichidan verbs conjugate to the <span class="g">ば</span>-form the exact same way as a godan verb ending with る does. Namely, change the る to a れ, then add <span class="g">ば</span>.
        Alternatively, you can also think of it as dropping the る (as normal with ichidan verbs) and adding <span class="h">れ</span><span class="g">ば</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="h">れ</span><span class="g">ば</span>
          </div>
          <div class="translation">
            to eat → if (...) eat
          </div>
          <div class="example">
            <ruby>落<rt>お</rt></ruby>ちる → <ruby>落<rt>お</rt></ruby>ち<span class="h">れ</span><span class="g">ば</span>
          </div>
          <div class="translation">
            to fall → if (...) fall
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="h">れ</span><span class="g">ば</span>
          </div>
          <div class="translation">
            to see → if (...) see
          </div>
          <template #note>
            Conditional verbs (ichidan)
          </template>
        </GrammarExampleSentences>
        <div class="grammar-subtitle">Irregular verbs</div>
        For the <span class="g">ば</span>-form of the two irregular verbs, we conjugate them just as if they were godan verbs.
        <GrammarExampleSentences>
          <div class="example">
            <span>する</span> → す<span class="h">れ</span><span class="g">ば</span>
          </div>
          <div class="translation">
            to do → if (...) do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>く</rt></ruby><span class="h">れ</span><span class="g">ば</span>
          </div>
          <div class="translation">
            to come → if (...) come
          </div>
          <template #note>
            Conditional verbs (irregular)
          </template>
        </GrammarExampleSentences>
        <div class="grammar-subtitle">い-adjectives</div>
        For い-adjectives, drop the final い and add <span class="g">ければ</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>高<rt>たか</rt></ruby>い → <ruby>高<rt>たか</rt></ruby><span class="g">ければ</span>
          </div>
          <div class="translation">
            expensive → if (...) expensive
          </div>
          <div class="example">
            <ruby>安<rt>やす</rt></ruby>い → <ruby>安<rt>やす</rt></ruby><span class="g">ければ</span>
          </div>
          <div class="translation">
            cheap → if (...) cheap
          </div>
          <template #note>
            With い-adjectives
          </template>
        </GrammarExampleSentences>
        <div class="grammar-subtitle">な-adjectives and nouns</div>
        For な-adjectives and nouns, use the plain form followed by <span class="g">ならば</span> or <span class="g">であれば</span>.
        <span class="g">であれば</span> is more formal and commonly used in writing or professional contexts,
        while <span class="g">ならば</span> also has a formal tone but sounds a bit more literary or old-fashioned. Both can feel somewhat stiff in casual conversation.
        For な-adjectives and nouns specifically, だったら from <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink>
        is more common than the <span class="g">～ば</span> form.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>便利<rt>べんり</rt></ruby> → <ruby>便利<rt>べんり</rt></ruby><span class="g">ならば</span>
          </div>
          <div class="translation">
            convenient → if (...) convenient
          </div>
          <div class="example">
            <ruby>学生<rt>がくせい</rt></ruby> → <ruby>学生<rt>がくせい</rt></ruby><span class="g">であれば</span>
          </div>
          <div class="translation">
            student → if (...) student
          </div>
          <template #note>
            With な-adjectives and nouns
          </template>
        </GrammarExampleSentences>

        <div class="section">
          <div class="grammar-title">Using ～ば with Negatives</div>
          To make the negative ～ば form of adjectives, verbs, and nouns, you use the negative form and drop the い from ない, then add <span class="g">ければ</span>.
          <GrammarExampleSentences>
            <div class="example">
              <ruby>食<rt>た</rt></ruby>べない → <ruby>食<rt>た</rt></ruby>べな<span class="g">ければ</span>
            </div>
            <div class="translation">
              to not eat → if (...) not eat
            </div>
            <div class="example">
              <ruby>高<rt>たか</rt></ruby>くない → <ruby>高<rt>たか</rt></ruby>くな<span class="g">ければ</span>
            </div>
            <div class="translation">
              not expensive → if (...) not expensive
            </div>
            <div class="example">
              <ruby>学生<rt>がくせい</rt></ruby>じゃない → <ruby>学生<rt>がくせい</rt></ruby>じゃな<span class="g">ければ</span>
            </div>
            <div class="translation">
              not a student → if (...) not a student
            </div>
            <template #note>
              Negative conditionals
            </template>
          </GrammarExampleSentences>
        </div>
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
