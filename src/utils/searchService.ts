import { ref } from "vue";
import { allList } from "@/grammar/lists/allList";
import type { GrammarPoint } from "@/types/types";

export const searchResults = ref<GrammarPoint[]>([]);

export const search = (query: string) => {
  if (!query) {
    searchResults.value = [];
    return;
  }

  searchResults.value = allList
    .filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.tags?.some(tag => tag.includes(query.toLowerCase()))
    )
    .slice(0, 15);
};
