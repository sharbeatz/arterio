import type { RootState } from "@/app/providers/store";
import type { Insight } from "./types";

// Получить все записи
export const getInsights = (state: RootState): Insight[] => state.insight.items;

// Получить запись по ID
export const getInsightById =
  (id: string) =>
  (state: RootState): Insight | undefined =>
    state.insight.items.find((item) => item.id === id);
