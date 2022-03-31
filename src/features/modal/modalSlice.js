import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  isModalOpen: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal: (state, action) => {
      state.isModalOpen = false;
    },
    openModal: (state, action) => {
      state.isModalOpen = true;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
