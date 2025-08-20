import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from './services/api';
import { NameSpace } from '../constants';
import { popularFilms } from './slices/popular-films/popuar-films';
import { genres } from './slices/genres/genres';
import { currentGenreFilms } from './slices/current-genre-films/current-genre-films';
import { visibleFilms } from './slices/visible-films/visible-films';
import { currentFilmInfo } from './slices/current-film-info/current-film-info';
import { currentFilmNavBtn } from './slices/current-film-nav-btn/current-film-nav-btn';

const api = createAPI();

export const createReducers = combineReducers({
  [NameSpace.PopularFilms]: popularFilms.reducer,
  [NameSpace.FIlmGenres]: genres.reducer,
  [NameSpace.CurrentGenreFilms]: currentGenreFilms.reducer,
  [NameSpace.VisibleFilms]: visibleFilms.reducer,
  [NameSpace.CurrentFilmInfo]: currentFilmInfo.reducer,
  [NameSpace.CurrentFilmNavBtn]: currentFilmNavBtn.reducer,
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
