`hooks.ts` - это типизированные хуки Redux для TypeScript. Они нужны, чтобы TypeScript автоматически понимал, с каким состоянием и действиями работает Redux.

React Redux предоставляет два основных хука:

```ts
import { useDispatch, useSelector } from "react-redux";
```

useDispatch — отправляет действия в Redux Store.

```ts
const dispatch = useDispatch();

dispatch(addInsight(newInsight));
```

useSelector — получает данные из Redux Store.

```ts
const insights = useSelector((state) => state.insight.items);
```

Проблема в том, что TypeScript не всегда знает точную структуру нашего Store и типы доступных действий.

```ts
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();
```

Метод `withTypes` (это новый метод в Redux Tool Kit 9.1.0, раньше писали типа RootState) позволяет заранее указать TypeScript, какие типы использовать для конкретного Redux-хука.

`useAppDispatch`

Мы говорим TypeScript:

«Создай версию useDispatch, которая знает тип dispatch нашего приложения».

AppDispatch мы определили в store.ts:

```ts
export type AppDispatch = typeof store.dispatch;
```

Теперь TypeScript знает обо всех зарегистрированных в Store действиях и middleware.

Использование:

```ts
const dispatch = useAppDispatch();

dispatch(addInsight(newInsight));
```

`useAppSelector`

```ts
export const useAppSelector = useSelector.withTypes<RootState>();
```

А здесь мы говорим:

«Создай версию useSelector, которая знает структуру Redux Store».

RootState определён так:

```ts
export type RootState = ReturnType<typeof rootReducer>;
```

Теперь TypeScript знает, что в нашем Store есть:

```ts
{
  insight: {
    items: Insight[];
  };
}
```

Поэтому можно писать:

```ts
const insights = useAppSelector(getInsights);
```

И TypeScript автоматически понимает, что insights имеет тип Insight[].
