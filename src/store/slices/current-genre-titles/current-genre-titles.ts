import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { TitleCards, Genre } from '../../../models/models';
import { filterTitles } from '../../../utilites/utilites';

export const currentGenreTitles = createSlice({
  name: NameSpace.CurrentGenreTitles,
  initialState: {
    titles: [] as TitleCards,
  },
  reducers: {
    setCurrentGenreTitles: (state, action: PayloadAction<[TitleCards, Genre]>) => {
      state.titles = filterTitles(action.payload);
    }
  },
});

export const {setCurrentGenreTitles} = currentGenreTitles.actions;
