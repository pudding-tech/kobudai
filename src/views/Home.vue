<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { genki1List } from "@/grammar/lists/genki1List";
  import GrammarListItem from "@/components/GrammarListItem.vue";

  const router = useRouter();
  const list = ref(genki1List);

  const gotoGrammar = (slug: string) => {
    router.push({ name: "grammarLoader", params: { slug: slug } });
    // try {
    //   router.push({ name: id });
    // }
    // catch (err) {
    //   console.error(err);
    //   router.push({ name: "NotFound"});
    // }
  };
</script>

<template>
  <div class="outer">
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
</template>

<style scoped>
.outer {
  display: flex;
  justify-content: center;
}

.list {
  width: 70rem;
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
