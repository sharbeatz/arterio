export { insightSlice } from "./model/slice";

export type { Insight } from "./model/types";

export { addInsight, updateInsight, deleteInsight } from "./model/slice";

export { getInsights, getInsightById } from "./model/selectors";

export { InsightCard } from "./ui/insight-card/InsightCard";
export { InsightForm } from "./ui/insight-form/InsightForm";
