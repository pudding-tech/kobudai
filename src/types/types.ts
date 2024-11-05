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
  kanaRow: string[],
  kanji: string,
  furigana: string,
  end: {
    highlight: string,
    suffix?: string
  }[]
};

export type IchidanChartExample = {
  kanaRow: string,
  kanji: string,
  furigana: string,
  middle?: string,
  end: {
    highlight?: string,
    suffix?: string
  }[]
};
