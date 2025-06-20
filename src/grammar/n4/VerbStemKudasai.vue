<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { verbStemKudasai as meta, sonkeigo } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div class="structure-title top">For regular verbs</div>
      <span class="grammar-highlight">お</span> + verb (ます stem) + <span class="grammar-highlight">ください</span>
      <div class="structure-title">For する-verbs</div>
      <span class="grammar-highlight">ご</span> + noun + <span class="grammar-highlight">ください</span>
      <div class="structure-title">For honorific verbs ending in になる</div>
      <span class="grammar-highlight">お</span> + verb (ます stem) + <span class="grammar-highlight">ください</span>
    </template>
    <template #related>
      Based on the honorific form <RouterLink :to="{ name: 'grammarLoader', params: { slug: sonkeigo.slug } }" class="link">{{ sonkeigo.title }}</RouterLink>
    </template>
    <template #explanation>
      The honorific request form is part of <RouterLink :to="{ name: 'grammarLoader', params: { slug: sonkeigo.slug } }" class="link">sonkeigo (尊敬語)</RouterLink>,
      the honorific form of speech in Japanese. Sonkeigo is used to show respect by elevating the actions of others — typically someone of higher status,
      such as a customer, teacher, or boss. In this case, you're respectfully asking
      the other person to do something, not by commanding, but by wrapping the request in honorific language.
      <br><br>
      The exact structure of the request form depends on the verb type:
      <ul>
        <li>For regular verbs:</li>
        <div class="mb"><span class="g">お</span> + verb (ます stem) + <span class="g">ください</span></div>
        <li>For する-verbs:</li>
        <div class="mb"><span class="g">ご</span> + noun + <span class="g">ください</span></div>
        <li>For honorific verbs ending in になる:</li>
        <span class="g">お</span> + verb (ます stem) + <span class="g">ください</span>
      </ul>
      This structure is used in formal or public-facing situations where politeness is expected or necessary, meaning it is
      commonly used in customer service, like public announcements or when addressing customers directly.
      <div class="note">
        <div class="note-title">Note:</div>
        Although these expressions end with ください, it's more accurate to think of them as polite commands rather than requests.
        When someone says お〜ください, they're typically encouraging you to do something for your own benefit. That's why it would be inappropriate
        to use this form when asking someone to do something for your own sake, like passing the salt — a standard
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: null } }" class="link">〜てください</RouterLink> would be more suitable in that case.
      </div>
      <GrammarExample>
        <template #example>
          <ruby>少々<rt>しょうしょう</rt></ruby><span class="g">お<ruby>待<rt>ま</rt></ruby>ちください</span>
        </template>
        <template #translation>
          Please wait a moment
        </template>
        <template #note>
          A common phrase used in customer service
        </template>
      </GrammarExample>
      When using honorific verbs (sonkeigo) that end in になる, drop the になる and treat the remaining part like a regular verb.
      <GrammarExample>
        <template #example>
          こちらを<span class="g">ご<ruby>覧<rt>らん</rt></ruby>ください</span>
        </template>
        <template #translation>
          Please take a look at this
        </template>
        <template #note>
          Note the removal of になる from ご覧になる
        </template>
      </GrammarExample>

      <div class="section">
        <div class="grammar-subtitle">For する-verbs</div>
        Not all する-verbs can be used in the <span class="g">ご</span> + noun + <span class="g">ください</span> structure. This polite form is typically used with
        verbs that are more formal, often seen in business or customer service contexts. For example, verbs like 勉強する (べんきょうする, to study)
        or 運動する (うんどうする, to exercise) don't normally appear in this form, because the expression wouldn't sound natural or appropriate.
        <br><br>
        Instead, you'd just use
        the standard polite request form, like 勉強してください. So while the pattern is useful and common, it's best to learn which combinations are actually used.
        <GrammarExample>
          <template #example>
            お<ruby>足元<rt>あしもと</rt></ruby>に<span class="g">ご<ruby>注意<rt>ちゅうい</rt></ruby>ください</span>
          </template>
          <template #translation>
            Please watch your step
          </template>
          <template #note>
            Often heard in public transport announcements
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>駅<rt>えき</rt></ruby>のエレベーターを<span class="g">ご<ruby>利用<rt>りよう</rt></ruby>ください</span>
          </template>
          <template #translation>
            Please use the station elevator
          </template>
          <template #note>
            <ruby>利用<rt>りよう</rt></ruby> is very commonly used in this form
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.mb {
  margin-bottom: 16px;
}
</style>
