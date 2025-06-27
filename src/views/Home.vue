<script setup lang="ts">
  import { computed, onMounted, ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { getMainListByValue } from "@/lists";
  import { useListStore } from "@/stores/listStore";
  import { isValidList } from "@/lists";
  import { breakpointService } from "@/services/breakpointService";
  import { scrollService } from "@/services/scrollService";
  import CustomSelectButton from "@/components/CustomSelectButton.vue";
  import GrammarListItem from "@/components/GrammarListItem.vue";
  import type { MainList, Section, Sublist } from "@/types/types";

  const listStore = useListStore();
  const route = useRoute();
  const router = useRouter();

  const selectedMainListValue = listStore.getMainList;
  const selectedSublistValue = computed({
    get: () => listStore.getSublist.value,
    set: (value: string) => {
      listStore.setSublist(value);
      expandAll();
    }
  });

  const selectedMainList = computed<MainList | undefined>(() => {
    return getMainListByValue(selectedMainListValue.value);
  });

  const selectedSublist = computed<Sublist | undefined>(() => {
    return selectedMainList.value?.sublists.find(sublist => sublist.value === selectedSublistValue.value);
  });

  const sections = computed<Section[]>(() => {
    return selectedSublist.value?.sections ?? [];
  });

  const sublistOptions = computed(() => {
    return selectedMainList.value?.sublists.map(sublist => ({
      label: sublist.name,
      value: sublist.value
    })) ?? [];
  });

  const activeSections = ref<number[]>(sections.value.map(section => section.value));
  const isAllCollapsed = computed(() => !sections.value.some(section => activeSections.value.includes(section.value)));
  const expandedIcon = computed(() => isAllCollapsed.value ? "pi pi-eye" : "pi pi-eye-slash");
  const expandedText = computed(() => isAllCollapsed.value ? "Expand all" : "Collapse all");

  onMounted(() => {
    scrollService.reset();

    const mainList = route.params.mainlist as string | undefined;
    const subList = route.params.sublist as string | undefined;

    if (mainList && subList && isValidList(mainList, subList)) {
      if (listStore.getMainList.value !== mainList) {
        listStore.setMainList(mainList);
      }
      if (listStore.getSublist.value !== subList) {
        listStore.setSublist(subList);
      }
    }
    else {
      router.replace({ name: "list", params: { mainlist: listStore.getMainList.value, sublist: listStore.getSublist.value } });
    }
  });

  watch([selectedMainListValue, selectedSublistValue], ([main, sub]) => {
    if (route.params.mainlist !== main || route.params.sublist !== sub) {
      router.replace({ name: "list", params: { mainlist: main, sublist: sub } });
    }
  });

  const toggleCollapseAll = () => {
    if (isAllCollapsed.value) {
      expandAll();
    }
    else {
      activeSections.value = [];
    }
  };

  const expandAll = () => {
    activeSections.value = sections.value.map(section => section.value);
  };

  const accordionMobile = ref({
    header: {
      padding: "1.4rem 1.125rem",
      first: {
        topBorderRadius: "0",
      },
      last: {
        bottomBorderRadius: "0",
      }
    },
    colorScheme: {
      dark: {
        header: {
          background: "var(--accordion-color)",
          hoverBackground: "var(--accordion-color)",
          activeBackground: "var(--accordion-color)",
          activeHoverBackground: "var(--accordion-color)",
        },
        content: {
          background: "var(--accordion-color)"
        }
      }
    }
  });
</script>

<template>
  <div v-if="!breakpointService.isMobile()" class="full">
    <div>
      <div class="top-section">
        <div class="list-section">
          <span class="title">
            - {{ selectedMainList?.name.toUpperCase() }} -
          </span>
          <CustomSelectButton v-model="selectedSublistValue" :options="sublistOptions" class="sublist-selector" />
        </div>
        <Button :label="expandedText" :icon="expandedIcon" variant="text" severity="secondary" @click="toggleCollapseAll()" />
      </div>
      <Accordion v-model:value="activeSections" multiple class="list">
        <AccordionPanel v-for="(section, index) in sections" :value="section.value" :key="index" :class="{ 'last-panel': index === sections.length - 1 }">
          <AccordionHeader class="accordion-header">{{ section.title }}</AccordionHeader>
          <AccordionContent>
            <div v-for="(grammarPoint, index2) in section.grammarPoints" :key="index2">
              <GrammarListItem :grammarPoint="grammarPoint" class="grammar-point" />
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>
  <div v-else>
    <div class="list-section mobile sticky" :class="{ 'hide-sticky': scrollService.hideSticky() }">
      <span class="title">
        - {{ selectedMainList?.name.toUpperCase() }} -
      </span>
      <CustomSelectButton v-model="selectedSublistValue" :options="sublistOptions" class="sublist-selector" />
    </div>
    <div class="mobile-expand-section">
      <Button :label="expandedText" :icon="expandedIcon" variant="text" severity="secondary" size="small" class="expand-button" @click="toggleCollapseAll()" />
    </div>
    <Accordion v-model:value="activeSections" multiple :dt="accordionMobile">
      <AccordionPanel v-for="(section, index) in sections" :value="section.value" :key="index" :class="{ 'last-panel': index === sections.length - 1 }">
        <AccordionHeader class="accordion-header">{{ section.title }}</AccordionHeader>
        <AccordionContent>
          <div v-for="(grammarPoint, index2) in section.grammarPoints" :key="index2">
            <GrammarListItem :grammarPoint="grammarPoint" :mobile="true" class="grammar-point" />
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped>
.full {
  display: flex;
  justify-content: center;
}

.list {
  width: 70rem;
}

.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-section {
  padding: 0 20px 20px;
  display: flex;
  align-items: center;

  &.mobile {
    padding-top: 20px;
    background-color: var(--list-section-bg);
    justify-content: space-between;

    &.sticky {
      position: sticky;
      /* top: 0; */
      top: 65px;
      z-index: 999;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    &.hide-sticky {
      transition: transform 0.3s;
      transform: translateY(calc(-100% - 65px));
    }

    .title {
      font-size: 1.3rem;
    }
  }

  .title {
    margin-right: 16px;
    font-size: 1.8rem;
    opacity: 0.8;
  }

  .sublist-selector {
    margin-left: 10px;
  }
}

.mobile-expand-section {
  display: flex;
  /* justify-content: end;
  padding: 0 12px 10px 0;
  background-color: var(--list-section-bg); */
  padding: 6px 8px;
  background-color: var(--accordion-color);
  border-bottom: 1px solid var(--line-color-soft);

  .expand-button {
    width: 100%;
    justify-content: right;
  }
}

.accordion-header {
  font-weight: 500;
}

.grammar-point {
  margin-bottom: 10px;
}

.last-panel {
  border-bottom: none;
}
</style>

<style>
/* .mobile-expand-section .p-button:hover {
  background-color: #27272a !important;
} */
</style>
