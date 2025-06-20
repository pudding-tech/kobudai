import type { Component } from "vue";

export type GrammarPoint = {
  slug: string,
  title: string,
  subtitle: string,
  titleRomaji?: string,
  titlePlain?: string,
  tags?: string[],
};

export type MainList = {
  name: string,
  value: string,
  sublists: Sublist[]
};

export type Sublist = {
  name: string,
  value: string,
  sections: Section[]
};

export type Section = {
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
  okurigana: string[]
};

export type IchidanChartExample = {
  kanaRow: string,
  kanji: string,
  furigana: string,
  okurigana?: string
};
