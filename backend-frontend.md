## Insight

- пока за добавление, удаление, редактирование записей отвечает слайс в Redux Tool Kit: [Insight](src\entities\insight\model\slice.ts);
- типы в [types](src\entities\insight\model\types.ts)

Добавляется запись подобным образом:

```tsx
dispatch(
  addInsight({
    id: crypto.randomUUID(),
    title: "Новая идея",
    content: "Моя мысль...",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }),
);
```

А после создания бэка будем отправлять такой запрос на добавление

```tsx
await createInsight({
  title: "Новая идея",
  content: "Моя интересная мысль",
});
```

А бэкенд будет примерно таким:

```ts
async function createInsight(data: CreateInsightDto) {
  const insight = {
    id: crypto.randomUUID(),
    title: data.title,
    content: data.content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await database.insights.insert(insight);

  return insight;
}
```
