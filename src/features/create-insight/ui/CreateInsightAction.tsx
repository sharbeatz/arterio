import { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { CreateInsight } from "./CreateInsight";
import styles from "./CreateInsight.module.scss";

export const CreateInsightAction = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        size="large"
        icon={<PlusOutlined />}
        onClick={() => setOpen(true)}
      >
        Новая запись
      </Button>

      <Modal
        title="Новая запись"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnHidden
        centered
      >
        <div className={styles.modalContent}>
          <CreateInsight onSuccess={() => setOpen(false)} />
        </div>
      </Modal>
    </>
  );
};
