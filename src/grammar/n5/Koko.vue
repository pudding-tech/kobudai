<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { koko as meta, kore, kono } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <span class="grammar-highlight">ここ</span> (near the speaker)<br>
      <span class="grammar-highlight">そこ</span> (near the listener)<br>
      <span class="grammar-highlight">あそこ</span> (away from both speaker and listener)<br>
      <span class="grammar-highlight">どこ</span>
    </template>
    <template #related>
      <div class="related-mb">
        Other "ko-so-a-do" groups:
      </div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: kore.slug } }" class="link">{{ kore.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: kono.slug } }" class="link">{{ kono.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <span class="g">ここ</span>, <span class="g">そこ</span>, <span class="g">あそこ</span>, and <span class="g">どこ</span> are used to indicate where something is located relative to the people in conversation.
      <br><br>
      <span class="g">ここ</span> means "here" and refers to a place near the speaker.
      <GrammarExample>
        <template #example>
          <span class="g">ここ</span>は<ruby>静<rt>しず</rt></ruby>かです
        </template>
        <template #translation>
          It is quiet here
        </template>
      </GrammarExample>

      <span class="g">そこ</span> means "there" and refers to a place near the listener.
      <GrammarExample>
        <template #example>
          <span class="g">そこ</span>はコンビニですか
        </template>
        <template #translation>
          Is there a convenience store there?
        </template>
      </GrammarExample>
      
      <span class="g">あそこ</span> means "over there" for a place far from both the speaker and listener.
      <GrammarExample>
        <template #example>
          <span class="g">あそこ</span>は<ruby>公園<rt>こうえん</rt></ruby>です
        </template>
        <template #translation>
          That over there is a park
        </template>
      </GrammarExample>

      <span class="g">どこ</span> means "where" and is used to ask about locations.
      <GrammarExample>
        <template #example>
          トイレは<span class="g">どこ</span>ですか
        </template>
        <template #translation>
          Where is the bathroom?
        </template>
      </GrammarExample>
    </template>
  </GrammarStructure>
</template>
