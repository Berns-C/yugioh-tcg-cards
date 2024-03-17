import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { default_locale } from '@Data/default-locale';

export interface ILocaleReducer {
  navigations: {
    home: string;
    archetype: string;
    cards: string;
  };
}

export const Locale = createSlice({
  name: 'app_locale_reducer',
  initialState: {
    ...default_locale,
  },
  reducers: {},
});

export const getLocaleNavigationTexts = (state) => {
  return state?.locale_store?.navigations;
};
