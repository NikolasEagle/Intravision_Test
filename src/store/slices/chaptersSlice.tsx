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
        active: false,
      },
      {
        icon: "url(/src/components/tasks.png)",
        width: "18px",
        height: "24px",
        path: "/tasks",
        name: "Заявки",
        active: false,
      },
      {
        icon: "url(/src/components/employees.png)",
        width: "25px",
        height: "17px",
        path: "/employees",
        name: "Сотрудники",
        active: false,
      },
      {
        icon: "url(/src/components/clients.png)",
        width: "25px",
        height: "26px",
        path: "/clients",
        name: "Клиенты",
        active: false,
      },
      {
        icon: "url(/src/components/assets.png)",
        width: "26px",
        height: "24px",
        path: "/assets",
        name: "Активы",
        active: false,
      },
      {
        icon: "url(/src/components/settings.png)",
        width: "25px",
        height: "24px",
        path: "/settings",
        name: "Настройки",
        active: false,
      },
    ],
  },
  reducers: {},
});

export default chaptersSlice.reducer;
