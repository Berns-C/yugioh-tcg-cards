import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/root-reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});
