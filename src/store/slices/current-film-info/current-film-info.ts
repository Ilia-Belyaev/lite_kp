import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { FilmInfo } from '../../../models/models';
import { fetchFilmInfoAction } from '../../api-actions';
import { dropCurrentFilm } from './actions';

export const currentFilmInfo = createSlice({
  name: NameSpace.CurrentFilmInfo,
  initialState: {
    currentFilm: {} as FilmInfo,
    isFilmLoaded: false,
    isFilmError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmInfoAction.pending, (state) => {
        state.isFilmLoaded = true;
        state.isFilmError = false;
      })
      .addCase(fetchFilmInfoAction.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        state.isFilmLoaded = false;
      })
      .addCase(fetchFilmInfoAction.rejected, (state) => {
        state.isFilmError = true;
        state.isFilmLoaded = false;
      })
      .addCase(dropCurrentFilm, (state) => {
        state.currentFilm = {} as FilmInfo;
        state.isFilmError = false;
        state.isFilmLoaded = false;
      });
  },
});

