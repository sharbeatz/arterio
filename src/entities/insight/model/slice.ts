import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Insight } from "./types";

interface InsightState {
  items: Insight[];
}

const initialState: InsightState = {
  items: [],
}; // начальное состояние с пустым массивом items

export const insightSlice = createSlice({
  name: "insight",
  initialState,
  reducers: {
    addInsight: (state, action: PayloadAction<Insight>) => {
      state.items.push(action.payload);
    },

    updateInsight: (state, action: PayloadAction<Insight>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },

    deleteInsight: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addInsight, updateInsight, deleteInsight } =
  insightSlice.actions;
