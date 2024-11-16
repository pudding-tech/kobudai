<script setup lang="ts">
  import { computed, ref } from "vue";
  import { breakpointService } from "@/services/breakpointService";
  import { godanNegative, godanNonPast, godanPast } from "@/grammar/n5/metadataN5";
  import { potentialVerbs } from "../n4/metadataN4";
  import type { GodanChartExample } from "@/types/types";

  const props = withDefaults(defineProps<{
    wordSelection?: number,
    selectedRow?: number,
    showWordSelection?: boolean,
    showLinks?: boolean
  }>(), {
    wordSelection: 1,
    showWordSelection: false,
    showLinks: false
  });

  const word = ref(props.wordSelection - 1);
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
      okurigana: ["わ", "い", "う", "え", "お"]
    },
    {
      kanaRow: ["か", "き", "く", "け", "こ"],
      kanji: "行",
      furigana: "い",
      okurigana: ["か", "き", "く", "け", "こ"]
    },
    {
      kanaRow: ["さ", "し", "す", "せ", "そ"],
      kanji: "話",
      furigana: "はな",
      okurigana: ["さ", "し", "す", "せ", "そ"]
    }
  ]);

  const data = computed(() => [
    {
      row: examples.value[word.value].kanaRow[0],
      forms: "Plain negative, Plain negative past",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana[0]
      },
      suffix: "ない",
      grammarPoint: [godanNegative, { slug: null, title: "Negative past verb (godan)" }],
      rowNr: 1
    },
    {
      row: examples.value[word.value].kanaRow[1],
      forms: "Continuative, Polite",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana[1]
      },
      suffix: "ます",
      grammarPoint: [godanNonPast, godanNegative, godanPast, { slug: null, title: "Te-form" }],
      rowNr: 2
    },
    {
      row: examples.value[word.value].kanaRow[2], 
      forms: "Dictionary, Plain non-past",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana[2]
      },
      suffix: null,
      grammarPoint: [godanNonPast],
      rowNr: 3
    },
    {
      row: examples.value[word.value].kanaRow[3],
      forms: "Imperative, Potential, Conditional",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana[3]
      },
      suffix: "る、ば",
      grammarPoint: [potentialVerbs],
      rowNr: 4
    },
    {
      row: examples.value[word.value].kanaRow[4],
      forms: "Volitional (let's...)",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana[4]
      },
      suffix: "う",
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
      <span v-if="!breakpointService.isMobile()" style="margin-left: 10px; color: var(--p-primary-250)">Example words</span>
    </div>
    <DataTable :value="data" :showHeaders="true" :show-gridlines="true" :row-class="selectedRow" :class="{ 'table': !breakpointService.isMobile() }">
      <Column field="row" header="Kana Column">
        <template #body="slotProps">
          <div class="g text">
            <b>{{ slotProps.data.row }}</b>
          </div>
        </template>
      </Column>
      <Column field="forms" header="Forms">
        <template #body="slotProps">
          <div>
            {{ slotProps.data.forms }}
          </div>
        </template>
      </Column>
      <Column field="stem" header="Stem">
        <template #body="slotProps">
          <div class="text kanji">
            <ruby>{{ slotProps.data.stem.kanji }}<rt>{{ slotProps.data.stem.furigana }}</rt></ruby><span class="h">{{ slotProps.data.stem.okurigana }}</span>
          </div>
        </template>
      </Column>
      <Column v-if="!breakpointService.isMobile()" field="suffix" header="Conjugations">
        <template #body="slotProps">
          <div class="text">
            {{ slotProps.data.suffix }}
          </div>
        </template>
      </Column>
      <Column v-if="props.showLinks && !breakpointService.isMobile()" field="grammarPoint" header="Related Grammar Points">
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
  width: 900px;
}

.text {
  font-size: 1.2rem;
  white-space: nowrap;

  &.kanji {
    position: relative;
    bottom: 2px;
  }
}

.link-mt {
  margin-top: 10px;
}
</style>
