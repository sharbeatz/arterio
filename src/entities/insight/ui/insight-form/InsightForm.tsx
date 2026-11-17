import { Button, Form, Input, Space } from "antd";

interface InsightFormValues {
  title: string;
  content: string;
}

interface InsightFormProps {
  initialValues?: InsightFormValues;
  submitText: string;
  onSubmit: (values: InsightFormValues) => void;
  onCancel?: () => void;
}

export const InsightForm = ({
  initialValues,
  submitText,
  onSubmit,
  onCancel,
}: InsightFormProps) => {
  return (
    <Form layout="vertical" initialValues={initialValues} onFinish={onSubmit}>
      <Form.Item
        label="Заголовок"
        name="title"
        rules={[
          { required: true, message: "Ты не добавил заголовок инсайта :(" },
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
          { required: true, message: "Ты не добавил инсайт :(" },
          { whitespace: true, message: "Инсайт не может быть пустым" },
        ]}
      >
        <Input.TextArea
          placeholder="Запиши свою мысль, идею или маленькое открытие"
          rows={5}
          showCount
          maxLength={5000}
        />
      </Form.Item>

      <Space>
        {onCancel && <Button onClick={onCancel}>Отмена</Button>}

        <Button type="primary" htmlType="submit" size="large">
          {submitText}
        </Button>
      </Space>
    </Form>
  );
};
