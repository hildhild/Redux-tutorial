import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../components/Form/formSlice';
import successModalSlice from '../components/SuccessModal/successModalSlice';

const store = configureStore({
    reducer: {
        dashboard: formSlice.reducer,
        successModal: successModalSlice.reducer
    },
});

export default store;