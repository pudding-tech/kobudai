<script setup lang="ts">
  import { computed, ref } from "vue";
  import { breakpointService } from "@/services/breakpointService";
  import { ichidanNegative, ichidanNonPast, ichidanPast, ichidanPastNegative, teVerb } from "@/grammar/n5/metadataN5";
  import { ba, causativeVerbs, passiveVerbs, potentialVerbs, volitionalVerbs } from "../n4/metadataN4";
  import type { IchidanChartExample } from "@/types/types";

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
    { label: "食べる", value: 0, translation: "to eat" },
    { label: "出る", value: 1, translation: "to leave" },
    { label: "見る", value: 2, translation: "to see" },
    { label: "浴びる", value: 3, translation: "to take a shower" }
  ]);

  const examples = ref<IchidanChartExample[]>([
    {
      kanaRow: "る",
      kanji: "食",
      furigana: "た",
      okurigana: "べ"
    },
    {
      kanaRow: "る",
      kanji: "出",
      furigana: "で"
    },
    {
      kanaRow: "る",
      kanji: "見",
      furigana: "み"
    },
    {
      kanaRow: "る",
      kanji: "浴",
      furigana: "あ",
      okurigana: "び"
    }
  ]);

  const data = computed(() => [
    {
      row: examples.value[word.value].kanaRow,
      forms: "Plain negative, Plain negative past, Passive, Causative",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana
      },
      suffix: "～ない、～なかった、<br>～られる、～させる",
      grammarPoint: [ichidanNegative, ichidanPastNegative, passiveVerbs, causativeVerbs],
      rowNr: 1
    },
    {
      row: examples.value[word.value].kanaRow,
      forms: "Continuative, Polite",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana
      },
      suffix: "～ます、～た、～て",
      grammarPoint: [ichidanNonPast, ichidanNegative, ichidanPast, teVerb],
      rowNr: 2
    },
    {
      row: examples.value[word.value].kanaRow, 
      forms: "Dictionary, Plain non-past",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana
      },
      suffix: "～る",
      grammarPoint: [ichidanNonPast],
      rowNr: 3
    },
    {
      row: examples.value[word.value].kanaRow,
      forms: "Imperative, Potential, Conditional",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana
      },
      suffix: "～ろ、～られる、～れば",
      grammarPoint: [potentialVerbs, { slug: ba.slug, title: "Conditional verb" }],
      rowNr: 4
    },
    {
      row: examples.value[word.value].kanaRow,
      forms: "Volitional",
      stem: {
        kanji: examples.value[word.value].kanji,
        furigana: examples.value[word.value].furigana,
        okurigana: examples.value[word.value].okurigana
      },
      suffix: "～よう",
      grammarPoint: [volitionalVerbs],
      rowNr: 5
    }
  ]);

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
      <span v-if="!breakpointService.isMobile()" style="margin-left: 10px; color: var(--p-primary-250)">Example words</span>
    </div>
    <DataTable :value="data" :showHeaders="true" :show-gridlines="true" :row-class="selectedRow" row-group-mode="rowspan" group-rows-by="row" :class="{ 'table': !breakpointService.isMobile() }">
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
            <ruby>{{ slotProps.data.stem.kanji }}<rt>{{ slotProps.data.stem.furigana }}</rt></ruby>{{ slotProps.data.stem.okurigana }}
          </div>
        </template>
      </Column>
      <Column v-if="!breakpointService.isMobile()" field="suffix" header="Endings">
        <template #body="slotProps">
          <div class="text" v-html="slotProps.data.suffix" />
        </template>
      </Column>
      <Column v-if="props.showLinks && !breakpointService.isMobile()" field="grammarPoint" header="Grammar Points">
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
  width: 924px;
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
