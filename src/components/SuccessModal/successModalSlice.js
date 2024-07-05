import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "successModal",
    initialState: {
        openModal : false
    },
    reducers: {
        openModal: (state) => {
            state.openModal = true;
        },
        closeModal: (state) => {
            state.openModal = false;
        }
    }
});
