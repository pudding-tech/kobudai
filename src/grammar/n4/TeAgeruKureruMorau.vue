<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teAgeruKureruMorau as meta, ageruKureruMorau } from "../n4/metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(polite) => isPolite = polite">
    <template #title> {{ meta.title }}</template>
    <template #subtitle> {{ meta.subtitle }}</template>
    <template #structure>
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">あげ<span v-if="isPolite">ます</span><span v-else>る</span></span></div>
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">くれ<span v-if="isPolite">ます</span><span v-else>る</span></span></div>
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">もら<span v-if="isPolite">います</span><span v-else>う</span></span></div>
    </template>
    <template #related>
      <div class="related-mb">Giving and receiving:</div>
      - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ageruKureruMorau.slug } }" class="link">{{ ageruKureruMorau.title }}</RouterLink>
    </template>
    <template #explanation>
      <span class="g">～てあげる</span>, <span class="g">～てくれる</span>, and <span class="g">～てもらう</span> describe someone doing a favor for someone else.
      The verbs <span class="g">あげる</span>, <span class="g">くれる</span>, and <span class="g">もらう</span> are commonly used to show who benefits from the action,
      and the ～て form of a verb is used to attach them.
      <br><br>
      Depending on who is doing the action and who benefits from it, different helper verbs are used after the て-form of a verb:
      <ul>
        <li><span class="g">あげる</span> is used when you or someone gives help to others.</li>
        <li><span class="g">くれる</span> is used when someone gives help to you.</li>
        <li><span class="g">もらう</span> is used when you get someone to help you.</li>
      </ul>

      <div class="section">
        <div class="grammar-subtitle">～てあげる — I do for someone else, Someone does for someone else</div>
        <span class="g">～てあげる</span> is used when you do something for someone, or one person does something for another (from the speaker's point of view).
        The benefactor of the favor is marked by the particle に, while the doer of the favor is marked by は or が, though often omitted if clear from context.
        <GrammarExample>
          <template #example>
            <ruby>友達<rt>ともだち</rt></ruby>に<ruby>夜<rt>よる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>っ<span class="g">てあげる</span>
          </template>
          <template #translation>
            (I) will make dinner for my friend
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">～てくれる — Someone does something for me / someone close to me</div>
        Used when someone does something for the speaker, or for someone close to the speaker (like family or a close friend).
        The benefactor of the favor is marked by the particle に, though typically omitted as it's usually the speaker. The doer of the favor is marked by は or が.
        <GrammarExample>
          <template #example>
            <ruby>友達<rt>ともだち</rt></ruby>が<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>っ<span class="g">てくれた</span>
          </template>
          <template #translation>
            My friend helped me with my homework
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">～てもらう — I get someone doing something for me</div>
        Used when you receive a favor of someone doing something for you (or someone close to you).
        <div class="note">
          <div class="note-title">Note:</div>
          <span class="g">～てもらう</span> has a nuance of implying that you want to have someone do something for you, or that you are asking someone to do something for you.
        </div>
        <GrammarExample>
          <template #example>
            <ruby>友達<rt>ともだち</rt></ruby>に<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>っ<span class="g">てもらった</span>
          </template>
          <template #translation>
            I had my friend help me with my homework
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
