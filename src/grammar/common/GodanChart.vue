<script setup lang="ts">
  import { computed, ref } from "vue";
  import { godanNegative, godanNonPast, godanPast } from "@/grammar/n5/metadataN5";
  import type { GodanChartExample } from "@/types/types";

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
    { label: "買う", value: 0, translation: "to buy" },
    { label: "行く", value: 1, translation: "to go" },
    { label: "話す", value: 2, translation: "to speak" }
  ]);

  const examples = ref<GodanChartExample[]>([
    {
      kanaRow: ["あ", "い", "う", "え", "お"],
      kanji: "買",
      furigana: "か",
      end: [
        { highlight: "わ", suffix: "（ない）" },
        { highlight: "い", suffix: "（ます）" },
        { highlight: "う" },
        { highlight: "え", suffix: "（る、ば）" },
        { highlight: "お", suffix: "（う）" }
      ]
    },
    {
      kanaRow: ["あ（か）", "い（き）", "う（く）", "え（け）", "お（こ）"],
      kanji: "行",
      furigana: "い",
      end: [
        { highlight: "か", suffix: "（ない）" },
        { highlight: "き", suffix: "（ます）" },
        { highlight: "く" },
        { highlight: "け", suffix: "（る、ば）" },
        { highlight: "こ", suffix: "（う）" }
      ]
    },
    {
      kanaRow: ["あ（さ）", "い（し）", "う（す）", "え（せ）", "お（そ）"],
      kanji: "話",
      furigana: "はな",
      end: [
        { highlight: "さ", suffix: "（ない）" },
        { highlight: "し", suffix: "（ます）" },
        { highlight: "す" },
        { highlight: "せ", suffix: "（る、ば）" },
        { highlight: "そ", suffix: "（う）" }
      ]
    }
  ]);

  const data = computed(() => [
    {
      row: examples.value[word.value].kanaRow[0],
      name: "Plain negative, Plain negative past",
      example: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].end[0]
      },
      grammarPoint: [godanNegative, { slug: null, title: "Godan verb (negative past)" }],
      rowNr: 1
    },
    {
      row: examples.value[word.value].kanaRow[1],
      name: "Polite, Continuative",
      example: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].end[1]
      },
      grammarPoint: [godanNonPast, godanNegative, godanPast, { slug: null, title: "Te-form" }],
      rowNr: 2
    },
    {
      row: examples.value[word.value].kanaRow[2], 
      name: "Dictionary, Plain non-past",
      example: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].end[2]
      },
      grammarPoint: [godanNonPast],
      rowNr: 3
    },
    {
      row: examples.value[word.value].kanaRow[3],
      name: "Imperative, Potential, Conditional",
      example: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].end[3]
      },
      grammarPoint: [{ slug: null, title: null }],
      rowNr: 4
    },
    {
      row: examples.value[word.value].kanaRow[4],
      name: "Volitional (let's...)",
      example: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].end[4]
      },
      grammarPoint: [{ slug: null, title: null }],
      rowNr: 5
    }
  ]);

  const selectedRow = computed(() => {
    return (data: { rowNr: number }) => {
      if (!props.selectedRow) {
        return "";
      }
      return data.rowNr === props.selectedRow ? "table-highlight-row" : "table-non-highlight-row";
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
    <DataTable :value="data" :showHeaders="true" :show-gridlines="true" :row-class="selectedRow" class="table">
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
            <ruby>{{ slotProps.data.example.kanji }}<rt>{{ slotProps.data.example.furigana }}</rt></ruby><span class="h">{{ slotProps.data.example.okurigana.highlight }}</span>{{ slotProps.data.example.okurigana.suffix }}
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
