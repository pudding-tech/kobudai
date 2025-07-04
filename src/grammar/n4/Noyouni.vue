<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { noyouni as meta, youda } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div class="structure-title small top">Done like "A", or a charcteristic like "A"</div>
      <div>Noun A + <span class="grammar-highlight">のように</span> + verb/adjective</div>
      <div class="structure-title small">A "B" like "A"</div>
      <div>Noun A + <span class="grammar-highlight">のような</span> + noun B</div>
    </template>
    <template #related>
      <div class="related-mb">See also:</div>
      <div>- <RouterLink :to="{ name: 'grammarLoader', params: { slug: youda.slug } }" class="link">{{ youda.title }}</RouterLink></div>
    </template>
    <template #explanation>
      Both <span class="g">のように</span> and <span class="g">のような</span> are used to express similarity or likeness,
      meaning "like [something]" or "as if [something]".
      <br><br>
      They are often used to form similes in Japanese, comparing one thing to another. <span class="g">のように</span> modifies verbs or adjectives,
      describing how something is done or appears, while <span class="g">のような</span> modifies nouns to describe what kind of thing something is like.
      <div class="note">
        <div class="note-title">Note:</div>
        The expressions <span class="g">のように</span> and <span class="g">のような</span> come from the noun よう, which is also used in the grammar pattern
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: youda.slug } }" class="link">{{ youda.title }}</RouterLink> to express similarity
        or appearance ("seems like").
        When よう is preceded by another noun, の is used to connect them, forming [noun] のよう — meaning "like [noun]" or "as [noun]".
        Adding に or な to this allows the phrase to modify verbs/adjectives or nouns, respectively.
      </div>

      <div class="section">
        <div class="grammar-title">のように</div>
        The expression <span class="g">のように</span> is used to describe the manner in which something is done, by comparing it to a noun.
        It means "like…" or "as if…", and is used to modify verbs or adjectives.
        <ul>
          <li>Noun + <span class="g">のように</span> + verb / adjective</li>
        </ul>
        <GrammarExample>
          <template #example>
            その<ruby>子供<rt>こども</rt></ruby>はサル<span class="g">のように</span><ruby>登<rt>のぼ</rt></ruby>る
          </template>
          <template #translation>
            That child climbs like a monkey
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>光<rt>ひかり</rt></ruby><span class="g">のように</span><ruby>早<rt>はや</rt></ruby>い
          </template>
          <template #translation>
            As fast as light
          </template>
        </GrammarExample>
        This structure always compares an action or quality to a noun, and emphasizes how something happens or appears.
      </div>

      <div class="section">
        <div class="grammar-title">のような</div>
        The expression <span class="g">のような</span> is used to describe or modify nouns by comparing them to another noun.
        It can be translated as "like…", "such as…", or "that kind of…" in English.
        <ul>
          <li>Noun + <span class="g">のような</span> + noun</li>
        </ul>
        <span class="g">のような</span> is often used to describe a noun as being of the type or kind of something else,
        like saying "a [B] of the kind [A]" (e.g., "a city like Tokyo").
        In contrast, <span class="g">のように</span> expresses how an action is done or in what manner. While both express
        similarity, <span class="g">のような</span> focuses on what kind of thing something is, whereas
        <span class="g">のように</span> focuses on how something happens.
        <GrammarExample>
          <template #example>
            サル<span class="g">のような</span><ruby>動物<rt>どうぶつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです
          </template>
          <template #translation>
            I like animals like monkeys
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>天使<rt>てんし</rt></ruby><span class="g">のような</span><ruby>笑顔<rt>えがお</rt></ruby>
          </template>
          <template #translation>
            A smile like an angel's
          </template>
        </GrammarExample>
        This structure lets you describe one thing by saying it is like or similar to something else,
        and it's often used in descriptive or comparative contexts.
      </div>
    </template>
  </GrammarStructure>
</template>
