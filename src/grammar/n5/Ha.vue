<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { ha as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      X + <span class="grammar-highlight">は</span> + Y
    </template>
    <template #related>
      Subject marking particle <RouterLink :to="{ name: 'grammarLoader', params: { slug: 'が' } }" class="link">が</RouterLink>
    </template>
    <template #explanation>
      In Japanese, the basic sentence structure "X は Y" uses the particle <span class="g">は</span> (pronounced "wa") to mark the topic of the sentence. This structure is fundamental in Japanese and serves to introduce what the sentence is about.
      <div class="section">
        <div class="grammar-subtitle">What does は do?</div>
        The <span class="g">は</span> particle tells the listener, “Hey, this is the thing we're talking about.” Everything that follows provides some kind of comment, description, or information about that topic.
        In the sentence "X は Y", X is the topic, and Y is the information being shared about it.
        <GrammarExample>
          <template #example>
            これ<span class="g">は</span>ペンです
          </template>
          <template #translation>
            This is a pen (literally, "as for this, it is a pen")
          </template>
          <template #note>
            これ (this) is the topic, marked by は. The sentence tells us what “this” is.
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          Even though it's written using the hiragana <span class="g">は</span>, it is pronounced "wa" when used as a particle.
          This is one of the very few cases in Japanese where the written character and the spoken sound don't match.
        </div>
      </div>
      <div class="section">
        <div class="grammar-subtitle">With copula: です and だ</div>
        In many basic sentences, the topic marked by <span class="g">は</span> is followed by です or だ at the end.
        These words act as a copula, which is like the English verb “to be” — connecting the topic to its description or identity.
        <GrammarExample>
          <template #example>
            これ<span class="g">は</span><ruby>本<rt>ほん</rt></ruby>です
          </template>
          <template #translation>
            This is a book (literally, "as for this, it is a book")
          </template>
          <template #note>
            <div style="display: flex; flex-direction: column; align-items: center;">
              <div>は marks "this" as the topic and "is a book" as information about "this".</div>
              <div>です completes the sentence politely.</div>
            </div>
          </template>
        </GrammarExample>

        <GrammarExample>
          <template #example>
            <ruby>彼<rt>かれ</rt></ruby><span class="g">は</span><ruby>学生<rt>がくせい</rt></ruby>だ
          </template>
          <template #translation>
            He is a student (literally, "as for he, he is a student")
          </template>
          <template #note>
            は marks "he" as the topic, and だ completes the sentence informaly.
          </template>
        </GrammarExample>
        This structure is fundamental in Japanese to convey what something is or to describe something/someone.
      </div>
    </template>
  </GrammarStructure>
</template>
