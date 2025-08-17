import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./slices/tasksSlice";
import statusesReducer from "./slices/statusesSlice";
import chaptersReducer from "./slices/chaptersSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    statuses: statusesReducer,
    chapters: chaptersReducer,
  },
});
