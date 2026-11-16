import { useState } from "react";
import { Modal } from "antd";

import { CreateInsight } from "@/features/create-insight";
import { EditInsight } from "@/features/edit-insight";
import { getInsightById } from "@/entities/insight";
import type { Insight } from "@/entities/insight";
import { useAppSelector } from "@/app/providers/store";

import styles from "./InsightModals.module.scss";

interface InsightModalsProps {
  isCreateOpen: boolean;
  onCloseCreate: () => void;
  editingInsightId: string | null;
  onCloseEdit: () => void;
}

export const InsightModals = ({
  isCreateOpen,
  onCloseCreate,
  editingInsightId,
  onCloseEdit,
}: InsightModalsProps) => {
  const editingInsight = useAppSelector((state) =>
    editingInsightId ? getInsightById(editingInsightId)(state) : undefined,
  );

  return (
    <>
      <Modal
        title="Новая запись"
        open={isCreateOpen}
        onCancel={onCloseCreate}
        footer={null}
        destroyOnHidden
        centered
      >
        <div className={styles.content}>
          <CreateInsight onSuccess={onCloseCreate} />
        </div>
      </Modal>

      <Modal
        title="Редактировать Insight"
        open={editingInsightId !== null && !!editingInsight}
        onCancel={onCloseEdit}
        footer={null}
        destroyOnHidden
        centered
      >
        {editingInsight && (
          <div className={styles.content}>
            <EditInsight
              insight={editingInsight}
              onSuccess={onCloseEdit}
              onCancel={onCloseEdit}
            />
          </div>
        )}
      </Modal>
    </>
  );
};
