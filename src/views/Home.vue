<script setup lang="ts">
  import { computed, ref } from "vue";
  import { useRouter } from "vue-router";
  import { useThemeStore } from "@/stores/themeStore";
  import { genki1List } from "@/grammar/lists/genki1List";
  import { breakpointService } from "@/utils/breakpointService";
  import GrammarListItem from "@/components/GrammarListItem.vue";
  import GrammarListItemMobile from "@/components/GrammarListItemMobile.vue";

  const router = useRouter();
  const themeStore = useThemeStore();
  const list = ref(genki1List);

  const gotoGrammar = (slug: string) => {
    router.push({ name: "grammarLoader", params: { slug: slug } });
  };

  const accordionHeaderClass = computed(() => {
    return themeStore.darkMode.value ? "accordion-header-mobile dark" : "accordion-header-mobile";
  });
</script>

<template>
  <div v-if="!breakpointService.isMobile()" class="full-view">
    <Accordion :value="list.map(chapter => chapter.value)" multiple class="list">
      <AccordionPanel v-for="(chapter, index) in list" :value="chapter.value" :key="index" :class="{ 'last-panel': index === list.length - 1 }">
        <AccordionHeader class="accordion-header">{{ chapter.title }}</AccordionHeader>
        <AccordionContent>
          <div v-for="(grammarPoint, index2) in chapter.grammarPoints" :key="index2">
            <GrammarListItem :grammarPoint="grammarPoint" class="grammar-point" @click="gotoGrammar(grammarPoint.slug)" />
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
  <div v-else class="mobile-color">
    <Accordion :value="list.map(chapter => chapter.value)" multiple>
      <AccordionPanel v-for="(chapter, index) in list" :value="chapter.value" :key="index" :class="{ 'last-panel': index === list.length - 1 }">
        <AccordionHeader class="accordion-header" :pt="{ root: { class: accordionHeaderClass } }">{{ chapter.title }}</AccordionHeader>
        <AccordionContent>
          <div v-for="(grammarPoint, index2) in chapter.grammarPoints" :key="index2">
            <GrammarListItemMobile :grammarPoint="grammarPoint" class="grammar-point" @click="gotoGrammar(grammarPoint.slug)" />
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped>
.full-view {
  display: flex;
  justify-content: center;
}

.list {
  width: 70rem;
}

.accordion-header {
  font-weight: 500;
}

.accordion-header-mobile {
  border-radius: 0 !important;
  padding: 1.4rem 1.125rem;

  &.dark {
    background-color: var(--body-bg) !important;
  }
}

.grammar-point {
  margin-bottom: 10px;
}

.last-panel {
  border-bottom: none;
}
</style>
