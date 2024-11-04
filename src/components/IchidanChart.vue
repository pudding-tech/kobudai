<script setup lang="ts">
  import { computed, ref } from "vue";
  import { ichidanNegative, ichidanNonPast, ichidanPast } from "@/grammar/n5/metadataN5";
  import type { IchidanChartExample } from "@/types/types";

  const props = withDefaults(defineProps<{
    wordSelection?: number,
    selectedRow?: number,
    showWordSelection?: boolean,
    showLinks?: boolean
  }>(), {
    wordSelection: 0,
    showWordSelection: false,
    showLinks: false
  });

  const word = ref(props.wordSelection);
  const wordOptions = ref([
    { label: "食べる", value: 0, translation: "to eat" },
    { label: "出る", value: 1, translation: "to leave" },
    { label: "見る", value: 2, translation: "to see" },
    { label: "浴びる", value: 3, translation: "to take a shower" }
  ]);

  const examples = ref<IchidanChartExample[]>([
    {
      kanaRow: "え",
      kanji: "食",
      furigana: "た",
      middle: "べ",
      examples: [
        { suffix: "（ない）" },
        { suffix: "（ます）" },
        { highlight: "る" },
        { suffix: "（られる、れば）" },
        { suffix: "（よう）" }
      ]
    },
    {
      kanaRow: "え",
      kanji: "出",
      furigana: "で",
      examples: [
        { suffix: "（ない）" },
        { suffix: "（ます）" },
        { highlight: "る" },
        { suffix: "（られる、れば）" },
        { suffix: "（よう）" }
      ]
    },
    {
      kanaRow: "い",
      kanji: "見",
      furigana: "み",
      examples: [
        { suffix: "（ない）" },
        { suffix: "（ます）" },
        { highlight: "る" },
        { suffix: "（られる、れば）" },
        { suffix: "（よう）" }
      ]
    },
    {
      kanaRow: "い",
      kanji: "浴",
      furigana: "あ",
      middle: "び",
      examples: [
        { suffix: "（ない）" },
        { suffix: "（ます）" },
        { highlight: "る" },
        { suffix: "（られる、れば）" },
        { suffix: "（よう）" }
      ]
    }
  ]);

  const data = computed(() => [
    {
      row: examples.value[word.value].kanaRow,
      name: "Plain negative, Plain negative past",
      example: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].middle,
        suffix: examples.value[word.value].examples[0]
      },
      grammarPoint: [ichidanNegative, { slug: null, title: "Ichidan verb (negative past)" }],
      rowNr: 1
    },
    {
      row: examples.value[word.value].kanaRow,
      name: "Polite, Continuative",
      example: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].middle,
        suffix: examples.value[word.value].examples[1]
      },
      grammarPoint: [ichidanNonPast, ichidanNegative, ichidanPast, { slug: null, title: "Te-form" }],
      rowNr: 2
    },
    {
      row: examples.value[word.value].kanaRow, 
      name: "Dictionary, Plain non-past",
      example: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].middle,
        suffix: examples.value[word.value].examples[2]
      },
      grammarPoint: [ichidanNonPast],
      rowNr: 3
    },
    {
      row: examples.value[word.value].kanaRow,
      name: "Imperative, Potential, Conditional",
      example: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].middle,
        suffix: (examples.value[word.value].middle ?? "") + examples.value[word.value].examples[3]
      },
      grammarPoint: [{ slug: null, title: null }],
      rowNr: 4
    },
    {
      row: examples.value[word.value].kanaRow,
      name: "Volitional (let's...)",
      example: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].middle,
        suffix: examples.value[word.value].examples[4]
      },
      grammarPoint: [{ slug: null, title: null }],
      rowNr: 5
    }
  ]);
  console.log(examples.value[word.value].examples[0]);

  const selectedRow = computed(() => {
    return () => {
      if (!props.selectedRow) {
        return "";
      }
      return "table-highlight-row";
    };
  });
</script>

<template>
  <div>
    <div v-if="showWordSelection" style="margin-bottom: 2px; display: flex; align-items: center">
      <SelectButton v-model="word" :options="wordOptions" option-label="label" option-value="value" :allowEmpty="false">
        <template #option="slotProps">
          <div v-tooltip.top="slotProps.option.translation">
            {{ slotProps.option.label }}
          </div>
        </template>
      </SelectButton>
      <span style="margin-left: 10px; color: var(--p-primary-250)">Example words</span>
    </div>
    <DataTable :value="data" :showHeaders="true" :show-gridlines="true" :row-class="selectedRow" row-group-mode="rowspan" group-rows-by="row" class="table">
      <Column field="row" header="Kana Row">
        <template #body="slotProps">
          <div class="g text">
            <b>{{ slotProps.data.row }}</b>
          </div>
        </template>
      </Column>
      <Column field="name" header="Name">
        <template #body="slotProps">
          <div>
            {{ slotProps.data.name }}
          </div>
        </template>
      </Column>
      <Column field="example" header="Example">
        <template #body="slotProps">
          <div class="text">
            <ruby>{{ slotProps.data.example.kanji }}<rt>{{ slotProps.data.example.furigana }}</rt></ruby>{{ slotProps.data.example.okurigana }}<span class="g">{{ slotProps.data.example.suffix.highlight }}</span>{{ slotProps.data.example.suffix.suffix }}
          </div>
        </template>
      </Column>
      <Column v-if="props.showLinks" field="grammarPoint" header="Grammar Points">
        <template #body="slotProps">
          <div v-for="(gp, index) in slotProps.data.grammarPoint" :key="index" :class="{ 'links': slotProps.data.grammarPoint.length > 1 }">
            <div :class="{ 'link-mt': slotProps.data.grammarPoint.length > 1 && index !== 0 }">
              <RouterLink :to="{ name: 'grammarLoader', params: { slug: gp.slug } }" class="link">
                {{ gp.title }}
              </RouterLink>
            </div>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
.table {
  width: 902px;
}

.text {
  font-size: 1.2rem;
}

.link-mt {
  margin-top: 10px;
}
</style>
