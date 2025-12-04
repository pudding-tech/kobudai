<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teItadakemasenka as meta, kenjougo, sonkeigo, teAgeruKureruMorau } from "./metadataN4";
  import { teKudasai, teVerb } from "../n5/metadataN5";
  import { breakpointService } from "@/services/breakpointService";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #title>
      <div v-if="breakpointService.isMobile()" style="word-break: normal;">
        {{ meta.title }}
      </div>
      <span v-else>
        {{ meta.title }}
      </span>
    </template>
    <template #structure>
      Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">いただけませんか</span>
    </template>
    <template #related>
      <div class="related-mb">
        Based on:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink>
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: kenjougo.slug } }" class="link">{{ kenjougo.title }}</RouterLink>
      </div>
      <div>
        See also <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAgeruKureruMorau.slug } }" class="link">{{ teAgeruKureruMorau.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <span class="g">～ていただけませんか</span> is a very polite way to ask someone to do something for you.
      <br><br>
      How to use:
      <ul>
        <li>Verb (<span class="g">て-form</span>) + <span class="g">いただけませんか</span></li>
      </ul>
      <GrammarExample>
        <template #example>
          <ruby>見<rt>み</rt></ruby><span class="g">ていただけませんか</span>？
        </template>
        <template #translation>
          Could you please take a look?
        </template>
        <template #note>
          Literally, "Would I not be able to receive the favor of you looking?"
        </template>
      </GrammarExample>
      This expression is polite and humble, so it's often used in formal situations, like at work or when speaking to someone you want to show respect to.
      For a less formal, but still polite request, you can use the more common
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: teKudasai.slug } }" class="link">{{ teKudasai.title }}</RouterLink> form.
      <GrammarExample>
        <template #example>
          <ruby>少<rt>すこ</rt></ruby>し<ruby>待<rt>ま</rt></ruby>っ<span class="g">ていただけませんか</span>？
        </template>
        <template #translation>
          Would you mind waiting a moment?
        </template>
        <template #note>
          Literally, "Would I not be able to receive the favor of you waiting a moment?"
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">～ていただけませんか</span> is the <RouterLink :to="{ name: 'grammarLoader', params: { slug: kenjougo.slug } }" class="link">humble (Kenjōgo)</RouterLink>
        way of making a polite request, built around the humble verb いただく, which is the humble equivalent of もらう ("to receive").
        Furthermore, いただく is conjugated into its negative potential polite form, <span class="g">いただけません</span>, to gently ask if the speaker may receive the favor of the action.
        <br><br>
        In this construction, you are humbly positioning yourself as the receiver of a favor or action from the listener. So, when you say <span class="g">～ていただけませんか</span>,
        you're politely asking someone to do something for you, emphasizing your humble position as the recipient.
        <br><br>
        This contrasts with <RouterLink :to="{ name: 'grammarLoader', params: { slug: teKudasai.slug } }" class="link">{{ teKudasai.title }}</RouterLink>, which uses the
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: sonkeigo.slug } }" class="link">honorific (sonkeigo)</RouterLink>
        word くださる (the honorific of くれる, "to give"), and emphasizes the listener as the giver performing an action for you.
        ～てください is historically a truncated form of ～てくださいませんか.
        <ul>
          <li>～てください — honors the listener as the giver ("please do [for me]")</li>
          <li><span class="g">～ていただけませんか</span> — humbly positions the speaker as the receiver ("could I receive the favor of you doing…")</li>
        </ul>
        Because of this nuance, <span class="g">～ていただけませんか</span> is generally more polite and formal than ～てください
        and is often used in business or very polite contexts.
      </div>
    </template>
  </GrammarStructure>
</template>
