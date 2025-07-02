<script setup lang="ts">
  import { computed, ref } from "vue";
  import { breakpointService } from "@/services/breakpointService";
  import { godanNegative, godanNonPast, godanPast, godanPastNegative, imperativeVerbs, teVerb } from "@/grammar/n5/metadataN5";
  import { ba, causativeVerbs, passiveVerbs, potentialVerbs, volitionalVerbs } from "../n4/metadataN4";
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
    { label: "行く", value: 0, translation: "to go" },
    { label: "乗る", value: 1, translation: "to ride" },
    { label: "話す", value: 2, translation: "to speak" },
    { label: "買う", value: 3, translation: "to buy" }
  ]);

  const examples = ref<GodanChartExample[]>([
    {
      kanaRow: ["か", "き", "く", "け", "こ"],
      kanji: "行",
      furigana: "い",
      okurigana: ["か", "き", "く", "け", "こ"]
    },
    {
      kanaRow: ["ら", "り", "る", "れ", "ろ"],
      kanji: "乗",
      furigana: "の",
      okurigana: ["ら", "り", "る", "れ", "ろ"]
    },
    {
      kanaRow: ["さ", "し", "す", "せ", "そ"],
      kanji: "話",
      furigana: "はな",
      okurigana: ["さ", "し", "す", "せ", "そ"]
    },
    {
      kanaRow: ["あ", "い", "う", "え", "お"],
      kanji: "買",
      furigana: "か",
      okurigana: ["わ*", "い", "う", "え", "お"]
    }
  ]);

  const data = computed(() => [
    {
      row: examples.value[word.value].kanaRow[0],
      forms: "Plain negative, Plain negative past, Passive, Causative",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana[0]
      },
      suffix: "～ない、～なかった、<br>～れる、～せる",
      grammarPoint: [godanNegative, godanPastNegative, passiveVerbs, causativeVerbs],
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
      suffix: "～ます、（～た）、（～て）",
      grammarPoint: [godanNonPast, godanNegative, godanPast, teVerb],
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
      suffix: "～る、～ば",
      grammarPoint: [imperativeVerbs, potentialVerbs, { slug: ba.slug, title: "Conditional verb" }],
      rowNr: 4
    },
    {
      row: examples.value[word.value].kanaRow[4],
      forms: "Volitional",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana[4]
      },
      suffix: "～う",
      grammarPoint: [volitionalVerbs],
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
      <Column v-if="!breakpointService.isMobile()" field="suffix" header="Endings">
        <template #body="slotProps">
          <div class="text" v-html="slotProps.data.suffix" />
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
