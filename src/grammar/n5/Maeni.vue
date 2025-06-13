<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { maeni as meta, tekara } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>Verb (dictionary form) + <span class="grammar-highlight">前に</span></div>
      <div>Noun + <span class="grammar-highlight">の</span> + <span class="grammar-highlight">前に</span></div>
    </template>
    <template #related>
      See also <RouterLink :to="{ name: 'grammarLoader', params: { slug: tekara.slug } }" class="link">{{ tekara.title }}</RouterLink> for sequential actions
    </template>
    <template #explanation>
      <span class="g">前に</span> has two common uses - it can indicate that something happens before another action or event, or it can describe location,
      meaning "in front of" something. The meaning depends on context.

      <div class="section">
        <div class="grammar-title">Before Doing... / Before Something Happens</div>
        <span class="g">前に</span> is used to show that one action or event happens prior to another. It can follow either a verb in dictionary form or a noun, depending on what you're talking about.
        <ul>
          <li>When used with verbs, it describes an action that will happen before another action takes place.</li>
          <li>When used with nouns, it means before an event or point in time.</li>
        </ul>
        This construction helps indicate a sequence of events, making it useful for talking about plans, habits, or instructions.
        <ul style="padding-right: 40px;">
          <li>For verbs: Verb (dictionary form) + <span class="g">前に</span></li>
          <GrammarExample>
            <template #example>
              <ruby>出<rt>で</rt></ruby>かける<span class="g"><ruby>前<rt>まえ</rt></ruby>に</span>、<ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>け</rt></ruby>してください
            </template>
            <template #translation>
              Please turn off the lights before going out
            </template>
          </GrammarExample>
          <li>For nouns: Noun + <span class="g">の</span> + <span class="g">前に</span></li>
          <GrammarExample>
            <template #example>
              <ruby>仕事<rt>しごと</rt></ruby><span class="g">の<ruby>前<rt>まえ</rt></ruby>に</span>、お<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだ
            </template>
            <template #translation>
              I drank tea before work
            </template>
          </GrammarExample>
        </ul>
      </div>

      <div class="section">
        <div class="grammar-title">In Front of (Location)</div>
        <span class="g">前に</span> can also be used to describe a physical location, meaning "in front of" something.
        In this usage, it always follows a noun and indicates that something is positioned ahead of or facing another object or place.
        <ul style="padding-right: 40px;">
          <li>Structure: Noun + <span class="g">の</span> + <span class="g">前に</span></li>
          <GrammarExample>
            <template #example>
              <ruby>駅<rt>えき</rt></ruby><span class="g">の<ruby>前<rt>まえ</rt></ruby>に</span><ruby>人<rt>ひと</rt></ruby>がたくさんいます
            </template>
            <template #translation>
              There are many people in front of the station
            </template>
          </GrammarExample>
        </ul>

        This usage is strictly spatial — it's about where something is, not when something happens. It's commonly used to give directions or describe where things are located.
      </div>

      <div class="note">
        <div class="note-title">Note</div>
        Even though both uses often share the same structure when used with nouns (noun + <span class="g">の</span> + <span class="g">前に</span>),
        the meaning — temporal or spatial — is usually clear from the context.
      </div>
    </template>
  </GrammarStructure>
</template>
