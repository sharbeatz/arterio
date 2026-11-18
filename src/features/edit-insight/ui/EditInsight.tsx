import { App } from "antd";

import { useAppDispatch } from "@/app/providers/store";
import { updateInsight, InsightForm } from "@/entities/insight";
import type { Insight } from "@/entities/insight";

interface InsightFormValues {
  title: string;
  content: string;
}

interface EditInsightProps {
  insight: Insight;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const EditInsight = ({
  insight,
  onSuccess,
  onCancel,
}: EditInsightProps) => {
  const dispatch = useAppDispatch();
  const { message } = App.useApp();

  const handleSubmit = (values: InsightFormValues) => {
    dispatch(
      updateInsight({
        ...insight,
        title: values.title.trim(),
        content: values.content.trim(),
        updatedAt: new Date().toISOString(),
      }),
    );

    message.success("Инсайт успешно обновлён");
    onSuccess?.();
  };

  return (
    <InsightForm
      initialValues={{
        title: insight.title,
        content: insight.content,
      }}
      submitText="Сохранить изменения"
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
