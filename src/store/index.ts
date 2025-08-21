import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from './services/api';
import { NameSpace } from '../constants';
import { currentTitleInfo } from './slices/current-title-info/current-title-info';
import { popularTitles } from './slices/popular-titles/popuar-titles';
import { genres } from './slices/genres/genres';
import { currentGenreTitles } from './slices/current-genre-titles/current-genre-titles';
import { visibleTitles } from './slices/visible-titles/visible-titles';
import { currentTitleNavBtn } from './slices/current-title-nav-btn/current-title-nav-btn';


const api = createAPI();

export const createReducers = combineReducers({
  [NameSpace.PopularTitles]: popularTitles.reducer,
  [NameSpace.TitleGenres]: genres.reducer,
  [NameSpace.CurrentGenreTitles]: currentGenreTitles.reducer,
  [NameSpace.VisibleTitles]: visibleTitles.reducer,
  [NameSpace.CurrentTitleInfo]: currentTitleInfo.reducer,
  [NameSpace.CurrentTitleNavBtn]: currentTitleNavBtn.reducer,
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
