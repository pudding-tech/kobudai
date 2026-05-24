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
      <div v-ripple v-for="result in searchResults" :key="result.slug" class="search-result" :class="{ 'mobile': props.mobile }" @click="gotoGrammar(result.slug)">
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

  &.mobile {
    border-bottom-left-radius: var(--p-dialog-border-radius);
    border-bottom-right-radius: var(--p-dialog-border-radius);
  }
}

.search-result {
  --result-bg: var(--search-result-bg);
  --result-bg-hover: var(--search-result-bg-hover);

  &.mobile {
    --result-bg: var(--search-result-bg-mobile);
    --result-bg-hover: var(--search-result-bg-hover-mobile);
  }

  padding: 10px 16px;
  line-height: 1.4;
  word-break: keep-all;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &::before {
    background: var(--result-bg);
  }

  &::after {
    background: var(--result-bg-hover);
    opacity: 0;
    transition: opacity 0.08s ease-in;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--search-result-border-color);
  }

  &.mobile:last-child {
    border-bottom: 1px solid var(--search-result-border-color);
  }

  &:hover {
    &::after {
      opacity: 1;
    }
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
