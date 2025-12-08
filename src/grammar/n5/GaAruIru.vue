<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { gaAruIru as meta } from "./metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.titlePlain ?? meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div>Noun + <span class="grammar-highlight">が</span> + <span class="grammar-highlight"><ruby>有<rt>あ</rt></ruby><span v-if="isPolite">ります</span><span v-else>る</span></span></div>
      <div>Noun + <span class="grammar-highlight">が</span> + <span class="grammar-highlight"><ruby>居<rt>い</rt></ruby><span v-if="isPolite">ます</span><span v-else>る</span></span></div>
    </template>
    <template #explanation>
      The expressions <span class="g">～が<ruby>有<rt>あ</rt></ruby>る</span> and <span class="g">～が<ruby>居<rt>い</rt></ruby>る</span>, often written in hiragana only
      (<span class="g">～がある</span> and <span class="g">～がいる</span>), are used to state that something exists or someone is present.
      They are essential structures for describing the presence, existence, or availability of things and people.
      <br><br>
      Both these verbs (<span class="g">ある</span> and <span class="g">いる</span>) mean the same ("to exist"), but they are used differently based on the type of noun that precedes them.
      <br><br>
      The particle <span class="g">が</span> marks the thing that exists — the subject of the existence sentence.
      Often the particle に precedes this structure to indicate the location where something or someone exists, but に is not always necessary.
      <div class="section">
        <div class="grammar-subtitle">～がある (inanimate objects)</div>
        The verb <span class="g">～が<ruby>有<rt>あ</rt></ruby>る</span> is used with non-living things, objects, places, events, and abstract concepts.
        <GrammarExample>
          <template #example>
            <ruby>公園<rt>こうえん</rt></ruby>が<span class="g">ある</span>
          </template>
          <template #translation>
            There is a park
          </template>
        </GrammarExample>
        <span class="g">ある</span> is a godan verb, so its polite form becomes <span class="g">あります</span>.
        <GrammarExample>
          <template #example>
            <ruby>明日<rt>あした</rt>、</ruby>テストが<span class="g">あります</span>
          </template>
          <template #translation>
            There is a test tomorrow
          </template>
        </GrammarExample>
      </div>
      <div class="section">
        <div class="grammar-subtitle">～がいる (animate beings)</div>
        The verb <span class="g">～が<ruby>居<rt>い</rt></ruby>る</span> is used with living beings, such as people and animals. This includes fictional characters as well.
        <GrammarExample>
          <template #example>
            <ruby>公園<rt>こうえん</rt></ruby>に<ruby>猫<rt>ねこ</rt></ruby>が<span class="g">いる</span>
          </template>
          <template #translation>
            There is a cat in the park
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          Interestingly, plants and trees use <span class="g">ある</span>, despite being living organisms,
          because they are considered immobile and therefore grammatically treated as inanimate for this structure.
        </div>
        <span class="g">いる</span> is an ichidan verb, so its polite form is <span class="g">います</span>.
        <GrammarExample>
          <template #example>
            <ruby>友達<rt>ともだち</rt></ruby>が<span class="g">います</span>
          </template>
          <template #translation>
            There is a friend / I have a friend
          </template>
        </GrammarExample>
      </div>
      You may notice the last example's translation includes "I have a friend", which leads to an important additional meaning of this structure.

      <div class="section">
        <div class="grammar-subtitle">The additional meaning: "I have …"</div>
        <!-- In Japanese, possession is often expressed using the same existence structure:
        <ul>
          <li>[Location] に + [thing/person] + <span class="g">が</span> + <span class="g">ある</span>／<span class="g">いる</span></li>
        </ul> -->
        Japanese does not use a verb equivalent to English "to have" for basic possession. Instead, it expresses possession
        by stating that something exists in the speaker's world — and the listener understands it as "I have...".
        When the location is implicit (often the speaker's personal sphere), the sentence naturally takes on the meaning "I have...".
        <GrammarExample>
          <template #example>
            お<ruby>金<rt>かね</rt></ruby>が<span class="g">ある</span>
          </template>
          <template #translation>
            I have money
          </template>
          <template #note>
            Literally, "there is money"
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>犬<rt>いぬ</rt></ruby>が<span class="g">います</span>
          </template>
          <template #translation>
            I have a dog
          </template>
          <template #note>
            Literally, "there is a dog"
          </template>
        </GrammarExample>
        <!-- Japanese does not use a verb equivalent to English "to have" for basic possession.
        Instead, it expresses possession by stating that something exists in the speaker's world —
        and the listener understands it as "I have...". -->
      </div>
    </template>
  </GrammarStructure>
</template>
