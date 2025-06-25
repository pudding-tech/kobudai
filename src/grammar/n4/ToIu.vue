<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { toIu as meta, kenjougo, tte } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.titlePlain ?? meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>
      <span v-html="meta.title" />
    </template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      "Name" + <span class="grammar-highlight">と言う</span> + (noun)
    </template>
    <template #related>
      Can be used with informal quotation particle
      <RouterLink :to="{ name: 'grammarLoader', params: { slug: tte.slug } }" class="link">{{ tte.title }}</RouterLink>
    </template>
    <template #explanation>
      This grammar structure is used to name, define, or refer to something by its title, label, or name.
      It expresses what something is called or known as.
      <ul>
        <li>X <span class="g">と<ruby>言<rt>い</rt></ruby>う</span> Y</li>
        → a Y called X
      </ul>
      The noun after <span class="g">と<ruby>言<rt>い</rt></ruby>う</span> is typically a category or classification, such as a movie, book, person, or place.

      <GrammarExample>
        <template #example>
          <ruby>横浜<rt>よこはま</rt></ruby><span class="g">と<ruby>言<rt>い</rt></ruby>う</span><ruby>都市<rt>とし</rt></ruby>
        </template>
        <template #translation>
          A city called Yokohama
        </template>
      </GrammarExample>
      <GrammarExample>
        <template #example>
          ドン・キホーテ<span class="g">と<ruby>言<rt>い</rt></ruby>う</span><ruby>店<rt>みせ</rt></ruby>
        </template>
        <template #translation>
          A store called Don Quijote
        </template>
      </GrammarExample>

      This construction is very common when introducing new things, explaining terminology, or asking about names or titles.
      <GrammarExample>
        <template #example>
          「となりのトトロ」<span class="g">って<ruby>言<rt>い</rt></ruby>う</span><ruby>映画<rt>えいが</rt></ruby>を<ruby>知<rt>し</rt></ruby>っている？
        </template>
        <template #translation>
          Do you know a movie called "My Neighbor Totoro"?
        </template>
        <template #note>
          Here used with the informal quotation particle
          <RouterLink :to="{ name: 'grammarLoader', params: { slug: tte.slug } }" class="link">{{ tte.title }}</RouterLink>
        </template>
      </GrammarExample>

      It can also be used to refer to a person.
      <GrammarExample>
        <template #example>
          <ruby>田中<rt>たなか</rt></ruby><span class="g">と<ruby>言<rt>い</rt></ruby>う</span><ruby>人<rt>ひと</rt></ruby>
        </template>
        <template #translation>
          A person called Tanaka
        </template>
      </GrammarExample>

      <div class="note">
        <div class="note-title">Note:</div>
        This pattern can also be used when introducing yourself, especially in formal or polite contexts.
        In such cases, the humble verb <RouterLink :to="{ name: 'grammarLoader', params: { slug: kenjougo.slug } }" class="link"> 申す (もうす)</RouterLink>
        is preferred instead of <span class="g">言う</span>.
      </div>
      <GrammarExample>
        <template #example>
          ケン<span class="g">と<ruby>言<rt>い</rt></ruby>います</span>
        </template>
        <template #translation>
          My name is Ken
        </template>
        <template #note>
          More commonly used in the humble form と<ruby>申<rt>もう</rt></ruby>します
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
