import { createSlice } from "@reduxjs/toolkit";

const chaptersSlice = createSlice({
  name: "chapters",
  initialState: {
    chapters: [
      {
        icon: "url(/src/components/knowledge_base.png)",
        path: "/knowledge_base",
      },
      { icon: "url(/src/components/tasks.png)", path: "/tasks" },
      { icon: "url(/src/components/employees.png)", path: "/employees" },
      { icon: "url(/src/components/clients.png)", path: "/clients" },
      { icon: "url(/src/components/assets.png)", path: "/assets" },
      { icon: "url(/src/components/settings.png)", path: "/settings" },
    ],
  },
  reducers: {},
});

export default chaptersSlice.reducer;
