<script setup lang="ts">
  import GrammarStructure from "@/components/GrammarStructure.vue";
  import GrammarExample from "@/components/GrammarExample.vue";
  import { counters as meta } from "./metadataN5";
</script>

<script lang="ts">
  export const title = meta.title;
</script>

<template>
  <GrammarStructure :meta="meta">
    <template #structure>
      <div><span class="grammar-highlight">Number</span> + <span class="grammar-highlight">counter</span></div>
      <div class="structure-title small">
        Common counters
      </div>
      <div>
        <div class="kanji-mb"><span class="grammar-highlight">〜つ</span> - General counter</div>
        <div class="kanji-mb"><span class="grammar-highlight">〜<ruby>人<rt>にん</rt></ruby></span> - People</div>
        <div class="kanji-mb"><span class="grammar-highlight">〜<ruby>個<rt>こ</rt></ruby></span> - Small round objects (apples, eggs)</div>
        <div class="kanji-mb"><span class="grammar-highlight">〜<ruby>枚<rt>まい</rt></ruby></span> - Flat objects (paper, plates, shirts)</div>
        <div class="kanji-mb"><span class="grammar-highlight">〜<ruby>本<rt>ほん</rt></ruby></span> - Long cylindrical objects (bottles, pens, trees)</div>
        <div class="kanji-mb"><span class="grammar-highlight">〜<ruby>冊<rt>さつ</rt></ruby></span> - Bound objects (books, magazines)</div>
        <div class="kanji-mb"><span class="grammar-highlight">〜<ruby>匹<rt>ひき</rt></ruby></span> - Small animals (cats, dogs)</div>
        <div><span class="grammar-highlight">〜<ruby>台<rt>だい</rt></ruby></span> - Machines, vehicles</div>
      </div>
    </template>
    <template #related>
      
    </template>
    <template #explanation>
      In Japanese, nouns cannot usually be counted directly with numbers. Instead, you attach a counter — a specific
      word that classifies the type of thing being counted. The choice of counter depends on characteristics
      such as shape, size, or category. This concept exists in many languages, including English (e.g. "a sheeet of paper", "a herd of cattle").
      To count something, you combine:
      <ul>
        <li><span class="g">Number</span> + <span class="g">counter</span></li>
      </ul>
      This might seem simple, but many counters have irregular readings for certain numbers,
      and some overlap in usage depending on context or nuance.
      <div class="note">
        <div class="note-title">Note:</div>
        The position of the counter word depends on how the phrase is used.
        When a counter directly modify a noun, it comes before the noun (<span class="g">～つ</span>のX).
        However, when stating existence or quantity with a verb, the counter normally comes after the noun (Xが<span class="g">～つ</span>),
        which is the opposite of English.
      </div>
      Below are some of the most common counters used in everyday Japanese. Counter words that use a non-regular reading
      for certain numbers will be colored <span class="h">like this</span>.

      Also, counters in Japanese can use both kanji and arabic numerals, so
      for example <span class="g">４つ</span> and <span class="g">四つ</span> are interchangeably used.

      <div class="section">
        <div class="grammar-subtitle">General counter</div>
        The counter <span class="g">〜つ</span> is a general-purpose counter that can be used for counting many different types of objects,
        especially when the specific counter is unknown or when counting items that don't naturally fit other counters.
        The number readings for this counter are unique and differ from the regular Japanese numbers altogether.
        <ul>
          <li>1... → <span class="h">ひとつ</span></li>
          <li>2... → <span class="h">ふたつ</span></li>
          <li>3... → <span class="h">みっつ</span></li>
          <li>4... → <span class="h">よっつ</span></li>
          <li>5... → <span class="h">いつつ</span></li>
          <li>6... → <span class="h">むっつ</span></li>
          <li>7... → <span class="h">ななつ</span></li>
          <li>8... → <span class="h">やっつ</span></li>
          <li>9... → <span class="h">ここのつ</span></li>
          <li>10... → <span class="h">とお</span></li>
        </ul>
        <div class="note">
          <div class="note-title">Note:</div>
          This counter is normally used only for numbers one through ten. For quantities above ten,
          Japanese typically switches to other counters, most commonly <span class="g">個</span> (<span class="g">こ</span>)
          or a counter specific to the object being counted.
        </div>
        <GrammarExample>
          <template #example>
            <span class="g"><ruby>２<rt>ふた</rt></ruby>つ</span>のアイデア
          </template>
          <template #translation>
            Two ideas
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">People counter</div>
        The people counter <span class="g">〜人</span> (<span class="g">にん</span>) is used specifically for counting people.
        This counter uses the regular Japanese numbers, with the exception of 1 and 2 people, which have special readings.
        <ul>
          <li>1... → <span class="g">一人</span> - <span class="h">ひとり</span></li>
          <li>2... → <span class="g">二人</span> - <span class="h">ふたり</span></li>
          <li>3... → <span class="g">三人</span> - <span class="g">さんにん</span></li>
          <li>4... → <span class="g">四人</span> - <span class="g">よにん</span></li>
          <li>5... → <span class="g">五人</span> -  <span class="g">ごにん</span></li>
          <li>6... → <span class="g">六人</span> - <span class="g">ろくにん</span></li>
          <li>7... → <span class="g">七人</span> - <span class="g">ななにん</span></li>
          <li>8... → <span class="g">八人</span> - <span class="g">はちにん</span></li>
          <li>9... → <span class="g">九人</span> - <span class="g">きゅうにん</span></li>
          <li>10... → <span class="g">十人</span> - <span class="g">じゅうにん</span></li>
          <li>More than 10... → Number + <span class="g">にん</span></li>
        </ul>
        <GrammarExample>
          <template #example>
            <ruby>家族<rt>かぞく</rt></ruby>は<span class="g"><ruby>四人<rt>よにん</rt></ruby></span>です
          </template>
          <template #translation>
            There are four people in my family
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Counter for small, round, compact items</div>
        The <span class="g">個</span> (<span class="g">こ</span>) counter is used specifically for counting small, round, compact items,
        like apples, balls, and eggs. This counter uses the regular Japanese numbers,
        with some slight difference in readings for 1, 6, 8, and 10.
        <ul>
          <li>1... → <span class="g">１個</span> - <span class="h">いっこ</span></li>
          <li>2... → <span class="g">２個</span> - <span class="g">にこ</span></li>
          <li>3... → <span class="g">３個</span> - <span class="g">さんこ</span></li>
          <li>4... → <span class="g">４個</span> - <span class="g">よんこ</span></li>
          <li>5... → <span class="g">５個</span> - <span class="g">ごこ</span></li>
          <li>6... → <span class="g">６個</span> - <span class="h">ろっこ</span></li>
          <li>7... → <span class="g">７個</span> - <span class="g">ななこ</span></li>
          <li>8... → <span class="g">８個</span> - <span class="h">はっこ</span></li>
          <li>9... → <span class="g">９個</span> - <span class="g">きゅうこ</span></li>
          <li>10... → <span class="g">１０個</span> - <span class="h">じゅっこ</span></li>
          <li>More than 10... → Number + <span class="g">こ</span></li>
        </ul>
        <GrammarExample>
          <template #example>
            <ruby>今日<rt>きょう</rt></ruby>、りんごを<span class="g"><ruby>一個<rt>いっこ</rt></ruby></span><ruby>食<rt>た</rt></ruby>べた
          </template>
          <template #translation>
            I ate 1 apple today
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Counter for flat objects</div>
        The <span class="g">枚</span> (<span class="g">まい</span>) counter is used specifically for counting flat objects,
        like sheets of paper, plates, photographs, and other thin flat items. This counter only uses the regular Japanese numbers,
        with no irregular readings.
        <ul>
          <li>1... → <span class="g">１枚</span> - <span class="g">いちまい</span></li>
          <li>2... → <span class="g">２枚</span> - <span class="g">にまい</span></li>
          <li>3... → <span class="g">３枚</span> - <span class="g">さんまい</span></li>
          <li>4... → <span class="g">４枚</span> - <span class="g">よんまい</span></li>
          <li>5... → <span class="g">５枚</span> - <span class="g">ごまい</span></li>
          <li>6... → <span class="g">６枚</span> - <span class="g">ろくまい</span></li>
          <li>7... → <span class="g">７枚</span> - <span class="g">ななまい</span></li>
          <li>8... → <span class="g">８枚</span> - <span class="g">はちまい</span></li>
          <li>9... → <span class="g">９枚</span> - <span class="g">きゅうまい</span></li>
          <li>10... → <span class="g">１０枚</span> - <span class="g">じゅうまい</span></li>
          <li>More than 10... → Number + <span class="g">まい</span></li>
        </ul>
        <GrammarExample>
          <template #example>
            <ruby>紙<rt>かみ</rt></ruby>を<span class="g"><ruby>三枚<rt>さんまい</rt></ruby></span><ruby>落<rt>お</rt></ruby>とした
          </template>
          <template #translation>
            I dropped three sheets of paper
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Counter for long, cylindrical objects</div>
        The <span class="g">本</span> (<span class="g">ほん</span>) counter is used specifically for counting long, cylindrical objects,
        like bottles, pens, trees, tubes, and umbrellas. This counter uses the regular Japanese numbers,
        with irregular readings due to sound changes (rendaku) for 1, 3, 6, 8, and 10.
        <ul>
          <li>1...  → <span class="g">１本</span> - <span class="h">いっぽん</span></li>
          <li>2...  → <span class="g">２本</span> - <span class="g">にほん</span></li>
          <li>3...  → <span class="g">３本</span> - <span class="h">さんぼん</span></li>
          <li>4...  → <span class="g">４本</span> - <span class="g">よんほん</span></li>
          <li>5...  → <span class="g">５本</span> - <span class="g">ごほん</span></li>
          <li>6...  → <span class="g">６本</span> - <span class="h">ろっぽん</span></li>
          <li>7...  → <span class="g">７本</span> - <span class="g">ななほん</span></li>
          <li>8...  → <span class="g">８本</span> - <span class="h">はっぽん</span></li>
          <li>9...  → <span class="g">９本</span> - <span class="g">きゅうほん</span></li>
          <li>10...  → <span class="g">１０本</span> - <span class="h">じゅっぽん</span></li>
          <li>More than 10...  → Number + <span class="g">ほん</span></li>
        </ul>
        <GrammarExample>
          <template #example>
            <ruby>ペン<rt></rt></ruby>を<span class="g"><ruby>六本<rt>ろっぽん</rt></ruby></span>ください
          </template>
          <template #translation>
            Please give me six pens
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Counter for books and bound volumes</div>
        The <span class="g">冊</span> (<span class="g">さつ</span>) counter is used specifically for counting books and other bound volumes,
        like notebooks, magazines, manga volumes. This counter uses the regular Japanese numbers,
        with some slight difference in readings for 1, 8, and 10.
        <ul>
          <li>1... → <span class="g">１冊</span> - <span class="h">いっさつ</span></li>
          <li>2... → <span class="g">２冊</span> - <span class="g">にさつ</span></li>
          <li>3... → <span class="g">３冊</span> - <span class="g">さんさつ</span></li>
          <li>4... → <span class="g">４冊</span> - <span class="g">よんさつ</span></li>
          <li>5... → <span class="g">５冊</span> - <span class="g">ごさつ</span></li>
          <li>6... → <span class="g">６冊</span> - <span class="g">ろくさつ</span></li>
          <li>7... → <span class="g">７冊</span> - <span class="g">ななさつ</span></li>
          <li>8... → <span class="g">８冊</span> - <span class="h">はっさつ</span></li>
          <li>9... → <span class="g">９冊</span> - <span class="g">きゅうさつ</span></li>
          <li>10... → <span class="g">１０冊</span> - <span class="h">じゅっさつ</span></li>
          <li>More than 10... → Number + <span class="g">さつ</span></li>
        </ul>
        <GrammarExample>
          <template #example>
            <ruby>古<rt>ふる</rt></ruby>い<ruby>雑誌<rt>ざっし</rt></ruby>を<span class="g"><ruby>８冊<rt>はっさつ</rt></ruby></span><ruby>読<rt>よ</rt></ruby>みました
          </template>
          <template #translation>
            I read eight old magazines
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Counter for small animals</div>
        The <span class="g">匹</span> (<span class="g">ひき</span>) counter is used specifically for counting small animals,
        like cats, dogs, and fish. This counter uses the regular Japanese numbers,
        with irregular readings due to sound changes (rendaku) for 1, 3, 6, 8, and 10.
        <ul>
          <li>1... → <span class="g">１匹</span> - <span class="h">いっぴき</span></li>
          <li>2... → <span class="g">２匹</span> - <span class="g">にひき</span></li>
          <li>3... → <span class="g">３匹</span> - <span class="h">さんびき</span></li>
          <li>4... → <span class="g">４匹</span> - <span class="g">よんひき</span></li>
          <li>5... → <span class="g">５匹</span> - <span class="g">ごひき</span></li>
          <li>6... → <span class="g">６匹</span> - <span class="h">ろっぴき</span></li>
          <li>7... → <span class="g">７匹</span> - <span class="g">ななひき</span></li>
          <li>8... → <span class="g">８匹</span> - <span class="h">はっぴき</span></li>
          <li>9... → <span class="g">９匹</span> - <span class="g">きゅうひき</span></li>
          <li>10... → <span class="g">１０匹</span> - <span class="h">じゅっぴき</span></li>
          <li>More than 10... → Number + <span class="g">ひき</span></li>
        </ul>
        <GrammarExample>
          <template #example>
            いもうとが<ruby>猫<rt>ねこ</rt></ruby>を<span class="g"><ruby>四匹<rt>よんひき</rt></ruby></span><ruby>飼<rt>か</rt></ruby>っています
          </template>
          <template #translation>
            My sister has 4 cats
          </template>
          <template #note>
            The kanji for ひき (匹) looks very similar to the kanji for 4 (四), so be careful not to confuse them
          </template>
        </GrammarExample>
      </div>

      <div class="section">
        <div class="grammar-subtitle">Counter for machines and vehicles</div>
        The <span class="g">台</span> (<span class="g">だい</span>) counter is used specifically for counting machines and vehicles,
        like cars, computers, appliances, and bicycles. This counter only uses the regular Japanese numbers,
        with no irregular readings.
        <ul>
          <li>1... → <span class="g">１台</span> - <span class="g">いちだい</span></li>
          <li>2... → <span class="g">２台</span> - <span class="g">にだい</span></li>
          <li>3... → <span class="g">３台</span> - <span class="g">さんだい</span></li>
          <li>4... → <span class="g">４台</span> - <span class="g">よんだい</span></li>
          <li>5... → <span class="g">５台</span> - <span class="g">ごだい</span></li>
          <li>6... → <span class="g">６台</span> - <span class="g">ろくだい</span></li>
          <li>7... → <span class="g">７台</span> - <span class="g">ななだい</span></li>
          <li>8... → <span class="g">８台</span> - <span class="g">はちだい</span></li>
          <li>9... → <span class="g">９台</span> - <span class="g">きゅうだい</span></li>
          <li>10... → <span class="g">１０台</span> - <span class="g">じゅうだい</span></li>
          <li>More than 10... → Number + <span class="g">だい</span></li>
        </ul>
        <GrammarExample>
          <template #example>
            <ruby>新<rt>あたら</rt></ruby>しい<ruby>車<rt>くるま</rt></ruby>を<span class="g"><ruby>３台<rt>さんだい</rt></ruby></span><ruby>買<rt>か</rt></ruby>いました
          </template>
          <template #translation>
            I bought three new cars
          </template>
        </GrammarExample>
      </div>
    </template>
  </GrammarStructure>
</template>
