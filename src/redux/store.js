import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from '../pages/Dashboard/dashboardSlice';

const store = configureStore({
    reducer: {
        dashboard: dashboardSlice.reducer
    },
});

export default store;