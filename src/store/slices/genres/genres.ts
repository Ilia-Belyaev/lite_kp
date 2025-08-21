import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GENRES, NameSpace } from '../../../constants';
import { Genre } from '../../../models/models';

export const genres = createSlice({
  name: NameSpace.TitleGenres,
  initialState: {
    currentGenre: GENRES[0],
  },
  reducers: {
    setGenre: (state, action: PayloadAction<Genre>) => {
      state.currentGenre = action.payload;
    }
  }
});

export const {setGenre} = genres.actions;
