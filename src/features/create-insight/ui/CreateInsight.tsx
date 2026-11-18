import { App } from "antd";

import { useAppDispatch } from "@/app/providers/store";
import { addInsight, InsightForm } from "@/entities/insight";

interface InsightFormValues {
  title: string;
  content: string;
}

interface CreateInsightProps {
  onSuccess?: () => void;
}

export const CreateInsight = ({ onSuccess }: CreateInsightProps) => {
  const dispatch = useAppDispatch();
  const { message } = App.useApp();

  const handleSubmit = (values: InsightFormValues) => {
    const now = new Date().toISOString();

    dispatch(
      addInsight({
        id: crypto.randomUUID(),
        title: values.title.trim(),
        content: values.content.trim(),
        createdAt: now,
        updatedAt: now,
      }),
    );

    message.success("Инсайт успешно создан");
    onSuccess?.();
  };

  return <InsightForm submitText="Сохранить инсайт" onSubmit={handleSubmit} />;
};
