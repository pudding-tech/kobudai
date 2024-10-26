<script setup lang="ts">
  import { computed, ref } from "vue";
  import { godanNonPast, godanNegative } from "@/grammar/n5/metadataN5";
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
    { label: "買う", value: 0 },
    { label: "行く", value: 1 },
    { label: "話す", value: 2 }
  ]);

  const examples = ref<GodanChartExample[]>([
    {
      kana: ["あ", "い", "う", "え", "お"],
      examples: [
        { furigana: "か", kanji: "買", highlight: "わ", suffix: "（ない）" },
        { furigana: "か", kanji: "買", highlight: "い", suffix: "（ます）" },
        { furigana: "か", kanji: "買", highlight: "う" },
        { furigana: "か", kanji: "買", highlight: "え", suffix: "（る、ば）" },
        { furigana: "か", kanji: "買", highlight: "お", suffix: "（う）" }
      ]
    },
    {
      kana: ["あ（か）", "い（き）", "う（く）", "え（け）", "お（こ）"],
      examples: [
        { furigana: "い", kanji: "行", highlight: "か", suffix: "（ない）" },
        { furigana: "い", kanji: "行", highlight: "き", suffix: "（ます）" },
        { furigana: "い", kanji: "行", highlight: "く" },
        { furigana: "い", kanji: "行", highlight: "け", suffix: "（る、ば）" },
        { furigana: "い", kanji: "行", highlight: "こ", suffix: "（う）" }
      ]
    },
    {
      kana: ["あ（さ）", "い（し）", "う（す）", "え（せ）", "お（そ）"],
      examples: [
        { furigana: "はな", kanji: "話", highlight: "さ", suffix: "（ない）" },
        { furigana: "はな", kanji: "話", highlight: "し", suffix: "（ます）" },
        { furigana: "はな", kanji: "話", highlight: "す" },
        { furigana: "はな", kanji: "話", highlight: "せ", suffix: "（る、ば）" },
        { furigana: "はな", kanji: "話", highlight: "そ", suffix: "（う）" }
      ]
    }
  ]);
  const grammarPoints = {
    godanNonPast: { slug: godanNonPast.slug, title: godanNonPast.title },
    godanNegative: { slug: godanNegative.slug, title: godanNegative.title },
    godanPast: { slug: godanNonPast.slug, title: "Godan verb (past)" }
  };

  const data = computed(() => [
    {
      row: examples.value[word.value].kana[0],
      name: "Plain negative, Plain negative past",
      example: examples.value[word.value].examples[0],
      grammarPoint: [grammarPoints.godanNegative],
      rowNr: 1
    },
    {
      row: examples.value[word.value].kana[1],
      name: "Polite, Continuative",
      example: examples.value[word.value].examples[1],
      grammarPoint: [grammarPoints.godanNonPast, grammarPoints.godanNegative, grammarPoints.godanPast],
      rowNr: 2
    },
    {
      row: examples.value[word.value].kana[2], 
      name: "Dictionary/plain",
      example: examples.value[word.value].examples[2],
      grammarPoint: [grammarPoints.godanNonPast],
      rowNr: 3
    },
    {
      row: examples.value[word.value].kana[3],
      name: "Imperative, Potential, Hypothetical",
      example: examples.value[word.value].examples[3],
      grammarPoint: [{ slug: null, title: null }],
      rowNr: 4
    },
    {
      row: examples.value[word.value].kana[4],
      name: "Volitional (let's...)",
      example: examples.value[word.value].examples[4],
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
      <SelectButton v-model="word" :options="wordOptions" option-label="label" option-value="value" :allowEmpty="false"></SelectButton>
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
            <ruby>{{ slotProps.data.example.kanji }}<rt>{{ slotProps.data.example.furigana }}</rt></ruby><span class="g">{{ slotProps.data.example.highlight }}</span>{{ slotProps.data.example.suffix }}
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
  width: 880px;
}

.text {
  font-size: 1.2rem;
}

.link-mt {
  margin-top: 10px;
}
</style>
