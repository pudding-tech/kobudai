<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { passiveSentences as meta, causativePassiveSentences, causativeSentences, passiveVerbs } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div class="structure-title small top">Direct passive</div>
      <div>(Acted upon) <span class="h">は</span>/<span class="h">が</span> + (doer) <span class="h">に</span> + <span class="g">(passive verb)</span></div>
      <div class="structure-title small">Indirect passive</div>
      <div>(Affected) <span class="h">は</span>/<span class="h">が</span> + (doer) <span class="h">に</span> + (acted upon) を + <span class="g">(passive verb)</span></div>
    </template>
    <template #related>
      Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: passiveVerbs.slug } }" class="link">{{ passiveVerbs.title }}</RouterLink> form
      <div class="related-mb" style="margin-top: 10px;">See also:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeSentences.slug } }" class="link">{{ causativeSentences.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativePassiveSentences.slug } }" class="link">{{ causativePassiveSentences.title }}</RouterLink></div>
    </template>
    <template #explanation>
      In Japanese, passive sentences are used when the subject is acted upon by someone or something, rather than doing the action themselves.
      This construction often emphasizes:
      <ul>
        <li>The receiver of the action</li>
        <li>A sense of being affected, especially in indirect passives</li>
        <li>An emotional or personal perspective, often with a nuance of inconvenience, surprise, or lack of control</li>
      </ul>
      In English, the passive voice sounds like "the book was read by John", and "I was helped by a friend".
      Japanese has a similar structure, but it also allows for more emotional or indirect uses that don't always translate naturally into English.
      <ul>
        <li><ruby>犬<rt>いぬ</rt></ruby>が<ruby>私<rt>わたし</rt></ruby>を<ruby>噛<rt>か</rt></ruby>んだ → "The dog bit me"</li>
        <li>
          <ruby>私<rt>わたし</rt></ruby><span class="h">は</span><ruby>犬<rt>いぬ</rt></ruby><span class="h">に</span><span class="g"><ruby>噛<rt>か</rt></ruby>まれた</span>
          → "I was bitten by the dog" (emphasis on me)
        </li>
      </ul>
      <div class="note">
        <div class="note-title">Note:</div>
        See <RouterLink :to="{ name: 'grammarLoader', params: { slug: passiveVerbs.slug } }" class="link">{{ passiveVerbs.title }}</RouterLink> for how to conjugate verbs into their passive form.
      </div>
      Japanese passive sentences fall into two broad categories: Direct passive, used when the subject is directly acted upon by someone, and
      indirect passive, used when the subject is not directly affected by the verb, but still experiences some emotional or circumstantial impact from another person's action.

      <div class="section">
        <div class="grammar-title">Particles in Passive Sentences</div>
        Passive sentences often change which particles are used, compared to their active equivalents.
        In active sentences, the direct object (thing affected) is marked with を. In passive sentences, that object becomes the subject
        and is marked with <span class="h">が</span> or <span class="h">は</span>. The original subject (doer) is then marked with <span class="h">に</span>.
        <table class="particles-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Active Sentence</th>
              <th>Passive Sentence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doer (the one doing the action)</td>
              <td>Subject — marked with は/が</td>
              <td>Marked with <span class="h">に</span></td>
            </tr>
            <tr>
              <td>Acted upon (affected)</td>
              <td>Object — marked with を</td>
              <td>Becomes subject — marked with <span class="h">は</span>/<span class="h">が</span></td>
            </tr>
            <tr>
              <td>Verb</td>
              <td>Active verb (e.g. 読む)</td>
              <td>Passive verb (e.g., <span class="g">読まれる</span>)</td>
            </tr>
          </tbody>
        </table>
        <GrammarExample>
          <template #example>
            <ruby>本<rt>ほん</rt></ruby><span class="h">は</span> (acted upon) <ruby>学生<rt>がくせい</rt></ruby><span class="h">に</span> (doer) <span class="g"><ruby>読<rt>よ</rt></ruby>まれた</span>
          </template>
          <template #translation>
            The book (acted upon) was read by the student (doer)
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-title">Direct Passive</div>
        In direct passive sentences, the subject is acted upon <b>directly</b> by someone.
        <ul>
          <li>[Acted upon] <span class="h">は</span>/<span class="h">が</span> [doer] <span class="h">に</span> <span class="g">[action - passive verb]</span></li>
        </ul>
        <GrammarExample>
          <template #example>
            パン<span class="h">は</span><ruby>妹<rt>いもうと</rt></ruby><span class="h">に</span><span class="g"><ruby>食<rt>た</rt></ruby>べられた</span>
          </template>
          <template #translation>
            The bread was eaten by my younger sister
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>蚊<rt>か</rt></ruby><span class="h">に</span><span class="g"><ruby>刺<rt>さ</rt></ruby>された</span>
          </template>
          <template #translation>
            I was bitten by a mosquito
          </template>
          <template #note>
            When the subject is omitted, it is implied that the speaker is the one acted upon or affected
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>私<rt>わたし</rt></ruby><span class="h">は</span><ruby>駅<rt>えき</rt></ruby>で<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby><span class="h">に</span><span class="g"><ruby>話<rt>はな</rt></ruby>しかけられた</span>
          </template>
          <template #translation>
            I was spoken to by a stranger at the station
          </template>
          <template #note>
            The verb 話しかける ("to talk to") is used in passive, showing a direct passive experience with mild surprise or discomfort
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-title">Indirect Passive</div>
        In indirect passive sentences, the subject is not the direct target of the action, but they are affected by it, often in an emotional or inconvenient way.
        This construction is commonly used to express unpleasant experiences, involvement, or being impacted by someone else's actions.
        Often, there is another object being acted upon, which is marked with を, but this is not required — it depends on the verb used.
        <ul>
          <li>[Affected] <span class="h">は</span>/<span class="h">が</span> [doer] <span class="h">に</span> [acted upon] を <span class="g">[action - passive verb]</span></li>
        </ul>
        <GrammarExample>
          <template #example>
            <ruby>私<rt>わたし</rt></ruby><span class="h">は</span><ruby>友<rt>とも</rt></ruby>だち<span class="h">に</span><ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>を<span class="g"><ruby>壊<rt>こわ</rt></ruby>された</span>
          </template>
          <template #translation>
            My friend broke the refrigerator (and I was affected by it)
          </template>
          <template #note>
            The subject didn't receive the action directly
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>母<rt></rt></ruby><span class="h">は</span><ruby>弟<rt>おとうと</rt></ruby><span class="h">に</span><span class="g"><ruby>泣<rt>な</rt></ruby>かれた</span>
          </template>
          <template #translation>
            My mother was troubled by my little brother crying
          </template>
          <template #note>
            The verb 泣く (to cry) doesn't take a direct object, so there's no を, but the mother is still affected
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          These constructions often cannot be translated naturally into passive voice in English. Instead, the translation
          reflects the emotional nuance: frustration, inconvenience, disappointment, etc.
        </div>
        <GrammarExample>
          <template #example>
            <ruby>彼<rt>かれ</rt></ruby><span class="h">に</span><ruby>先<rt>さき</rt></ruby>に<span class="g"><ruby>行<rt>い</rt></ruby>かれた</span>
          </template>
          <template #translation>
            He went ahead of me (and I was inconvenienced)
          </template>
          <template #note>
            Literally, "I was gone ahead of by him"
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.particles-table {
  border-collapse: collapse; 
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: left;

  tr:not(:last-child) {
    border-bottom: 1px solid #cccccc24;
  }

  th, td {
    padding: 8px 8px;
  }
}
</style>
