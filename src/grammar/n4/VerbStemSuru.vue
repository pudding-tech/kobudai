<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { verbStemSuru as meta, kenjougo } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div class="structure-title top">For regular verbs</div>
      <span class="grammar-highlight">お</span> + verb (ます stem) + <span class="grammar-highlight">する</span>
      <div class="structure-title">For する-verbs</div>
      <span class="grammar-highlight">お・ご</span> + noun + <span class="grammar-highlight">する</span>
    </template>
    <template #related>
      Based on the humble form <RouterLink :to="{ name: 'grammarLoader', params: { slug: kenjougo.slug } }" class="link">{{ kenjougo.title }}</RouterLink>
    </template>
    <template #explanation>
      In the humble form of speech, <RouterLink :to="{ name: 'grammarLoader', params: { slug: kenjougo.slug } }" class="link">kenjōgo (謙譲語)</RouterLink>,
      the construction <span class="g">お</span> + verb stem + <span class="g">する</span> is a common and respectful way to refer to your own actions
      when speaking to someone of higher status. It's used to lower yourself (or someone from your in-group) in relation to the listener,
      thereby showing politeness and deference. This form literally means “to do [something] humbly” and is used when talking about
      performing an action for or in front of someone else in a respectful way.
      <br><br>
      The exact structure of this form depends on the verb type:
      <ul>
        <li>For regular verbs:</li>
        <div class="mb"><span class="g">お</span> + verb (ます stem) + <span class="g">する</span></div>
        <li>For する-verbs:</li>
        <div><span class="g">お・ご</span> + noun + <span class="g">する</span></div>
      </ul>
      When addressing superiors, clients, customers, or guests, this form is often more appropriate than simply using the verbs themselves.
      <div class="note">
        <div class="note-title">Note:</div>
        Not all verbs can be used in the humble form, so it's best to stick to ones you've already seen used or are certain are correct.
        In general, verbs commonly used humbly tend to describe actions directed toward another person.
      </div>
      <GrammarExample>
        <template #example>
          ごはんを<span class="g">お<ruby>手伝<rt>てつだ</rt></ruby>いします</span>
        </template>
        <template #translation>
          I will (humbly) help with the meal
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          カバンを<span class="g">お<ruby>持<rt>も</rt></ruby>ちしましょう</span>か？
        </template>
        <template #translation>
          Shall I (humbly) carry your bag?
        </template>
        <template #note>
          する can be conjugated as normal, like here in the volitional form
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        Since <span class="g">いたす</span> is the humble equivalent of <span class="g">する</span>, you can use it in place of <span class="g">する</span> in very humble expressions.
      </div>
      <GrammarExample>
        <template #example>
          この<ruby>資料<rt>しりょう</rt></ruby>を<span class="g">お<ruby>借<rt>か</rt></ruby>りいたします</span>
        </template>
        <template #translation>
          I will (humbly) borrow this document
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">For する-verbs</div>
        Creating the humble form of する-verbs is very straightforward; you simply add the appropriate prefix
        (<span class="g">お</span> or <span class="g">ご</span>) to the noun.
        Also note that like with regular verbs, not all する-verbs can be used in this form.
        <GrammarExample>
          <template #example>
            あとで<span class="g">お<ruby>電話<rt>でんわ</rt></ruby>いたします</span>
          </template>
          <template #translation>
            I will (humbly) call you later
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.mb {
  margin-bottom: 16px;
}
</style>
