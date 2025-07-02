<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { teHoshii as meta, gaHoshii } from "./metadataN4";
  import { tai, teVerb } from "../n5/metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      (Person + に) + verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">ほしい</span>
    </template>
    <template #related>
      <div style="margin-bottom: 20px">Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink></div>
      <div class="related-mb">See also:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: tai.slug } }" class="link">{{ tai.title }}</RouterLink> (for what you want to do yourself)</div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: gaHoshii.slug } }" class="link">{{ gaHoshii.title }}</RouterLink> (for what you want to have)</div>
    </template>
    <template #explanation>
      The grammar pattern <span class="g">～てほしい</span> is used to express the speaker's desire or wish for someone else to do something.
      It translates roughly as "I want (someone) to do [something]"."
      <br><br>
      To form this construction, take the verb in its <span class="g">て-form</span> and add <span class="g">ほしい</span>:
      <ul>
        <li>[Person] に + [verb in <span class="g">て-form</span>] + <span class="g">ほしい</span></li>
      </ul>
      The person marked with に is the one from whom you want the action.
      <GrammarExample>
        <template #example>
          <ruby>友<rt>とも</rt></ruby>だちに<ruby>手伝<rt>てつだ</rt></ruby>っ<span class="g">てほしい</span>
        </template>
        <template #translation>
          I want my friend to help me
        </template>
      </GrammarExample>
      The subject is usually the speaker who desires the action, if not specified otherwise. The person marked with に can also be omitted
      if it's clear from context who is being addressed.

      <div class="note">
        <div class="note-title">Note:</div>
        Remember that this construction is used to express a desire for someone else to do something, not for yourself.
        If you want to express what you want to do yourself, use the
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: tai.slug } }" class="link">{{ tai.title }}</RouterLink> construction.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>毎日<rt>まいにち</rt></ruby>、<ruby>練習<rt>れんしゅう</rt></ruby>し<span class="g">てほしい</span>
        </template>
        <template #translation>
          I want you to practice every day
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-title">In Negative Form</div>
        To express that you do not want someone to do something, you can either use the negative form use the negative form <span class="g">ほしくない</span>,
        or use the verb in the negative <span class="g">て-form</span> together with <span class="g">ほしい</span>:
        <GrammarExampleSentences>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べ<span class="g">てほしくない</span>
          </div>
          <div class="translation">
            I don't want (you) to eat
          </div>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べなく<span class="g">てほしい</span>
          </div>
          <div class="translation">
            I want (you) not to eat
          </div>
        </GrammarExampleSentences>
        In most cases these are interchangeable, though there is a small difference in nuance:
        <br><br>
        <span class="g">～てほしくない</span> is the straightforward negative form, directly stating that the speaker does not want the other person
        to perform the action. <span class="g">～なくてほしい</span> can sound a bit softer or more indirect because you're expressing wanting
        the absence of an action, rather than outright saying you don't want the action. However, this nuance can be subtle,
        and <span class="g">～てほしくない</span> is more commonly used.
      </div>
    </template>
  </GrammarStructure>
</template>
