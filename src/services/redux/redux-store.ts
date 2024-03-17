import { configureStore } from '@reduxjs/toolkit';
import { Locale, ILocaleReducer } from './reducers/locale-slice';

export interface IStore {
  locale_store: ILocaleReducer;
}

export const store = configureStore<IStore>({
  reducer: {
    locale_store: Locale.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export type AppDispatch = typeof store.dispatch;
