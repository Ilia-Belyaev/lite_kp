import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { FilmCards } from '../../../models/models';
import { fetchPopularFilmAction } from '../../api-actions';

export const popularFilms = createSlice({
  name: NameSpace.PopularFilms,
  initialState: {
    films: [] as FilmCards,
    isFilmLoaded: false,
    isFilmError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularFilmAction.pending, (state) => {
        state.isFilmLoaded = true;
        state.isFilmError = false;
      })
      .addCase(fetchPopularFilmAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmLoaded = false;
      })
      .addCase(fetchPopularFilmAction.rejected, (state) => {
        state.isFilmError = true;
        state.isFilmLoaded = false;
      });
  },
});

