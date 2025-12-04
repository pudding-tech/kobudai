<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { teAdjectiveNoun as meta, adjectivesI, adjectivesNa, temoii, teVerb } from "./metadataN5";
  import { teSumimasen, teMo } from "../n4/metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div>い-adjective <s class="remove">[い]</s> + <span class="grammar-highlight">くて</span></div>
      <div>な-adjective + <span class="grammar-highlight">で</span></div>
      <div>Noun + <span class="grammar-highlight">で</span></div>
      <div class="structure-title small">Irregular</div>
      <div>いい → よ<span class="grammar-highlight">くて</span></div>
      <div class="structure-title small">Negatives</div>
      <div>～ない → ～な<span class="grammar-highlight">くて</span></div>
    </template>
    <template #related>
      <div class="related-mb">
        Also see て-form of verbs:
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Further usage of the て-form:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: temoii.slug } }" class="link">{{ temoii.title }}</RouterLink>
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teSumimasen.slug } }" class="link">{{ teSumimasen.title }}</RouterLink>
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teMo.slug } }" class="link">{{ teMo.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Adjectives:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: adjectivesI.slug } }" class="link">{{ adjectivesI.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: adjectivesNa.slug } }" class="link">{{ adjectivesNa.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <div class="grammar-title">The て-Form of Adjectives and Nouns</div>
      While the て-form is most commonly associated with verbs, it also plays an important role in connecting adjectives and nouns. Like its verb counterpart,
      the て-form of adjectives and nouns is often used to connect ideas smoothly within a sentence — especially when listing multiple qualities or states.
      <br><br>
      You can use the て-form of adjectives and nouns to list multiple characteristics or states in a sentence, just as you would link multiple actions with verb て-forms.
      <GrammarExample>
        <template #example>
          この<ruby>店<rt>みせ</rt></ruby>は<ruby>安<rt>やす</rt></ruby><span class="g">くて</span>、<ruby>便利<rt>べんり</rt></ruby>です
        </template>
        <template #translation>
          This store is cheap and convenient
        </template>
      </GrammarExample>
      The first adjective becomes the て-form, and the second adjective completes the sentence.
      The て-form helps express multiple characteristics or connected situations in a single sentence without repeating subjects.

      <div class="note">
        <div class="note-title">Note:</div>
        The tense and formality of the entire sentence are carried by the final word — the て-form does not indicate tense on its own.
      </div>

      <div class="section">
        <div class="grammar-subtitle">い-Adjectives</div>
        To form the て-form of an い-adjective, drop the final い and replace it with <span class="g">くて</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>高<rt>たか</rt></ruby>い → <ruby>高<rt>たか</rt></ruby><span class="g">くて</span>
          </div>
          <div class="translation">
            tall → tall (and...)
          </div>
          <div class="example">
            <ruby>冷<rt>つめ</rt></ruby>たい → <ruby>冷<rt>つめ</rt></ruby>た<span class="g">くて</span>
          </div>
          <div class="translation">
            cold (to the touch) → cold (and...)
          </div>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">な-Adjectives and Nouns</div>
        The て-forms for な-adjectives and nouns are made by adding <span class="g">で</span> after the adjective or noun.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>静<rt>しず</rt></ruby>か → <ruby>静<rt>しず</rt></ruby>か<span class="g">で</span>
          </div>
          <div class="translation">
            quiet → quiet (and...)
          </div>
          <div class="example">
            <ruby>有名<rt>ゆうめい</rt></ruby> → <ruby>有名<rt>ゆうめい</rt></ruby><span class="g">で</span>
          </div>
          <div class="translation">
            famous → famous (and...)
          </div>
        </GrammarExampleSentences>
        <GrammarExampleSentences>
          <div class="example">
            <ruby>学生<rt>がくせい</rt></ruby> → <ruby>学生<rt>がくせい</rt></ruby><span class="g">で</span>
          </div>
          <div class="translation">
            student → (is a) student (and...)
          </div>
          <div class="example">
            <ruby>歌手<rt>かしゅ</rt></ruby> → <ruby>歌手<rt>かしゅ</rt></ruby><span class="g">で</span>
          </div>
          <div class="translation">
            singer → (is a) singer (and...)
          </div>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">With Negatives</div>
        The て-form can also be used with negative adjectives and nouns, although this is less common than with verbs.
        When used this way, the て-form typically connects ideas, shows contrast, or adds descriptive information.
        <br><br>
        To form the て-form of a negative い-adjective, conjugate the adjective into its negative form (～くない),
        then replace the final い with <span class="g">くて</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>高<rt>たか</rt></ruby>くない → <ruby>高<rt>たか</rt></ruby>くな<span class="g">くて</span>
          </div>
          <div class="translation">
            not tall → not tall (and...)
          </div>
        </GrammarExampleSentences>
        For negative な-adjectives and nouns, the negative form uses じゃない (or ではない in more formal speech).
        To make the て-form, replace the final い with <span class="g">くて</span>, just like with い-adjectives.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>静<rt>しず</rt></ruby>かじゃない → <ruby>静<rt>しず</rt></ruby>かじゃな<span class="g">くて</span>
          </div>
          <div class="translation">
            not quiet → not quiet (and...)
          </div>
        </GrammarExampleSentences>
        This form is often used to contrast two facts, soften a correction, or build compound sentences
        where the first clause describes a negative state or condition.
        <GrammarExample>
          <template #example>
            <ruby>彼<rt>かれ</rt></ruby>は<ruby>医者<rt>いしゃ</rt></ruby>じゃな<span class="g">くて</span>、<ruby>看護師<rt>かんごし</rt></ruby>です
          </template>
          <template #translation>
            He's not a doctor — he's a nurse
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
