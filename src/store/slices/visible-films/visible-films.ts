import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { FilmCards } from '../../../models/models';
import { addVisibleFilms } from '../../../utilites/utilites';

export const visibleFilms = createSlice({
  name: NameSpace.VisibleFilms,
  initialState: {
    films: [] as FilmCards,
  },
  reducers: {
    setVisibleFilms: (state, action: PayloadAction<FilmCards>) => {
      state.films = addVisibleFilms(action.payload, state.films.length);
    },
    setEmptyVisibleFilms:(state) => {
      state.films = [];
    }
  },
});

export const {setVisibleFilms, setEmptyVisibleFilms} = visibleFilms.actions;
