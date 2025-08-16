import { createSlice } from "@reduxjs/toolkit";

const chaptersSlice = createSlice({
  name: "chapters",
  initialState: {
    chapters: [
      { icon: "url(/src/components/knowledge_base.png)", name: "База знаний" },
      { icon: "url(/src/components/tasks.png)", name: "Заявки" },
      { icon: "url(/src/components/employees.png)", name: "Сотрудники" },
      { icon: "url(/src/components/clients.png)", name: "Клиенты" },
      { icon: "url(/src/components/assets.png)", name: "Активы" },
      { icon: "url(/src/components/settings.png)", name: "Настройки" },
    ],
  },
  reducers: {},
});

export default chaptersSlice.reducer;
