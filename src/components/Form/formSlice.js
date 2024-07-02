import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "form",
    initialState: {
        formData : {
            name: '',
            age: '',
            phone: '',
            email: '',
            note: ''
        }
    },
    reducers: {
        formSubmit: (state, action) => {
            state.formData = action.payload;
        }
    }
});
