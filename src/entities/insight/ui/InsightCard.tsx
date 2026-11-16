import { Card, Typography, Space } from "antd";

import type { Insight } from "../model/types";

import styles from "./InsightCard.module.scss";

const { Text, Paragraph } = Typography;

interface InsightCardProps {
  insight: Insight;
}

export const InsightCard = ({ insight }: InsightCardProps) => {
  const formattedDate = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(insight.createdAt));

  return (
    <Card className={styles.card} variant="outlined" hoverable>
      <Space orientation="vertical" size={8} className={styles.content}>
        <Text className={styles.date}>{formattedDate}</Text>

        <Typography.Title level={5} className={styles.title}>
          {insight.title}
        </Typography.Title>

        <Paragraph className={styles.description}>{insight.content}</Paragraph>
      </Space>
    </Card>
  );
};
