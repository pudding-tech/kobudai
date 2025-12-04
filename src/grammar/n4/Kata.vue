<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { kata as meta } from "./metadataN4";
import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
</script>

<script lang="ts">
  export const title = meta.titlePlain ?? meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Verb (ます stem) + <span class="grammar-highlight"><ruby>方<rt>かた</rt></ruby></span>
    </template>
    <template #explanation>
      The expression <span class="g"><ruby>方<rt>かた</rt></ruby></span> is attached to the verb stem (also called the ます-stem) to describe how to do something,
      or the way of doing something. It turns the verb into a noun-like phrase meaning "the method" or "manner" of the action.

      <GrammarExampleSentences>
        <div class="example">
          <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby>し<span class="g"><ruby>方<rt>かた</rt></ruby></span>
        </div>
        <div class="translation">
          to speak → the way of speaking / how to speak
        </div>
        <div class="example">
          <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べ<span class="g"><ruby>方<rt>かた</rt></ruby></span>
        </div>
        <div class="translation">
          to eat → the method of eating / how to eat
        </div>
      </GrammarExampleSentences>

      As <ruby class="g">方<rt>かた</rt></ruby> makes the verb into a noun, so you can treat it like any other noun in a sentence.
      <GrammarExample>
        <template #example>
          <ruby>正<rt>ただ</rt></ruby>しい<ruby>書<rt>か</rt></ruby>き<ruby class="g">方<rt>かた</rt></ruby>を<ruby>学<rt>まな</rt></ruby>びましょう
        </template>
        <template #translation>
          Let's learn the correct way of writing
        </template>
      </GrammarExample>
      <div class="note">
        <div class="note-title">Note:</div>
        When using a verb that takes an object with a <span class="g">方</span> phrase, the particle を changes to の.
        <ul>
          <li>バナナを<ruby>食<rt>た</rt></ruby>べる → バナナの<ruby>食<rt>た</rt></ruby>べ<ruby class="g">方<rt>かた</rt></ruby> ("the way of eating a banana")</li>
        </ul>
      </div>
      <GrammarExample>
        <template #example>
          このカメラの<ruby>使<rt>つか</rt></ruby>い<ruby class="g">方<rt>かた</rt></ruby>は<ruby>簡単<rt>かんたん</rt></ruby>です
        </template>
        <template #translation>
          The way of using this camera is simple
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          <ruby>日本語<rt>にほんご</rt></ruby>の<ruby>話<rt>はな</rt></ruby>し<span class="g"><ruby>方<rt>かた</rt></ruby></span>を<ruby>教<rt>おし</rt></ruby>えてください
        </template>
        <template #translation>
          Please teach me how to speak Japanese
        </template>
      </GrammarExample>

      When using <ruby class="g">方<rt>かた</rt></ruby> with する-verbs, there needs to be a の particle between the noun and the verb する, now in the form of し.
      Over time, "し + <span class="g">方</span>" became fossilized into a common compound: <span class="g">仕方</span> (しかた), which literally means "way of doing".
      <ul style="margin-top: 4px;">
        <li>[Noun] + の + し<ruby class="g">方<rt>かた</rt></ruby> → [noun] + の + <ruby class="g">仕方<rt>しかた</rt></ruby></li>
      </ul>
      This is not a new word being formed, but rather a conventional way of writing and reading it.
      <GrammarExample>
        <template #example>
          <ruby>掃除<rt>そうじ</rt></ruby>の<ruby class="g">仕方<rt>しかた</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からない
        </template>
        <template #translation>
          I don't know how to clean
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        You might recognize the word from the very common phrase <span class="g">仕方</span>がない,
        commonly translated as "it can't be helped". Literally, it would mean "there is no way of doing".
      </div>
    </template>
  </GrammarStructure>
</template>
