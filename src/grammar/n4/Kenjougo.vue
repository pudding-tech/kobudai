<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import GrammarExampleSentences from "@/components/GrammarExampleSentences.vue";
  import { kenjougo as meta, sonkeigo, teItadakemasenka, verbStemSuru } from "./metadataN4";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure>
    <template #title>
      <span v-html="meta.title" />
    </template>
    <template #subtitle>{{ meta.subtitle }}</template>
    <template #structure>
      <div class="kanji-mb">
        いる → <span class="grammar-highlight">おります</span>（<span class="grammar-highlight">おる</span>）
      </div>
      <div class="kanji-mb">
        ある → <span class="grammar-highlight">ございます</span>（<span class="grammar-highlight">ござる</span>）
      </div>
      <div class="kanji-mb">
        <ruby>行<rt>い</rt></ruby>く / <ruby>来<rt>く</rt></ruby>る → <span class="grammar-highlight"><ruby>参<rt>まい</rt></ruby>ります</span>（<span class="grammar-highlight"><ruby>参<rt>まい</rt></ruby>る</span>）
      </div>
      <div class="kanji-mb">
        <ruby>言<rt>い</rt></ruby>う → <span class="grammar-highlight"><ruby>申<rt>もう</rt></ruby>します</span>（<span class="grammar-highlight"><ruby>申<rt>もう</rt></ruby>す</span>）
      </div>
      <div class="kanji-mb">
        する → <span class="grammar-highlight">いたします</span>（<span class="grammar-highlight">いたす</span>）
      </div>
      <div class="kanji-mb">
        あげる → <span class="grammar-highlight">さし<ruby>上<rt>あ</rt></ruby>げます</span>（<span class="grammar-highlight">さし<ruby>上<rt>あ</rt></ruby>げる</span>）
      </div>
      <div class="kanji-mb">
        もらう → <span class="grammar-highlight">いただきます</span>（<span class="grammar-highlight">いただく</span>）
      </div>
      <div class="kanji-mb">
        <ruby>食<rt>た</rt></ruby>べる / <ruby>飲<rt>の</rt></ruby>む → <span class="grammar-highlight">いただきます</span>（<span class="grammar-highlight">いただく</span>）
      </div>
      <div class="kanji-mb">
        ～ている → <span class="grammar-highlight">～ております</span>（<span class="grammar-highlight">～ておる</span>）
      </div>
      <div>
        ～です → <span class="grammar-highlight">～でございます</span>（<span class="grammar-highlight">～でござる</span>）
      </div>
    </template>
    <template #related>
      See also <RouterLink :to="{ name: 'grammarLoader', params: { slug: sonkeigo.slug } }" class="link">Sonkeigo (Honorific Language)</RouterLink>
      <div style="margin-top: 20px;">Further usage of kenjōgo:</div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: verbStemSuru.slug } }" class="link">{{ verbStemSuru.title }}</RouterLink>
      </div>
      <div>
        - <RouterLink :to="{ name: 'grammarLoader', params: { slug: teItadakemasenka.slug } }" class="link">{{ teItadakemasenka.title }}</RouterLink>
      </div>
    </template>
    <template #explanation>
      Kenjōgo (謙譲語, けんじょうご), or humble language, is one of the three main categories of keigo (敬語, けいご) — the Japanese system of polite and respectful language.
      While sonkeigo (尊敬語, そんけいご), elevates the person you're talking about,
      kenjōgo does the opposite: it lowers the speaker or their in-group in order to show respect to the other person.
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
        <div class="grammar-title">What is kenjōgo (謙譲語 / Humble Language)?</div>
        Humble language, or kenjōgo (謙譲語, けんじょうご), is used to lower yourself (or your in-group, like your family or company) in order to elevate the other person.
        It's often used in formal situations, especially when:
        <ul>
          <li>Talking to customers or superiors</li>
          <li>Talking about doing something for someone of higher status</li>
          <li>Referring to your own actions in a formal context</li>
        </ul>
        Humble expressions are used when referring to your own actions (or those of someone in your group) to show respect to the listener or the person being mentioned.
        This isn't humility like being modest about your abilities — it's a deliberate way of lowering yourself through language to express politeness or deference.
        <div class="note">
          <div class="note-title">Note:</div>
          Humble language can be thought of as the opposite of
          <RouterLink :to="{ name: 'grammarLoader', params: { slug: sonkeigo.slug } }" class="link">sonkeigo (honorific language)</RouterLink>,
          which elevates the subject. Kenjōgo, on the other hand, lowers the speaker to show respect.
        </div>
      </div>

      <div class="section">
        <div class="grammar-title">Common Humble Expressions</div>
        Kenjōgo is mostly made up of special set expressions and vocabulary rather than just regular verb conjugation.
        While some humble forms involve predictable patterns, like
        <RouterLink :to="{ name: 'grammarLoader', params: { slug: verbStemSuru.slug } }" class="link">{{ verbStemSuru.title }}</RouterLink>, many are
        unique words that must be memorized. So, unlike regular verb conjugation, humble language relies heavily on fixed phrases and word substitutions.
        <GrammarExampleSentences>
          <div class="example">
            いる → <span class="g">おります</span>（<span class="g">おる</span>）
          </div>
          <div class="translation">
            to exist (animate)
          </div>
          <div class="example">
            ある → <span class="g">ございます</span>（<span class="g">ござる</span>）
          </div>
          <div class="translation">
            to exist (inanimate)
          </div>
          <div class="example">
            <ruby>行<rt>い</rt></ruby>く / <ruby>来<rt>く</rt></ruby>る → <span class="g"><ruby>参<rt>まい</rt></ruby>ります</span>（<span class="g"><ruby>参<rt>まい</rt></ruby>る</span>）
          </div>
          <div class="translation">
            to go / to come
          </div>
          <div class="example">
            <ruby>言<rt>い</rt></ruby>う → <span class="g"><ruby>申<rt>もう</rt></ruby>します</span>（<span class="g"><ruby>申<rt>もう</rt></ruby>す</span>）
          </div>
          <div class="translation">
            to say
          </div>
          <div class="example">
            する → <span class="g">いたします</span>（<span class="g">いたす</span>）
          </div>
          <div class="translation">
            to do
          </div>
          <div class="example">
            あげる → <span class="g">さし<ruby>上<rt>あ</rt></ruby>げます</span>（<span class="g">さし<ruby>上<rt>あ</rt></ruby>げる</span>）
          </div>
          <div class="translation">
            to give
          </div>
          <div class="example">
            もらう → <span class="g">いただきます</span>（<span class="g">いただく</span>）
          </div>
          <div class="translation">
            to receive
          </div>
          <div class="example">
            <ruby>食<rt>た</rt></ruby>べる / <ruby>飲<rt>の</rt></ruby>む → <span class="g">いただきます</span>（<span class="g">いただく</span>）
          </div>
          <div class="translation">
            to eat / to drink
          </div>
          <div class="example">
            ～ている → <span class="g">～ております</span>（<span class="g">～ておる</span>）
          </div>
          <div class="translation">
            to be doing
          </div>
          <div class="example">
            ～です → <span class="g">～でございます</span>（<span class="g">～でござる</span>）
          </div>
          <div class="translation">
            to be
          </div>
          <template #note>
            These are some of the most common humble expressions, but there are many more
          </template>
        </GrammarExampleSentences>

        Kenjōgo (謙譲語, humble language) is frequently used by staff in customer service settings like stores, restaurants, and hotels,
        as well as in public announcements at places such as train stations and airports. You'll also encounter it in professional environments
        like business meetings, emails, and phone calls, especially when referring to one's own actions or those of colleagues when addressing clients or superiors.

        <GrammarExample>
          <template #example>
            まもなく、<ruby>電車<rt>でんしゃ</rt></ruby>が<span class="g"><ruby>参<rt>まい</rt></ruby>ります</span>
          </template>
          <template #translation>
            The train is coming soon
          </template>
          <template #note>
            A humble way to announce the train's arrival, commonly heard at train stations
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            ケンと<span class="g"><ruby>申<rt>もう</rt></ruby>します</span>
          </template>
          <template #translation>
            My name is Ken
          </template>
          <template #note>
            A humble way to introduce oneself, using the verb <ruby>申<rt>もう</rt></ruby>す
          </template>
        </GrammarExample>
        <GrammarExample>
          <template #example>
            こちらが<ruby>本日<rt>ほんじつ</rt></ruby>のメニュー<span class="g">でございます</span>
          </template>
          <template #translation>
            This is today's menu
          </template>
          <template #note>
            A humble and very polite way to present the menu. While somewhat formal or old-fashioned, it can stil be heard in customer service settings
          </template>
        </GrammarExample>
        <div class="note">
          <div class="note-title">Note:</div>
          Many common expressions you've probably heard, such as <span class="g">いただきます</span> ("I humbly receive this meal")
          and <span class="g"><ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありません</span> ("I'm terribly sorry"), are rooted in kenjōgo — the humble form of speech.
          <ul>
            <li>
              <span class="g">いただきます</span> comes from <span class="g">いただく</span>, the humble equivalent of もらう (to receive) or <ruby>食<rt>た</rt></ruby>べる / <ruby>飲<rt>の</rt></ruby>む
              (to eat/drink). By saying it before a meal, you're humbly acknowledging the act of receiving the food — from those who prepared it, served it, and even from nature.
            </li>
            <li>
              <span class="g"><ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありません</span> is built from
              <span class="g"><ruby>申<rt>もう</rt></ruby>す</span>, the humble form of <ruby>言<rt>い</rt></ruby>う (to say), and <ruby>訳<rt>わけ</rt></ruby>,
              meaning "excuse" or "reason". The phrase literally means "there is no excuse I can humbly offer," and it's used as a very polite, humble apology.
              Commonly used in customer service when the staff is apologizing for a mistake or inconvenience.
            </li>
          </ul>
        </div>
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
