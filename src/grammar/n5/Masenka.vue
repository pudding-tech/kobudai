<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { masenka as meta } from "./metadataN5";
  import { teAgeruKureruMorau, teItadakemasenka, verbStemKudasai } from "../n4/metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Verb (ます stem) + <span class="grammar-highlight">ませんか</span>
    </template>
    <template #related>
      <div class="related-mb">
        Even more polite ways to make requests:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAgeruKureruMorau.slug } }" class="link">{{ teAgeruKureruMorau.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teItadakemasenka.slug } }" class="link">{{ teItadakemasenka.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: verbStemKudasai.slug } }" class="link">{{ verbStemKudasai.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      The structure <span class="g">～ませんか</span>？ is the negative question form of a verb in the polite present tense,
      and it's commonly used to make polite invitations or suggestions. Even though it's grammatically negative,
      it does not mean "won't you…" in a literal way, but rather "Would you like to…" or "Shall we…" in English.
      <br><br>
      To form this structure, take the polite negative form of a verb and simply add <span class="g">か</span> to make it a question.
      <ul>
        <li>Verb (ます stem) + <span class="g">ませんか</span>？</li>
      </ul>
      <GrammarExample>
        <template #example>
          コーヒーを<ruby>飲<rt>の</rt></ruby>み<span class="g">ませんか</span>？
        </template>
        <template #translation>
          Would you like to drink coffee?
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>明日<rt>あした</rt></ruby>、<ruby>公園<rt>こうえん</rt></ruby>に<ruby>行<rt>い</rt></ruby>き<span class="g">ませんか</span>？
        </template>
        <template #translation>
          Shall we go to the park tomorrow?
        </template>
      </GrammarExample>
      This form is softer and more polite than a direct command or suggestion, making it ideal for inviting someone
      without sounding pushy. Depending on the context and tone, it can also be used to ask for permission or to make gentle offers.
      <div class="note">
        <div class="note-title">Note:</div>
        The volitional form ～ましょうか？ is often used to offer to do something or to suggest doing something together.
        It has a more proactive and forward-leaning nuance, as the speaker is initiating the action. In contrast,
        <span class="g">～ませんか</span>？ is used to invite or ask someone to do something, with a softer and more indirect
        tone that emphasizes the listener's willingness or interest.
        <ul>
          <li><ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ましょうか？ — Shall we watch a movie together? (suggests the speaker's willingness or offer to do it)</li>
          <li><ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby><span class="g">ませんか</span>？ — Won't you watch a movie with me? (an invitation asking the listener to join)</li>
        </ul>
      </div>
    </template>
  </GrammarStructure>
</template>
