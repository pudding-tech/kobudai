<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import RelatedGrammarList from "@/components/RelatedGrammarList.vue";
  import GodanChart from "@/grammar/common/GodanChart.vue";
  import { causativePassiveVerbs as meta, ba, causativeVerbs, causativePassiveSentences, passiveVerbs, potentialVerbs, volitionalVerbs } from "./metadataN4";
  import { godan, godanNegative, godanNonPast, godanPast, godanPastNegative, ichidan, ichidanNegative, ichidanNonPast, ichidanPast, ichidanPastNegative, imperativeVerbs, teVerb } from "../n5/metadataN5";

  const isPolite = ref(false);
  const related: { slug: string, title: string }[] = [godan, ichidan, godanNonPast, ichidanNonPast, godanNegative, ichidanNegative, godanPast, ichidanPast,
    godanPastNegative, ichidanPastNegative, teVerb, imperativeVerbs, potentialVerbs, volitionalVerbs, { slug: ba.slug, title: "Conditional verb (～ば)" }, causativeVerbs, passiveVerbs];
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div class="structure-title top">
        Godan
      </div>
      <div class="kanji-mb">
        <ruby>買<rt>か</rt>う</ruby> → <ruby>買<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">わ</span>され{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>待<rt>ま</rt>つ</ruby> → <ruby>待<rt>ま</rt></ruby><span class="grammar-highlight"><span class="h">た</span>され{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>取<rt>と</rt>る</ruby> → <ruby>取<rt>と</rt></ruby><span class="grammar-highlight"><span class="h">ら</span>され{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>読<rt>よ</rt>む</ruby> → <ruby>読<rt>よ</rt></ruby><span class="grammar-highlight"><span class="h">ま</span>され{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>遊<rt>あそ</rt>ぶ</ruby> → <ruby>遊<rt>あそ</rt></ruby><span class="grammar-highlight"><span class="h">ば</span>され{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>死<rt>し</rt>ぬ</ruby> → <ruby>死<rt>し</rt></ruby><span class="grammar-highlight"><span class="h">な</span>され{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>書<rt>か</rt>く</ruby> → <ruby>書<rt>か</rt></ruby><span class="grammar-highlight"><span class="h">か</span>され{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>泳<rt>およ</rt>ぐ</ruby> → <ruby>泳<rt>およ</rt></ruby><span class="grammar-highlight"><span class="h">が</span>され{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="kanji-mb">
        <ruby>話<rt>はな</rt>す</ruby> → <ruby>話<rt>はな</rt></ruby><span class="grammar-highlight"><span class="h">さ</span>せられ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="structure-title">
        Ichidan
      </div>
      <div class="kanji-mb">
        <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="grammar-highlight">させられ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div class="structure-title">
        Exceptions
      </div>
      <div class="kanji-mb">
        <span>する</span> → <span class="grammar-highlight">させられ{{ isPolite ? "ます" : "る"}}</span>
      </div>
      <div>
        <span><ruby>来<rt>く</rt>る</ruby></span> → <span class="grammar-highlight"><ruby>来<rt>こ</rt></ruby>させられ{{ isPolite ? "ます" : "る"}}</span>
      </div>
    </template>
    <template #related>
      <div class="related-title">
        Further usage of the causative-passive form:
      </div>
      <div style="margin-bottom: 20px;">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativePassiveSentences.slug } }" class="link">{{ causativePassiveSentences.title }}</RouterLink>
      </div>
      <div class="related-mb">
        Other verb conjugations:
      </div>
      <RelatedGrammarList :related="related" />
    </template>
    <template #explanation>
      <div class="grammar-title">The Causative-Passive Form of Verbs</div>
      The causative-passive form combines two ideas:
      <ul>
        <li style="margin-bottom: 6px;"><RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeVerbs.slug } }" class="link">Causative</RouterLink> — Someone makes or forces another to do something</li>
        <li><RouterLink :to="{ name: 'grammarLoader', params: { slug: passiveVerbs.slug } }" class="link">Passive</RouterLink> — The subject experiences the action (often unwillingly or with discomfort)</li>
      </ul>
      So the causative-passive expresses that someone was made to do something by someone else, typically against their will or with reluctance.
      <ul>
        <li><ruby>学生<rt>がくせい</rt></ruby>は<ruby>先生<rt>せんせい</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby><span class="h">ま</span><span class="g">されせた</span> → "The student was made to read a book by the teacher"</li>
      </ul>
      <div class="note">
        <div class="note-title">Note:</div>
        The <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeVerbs.slug } }" class="link">Causative form</RouterLink>
        can mean to both "make" and "let" someone do something, but the causative-passive form is always "made to do" something.
      </div>
      Instinctively, the natural way to form the causative-passive is to start with the causative form of a verb, and then conjugate it into the passive.
      This is a valid way to form the causative-passive — however, in practice, Japanese simplifies this by using fixed patterns for certain verbs.
      <div class="note">
        <div class="note-title">Note:</div>
        For more information on how to use the causative-passive form in sentences, see
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativePassiveSentences.slug } }" class="link">Causative-passive sentences</RouterLink>.
      </div>

      <div class="section">
        <div class="grammar-subtitle">Causative-passive godan verbs</div>
        To form the causative-passive of a godan verb, refer to the godan five-step chart below. Change the final syllable
        from the う row (the dictionary form) to the あ row to get the stem for the causative-passive form.
        <div class="chart">
          <GodanChart :selected-row="1" :show-word-selection="false" />
        </div>
        Once we have the causative-passive stem, for <b>most verbs</b>, add <span class="g">される</span> to the end, which really is just
        a simplified version of the full "causative + passive", <span class="g">せられる</span>.
        <div class="note">
          <div class="note-title">Caution:</div>
          Verbs ending in す <b>do not</b> use the simplified form. Instead, they use the full
          causative-passive form <span class="g">せられる</span>.
          <ul>
            <li><ruby>出<rt>だ</rt></ruby>す → <ruby>出<rt>だ</rt></ruby><span class="h">さ</span><span class="g">せられる</span></li>
          </ul>
        </div>

        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">ま</span><span class="g">される</span>
          </div>
          <div class="translation">
            to read → to be made to read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">さ</span><span class="g">せられる</span>
          </div>
          <div class="translation">
            to speak → to be made to speak
          </div>
          <div class="example">
            <ruby>聞<rt>き</rt></ruby>く → <ruby>聞<rt>き</rt></ruby><span class="h">か</span><span class="g">される</span>
          </div>
          <div class="translation">
            to hear → to be made to hear
          </div>
          <template #note>
            Causative-passive form (godan)
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Causative-passive ichidan verbs</div>
        For ichidan verbs, forming the causative-passive is straightforward. Simply replace the final <span class="g">る</span>
        of the verb with <span class="g">させられる</span>.

        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">させられる</span>
          </div>
          <div class="translation">
            to eat → to be made to eat
          </div>
          <div class="example">
            <ruby>教<rt>おし</rt></ruby>える → <ruby>教<rt>おし</rt></ruby>え<span class="g">させられる</span>
          </div>
          <div class="translation">
            to teach → to be made to teach
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">させられる</span>
          </div>
          <div class="translation">
            to see → to be made to see
          </div>
          <template #note>
            Causative-passive form (ichidan)
          </template>
        </GrammarExampleSentences>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Polite form</div>
        Causative-passive verbs can be conjugated into polite forms, just like any other verb.
        Interestingly, once a verb is in the causative-passive form, it becomes an ichidan verb. This means all causative-passive verbs always follow the conjugation patterns of ichidan verbs, regardless of their original type.
        <br><br>
        To form the polite version, drop the final <span class="g">る</span> from the causative-passive form, then add the desired polite ending, such as <span class="g">ます</span>.
        <GrammarExampleSentences>
          <div class="example">
            <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby><span class="h">ま</span><span class="g">されます</span>
          </div>
          <div class="translation">
            to read → to be made to read
          </div>
          <div class="example">
            <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby><span class="h">さ</span><span class="g">せられます</span>
          </div>
          <div class="translation">
            to speak → to be made to speak
          </div>
          <div class="example">
            <ruby>聞<rt>き</rt></ruby>く → <ruby>聞<rt>き</rt></ruby><span class="h">か</span><span class="g">されます</span>
          </div>
          <div class="translation">
            to hear → to be made to hear
          </div>
          <div class="example">
              <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">させられます</span>
          </div>
          <div class="translation">
            to eat → to be made to eat
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby><span class="g">させられます</span>
          </div>
          <div class="translation">
            to see → to be made to see
          </div>
          <template #note>
            Polite causative-passive form
          </template>
        </GrammarExampleSentences>
        <div class="note">
          <div class="note-title">Note:</div>
          Most polite verb forms in Japanese are made by taking the continuative (ます) stem and adding a polite ending. But the causative-passive form works differently —
          it becomes a new verb with full conjugation ability. This means it can be conjugated into the polite form by simply adding <span class="g">ます</span>
          to the end of the causative-passive stem.
        </div>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Exceptions</div>
        The two irregular verbs する and 来る do not follow the usual conjugation patterns. Instead, they have unique forms that must be memorized.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">させられる</span>
          </div>
          <div class="translation">
            to do → to be made to do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>させられる</span>
          </div>
          <div class="translation">
            to come → to be made to come
          </div>
          <template #note>
            Causative-passive form of exceptions
          </template>
        </GrammarExampleSentences>
        The polite versions follow the conjugation patterns of ichidan verbs.
        <GrammarExampleSentences>
          <div class="example">
            する → <span class="g">させられます</span>
          </div>
          <div class="translation">
            to do → to be made to do
          </div>
          <div class="example">
            <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>来<rt>こ</rt></ruby>させられます</span>
          </div>
          <div class="translation">
            to come → to be made to come
          </div>
          <template #note>
            Causative-passive form of exceptions
          </template>
        </GrammarExampleSentences>
      </div>
    </template>
  </GrammarStructure>
</template>
