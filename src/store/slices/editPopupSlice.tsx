import { createSlice } from "@reduxjs/toolkit";

const editPopupSlice = createSlice({
  name: "editPopup",
  initialState: {
    selectId: null,
    opened: false,
  },
  reducers: {
    OPENED: (state, action) => {
      state.opened = action.payload;
    },
    SELECT: (state, action) => {
      state.selectId = action.payload;
    },
  },
});

export const { OPENED, SELECT } = editPopupSlice.actions;

export default editPopupSlice.reducer;
