import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { insightSlice } from "@/entities/insight";

const rootReducer = combineReducers({
  insight: insightSlice.reducer,
});

const storage = {
  getItem: async (key: string): Promise<string | null> => {
    return window.localStorage.getItem(key);
  },

  setItem: async (key: string, value: string): Promise<void> => {
    window.localStorage.setItem(key, value);
  },

  removeItem: async (key: string): Promise<void> => {
    window.localStorage.removeItem(key);
  },
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
