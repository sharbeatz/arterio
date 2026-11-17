import { Empty, Typography } from "antd";
import { InsightCard, getInsights } from "@/entities/insight";
import { useAppSelector } from "@/app/providers/store";
import styles from "./InsightsList.module.scss";
const { Title, Text } = Typography;
import { DeleteInsight } from "@/features/delete-insight";
import { EditInsightAction } from "@/features/edit-insight/ui/EditInsightAction";

export const InsightsList = () => {
  const insights = useAppSelector(getInsights);

  if (insights.length === 0) {
    return (
      <div className={styles.empty}>
        <Empty
          description={
            <Text type="secondary">
              Пока нет записей. Поделись своей первой мыслью!
            </Text>
          }
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Title level={4} className={styles.heading}>
        Твои записи
      </Title>

      <div className={styles.list}>
        {insights.map((insight) => (
          <InsightCard
            key={insight.id}
            insight={insight}
            actions={
              <>
                <DeleteInsight insightId={insight.id} />
                <EditInsightAction insight={insight} />
              </>
            }
          />
        ))}
      </div>
    </div>
  );
};
