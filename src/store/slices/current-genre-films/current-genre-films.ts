import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { FilmCards, Genre } from '../../../models/models';
import { filterFilms } from '../../../utilites/utilites';

export const currentGenreFilms = createSlice({
  name: NameSpace.CurrentGenreFilms,
  initialState: {
    films: [] as FilmCards,
  },
  reducers: {
    setCurrentGenreFilms: (state, action: PayloadAction<[FilmCards, Genre]>) => {
      state.films = filterFilms(action.payload);
    }
  },
});

export const {setCurrentGenreFilms} = currentGenreFilms.actions;
