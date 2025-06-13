<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { shi as meta } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Reason + <span class="grammar-highlight">し</span> + reason + <span class="grammar-highlight">し</span> + situation</div>
      <div class="structure-inner">
        <div>Verb + <span class="grammar-highlight">し</span></div>
        <div>い-adjective + <span class="grammar-highlight">し</span></div>
        <div>な-adjective + <span class="grammar-highlight">だし</span></div>
        <div>Noun + <span class="grammar-highlight">だし</span></div>
      </div>
    </template>
    <template #related>
      Other ways of giving reasons:
      <div>- から</div>
      <div>- ので</div>
    </template>
    <template #explanation>
      The <span class="g">し</span> form in Japanese is a versatile grammatical structure used to list multiple reasons or justifications.
      When a verb, adjective, or noun clause is followed by <span class="g">し</span>, the clause behaves grammatically as if it were a predicate on its own.
      This makes it possible to stack multiple reasons together seamlessly, unlike other common structures for giving a reason for something.
      <br><br>
      To use <span class="g">し</span>, simply conjugate the verb, adjective, or noun clause as follows:
      <ul style="padding-right: 40px;">
        <li>For verbs: Attach し after the plain form.</li>
        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べる<span class="g">し</span>
          </div>
          <div class="translation">
            to eat → to eat, and...
          </div>
          <template #note>
            Using し with verbs
          </template>
        </GrammarExampleSentences>
        <li>For い-adjectives: Attach し after the plain form.</li>
        <GrammarExampleSentences>
          <div class="example">
            <ruby>安<rt>やす</rt></ruby>い → <ruby>安<rt>やす</rt></ruby>い<span class="g">し</span>
          </div>
          <div class="translation">
            cheap → cheap, and...
          </div>
          <template #note>
            Using し with い-adjectives
          </template>
        </GrammarExampleSentences>
        <li>For な-adjectives and nouns: Attach だし after the plain form.</li>
        <GrammarExampleSentences>
          <div class="example">
            <ruby>静<rt>しず</rt></ruby>か → <ruby>静<rt>しず</rt></ruby>か<span class="g">だし</span>
          </div>
          <div class="translation">
            quiet → quiet, and...
          </div>
          <div class="example">
            <ruby>学生<rt>がくせい</rt></ruby> → <ruby>学生<rt>がくせい</rt></ruby><span class="g">だし</span>
          </div>
          <div class="translation">
            student → student, and...
          </div>
          <template #note>
            Using し with な-adjectives and nouns
          </template>
        </GrammarExampleSentences>
      </ul>
      <div class="note">
        <div class="note-title">Note:</div>
        While <span class="g">し</span> should technically be used with the plain form of the verb, adjective, or noun, it is not uncommon to see it used with the polite forms as well.
      </div>

      <div class="section">
        <div class="grammar-subtitle">Usage</div>
        This structure is particularly useful for expressing multiple reasons or adding a sense of "and also" to your statements. For example:
        <GrammarExample>
          <template #example>
            このレストランは<ruby>安<rt>やす</rt></ruby>い<span class="g">し</span>、<ruby>美味<rt>おい</rt></ruby>しい<span class="g">し</span>、よくここで<ruby>食<rt>た</rt></ruby>べます
          </template>
          <template #translation>
            This restaurant is cheap, and tasty, so I often eat here
          </template>
        </GrammarExample>
        <br>
        Furthermore, <span class="g">し</span> not only allows you to list reasons but also conveys a tone of justification or emphasis, making it a key tool for more nuanced expressions.
        Compare these two sentences:
        <GrammarExample>
          <template #example>
            その<ruby>映画<rt>えいが</rt></ruby>は<ruby>面白<rt>おもしろ</rt></ruby>くて<ruby>泣<rt>な</rt></ruby>けておすすめです
          </template>
          <template #translation>
            That movie is interesting, tear-jerking, and recommended
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            その<ruby>映画<rt>えいが</rt></ruby>は<ruby>面白<rt>おもしろ</rt></ruby>い<span class="g">し</span>、<ruby>泣<rt>な</rt></ruby>ける<span class="g">し</span>、おすすめです
          </template>
          <template #translation>
            That movie is interesting and tear-jerking, so I recommend it
          </template>
        </GrammarExample>
        The first sentence, using the <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'くて' } }" class="link">くて</RouterLink> construction, feels more objective, presenting a straightforward list of qualities. The second sentence, which uses <span class="g">し</span>, carries a softer, more subjective tone — as if the speaker is gently justifying their recommendation.
        In this way, <span class="g">し</span> goes beyond simply listing things; it opens a window into the speaker’s thoughts and emotions, adding nuance to what they say and why they feel that way.
        <br><br>
        You can also use <span class="g">し</span> with only one stated 'reason'. Unlike other similar grammatical structures, this usage implies that the mentioned reason is just one of many possible reasons,
        even if the others are not explicitly stated. This gives the sentence an open-ended or suggestive nuance.
        <GrammarExample>
          <template #example>
            この<ruby>店<rt>みせ</rt></ruby>は<ruby>安<rt>やす</rt></ruby>い<span class="g">し</span>、よく行く
          </template>
          <template #translation>
            This store is cheap (among other things), so I often go there
          </template>
          <template #note>
            Usage of a singular し implies there are other reasons as well
          </template>
        </GrammarExample>
        <br>
        The <span class="g">し</span> structure doesn't always have to follow the patterns we've seen so far. It's also possible to flip the sentence, presenting the situation first, followed by one or more reasons introduced with <span class="g">し</span>.
        This is very natural in Japanese, especially in conversation.
        <GrammarExample>
          <template #example>
            <ruby>今日<rt>きょう</rt></ruby>は<ruby>行<rt>い</rt></ruby>かない。<ruby>疲<rt>つか</rt></ruby>れている<span class="g">し</span>、<ruby>雨<rt>あめ</rt></ruby>も<ruby>降<rt>ふ</rt></ruby>っている<span class="g">し</span>
          </template>
          <template #translation>
            I'm not going today. I'm tired, and it's raining too.
          </template>
          <template #note>
            Here the situation or result comes first, and the reasons follow.
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
