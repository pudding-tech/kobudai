<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { causativeSentences as meta, causativeVerbs } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div>(Commander) <span class="h">は</span>/<span class="h">が</span> + (doer) <span class="h">に</span> + (object) <span class="h">を</span> + <span class="g">(causative verb)</span></div>
    </template>
    <template #related>
      Based on the <RouterLink :to="{ name: 'grammarLoader', params: { slug: causativeVerbs.slug } }" class="link">{{ causativeVerbs.title }}</RouterLink> form
    </template>
    <template #explanation>
      Causative sentences express making or letting someone do something. They show that the subject is not doing the action willingly,
      but rather because someone else caused or allowed them to do it. The nuance depends on context and verb choice.

      <div class="section">
        <div class="grammar-title">Making Someone do Something (Force, Instruction, or Authority)</div>
        In this usage, the subject causes another person to perform an action.
        <ul>
          <li>[Commander] <span class="h">は</span> [doer] <span class="h">に</span>/<span class="h">を</span> <span class="g">[action - causative verb]</span></li>
        </ul>
        <GrammarExample>
          <template #example>
            <ruby>私<rt>わたし</rt></ruby><span class="h">は</span><ruby>弟<rt>おとうと</rt></ruby><span class="h">に</span><ruby>野菜<rt>やさい</rt></ruby><span class="h">を</span><span class="g"><ruby>食<rt>た</rt></ruby>べさせた</span>
          </template>
          <template #translation>
            I made my little brother eat his vegetables
          </template>
        </GrammarExample>
        This version typically uses the <span class="h">に</span> particle to mark the person being made to act (the "doer"). In some cases, the <span class="h">を</span> particle
        can also be used to mark the doer — see the "To Make or to Let?" section below for details.
      </div>

      <div class="section">
        <div class="grammar-title">Letting Someone do Something (Permission or Allowance)</div>
        Causative sentences can also show that someone is allowed to do something.
        <ul>
          <li>[Commander] <span class="h">は</span> [doer] <span class="h">に</span> <span class="g">[action - causative verb]</span></li>
        </ul>
        But the nuance here is permissive — not forcing, but allowing.
        <GrammarExample>
          <template #example>
            <ruby>父<rt>ちち</rt></ruby><span class="h">は</span><ruby>私<rt>わたし</rt></ruby><span class="h">に</span><ruby>車<rt>くるま</rt></ruby><span class="h">を</span><span class="g"><ruby>運転<rt>うんてん</rt></ruby>させた</span>
          </template>
          <template #translation>
            My father let me drive the car
          </template>
          <template #note>
            Could also be interpreted as "My father made me drive the car"
          </template>
        </GrammarExample>
        When someone lets you do something for your benefit, a causative verb is often paired with くれる or もらう, which implies the "let" meaning of the sentence.
        <GrammarExample>
          <template #example>
            <ruby>部長<rt>ぶちょう</rt></ruby><span class="h">は</span><ruby>私<rt>わたし</rt></ruby><span class="h">に</span><span class="g"><ruby>発表<rt>はっぴょう</rt></ruby>させてくれた</span>
          </template>
          <template #translation>
            The manager let me give the presentation
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-title">To Make or to Let?</div>
        The meaning of a causative sentence — whether it means "to make" or "to let" someone do something — depends largely on context and the type of verb used.
        If the verb naturally implies control, obligation, or authority (such as 勉強させる, "to make someone study"), the sentence likely expresses making someone do something.
        <div class="note">
          <div class="note-title">Note:</div>
          However, there's a useful grammatical hint when the causative verb is formed from an intransitive verb (a verb that does not take a direct object). In these cases:
          <ul>
            <li>If the sentence means "make someone do something", the doer is often marked with <span class="h">を</span> instead of the more typical <span class="h">に</span>.</li>
            <li>If it means "let someone do something", the doer is usually marked with <span class="h">に</span>.</li>
          </ul>
          This particle shift is a subtle but helpful clue to distinguishing between permission and compulsion, especially when dealing with intransitive verbs.
        </div>
        <GrammarExample>
          <template #example>
            <ruby>先生<rt>せんせい</rt></ruby><span class="h">は</span><ruby>学生<rt>がくせい</rt></ruby><span class="h">を</span><span class="g"><ruby>座<rt>すわ</rt></ruby>らさた</span>
          </template>
          <template #translation>
            The teacher made the student sit down
          </template>
          <template #note>
            Implies "forced" or "ordered" because the student is marked with を
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>先生<rt>せんせい</rt></ruby><span class="h">は</span><ruby>学生<rt>がくせい</rt></ruby><span class="h">に</span><span class="g"><ruby>座<rt>すわ</rt></ruby>らさた</span>
          </template>
          <template #translation>
            The teacher let the student sit down
          </template>
          <template #note>
            Implies "permission" or "allowance" because the student is marked with に
          </template>
        </GrammarExample>
        With transitive verbs, which naturally take a direct object, the doer in a causative sentence is always marked with <span class="h">に</span> — so the intended
        meaning must be understood from context.
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.particles-table {
  border-collapse: collapse; 
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: left;

  tr:not(:last-child) {
    border-bottom: 1px solid #cccccc24;
  }

  th, td {
    padding: 8px 8px;
  }
}
</style>
