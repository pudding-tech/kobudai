<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { youni as meta, noyouni, youda } from "./metadataN4";
  import { toori } from "../n3/metadataN3";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div class="structure-title small top">Done as if "A" or with a characteristic like "A"</div>
      <div>Verb/adjective/phrase A + <span class="grammar-highlight">ように</span> + verb/adjective</div>
      <div class="structure-title small">A "B" that is like "A"</div>
      <div>Verb/adjective/phrase A + <span class="grammar-highlight">ような</span> + noun B</div>
    </template>
    <template #related>
      <div class="related-mb">See also:</div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: noyouni.slug } }" class="link">{{ noyouni.title }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: youda.slug } }" class="link">{{ youda.title }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: toori.slug } }" class="link">とおり</RouterLink></div>
    </template>
    <template #explanation>
      Both <span class="g">ように</span> and <span class="g">ような</span> are used to express similarity,
      appearance, or manner, meaning "like...", "as if...", or "in such a way that...".
      <br><br>
      They are often used when comparing something to an action, state, or situation. <span class="g">ように</span> modifies verbs or adjectives,
      describing how something is done or how something appears, while <span class="g">ような</span> modifies nouns to describe what kind of thing something is like.
      <div class="note">
        <div class="note-title">Note:</div>
        The expressions <span class="g">ように</span> and <span class="g">ような</span> come from the noun よう, which is also used in the grammar pattern
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: youda.slug } }" class="link">{{ youda.title }}</RouterLink> to express similarity
        or appearance, meaning "seems like..." or "appears as if...".
      </div>

      <div class="section">
        <div class="grammar-title">ように</div>
        The expression <span class="g">ように</span> is used to describe the manner in which something is done, or how something appears,
        by comparing it to an action, state, or situation. It can mean "like...", "as if...", or "in the way that...", and is used to modify verbs or adjectives.
        <ul>
          <li>Verb + <span class="g">ように</span> + verb / adjective</li>
        </ul>
        <GrammarExample>
          <template #example>
            <ruby>彼<rt>かれ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>も<ruby>知<rt>し</rt></ruby>らない<span class="g">ように</span><ruby>話<rt>はな</rt></ruby>した
          </template>
          <template #translation>
            He spoke as if he knew nothing
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>先生<rt>せんせい</rt></ruby>が<ruby>言<rt>い</rt></ruby>った<span class="g">ように</span><ruby>書<rt>か</rt></ruby>いてください
          </template>
          <template #translation>
            Please write it as the teacher said
          </template>
        </GrammarExample>
        This structure compares an action or state to another action, state, or situation, and emphasizes how something happens, feels, or appears.
      </div>

      <div class="section">
        <div class="grammar-title">ような</div>
        The expression <span class="g">ような</span> is used to describe or modify nouns by comparing them to an action, state, or situation.
        It can be translated as "like...", "as if...", or "the kind of...".
        <ul>
          <li>Verb + <span class="g">ような</span> + noun</li>
        </ul>
        <span class="g">ような</span> is often used to describe what kind of thing something is by comparing it to a situation or impression.
        In contrast, <span class="g">ように</span> describes how an action is done or how something appears.
        <GrammarExample>
          <template #example>
            <ruby>彼<rt>かれ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>も<ruby>知<rt>し</rt></ruby>らない<span class="g">ような</span><ruby>顔<rt>かお</rt></ruby>をしていた
          </template>
          <template #translation>
            He had a look as if he knew nothing
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>映画<rt>えいが</rt></ruby>で<ruby>見<rt>み</rt></ruby>た<span class="g">ような</span><ruby>景色<rt>けしき</rt></ruby>でした
          </template>
          <template #translation>
            It was scenery like something I had seen in a movie
          </template>
        </GrammarExample>
        While both <span class="g">ように</span> and <span class="g">ような</span> express similarity, <span class="g">ような</span>
        focuses on what kind of thing something is, while <span class="g">ように</span> focuses on how something happens or appears.
      </div>
    </template>
  </GrammarStructure>
</template>
