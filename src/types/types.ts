import type { Component } from "vue";

export type GrammarPoint = {
  slug: string,
  title: string,
  subtitle: string
};

export type Chapter = {
  title: string,
  value: number,
  grammarPoints: GrammarPoint[]
};

export type GrammarComponent = {
  component: Component;
  meta: {
    title: string;
  };
};

export type GodanChartExample = {
  kana: string[],
  examples: {
    furigana: string,
    kanji: string,
    highlight: string,
    suffix?: string
  }[]
};
