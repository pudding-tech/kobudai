<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { ka as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      Phrase + <span class="grammar-highlight">か</span>
    </template>
    <template #details>
      
    </template>
    <template #explanation>
      The sentence-ending particle <span class="g">か</span> in Japanese is used to form questions. It's placed at the end of a sentence to indicate that the sentence is a question, similar to how a question mark works in English.
      <GrammarExample>
        <template #example>
          これはペンです<span class="g">か</span>？
        </template>
        <template #translation>
          Is this a pen?
        </template>
      </GrammarExample>
      The question particle <span class="g">か</span> is commonly used with polite forms like です and ます, especially in formal or written Japanese, to clearly mark a sentence as a question.
      For example, 行きます<span class="g">か</span>？ means "Are you going?" in a polite and neutral way.
      <div class="note">
        <div class="note-title">Note:</div>
        In writing it is still quite common to include the question mark (?) at the end of a sentence, even when using <span class="g">か</span>.
      </div>

      However, <span class="g">か</span> is not typically used after だ in casual speech. Saying something like 行く<span class="g">か</span>？ would sound unnatural in most situations.
      In informal conversation, it's much more common to simply use a rising intonation to indicate a question, similar to how tone alone can signal a question in English.
      So instead of saying 行く<span class="g">か</span>？, someone might just say 行く？ with a questioning tone.
      <br><br>
      That said, <span class="g">か</span> can appear in casual speech — but when it does, it often adds a specific nuance. It can feel blunt, challenging, or even masculine-sounding,
      depending on the context and tone of voice. For example, やる<span class="g">か</span>？ might sound like "You gonna do it or not?" — a bit rough or direct.
      In this way, casual use of <span class="g">か</span> tends to carry a more assertive or confrontational tone,
      and it's often heard in anime, manga, or among close friends (especially among men) when teasing, joking, or challenging someone.
      <br><br>
      So, while <span class="g">か</span> is a straightforward question marker in polite language,
      in casual contexts it becomes more of a stylistic or emotional tool — and often, it's dropped entirely in favor of intonation.
    </template>
  </GrammarStructure>
</template>
