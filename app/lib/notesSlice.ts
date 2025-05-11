import { Notes } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Notes[] | null = null;
const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addFeed(state, action) {
      return action.payload;
    },
    removeFeed(state: Notes[] | null, action: PayloadAction<string>): Notes[] | null  {
      if (state) {
        const newArray = state.filter((note) => note.id !== action.payload);
        return newArray;
      }
      return state;
    },
  },
});
