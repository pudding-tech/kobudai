<script setup lang="ts">
  import { computed, ref } from "vue";
  import { useRouter } from "vue-router";
  import { useListStore } from "@/stores/listStore";
  import { breakpointService } from "@/utils/breakpointService";
  import ListSelector from "@/components/ListSelector.vue";
  import GrammarListItem from "@/components/GrammarListItem.vue";
  import GrammarListItemMobile from "@/components/GrammarListItemMobile.vue";
  import type { MainList, Section, Sublist } from "@/types/types";

  const router = useRouter();
  const listStore = useListStore();

  const selectedMainListValue = listStore.getMainList();
  const selectedSublistValue = listStore.getSublist();

  const selectedMainList = computed<MainList | undefined>(() => {
    return listStore.mainLists.find(list => list.value === selectedMainListValue.value);
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
    }));
  });

  const gotoGrammar = (slug: string) => {
    router.push({ name: "grammarLoader", params: { slug: slug } });
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
          background: "#121212",
          hoverBackground: "#121212",
          activeBackground: "#121212",
          activeHoverBackground: "#121212",
        },
        content: {
          background: "#121212"
        }
      }
    }
  });
</script>

<template>
  <div v-if="!breakpointService.isMobile()" class="full">
    <div>
      <div class="list-section">
        <span v-if="selectedMainListValue === 'genki'" class="title">- GENKI -</span>
        <span v-else-if="selectedMainListValue === 'jlpt'" class="title">- JLPT- </span>
        <ListSelector v-model="selectedSublistValue" :options="sublistOptions" class="sublist-selector" />
      </div>
      <Accordion :value="sections.map(section => section.value)" multiple class="list">
        <AccordionPanel v-for="(section, index) in sections" :value="section.value" :key="index" :class="{ 'last-panel': index === sections.length - 1 }">
          <AccordionHeader class="accordion-header">{{ section.title }}</AccordionHeader>
          <AccordionContent>
            <div v-for="(grammarPoint, index2) in section.grammarPoints" :key="index2">
              <GrammarListItem :grammarPoint="grammarPoint" class="grammar-point" @click="gotoGrammar(grammarPoint.slug)" />
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>
  <div v-else>
    <div class="list-section mobile">
      <span v-if="selectedMainListValue === 'genki'" class="title">- GENKI -</span>
      <span v-else-if="selectedMainListValue === 'jlpt'" class="title">- JLPT -</span>
      <ListSelector v-model="selectedSublistValue" :options="sublistOptions" class="sublist-selector" />
    </div>
    <Accordion :value="sections.map(section => section.value)" multiple :dt="accordionMobile">
      <AccordionPanel v-for="(section, index) in sections" :value="section.value" :key="index" :class="{ 'last-panel': index === sections.length - 1 }">
        <AccordionHeader class="accordion-header">{{ section.title }}</AccordionHeader>
        <AccordionContent>
          <div v-for="(grammarPoint, index2) in section.grammarPoints" :key="index2">
            <GrammarListItemMobile :grammarPoint="grammarPoint" class="grammar-point" @click="gotoGrammar(grammarPoint.slug)" />
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

.list-section {
  padding: 0 20px 20px;
  display: flex;
  align-items: center;

  &.mobile {
    padding-top: 20px;
    background-color: var(--list-section-bg);
    justify-content: space-between;

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
