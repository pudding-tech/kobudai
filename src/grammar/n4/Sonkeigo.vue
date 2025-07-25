<script setup lang="ts">
  import { ref } from "vue";
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { sonkeigo as meta, kenjougo, verbStemKudasai } from "./metadataN4";

  const isPolite = ref(true);
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :show-polite="true" :default-polite="true" @politeness-change="(value) => isPolite = value">
    <template #title>{{ meta.title }}</template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div class="kanji-mb">
        いる → <span class="grammar-highlight">いらっしゃ<span v-if="isPolite">います</span><span v-else>る</span></span>
      </div>
      <div class="kanji-mb">
        <ruby>行<rt>い</rt></ruby>く / <ruby>来<rt>く</rt></ruby>る → <span class="grammar-highlight">いらっしゃ<span v-if="isPolite">います</span><span v-else>る</span></span>
      </div>
      <div class="kanji-mb">
        <ruby>見<rt>み</rt></ruby>る → <span class="grammar-highlight">ご<ruby>覧<rt>らん</rt></ruby>にな<span v-if="isPolite">ります</span><span v-else>る</span></span>
      </div>
      <div class="kanji-mb">
        <ruby>言<rt>い</rt></ruby>う → <span class="grammar-highlight">おっしゃ<span v-if="isPolite">います</span><span v-else>る</span></span>
      </div>
      <div class="kanji-mb">
        する → <span class="grammar-highlight">なさ<span v-if="isPolite">います</span><span v-else>る</span></span>
      </div>
      <div class="kanji-mb">
        <ruby>食<rt>た</rt></ruby>べる / <ruby>飲<rt>の</rt></ruby>む → <span class="grammar-highlight"><ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>が<span v-if="isPolite">ります</span><span v-else>る</span></span>
      </div>
      <div class="kanji-mb">
        くれる → <span class="grammar-highlight">くださ<span v-if="isPolite">います</span><span v-else>る</span></span>
      </div>
      <div class="kanji-mb">
        <ruby>寝<rt>ね</rt></ruby>る → <span class="grammar-highlight">お<ruby>休<rt>やす</rt></ruby>みにな<span v-if="isPolite">ります</span><span v-else>る</span></span>
      </div>
      <div class="structure-title">
        Honorific constructions
      </div>
      <div class="kanji-mb">
        Verb → <span class="grammar-highlight">お</span> + [verb stem] + <span class="grammar-highlight">にな<span v-if="isPolite">ります</span><span v-else>る</span></span>
      </div>
      <div class="kanji-mb">
        ～ている → <span class="grammar-highlight">～ていらっしゃ<span v-if="isPolite">います</span><span v-else>る</span></span>
      </div>
    </template>
    <template #related>
      <div>See also <RouterLink :to="{ name: 'grammarLoader', params: { slug: kenjougo.slug } }" class="link">Kenjōgo (Humble Language)</RouterLink></div>
      <div style="margin-top: 20px;">Further usage of sonkeigo:</div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: verbStemKudasai.slug } }" class="link">{{ verbStemKudasai.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      Sonkeigo (尊敬語, そんけいご), or honorific language, is one of the three main categories of keigo (敬語, けいご) — the Japanese system of polite and respectful language.
      While kenjōgo (謙譲語, けんじょうご) lowers the speaker or their in-group to show respect, sonkeigo does the opposite: it elevates
      the person you're talking about, often someone of higher status, to express politeness and deference.
      <table class="table">
        <thead>
          <tr>
            <th>Keigo Type</th>
            <th>Usage</th>
            <th>What It Does</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><ruby>丁寧語<rt>ていねいご</rt></ruby> (teinego)</td>
             <td>Standard</td>
            <td>Adds general politeness (です/ます)</td>
          </tr>
          <tr>
            <td><ruby>尊敬語<rt>そんけいご</rt></ruby> (sonkeigo)</td>
             <td>Honorific</td>
            <td>Elevates the person you're talking about</td>
          </tr>
          <tr>
            <td><ruby>謙譲語<rt>けんじょうご</rt></ruby> (kenjōgo)</td>
            <td>Humble</td>
            <td>Lowers the speaker or their in-group</td>
          </tr>
        </tbody>
      </table>

      <div class="section">
        <div class="grammar-title">What is sonkeigo (尊敬語 / Honorific Language)?</div>
        Honorific language, or sonkeigo (尊敬語, そんけいご), is used to show respect by elevating the actions or status of someone else — typically a
        person of higher social rank or someone outside your in-group. Instead of humbling yourself (as in kenjōgo), you honor the other
        person by using special respectful verbs or polite constructions. It's commonly used in formal situations, especially when:
        <ul>
          <li>Talking about the actions of superiors, customers, or clients</li>
          <li>Referring to someone outside your in-group (e.g., someone from another company)</li>
          <li>Showing respect to someone you don't know well or who holds a higher status</li>
        </ul>
        <div class="note">
          <div class="note-title">Note:</div>
          For most Japanese learners, actually using sonkeigo (honorific language) isn't something that comes up often in daily conversation.
          Unless you're working in a Japanese company, especially in a formal or customer service role, it's rare to find yourself
          in a situation where speaking in sonkeigo is expected. However, recognizing and understanding sonkeigo is
          still important — even if you don't use it yourself. Native speakers, especially service staff in places like stores, restaurants, hotels,
          or public transportation, will often speak to you using sonkeigo. Being able to recognize
          these polite forms helps you follow what's being said and navigate formal situations more comfortably.
        </div>
        <div class="note">
          <div class="note-title">Note:</div>
          Honorific language can be thought of as the opposite of
          <RouterLink :to="{ name: 'grammarLoader', params: { slug: kenjougo.slug } }" class="link">kenjōgo (humble language)</RouterLink>,
          which lowers the speaker. Kenjōgo, on the other hand, elevates the subject to show respect.
        </div>
      </div>

      <div class="section">
        <div class="grammar-title">Common Honorific Expressions</div>
        Sonkeigo is made up of both special set expressions and unique respectful verb forms. While there are some regular patterns, like using お[verb stem]になる,
        many sonkeigo forms involve completely different verbs that must be learned individually. This means that, similar to kenjōgo, using honorific
        language often relies more on memorizing specific respectful words and expressions than on applying standard conjugation rules.
        <GrammarExampleSentences>
          <div class="example">
            いる / <ruby>行<rt>い</rt></ruby>く / <ruby>来<rt>く</rt></ruby>る → <span class="g">いらっしゃいます</span>（<span class="g">いらっしゃる</span>）
          </div>
          <div class="translation">
            to exist (animate) / to go / to come
          </div>
          <div class="example">
            <ruby>見<rt>み</rt></ruby>る → <span class="g">ご<ruby>覧<rt>らん</rt></ruby>になります</span>（<span class="g">～になる</span>）
          </div>
          <div class="translation">
            to see
          </div>
          <div class="example">
            <ruby>言<rt>い</rt></ruby>う → <span class="g">おっしゃいます</span>（<span class="g">おっしゃる</span>）
          </div>
          <div class="translation">
            to say
          </div>
          <div class="example">
            する → <span class="g">なさいます</span>（<span class="g">なさる</span>）
          </div>
          <div class="translation">
            to do
          </div>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる / <ruby>飲<rt>の</rt></ruby>む → <span class="g"><ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がります</span>（<span class="g">～<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がる</span>）
          </div>
          <div class="translation">
            to eat / to drink
          </div>
          <div class="example">
            くれる → <span class="g">くださいます</span>（<span class="g">くださる</span>）
          </div>
          <div class="translation">
            to give (to me)
          </div>
          <div class="example">
            <ruby>寝<rt>ね</rt></ruby>る → <span class="g">お<ruby>休<rt>やす</rt></ruby>みになります</span>（<span class="g">～になる</span>）
          </div>
          <div class="translation">
            to sleep
          </div>
          <div class="example">
            ～ている → <span class="g">～ていらっしゃいます</span>（<span class="g">～ていらっしゃる</span>）
          </div>
          <div class="translation">
            to be doing
          </div>
          <template #note>
            These are some of the most common honorific expressions
          </template>
        </GrammarExampleSentences>

        <div class="note">
          <div class="note-title">Note:</div>
          Some of the special honorific verbs are neither godan nor ichidan verbs, and conjugate irregularly.
          For instance, the verb <span class="g">いらっしゃる</span> becomes <span class="g">いらっしゃいます</span> in the polite form.
        </div>

        Sonkeigo (尊敬語, honorific language) is frequently used by staff in customer service settings like stores, restaurants, and hotels,
        as well as in public announcements at places such as train stations and airports. You'll also encounter it in professional environments
        like business meetings, emails, and phone calls, especially when referring to the actions of clients, superiors,
        or people outside one's in-group, in order to show respect and elevate their status.

        <GrammarExample>
          <template #example>
            メニューを<span class="g">ご<ruby>覧<rt>らん</rt></ruby>になります</span>か？
          </template>
          <template #translation>
            Would you like to look at the menu?
          </template>
          <template #note>
            A polite way to ask if someone wants to see the menu, often used in restaurants
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            <ruby>何<rt>なに</rt></ruby>を<span class="g"><ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がります</span>か？
          </template>
          <template #translation>
            What would you like to eat?
          </template>
          <template #note>
            A polite way to ask what someone would like to eat
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          Many common expressions you've probably heard before, such as <span class="g">いらっしゃいませ</span> ("welcome"), <span class="g">おやすみなさい</span> ("good night"),
          and <span class="g">～をください</span> ("please give me"), are rooted in sonkeigo — the honorific form of speech.
          <ul>
            <li><span class="g">いらっしゃい</span> (imperative form of <span class="g">いらっしゃる</span>) + <span class="g">ませ</span> (formal softener) → <span class="g">いらっしゃいませ</span></li>
            <li><span class="g">おやすみ</span> (noun) + <span class="g">なさい</span> (imperative form of <span class="g">なさる</span>) → <span class="g">おやすみなさい</span></li>
            <li>～を (object marker) + <span class="g">ください</span> (imperative form of <span class="g">くださる</span>) → <span class="g">～をください</span></li>
          </ul>
        </div>
      </div>
      <div class="section">
        <div class="grammar-title">Using お + Verb Stem + になる for Honorifics</div>
        Not all verbs have special honorific forms (sonkeigo). In these cases, a common way to show respect is by using the pattern:
        <ul>
          <li><span class="g">お</span> + [verb ます stem] + <span class="g">になる</span></li>
        </ul>
        This construction elevates the action of the listener or a third person, making the sentence polite and respectful.
        <GrammarExample>
          <template #example>
            <ruby>先生<rt>せんせい</rt></ruby>はもう<span class="g">お</span><ruby>帰<rt>かえ</rt></ruby>り<span class="g">になりました</span>
          </template>
          <template #translation>
            The teacher has already gone home
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          This form is mainly used with godan verbs. While it can technically be applied to ichidan verbs as well,
          many of them have special honorific equivalents that are preferred in practice.
        </div>
      </div>
      <div class="section">
        <div class="grammar-title">Using ～ていらっしゃる for Honorific Ongoing Actions</div>
        To make the progressive or continuous form respectful, Japanese often replaces the plain ～ている form with:
        <ul>
          <li>～ている → <span class="g">～ていらっしゃる</span></li>
        </ul>
        This is the honorific equivalent of "is doing ~" or "has been ~ing," used to show respect to the subject performing the action.
        This form is widely used in formal conversations and customer service to politely describe what someone else is currently doing.
        <GrammarExample>
          <template #example>
            <ruby>田中<rt>たなか</rt></ruby>さまは<ruby>別<rt>べつ</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>で<ruby>待<rt>ま</rt></ruby>っ<span class="g">ていらっしゃいます</span>
          </template>
          <template #translation>
            Mr. Tanaka is waiting in another room
          </template>
        </GrammarExample>
        It is even possible to do a double honorific, where you combine a honorific verb in the ～ている form with <span class="g">～ていらっしゃる</span>.
        <GrammarExample>
          <template #example>
            <ruby>映画<rt>えいが</rt></ruby>を<span class="g">ご<ruby>覧<rt>らん</rt></ruby>になっていらっしゃいます</span>か？
          </template>
          <template #translation>
            Are you watching a movie?
          </template>
          <template #note>
             ご<ruby>覧<rt>らん</rt></ruby>になる → ご<ruby>覧<rt>らん</rt></ruby>になっている → ご<ruby>覧<rt>らん</rt></ruby>になっていらっしゃる
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>

<style scoped>
.table {
  border-collapse: collapse; 
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1.2rem;

  /* thead tr, */
  tr:not(:last-child) {
    border-bottom: 1px solid #cccccc24;
  }

  th, td {
    padding: 8px 8px;
  }
}
</style>
