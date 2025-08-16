import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./slices/tasksSlice";
import statusesReducer from "./slices/statusesSlice";
import chaptersReducer from "./slices/chaptersSlice";

export const url = "http://intravision-task.test01.intravision.ru";

export const tenantguid = "fef42ceb-ba34-424e-ab43-7769aca6f5c1";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    statuses: statusesReducer,
    chapters: chaptersReducer,
  },
});
