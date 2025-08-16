import { createSlice } from "@reduxjs/toolkit";

const chaptersSlice = createSlice({
  name: "chapters",
  initialState: {
    chapters: [
      {
        icon: "url(/src/components/knowledge_base.png)",
        width: "22px",
        height: "26px",
        path: "/knowledge_base",
        name: "База знаний",
      },
      {
        icon: "url(/src/components/tasks.png)",
        width: "18px",
        height: "24px",
        path: "/tasks",
        name: "Заявки",
      },
      {
        icon: "url(/src/components/employees.png)",
        width: "25px",
        height: "17px",
        path: "/employees",
        name: "Сотрудники",
      },
      {
        icon: "url(/src/components/clients.png)",
        width: "25px",
        height: "26px",
        path: "/clients",
        name: "Клиенты",
      },
      {
        icon: "url(/src/components/assets.png)",
        width: "26px",
        height: "24px",
        path: "/assets",
        name: "Активы",
      },
      {
        icon: "url(/src/components/settings.png)",
        width: "25px",
        height: "24px",
        path: "/settings",
        name: "Настройки",
      },
    ],
  },
  reducers: {},
});

export default chaptersSlice.reducer;
