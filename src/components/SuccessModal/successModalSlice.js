import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "successModal",
    initialState: {
        openModal : false
    },
    reducers: {
        openModal: (state, action) => {
            state.openModal = action.payload;
        }
    }
});
