import { ref } from "vue";
import { allList } from "@/grammar/lists/allList";
import type { GrammarPoint } from "@/types/types";

export const searchResults = ref<GrammarPoint[]>([]);

const TITLE_WEIGHT = 4;
const SUBTITLE_WEIGHT = 3;
const TAG_WEIGHT = 1;
const FULL_MATCH_FACTOR = 2;
const MAX_RESULTS = 30;

export const search = (queryString: string) => {
  if (!queryString.trim()) {
    searchResults.value = [];
    return;
  }

  const query = queryString.toLowerCase().trim();
  const queryWords = query.split(" ").filter(word => word.length > 0);

  searchResults.value = allList
    .map(gp => {
      let totalScore = 0;

      // Match full query
      totalScore = calculateScore(query, gp, FULL_MATCH_FACTOR);

      // Match each word individually, weighted by word length
      if (queryWords.length > 1) {
        const averageWordLength = queryWords.reduce((sum, word) => sum + word.length, 0) / queryWords.length || 1;
        for (const word of queryWords) {
          const lengthFactor = Math.min(word.length / averageWordLength, 2);
          totalScore += calculateScore(word, gp, lengthFactor);
        }
      }

      return { gp, score: totalScore };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.gp.title.localeCompare(b.gp.title);
    })
    .map(result => result.gp)
    .slice(0, MAX_RESULTS);
};

const calculateScore = (query: string, gp: GrammarPoint, weightFactor: number): number => {
  const titleScore = (gp.title.toLowerCase().includes(query) || gp.titleRomaji?.toLowerCase().includes(query)) ? TITLE_WEIGHT * weightFactor : 0;
  const subtitleScore = gp.subtitle.toLowerCase().includes(query) ? SUBTITLE_WEIGHT * weightFactor : 0;
  const tagScore = gp.tags?.reduce((score, tag) => {
    return score + (tag.toLowerCase().includes(query) ? TAG_WEIGHT * weightFactor : 0);
  }, 0) ?? 0;

  return titleScore + subtitleScore + tagScore;
};
