import { configureStore } from '@reduxjs/toolkit';
import formSlice from './slices/Form/formSlice';
import successModalSlice from './slices/SuccessModal/successModalSlice';

const store = configureStore({
    reducer: {
        dashboard: formSlice.reducer,
        successModal: successModalSlice.reducer
    },
});

export default store;