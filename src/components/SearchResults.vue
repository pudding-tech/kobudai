<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { searchResults } from "@/services/searchService";

  const props = withDefaults(defineProps<{
    searchText: string,
    mobile?: boolean
  }>(), {
    mobile: false
  });
  const emit = defineEmits(["gotoGrammar"]);

  const router = useRouter();

  const gotoGrammar = (slug: string) => {
    router.push({ name: "grammarLoader", params: { slug: slug } });
    emit("gotoGrammar");
  };
</script>

<template>
  <div class="result-container" :class="{ 'mobile': props.mobile }">
    <template v-if="searchResults.length">
      <div v-ripple v-for="result in searchResults" :key="result.title" class="search-result" :class="{ 'mobile': props.mobile }" @click="gotoGrammar(result.slug)">
        <div class="title" v-html="result.title" />
        <div class="subtitle">{{ result.subtitle }}</div>
      </div>
    </template>
    <div v-else-if="!props.searchText" class="no-results">
      Waiting for search...
    </div>
    <div v-else class="no-results">
      No results found
    </div>
  </div>
</template>

<style scoped>
.result-container {
  overflow-y: auto;
  flex-grow: 1;

  &.mobile {
    border-bottom-left-radius: var(--p-dialog-border-radius);
    border-bottom-right-radius: var(--p-dialog-border-radius);
  }
}

.search-result {
  padding: 10px 16px;
  background-color: var(--search-result-bg);
  line-height: 1.4;
  word-break: keep-all;
  cursor: pointer;
  transition: background-color 0.08s ease-in;

  &:not(:last-child) {
    border-bottom: 1px solid var(--search-result-border-color);
  }

  &.mobile:last-child {
    border-bottom: 1px solid var(--search-result-border-color);
  }

  &:hover {
    background-color: var(--search-result-bg-hover);
  }
}

.title {
  font-size: 1.2rem;
  margin-bottom: 2px;
}

.subtitle {
  font-size: 1rem;
  color: var(--search-result-subtitle);
}

.no-results {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: var(--search-result-no-result-color);
}
</style>
