import { useState } from "react";
import { Button, Modal, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { CreateInsight } from "@/features/create-insight";
import { InsightsList } from "@/widgets/insights-list";

import styles from "./InsightsPage.module.scss";

const { Title, Text } = Typography;

export const InsightsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.heading}>
          <Title level={2}>Инсайты</Title>
          <Text type="secondary">
            Сохраняй свои мысли, идеи и маленькие открытия.
          </Text>
        </div>

        <Button
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
        >
          Новая запись
        </Button>
      </header>

      <InsightsList />

      <Modal
        title="Новая запись"
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        destroyOnHidden
        centered
      >
        <div className={styles.modalContent}>
          <CreateInsight onSuccess={handleCloseModal} />
        </div>
      </Modal>
    </main>
  );
};
