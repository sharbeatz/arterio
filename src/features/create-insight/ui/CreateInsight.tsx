import { App, Button, Form, Input } from "antd";

import { useAppDispatch } from "@/app/providers/store";
import { addInsight } from "@/entities/insight";

import styles from "./CreateInsight.module.scss";

interface CreateInsightFormValues {
  title: string;
  content: string;
}

interface CreateInsightProps {
  onSuccess?: () => void;
}

export const CreateInsight = ({ onSuccess }: CreateInsightProps) => {
  const [form] = Form.useForm<CreateInsightFormValues>();
  const dispatch = useAppDispatch();
  const { message } = App.useApp();

  const handleSubmit = (values: CreateInsightFormValues) => {
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

    form.resetFields();
    message.success("Инсайт успешно создан");
    onSuccess?.();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      className={styles.form}
    >
      <Form.Item
        label="Заголовок"
        name="title"
        rules={[
          { required: true, message: "Введите заголовок" },
          { whitespace: true, message: "Заголовок не может быть пустым" },
          { max: 100, message: "Максимум 100 символов" },
        ]}
      >
        <Input placeholder="О чём ты хочешь рассказать?" size="large" />
      </Form.Item>

      <Form.Item
        label="Твоя мысль"
        name="content"
        rules={[
          { required: true, message: "Добавь содержимое записи" },
          { whitespace: true, message: "Запись не может быть пустой" },
        ]}
      >
        <Input.TextArea
          placeholder="Запиши свою мысль, идею или открытие..."
          rows={5}
          showCount
          maxLength={5000}
        />
      </Form.Item>

      <div className={styles.actions}>
        <Button type="primary" htmlType="submit" size="large">
          Сохранить инсайт
        </Button>
      </div>
    </Form>
  );
};
