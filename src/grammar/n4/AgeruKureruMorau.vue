<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { ageruKureruMorau as meta, teAgeruKureruMorau } from "../n4/metadataN4";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta" :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #structure>
      <div>Giver + は／が + Receiver + に + <span class="grammar-highlight">あげ<span v-if="isPolite">ます</span><span v-else>る</span></span></div>
      <div>Giver + は／が + Receiver + に + <span class="grammar-highlight">くれ<span v-if="isPolite">ます</span><span v-else>る</span></span></div>
      <div>Receiver + は／が + Giver + に／から + <span class="grammar-highlight">もら<span v-if="isPolite">います</span><span v-else>う</span></span></div>
    </template>
    <template #related>
      See also <RouterLink :to="{ name: 'grammarLoader', params: { slug: teAgeruKureruMorau.slug } }" class="link">{{ teAgeruKureruMorau.title }}</RouterLink>
    </template>
    <template #explanation>
      The act of giving and receiving in Japanese depends not only on who gives and who receives, but also on the speaker's relationship to the people involved.
      <span class="g">あげる</span> and <span class="g">くれる</span> both mean 'to give', but they are used in different contexts depending on the direction of the action relative to the speaker.
      <span class="g">もらう</span> means 'to receive', and is used when the speaker (or someone close to them) is the receiver.
      <div class="note">
        <div class="note-title">Note:</div>
        <span class="g">もらう</span> is a godan verb. <span class="g">あげる</span> and <span class="g">くれる</span> are both ichidan verbs, and conjugate as such.
      </div>
      These verbs are more than just vocabulary — they reflect how relationships and social awareness work in Japanese.
      Choosing the right verb shows not only who gave or received something, but also where the speaker stands in the interaction.
      This includes whether someone is part of your "in-group" (like family or coworkers) or an outsider,
      and whether you're speaking from your own perspective or considering someone else's.

      <div class="section">
        <div class="grammar-subtitle">あげる — 'To give' (from me/us to others)</div>
        <span class="g">あげる</span> is used when the giver is the speaker (or someone in the speaker's group), and the receiver is someone else.
        <ul>
          <li>[giver] は [receiver] に あげる</li>
        </ul>
        Think of this as giving "away from the speaker".
        <GrammarExample>
          <template #example>
            <ruby>私<rt>わたし</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>に<span class="g">あげる</span>
          </template>
          <template #translation>
            I give (something) to my friend.
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          <span class="g">あげる</span> is also used when two people you don't know well give something to each other.
        </div>
        <GrammarExample>
          <template #example>
            AさんはBさんにちょっと<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>を<span class="g">あげた</span>
          </template>
          <template #translation>
            Person A gave a bit food to person B
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">くれる — 'To give' (to me/us)</div>
        <span class="g">くれる</span> is used when someone gives something to the speaker or someone close to the speaker (in the speaker's "in-group").
        <ul>
          <li>[giver] は [receiver (me/someone close)] に くれる</li>
        </ul>
        Think of this as giving "toward the speaker". For this reason, it should not be used when the giver and receiver are both outside the speaker's "in-group".
        <GrammarExample>
          <template #example>
            <ruby>友達<rt>ともだち</rt></ruby>が<ruby>私<rt>わたし</rt></ruby>に<span class="g">くれる</span>
          </template>
          <template #translation>
            My friend will give (something) to me.
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          When the receiver is obviously "me", it's often left out:
        </div>
        <GrammarExample>
          <template #example>
            <ruby>友達<rt>ともだち</rt></ruby>がプレゼントを<span class="g">くれた</span>
          </template>
          <template #translation>
            My friend gave (me) a present
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">もらう — 'To receive'</div>
        <span class="g">もらう</span> is used when you (or someone close to you) receive something from someone.
        <ul>
          <li>[receiver] は [giver] に／から <span class="g">もらう</span></li>
        </ul>
        The subject is the receiver, and the action is "receiving". You can use に or から to mark the giver. They are more or less interchangeable,
        though から emphasizes the source slightly more explicitly.
        <GrammarExample>
          <template #example>
            <ruby>私<rt>わたし</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>から<span class="g">もらう</span>
          </template>
          <template #translation>
            I receive (something) from my friend
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          <span class="g">もらう</span> is only used when the speaker is the one receiving something, or when the receiver is someone emotionally close to the speaker (like a family member or close friend).
          It expresses the act of receiving from the receiver's perspective. For that reason, it's generally not used to describe a third person receiving something —
          unless the speaker is deliberately adopting their point of view.
        </div>
        <GrammarExample>
          <template #example>
            <ruby>弟<rt>おとうと</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>からプレゼントを<span class="g">もらった</span>
          </template>
          <template #translation>
            My younger brother received a present from a friend
          </template>
          <template #note>
            This is okay if the brother is considered "in-group" or the speaker is close to them
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">くれる vs もらう — Different views of the same action</div>
        At their core, <span class="g">もらう</span> and <span class="g">くれる</span> describe the same situation — you receiving something — but they highlight different
        sides of it depending on what you want to emphasize.
        The key difference is whether you focus on you, the receiver (<span class="g">もらう</span>), or the giver (<span class="g">くれる</span>) as the topic or subject of the sentence.
        <br><br>
        Take a look at these sentences, both describing the same event:
        <GrammarExample>
          <template #example>
            <ruby>田中<rt>たなか</rt></ruby>さんから<ruby>本<rt>ほん</rt></ruby>を<span class="g">もらいました</span>
          </template>
          <template #translation>
            (I) received a book from Tanaka-san
          </template>
          <template #note>
            From your perspective — focusing on <b>yourself</b> as the receiver
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>田中<rt>たなか</rt></ruby>さんが<ruby>本<rt>ほん</rt></ruby>を<span class="g">くれました</span>
          </template>
          <template #translation>
            Tanaka-san gave (me) a book
          </template>
          <template #note>
            From your perspective — focusing on <b>Tanaka-san</b> as the giver
          </template>
        </GrammarExample>
        Remember, you don't generally speak from other people's perspectives in Japanese — so both of these are still describing the situation from <i>your</i> point of view.
      </div>
    </template>
  </GrammarStructure>
</template>
