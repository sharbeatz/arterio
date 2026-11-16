import { Button, Empty, Modal, Typography } from "antd";

import { InsightCard, getInsights, type Insight } from "@/entities/insight";
import { useAppSelector } from "@/app/providers/store";

import styles from "./InsightsList.module.scss";

const { Title, Text } = Typography;
import { DeleteInsight } from "@/features/delete-insight";
import { EditInsight } from "@/features/edit-insight";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";

export const InsightsList = () => {
  const [editingInsight, setEditingInsight] = useState<Insight | null>(null);
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
                <Button
                  type="text"
                  icon={<EditOutlined />}
                  aria-label="Редактировать запись"
                  onClick={() => setEditingInsight(insight)}
                />
              </>
            }
          />
        ))}

        <Modal
          title="Редактировать Insight"
          open={editingInsight !== null}
          onCancel={() => setEditingInsight(null)}
          footer={null}
          destroyOnHidden
          centered
        >
          {editingInsight && (
            <div className={styles.modalContent}>
              <EditInsight
                insight={editingInsight}
                onSuccess={() => setEditingInsight(null)}
                onCancel={() => setEditingInsight(null)}
              />
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};
