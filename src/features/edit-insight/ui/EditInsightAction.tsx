import { useState } from "react";
import { Button, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { EditInsight } from "./EditInsight";
import type { Insight } from "@/entities/insight";

interface EditInsightActionProps {
  insight: Insight;
}

export const EditInsightAction = ({ insight }: EditInsightActionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="text"
        icon={<EditOutlined />}
        aria-label="Редактировать запись"
        onClick={() => setOpen(true)}
      />

      <Modal
        title="Редактировать инсайт"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnHidden
        centered
      >
        <div>
          <EditInsight
            insight={insight}
            onSuccess={() => setOpen(false)}
            onCancel={() => setOpen(false)}
          />
        </div>
      </Modal>
    </>
  );
};
