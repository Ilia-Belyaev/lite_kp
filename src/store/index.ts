import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from './services/api';
import { NameSpace } from '../constants';
import { popularFilms } from './slices/popular-films/popuar-films';
import { genres } from './slices/genres/genres';
import { currentGenreFilms } from './slices/current-genre-films/current-genre-films';

const api = createAPI();

export const createReducers = combineReducers({
  [NameSpace.PopularFilms]: popularFilms.reducer,
  [NameSpace.FIlmGenres]: genres.reducer,
  [NameSpace.CurrentGenreFilms]: currentGenreFilms.reducer,
});

export const store = configureStore({
  reducer: createReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});
