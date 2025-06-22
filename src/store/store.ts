
import { configureStore } from '@reduxjs/toolkit';
import servicesSlice from './slices/servicesSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    services: servicesSlice,
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
