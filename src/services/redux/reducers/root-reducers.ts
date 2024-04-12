import { combineReducers } from '@reduxjs/toolkit';
import { Locale, ILocaleReducer } from './locale-slice';
import { Archetype } from './archetypes-slice';

const rootReducer = combineReducers({
  locale_store: Locale.reducer,
  archetype_store: Archetype.reducer,
});

export default rootReducer;
