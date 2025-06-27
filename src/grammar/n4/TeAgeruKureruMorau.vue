<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { teAgeruKureruMorau as meta, ageruKureruMorau, kenjougo, teItadakemasenka } from "./metadataN4";
  import { masenka, teVerb } from "../n5/metadataN5";

  const isPolite = ref(false);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" @politeness-change="(value) => isPolite = value">
    <template #title> {{ meta.title }}</template>
    <template #subtitle> {{ meta.subtitle }}</template>
    <template #structure>
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">あげ<span v-if="isPolite">ます</span><span v-else>る</span></span></div>
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">くれ<span v-if="isPolite">ます</span><span v-else>る</span></span></div>
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">もら<span v-if="isPolite">います</span><span v-else>う</span></span></div>
      <div class="structure-title">In questions</div>
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">あげ<span v-if="isPolite">ましょうか</span><span v-else>ようか</span>？</span></div>
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">くれ<span v-if="isPolite">ませんか</span><span v-else>ない</span>？</span></div>
      <div>Verb (<span class="grammar-highlight">て-form</span>) + <span class="grammar-highlight">もら<span v-if="isPolite">えませんか</span><span v-else>えない</span>？</span></div>
    </template>
    <template #related>
      <div class="related-mb">Based on:</div>
      <div class="related-mb">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teVerb.slug } }" class="link">{{ teVerb.title }}</RouterLink>
      </div>
      <div style="margin-bottom: 20px">
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: ageruKureruMorau.slug } }" class="link">{{ ageruKureruMorau.title }}</RouterLink>
      </div>
      <div class="related-mb">Humble way of asking with ～てもらう:</div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teItadakemasenka.slug } }" class="link">{{ teItadakemasenka.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      <span class="g">～てあげる</span>, <span class="g">～てくれる</span>, and <span class="g">～てもらう</span> are used to describe someone doing a favor for someone else.
      The verbs <span class="g">あげる</span>, <span class="g">くれる</span>, and <span class="g">もらう</span> help indicate who is performing the action
      and who is benefiting from it. These patterns use the ～て form to link the main action to the "giver" or "receiver",
      effectively expressing the act of giving or receiving help or services.
      <br><br>
      Depending on who performs the action and who benefits from it, the appropriate support verb is added after the て-form:
      <ul>
        <li><span class="g">あげる</span> is used when you or someone gives help to others.</li>
        <li><span class="g">くれる</span> is used when someone gives help to you.</li>
        <li><span class="g">もらう</span> is used when you get someone to help you.</li>
      </ul>
      At first, these added verbs might seem like they don't change the core meaning much — and in a way, that is true. But they add an important nuance by clarifying
      the relationship between the person doing the action and the one benefiting from it, which is important in Japanese. These support verbs show who
      is giving or receiving a favor. You can think of them as adding the meaning "for (someone's) sake" to the action.

      <div class="section">
        <div class="grammar-title">～てあげる — I do for someone else, Someone does for someone else</div>
        <span class="g">～てあげる</span> is used when you do something for someone, or one person does something for another (from the speaker's point of view).
        The benefactor of the favor is marked by the particle に, while the doer of the favor is marked by は or が, though often omitted if clear from context.
        <GrammarExample>
          <template #example>
            <ruby>友達<rt>ともだち</rt></ruby>に<ruby>夜<rt>よる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>っ<span class="g">てあげる</span>
          </template>
          <template #translation>
            I will make dinner for my friend (as a favor)
          </template>
          <template #note>
            The nuance in ～てあげる is that you are doing something for someone else's benefit. It highlights that you are offering help or kindness to the other person.
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-title">～てくれる — Someone does something for me / someone close to me</div>
        Used when someone does something for the speaker, or for someone close to the speaker (like family or a close friend).
        The benefactor of the favor is marked by the particle に, though typically omitted as it's usually the speaker. The doer of the favor is marked by は or が.
        <GrammarExample>
          <template #example>
            <ruby>友達<rt>ともだち</rt></ruby>が<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>っ<span class="g">てくれた</span>
          </template>
          <template #translation>
            My friend helped me with my homework (for my sake)
          </template>
          <template #note>
            The nuance in ～てくれる is that the favor was done "for my benefit", not just as a neutral action. It emphasizes that the person helped me, not just that they helped.
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-title">～てもらう — I get someone doing something for me</div>
        Used when you receive a favor of someone doing something for you (or someone close to you).
        <div class="note">
          <div class="note-title">Note:</div>
          The <span class="g">～てもらう</span> construction carries the nuance that you receive a favor or help from someone, often implying that you either wanted,
          asked for, or arranged for that person to do something on your behalf. It emphasizes your role as the beneficiary of the action and can
          suggest that the favor was done with your request or permission. This makes <span class="g">～てもらう</span> useful for expressing gratitude,
          reliance, or acknowledgment of someone's assistance.
        </div>
        <GrammarExample>
          <template #example>
            <ruby>友達<rt>ともだち</rt></ruby>に<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>っ<span class="g">てもらった</span>
          </template>
          <template #translation>
            I had my friend help me with my homework (for my sake)
          </template>
          <template #note>
            The nuance in ～てもらう is that you requested or received help from someone. It emphasizes that you benefited from their action,
            often implying that you asked for the favor or that it was done at your request.
          </template>
        </GrammarExample>
      </div>
      
      <div class="section">
        <div class="grammar-title">Using ～てあげる、～てくれる、～てもらう in Questions</div>
        The support verbs <span class="g">～てあげる</span>、<span class="g">～てくれる</span>、and <span class="g">～てもらう</span> can also be used
        in questions to offer or request help — though each is used differently, with distinct nuances in question form.
        <div class="section">
          <div class="grammar-subtitle">～てあげる in questions</div>
          Questions with <span class="g">～てあげる</span> can be used when offering to help someone.
          <div class="note">
            <div class="note-title">Note:</div>
            It can sound a little presumptive if used with strangers, since it puts you in the role of the "giver".
            Unless you know the person well, it's better to use another support verb.
          </div>
          When used in questions,  <span class="g">あげる</span> is usually in the volitional form, as it softens the offer and makes it sound more natural.
          Saying for example 手伝っ<span class="g">てあげる</span>？ (てつだってあげる？, "Will I do the favor of helping you?") sounds odd or even arrogant in most situations.
          <GrammarExample>
            <template #example>
              <ruby>手伝<rt>てつだ</rt></ruby>っ<span class="g">てあげよう</span>か？
            </template>
            <template #translation>
              Shall I help you (as a favor)?
            </template>
            <template #note>
              Emphasizing yourself as the one giving a favor is not always appropriate - use this construction with care
            </template>
          </GrammarExample>
        </div>
        <div class="section">
          <div class="grammar-subtitle">～てくれる in questions</div>
          With <span class="g">～てくれる</span> in questions, you're asking someone to do something for you — a favor.
          <div class="note">
            <div class="note-title">Note:</div>
            It's most commonly used in the negative form, as this sounds more polite and indirect — similar to how
            <RouterLink :to="{ name: 'grammarLoader', params: { slug: masenka.slug } }" class="link">{{ masenka.title }}</RouterLink>
            is used to make polite suggestions or invitations.
          </div>
          <GrammarExample>
            <template #example>
              ちょっと<ruby>待<rt>ま</rt></ruby>っ<span class="g">てくれない</span>？
            </template>
            <template #translation>
              Won't you wait a moment (for my sake)?
            </template>
            <template #note>
              Commonly used in both casual and polite contexts (くれない？ and くれませんか？).
            </template>
          </GrammarExample>
        </div>
        <div class="section">
          <div class="grammar-subtitle">～てもらう in questions</div>
          <span class="g">～てもらう</span> also means someone does something for you, but emphasizing the <i>receiving</i>, rather then giving.
          In questions, it adds a layer of indirection — you're not asking someone to do something directly, but rather asking
          to receive a favor. In Japanese, this extra distance softens the request and makes it more deferential.
          <br><br>
          Also, just like with <span class="g">～てくれる</span>, the negative form of <span class="g">～てもらう</span> is more commonly used in questions.
          <div class="note">
            <div class="note-title">Note:</div>
            When used in questions, it is more common to use the potential form of <span class="g">もらう</span> (もらえる) to make the request even softer and more polite.
            Instead of directly asking to receive, it asks if you may receive the favor, which adds distance and respect to the request.
          </div>
          <GrammarExample>
            <template #example>
              <ruby>明日<rt>あした</rt></ruby>、<ruby>駅<rt>えき</rt></ruby>まで<ruby>送<rt>おく</rt></ruby>っ<span class="g">てもらえません</span>か？
            </template>
            <template #translation>
              Would you mind taking me to the station tomorrow?
            </template>
            <template #note>
              Literally, "Would I not be able to receive the favor of being taken to the station tomorrow?" — this construction is very polite and indirect
            </template>
          </GrammarExample>
          <div class="note">
            <div class="note-title">Note:</div>
            For even more polite or formal situations — such as business settings or when speaking to someone of higher status — you can use
            <RouterLink :to="{ name: 'grammarLoader', params: { slug: teItadakemasenka.slug } }" class="link">{{ teItadakemasenka.title }}</RouterLink> instead.
            This version replaces もらう with its humble equivalent いただく (see
            <RouterLink :to="{ name: 'grammarLoader', params: { slug: kenjougo.slug } }" class="link">{{ kenjougo.title }}</RouterLink>),
            making the request more respectful by emphasizing the speaker's lower position.
          </div>
        </div>
      </div>
    </template>
  </GrammarStructure>
</template>
