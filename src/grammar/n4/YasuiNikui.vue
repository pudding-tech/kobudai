<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { yasuiNikui as meta } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div>Verb (ます stem) + <span class="grammar-highlight">やすい</span></div>
      <div>Verb (ます stem) + <span class="grammar-highlight">にくい</span></div>
    </template>
    <template #explanation>
      <span class="g">～やすい</span> and <span class="g">～にくい</span> are suffixes that can be attached to the stem of a verb
      to describe how easy or difficult something is to do. They express subjective or general impressions of ease or difficulty.
      <br><br>
      To form this construction, take the ます stem of a verb and add either <span class="g">やすい</span> or <span class="g">にくい</span>.

      <GrammarExampleSentences>
        <div class="example">
          <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">やすい</span>
        </div>
        <div class="translation">
          to eat → easy to eat
        </div>
        <div class="example">
          <ruby>使<rt>つか</rt></ruby>う → <ruby>使<rt>つか</rt></ruby>い<span class="g">やすい</span>
        </div>
        <div class="translation">
          to use → easy to use
        </div>
        <div class="example">
          <ruby>覚<rt>おぼ</rt></ruby>える → <ruby>覚<rt>おぼ</rt></ruby>え<span class="g">やすい</span>
        </div>
        <div class="translation">
          to remember → easy to remember
        </div>
        <template #note>
          Examples with やすい
        </template>
      </GrammarExampleSentences>
      <GrammarExampleSentences>
        <div class="example">
          <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g">にくい</span>
        </div>
        <div class="translation">
          to eat → hard to eat
        </div>
        <div class="example">
          <ruby>使<rt>つか</rt></ruby>う → <ruby>使<rt>つか</rt></ruby>い<span class="g">にくい</span>
        </div>
        <div class="translation">
          to use → hard to use
        </div>
        <div class="example">
          <ruby>覚<rt>おぼ</rt></ruby>える → <ruby>覚<rt>おぼ</rt></ruby>え<span class="g">にくい</span>
        </div>
        <div class="translation">
          to remember → hard to remember
        </div>
        <template #note>
          Examples with にくい
        </template>
      </GrammarExampleSentences>

      These forms are often used to describe things, not people. You're commenting on the nature
      of the object or action, not your own ability.
      <GrammarExample>
        <template #example>
          この<ruby>本<rt>ほん</rt></ruby>は<ruby>読<rt>よ</rt></ruby>み<span class="g">やすい</span>
        </template>
        <template #translation>
          This book is easy to read
        </template>
        <template #note>
          The focus is on the book being easy to read, not on the reader's ability
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        Both <span class="g">やすい</span> and <span class="g">にくい</span> are い-adjectives, so they can
        be conjugated like any regular い-adjective.
        <ul>
          <li><ruby>飲<rt>の</rt></ruby>み<span class="g">やすくない</span> → not easy to drink</li>
          <li><ruby>読<rt>よ</rt></ruby>み<span class="g">にくくなかった</span> → was not hard to read</li>
        </ul>
      </div>
      <GrammarExample>
        <template #example>
          この<ruby>場所<rt>ばしょ</rt></ruby>は<ruby>住<rt>す</rt></ruby>み<span class="g">にくくない</span>と<ruby>思<rt>おも</rt></ruby>う
        </template>
        <template #translation>
          I don't think this place is hard to live in
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
