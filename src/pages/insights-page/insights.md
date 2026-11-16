## `pages`

**`InsightsPage`**

Страница целиком. Определяет расположение элементов, заголовок, описание и общую композицию.

Открытие модалки как обычно через `useState`

```ts
const [isModalOpen, setIsModalOpen] = useState(false);
```

по базе создается состоние.

При клике на кнопку просто меняется состояние на true

```tsx
<Button
  type="primary"
  size="large"
  icon={<PlusOutlined />}
  onClick={() => setIsModalOpen(true)}
>
  Новая запись
</Button>
```

В antd в `Modal` спрятана логика открытия. этой самой модалки. В нее просто передается флаг `open={isModalOpen}`. Если потом убирать antd, то нужно будет делать чтобы внутри компонента `Modal` эту логику открытия делать. А сам компонент пуст будет находится в `shared`

```tsx
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
```

Ну и конечно `Modal` принимает дочерние элементы и там у него фича с созданием инсайта

````tsx
    <div className={styles.modalContent}>
        <CreateInsight onSuccess={handleCloseModal} />
    </div>
```





## `widgets`

**`InsightsList`**

Отвечает за отображение списка записей, пустого состояния и, при необходимости, состояния загрузки.

## `features`

**`Create / Edit / Delete Insight`**

Пользовательские действия: создание, редактирование и удаление записей.

## `entities`

**`Insight`**

Сама бизнес-сущность: типы данных, Redux slice, selectors и карточка записи.
````
