import { ref } from "vue";
import { allList } from "@/grammar/lists/allList";
import type { GrammarPoint } from "@/types/types";

export const searchResults = ref<GrammarPoint[]>([]);

const titleWeight = 4;
const subtitleWeight = 3;
const tagWeight = 1;
const fullMatchFactor = 2;

export const search = (queryString: string) => {
  if (!queryString.trim()) {
    searchResults.value = [];
    return;
  }

  const query = queryString.toLowerCase().trim();
  const queryWords = query.split(" ").filter(word => word.length > 0);

  const scores = allList
    .map(item => {
      let totalScore = 0;

      // Match full query
      totalScore = calculateScore(query, item, fullMatchFactor);

      // Match each word individually, weighted by word length
      if (queryWords.length > 1) {
        const averageWordLength = queryWords.reduce((sum, word) => sum + word.length, 0) / queryWords.length || 1;
        for (const word of queryWords) {
          const lengthFactor = Math.min(word.length / averageWordLength, 2);
          totalScore += calculateScore(word, item, lengthFactor);
        }
      }

      return { item, score: totalScore };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.item.title.localeCompare(b.item.title);
    });
  
    // console.log(scores);
    searchResults.value = scores.map(result => result.item).slice(0, 20);
};

const calculateScore = (query: string, item: GrammarPoint, weightFactor: number): number => {
  const titleScore = (item.title.toLowerCase().includes(query) || item.titleRomaji?.toLowerCase().includes(query)) ? titleWeight * weightFactor : 0;
  const subtitleScore = item.subtitle.toLowerCase().includes(query) ? subtitleWeight * weightFactor : 0;
  const tagScore = item.tags?.reduce((score, tag) => {
    return score + (tag.toLowerCase().includes(query) ? tagWeight * weightFactor : 0);
  }, 0) ?? 0;

  return titleScore + subtitleScore + tagScore;
};
