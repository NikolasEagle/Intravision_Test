import { createSlice } from "@reduxjs/toolkit";

const createPopupSlice = createSlice({
  name: "createPopup",
  initialState: {
    opened: false,
  },
  reducers: {
    OPENED: (state, action) => {
      state.opened = action.payload;
    },
  },
});

export const { OPENED } = createPopupSlice.actions;

export default createPopupSlice.reducer;
