<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { searchResults } from "@/utils/searchService";

  const router = useRouter();
  const emit = defineEmits(["closeDialog"]);

  const gotoGrammar = (slug: string) => {
    router.push({ name: "grammarLoader", params: { slug: slug } });
    emit("closeDialog");
  };
</script>

<template>
  <div class="result-container">
    <template v-if="searchResults.length">
      <div v-ripple v-for="result in searchResults" :key="result.title" class="search-result" @click="gotoGrammar(result.slug)">
        <div class="title">{{ result.title }}</div>
        <div class="subtitle">{{ result.subtitle }}</div>
      </div>
    </template>
    <div v-else class="no-results">
      <div>No results found</div>
    </div>
  </div>
</template>

<style scoped>
.result-container {
  overflow-y: auto;
  flex-grow: 1;
  border-bottom-left-radius: var(--p-dialog-border-radius);
  border-bottom-right-radius: var(--p-dialog-border-radius);
}

.search-result {
  padding: 10px 16px;
  background-color: #181818;
  background-color: #1e1e1e;
  border-bottom: 1px solid #434343;
  line-height: 1.4;
}

.title {
  font-size: 1.2rem;
  margin-bottom: 2px;
}

.subtitle {
  font-size: 1rem;
  color: #b5b5b5;
}

.no-results {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: #666;
}
</style>
