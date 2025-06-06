<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { nara as meta, ba, tara } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Sentence 1 + <span class="grammar-highlight">なら</span> + Sentence 2</div>
      <div class="structure-inner">
        <div>Verb (plain form) + <span class="grammar-highlight">なら</span></div>
        <div>い-adjective + <span class="grammar-highlight">なら</span></div>
        <div>な-adjective + <span class="grammar-highlight">なら</span></div>
        <div>Noun + <span class="grammar-highlight">なら</span></div>
      </div>
    </template>
    <template #related>
      Other conditionals:
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink></div>
    </template>
    <template #explanation>
      The word <span class="g">なら</span> is used when you want to say something like "if that's the case…" or "if that's true…".
      It's often used when you're replying to someone else, or when you're talking about something that's already been mentioned.
      You can think of it as reacting to information, like giving advice or making a comment based on what someone else has said.
      <br><br>
      To use <span class="g">なら</span>, it should connect 2 sentences or clauses, where the first part is a condition or a topic that you accept as true,
      and the second part is your response or advice based on that condition.
      <ul>
        <li>(Clause 1) <span class="g">なら</span> (clause 2) → Meaning, "If it's true that (clause 1), then (clause 2)"</li>
      </ul>
      <span class="g">なら</span> can attach to nouns, い-adjectives, な-adjectives, and verbs in their plain form. Technically speaking, when attaching to a verb or an い-adjective,
      <span class="g">なら</span> should be preceded by の, which is a nominalizer that turns the verb or adjective into a noun-like phrase. This is because, technically, <span class="g">なら</span>
      should only be used with nouns. However, in modern Japanese, this の is mostly droppped, and <span class="g">なら</span> attaches to the word directly.

      <div class="note mt">Note:</div>
      Even though it often gets translated as "if", it cannot be used exactly the same as other Japanese words for "if" like
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink> or <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink>.
      <span class="g">なら</span> feels more like "if it's true that X…" or "speaking of X…". This means the speaker must believe that the condition is true.
      <GrammarExample>
        <template #example>
          <div>Aさん: <ruby>東京<rt>とうきょう</rt></ruby>に<ruby>行<rt>い</rt></ruby>くつもりだよ</div>
          <div>Bさん: <ruby>東京<rt>とうきょう</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<span class="g">なら</span>、<ruby>上野<rt>うえの</rt></ruby><ruby>公園<rt>こうえん</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったほうがいいよ</div>
        </template>
        <template #translation>
          <div>A: I'm planning to go to Tokyo</div>
          <div>B: If you're going to Tokyo, you should go to Ueno Park</div>
        </template>
      </GrammarExample>
      <span class="g">なら</span> cannot be used to express purely hypothetical or imaginative situations without context.
      It also isn't used to describe things that are always true or naturally happen, such as general facts or laws of nature — in those cases,
      the <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink> form is more appropriate.
      Additionally, <span class="g">なら</span> should not be used with time-based sequences, where one action follows another; instead,
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink> is used to express temporal order, such as "when A happens, B will happen."

      <div class="note mt">Note:</div>
      <span class="g">なら</span> comes from the more formal conditional ならば, which is described more in detail in
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink>.
      In modern Japanese, ならば is rarely used in everyday conversation but may still appear in formal or literary contexts.

      <div class="section">
        <div class="grammar-title">なら Used to Contrast or Limit</div>
        One important way <span class="g">なら</span> is used in Japanese is to respond to a suggestion or condition and narrow down the situation.
        It often carries the nuance of "if it's that specific case, then..." — meaning the speaker is limiting what they're saying to only that case, or contrasting it with other possibilities.
        <GrammarExample>
          <template #example>
            <div>Aさん: <ruby>今週<rt>こんしゅう</rt></ruby>、<ruby>会<rt>あ</rt></ruby>えますか？</div>
            <div>Bさん: <ruby>明日<rt>あした</rt></ruby><span class="g">なら</span>、<ruby>時間<rt>じかん</rt></ruby>がありますよ。</div>
          </template>
          <template #translation>
            <div>A: Can we meet this week?</div>
            <div>B: If it's tomorrow, then I have time</div>
          </template>
        </GrammarExample>
        In this conversation, A asks a broad question: "Can we meet this week?"
        B responds with a limited condition: "If it's tomorrow, yes."
        This doesn't mean B is free all week — only that tomorrow works. The use of <span class="g">なら</span> helps clearly contrast "tomorrow" with the rest of the week and limits their availability to that day.

        In English, this kind of nuance can be translated in different ways depending on the tone:
        <ul>
          <li>"If it's tomorrow, I have time" (neutral)</li>
          <li>"Well, tomorrow works, at least" (limiting)</li>
          <li>"Only tomorrow works for me" (stronger contrast)</li>
        </ul>
      </div>

      <div class="section">
        <div class="grammar-title">なら Compared to ～たら and ～ば</div>
        <span class="g">なら</span> is mainly used to react to a known or assumed condition — often something just mentioned or something
        the speaker believes to be true. It's like saying, "If that's the case…" or "Speaking of that…" and often implies a suggestion, advice, or comment based on that premise.
        In contrast, <RouterLink :to="{ name: 'grammarLoader', params: { slug: tara.slug } }" class="link">{{ tara.title }}</RouterLink>
        talks about what will (or might) happen when a condition becomes true, focusing on the sequence of events.
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: ba.slug } }" class="link">{{ ba.title }}</RouterLink> expresses a more neutral
        or logical "if", commonly used for general truths or cause-effect relationships.
        <ul>
          <li><span class="g">なら</span> = "If it's true that…" → Reacts to or comments on a situation</li>
          <li>～たら = "If/when something happens…" → Describes what will (or might) happen next</li>
          <li>～ば = "If something is (generally) true…" → States a natural or expected result</li>
        </ul>
        <GrammarExample>
          <template #example>
            <ruby>暇<rt>ひま</rt></ruby><span class="g">なら</span>、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby>こう
          </template>
          <template #translation>
            If (it's true that) you're free, let's go see a movie
          </template>
          <template #note>
            Assumes or reacts to the idea of being free; offers a suggestion based on that.
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>暇<rt>ひま</rt></ruby>だったら、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby>こう
          </template>
          <template #translation>
            If/when you're free, let's go see a movie
          </template>
          <template #note>
            You become free → then we go see a movie; shows a time sequence.
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>暇<rt>ひま</rt></ruby>ならば、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby>こう
          </template>
          <template #translation>
            If you are free, let's go see a movie
          </template>
          <template #note>
            Sounds more formal or logical; expresses the condition and result more neutrally.
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
