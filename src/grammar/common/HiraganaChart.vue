<script setup lang="ts">
  import { ref } from "vue";
  import { breakpointService } from "@/services/breakpointService";

  const props = defineProps<{
    selectedColumn?: "a" | "i" | "u" | "e" | "o"
  }>();

  const data = ref([
    { a: "あ", i: "い", u: "う", e: "え", o: "お" },
    { a: "か", i: "き", u: "く", e: "け", o: "こ" },
    { a: "さ", i: "し", u: "す", e: "せ", o: "そ" },
    { a: "た", i: "ち", u: "つ", e: "て", o: "と" },
    { a: "な", i: "に", u: "ぬ", e: "ね", o: "の" },
    { a: "は", i: "ひ", u: "ふ", e: "へ", o: "ほ" },
    { a: "ま", i: "み", u: "む", e: "め", o: "も" },
    { a: "や", i: "", u: "ゆ", e: "", o: "よ" },
    { a: "ら", i: "り", u: "る", e: "れ", o: "ろ" },
    { a: "わ", i: "", u: "", e: "", o: "を" },
    { a: "ん", i: "", u: "", e: "", o: "" }
  ]);

  const tableStyle = ref({
    colorScheme: {
      light: {
        row: {
          background: "#f9f9f9"
        }
      },
      dark: {
        row: {
          background: "#161616"
        }
      }
    }
  });
</script>

<template>
  <div>
    <DataTable :value="data" :showHeaders="false" :show-gridlines="true" :dt="tableStyle" :class="breakpointService.isMobile() ? 'table-mobile' : 'table'">
      <Column v-for="(column, index) in ['a', 'i', 'u', 'e', 'o']" :field="column" :key="index">
        <template #body="{ field, data }">
          <div class="text" :class="{ 'g': field === props.selectedColumn }">
            {{ data[field as keyof typeof data] }}
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
.table {
  width: 400px;
}

.table-mobile {
  max-width: 400px;
}

.text {
  display: flex;
  justify-content: center;
}
</style>
