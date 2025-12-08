<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { ya as meta, de, ha, he, ni, mo, to, wo } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      Noun + <span class="grammar-highlight">や</span> + noun
      <div class="structure-title small">Casual variant</div>
      Noun + <span class="grammar-highlight">とか</span> + noun
    </template>
    <template #related>
      <div class="related-mb">
        Other common particles:
      </div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: to.slug } }" class="link">{{ to.title + " (and, with)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ni.slug } }" class="link">{{ ni.title + " (location, movement)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: de.slug } }" class="link">{{ de.title + " (location of action)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: ha.slug } }" class="link">{{ ha.title + " (topic particle)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: he.slug } }" class="link">{{ he.title + " (direction particle)" }}</RouterLink></div>
      <div class="related-mb">- <RouterLink :to="{ name: 'grammarLoader', params: { slug: wo.slug } }" class="link">{{ wo.title + " (direct object particle)" }}</RouterLink></div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: mo.slug } }" class="link">{{ mo.title + " (also, too)" }}</RouterLink></div>
    </template>
    <template #explanation>
      The particle <span class="g">や</span> is used to connect nouns in a non-exhaustive list.
      It means "A and B and so on", indicating that the items mentioned are examples rather than the complete set.

      <GrammarExample>
        <template #example>
          りんご<span class="g">や</span>バナナ
        </template>
        <template #translation>
          Apples, bananas, and such
        </template>
      </GrammarExample>

      When listing more than two items, <span class="g">や</span> is used between each item. Unlike in English, commas are not used in Japanese lists.

      <GrammarExample>
        <template #example>
          <ruby>本<rt>ほん</rt></ruby><span class="g">や</span>ノート<span class="g">や</span>ペンを<ruby>買<rt>か</rt></ruby>った
        </template>
        <template #translation>
          I bought books, notebooks, pens, and so on
        </template>
      </GrammarExample>

      The key feature of <span class="g">や</span> is that it does not list everything.
      <ul>
        <li>パスタ<span class="g">や</span>ピザ → pasta and pizza (and other similar things)</li>
      </ul>
      Compare this with <RouterLink :to="{ name: 'grammarLoader', params: { slug: to.slug } }" class="link">{{ to.title }}</RouterLink>,
      which would imply only pasta and pizza.

      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">や</span>, like と, connects nouns only. It cannot be used to connect clauses or verbs.
      </div>

      <div class="section">
        <div class="grammar-subtitle">Casual variant とか</div>
        The particle-like expression <span class="g">とか</span> also connects nouns in a non-exhaustive, example-based list.
        It is similar to <span class="g">や</span> but is more casual, softer, and often used in everyday speech to give loose examples.
        <GrammarExample>
          <template #example>
            映画<span class="g">とか</span>音楽<span class="g">とか</span>が好きです
          </template>
          <template #translation>
            I like things like movies and music
          </template>
          <template #note>
            とか can be added after each item to sound even more casual or hesitant
          </template>
        </GrammarExample>

        Unlike <span class="g">や</span>, <span class="g">とか</span> can follow just one noun to imply "things like...".
        <GrammarExample>
          <template #example>
            パスタ<span class="g">とか</span><ruby>食<rt>た</rt></ruby>べたい
          </template>
          <template #translation>
            I want to eat things like pasta
          </template>
        </GrammarExample>

        It can also attach to verbs and clauses in colloquial language, which <span class="g">や</span> cannot do.
        <GrammarExample>
          <template #example>
            <ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>る<span class="g">とか</span>して<ruby>過<rt>す</rt></ruby>ごした
          </template>
          <template #translation>
            I spent my time doing things like watching movies
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
