import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { default_locale } from '@Data/default-locale';

export interface ILocaleReducer {
  navigations: {
    home: string;
    archetype: string;
    cards: string;
  };
  header: {
    text: string;
  };
  home: {
    introduction: {
      header: string;
      text: string;
      btnText: string;
    };
    about: {
      header: string;
      text: string;
      disclaimer: {
        header: string;
        text: string;
      };
    };
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

export const getLocaleHeaderTexts = (state) => {
  return state?.locale_store?.header;
};

export const getLocaleHomeTexts = (state) => {
  return state?.locale_store?.home;
};
