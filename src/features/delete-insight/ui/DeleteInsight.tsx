import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { useAppDispatch } from "@/app/providers/store";
import { deleteInsight } from "@/entities/insight";

interface DeleteInsightProps {
  insightId: string;
}

export const DeleteInsight = ({ insightId }: DeleteInsightProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteInsight(insightId));
  };

  return (
    <Popconfirm
      title="Удалить запись?"
      description="Это действие нельзя отменить."
      onConfirm={handleDelete}
      okText="Удалить"
      cancelText="Отмена"
    >
      <Button
        danger
        type="text"
        icon={<DeleteOutlined />}
        aria-label="Удалить запись"
      />
    </Popconfirm>
  );
};
