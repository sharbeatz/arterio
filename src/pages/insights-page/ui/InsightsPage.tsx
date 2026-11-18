import { Typography } from "antd";
import { CreateInsightAction } from "@/features/create-insight";
import { InsightsList } from "@/widgets/insights-list";

import styles from "./InsightsPage.module.scss";

const { Title, Text } = Typography;

export const InsightsPage = () => {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.heading}>
          <Title level={2}>Инсайты</Title>
          <Text type="secondary">
            Сохраняй свои мысли, идеи и маленькие открытия.
          </Text>
        </div>
        <CreateInsightAction />
      </header>

      <InsightsList />
    </main>
  );
};
