<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { questionsInSentences as meta } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div class="structure-title small top">With question word</div>
      <span class="grammar-highlight h">Question word</span> + <span class="grammar-highlight">か</span> + modifier
      <div class="structure-title small">Yes or no question (without question word)</div>
      Plain form + <span class="grammar-highlight">かどうか</span> + modifier
    </template>
    <template #explanation>
      In Japanese, you can embed questions inside a larger sentence using:
      <ul>
        <li>(<span class="h">Question word</span>) + <span class="g">か</span></li>
        <li>(Plain form verb/adjective) + <span class="g">かどうか</span></li>
      </ul>
      These act like noun phrases, meaning the entire embedded question becomes the subject, object, or another component
      of the modifier — which is what comes after the <span class="g">か</span> or <span class="g">かどうか</span>.

      <div class="section">
        <div class="grammar-title">Question Word within Sentence</div>
        The structure <span class="h">question word</span> + <span class="g">か</span> is used when the inner (embedded)
        question includes a question word, like:
        <ul>
          <li><span class="h"><ruby>何<rt>なに</rt></ruby></span> — what</li>
          <li><span class="h">どこ</span> — where</li>
          <li><span class="h">いつ</span> — when</li>
          <li><span class="h">だれ</span> — who</li>
          <li><span class="h">どうして</span> / <span class="h">なぜ</span> — why</li>
          <li><span class="h">どう</span> — how</li>
          <li><span class="h">どの</span> / <span class="h">どれ</span> — which</li>
          <li>...and more</li>
        </ul>
        The part after <span class="g">か</span> is the main statement or verb that is making use of the embedded question.
        <GrammarExample>
          <template #example>
            <ruby>彼女<rt>かのじょ</rt></ruby>は<span class="h"><ruby>何<rt>なに</rt></ruby></span>を<ruby>言<rt>い</rt></ruby>った<span class="g">か</span>、<ruby>分<rt>わ</rt></ruby>からない
          </template>
          <template #translation>
            I don't know what she said
          </template>
          <template #note>
            "<ruby>何<rt>なに</rt></ruby>を<ruby>言<rt>い</rt></ruby>った" is the embedded question; "<ruby>分<rt>わ</rt></ruby>からない" is the modifier
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <span class="h"><ruby>何<rt>なに</rt></ruby></span>を<ruby>食<rt>た</rt></ruby>べた<span class="g">か</span>、<ruby>覚<rt>おぼ</rt></ruby>えていません
          </template>
          <template #translation>
            I don't remember what I ate
          </template>
        </GrammarExample>

        <div class="note">
          <div class="note-title">Note:</div>
          The embedded question keeps normal statement word order. No question marks or rising intonation are used inside the embedded clause.
        </div>
        <GrammarExample>
          <template #example>
            <ruby>会議<rt>かいぎ</rt></ruby>が<span class="h">いつ</span><ruby>始<rt>はじ</rt></ruby>まる<span class="g">か</span>、<ruby>教<rt>おし</rt></ruby>えてください
          </template>
          <template #translation>
            Please tell me when the meeting starts
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-title">Yes or No Question within Sentence</div>
        The structure (plain form) + <span class="g">かどうか</span> is used when the inner statement is a yes or no question, without a specific question word.
        <div class="note">
          <div class="note-title">Note:</div>
          <span class="g">かどうか</span> works pretty much exactly like "whether or not" in English.
        </div>

        <GrammarExample>
          <template #example>
            <ruby>田中<rt>たなか</rt></ruby>さんが<ruby>来<rt>く</rt></ruby>る<span class="g">かどうか</span>、<ruby>知<rt>し</rt></ruby>りません
          </template>
          <template #translation>
            I don't know whether or not Mr. Tanaka is coming
          </template>
          <template #note>
            "<ruby>田中<rt>たなか</rt></ruby>さんが<ruby>来<rt>く</rt></ruby>る" is the embedded yes or no question; "<ruby>知<rt>し</rt></ruby>りません" is the modifier
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            この<ruby>本<rt>ほん</rt></ruby>が<ruby>面白<rt>おもしろ</rt></ruby>い<span class="g">かどうか</span>、<ruby>分<rt>わ</rt></ruby>からない
          </template>
          <template #translation>
            I'm not sure whether or not this book is interesting
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          In casual conversation, many people drop the last part of <span class="g">かどうか</span>, meaning it becomes
          just <span class="g">か</span> in this kind of sentence as well.
        </div>
      </div>
    </template>
  </GrammarStructure>
</template>
