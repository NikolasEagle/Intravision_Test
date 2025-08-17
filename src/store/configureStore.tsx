import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./slices/tasksSlice";
import statusesReducer from "./slices/statusesSlice";
import chaptersReducer from "./slices/chaptersSlice";
import prioritiesReducer from "./slices/prioritiesSlice";
import createPopupReducer from "./slices/createPopupSlice";
import editPopupReducer from "./slices/editPopupSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    statuses: statusesReducer,
    chapters: chaptersReducer,
    priorities: prioritiesReducer,
    createPopup: createPopupReducer,
    editPopup: editPopupReducer,
  },
});
