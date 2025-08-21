import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { TitleCards } from '../../../models/models';
import { addVisibleTitles } from '../../../utilites/utilites';

export const visibleTitles = createSlice({
  name: NameSpace.VisibleTitles,
  initialState: {
    titles: [] as TitleCards,
  },
  reducers: {
    setVisibleTitles: (state, action: PayloadAction<TitleCards>) => {
      state.titles = addVisibleTitles(action.payload, state.titles.length);
    },
    setEmptyVisibleTitles:(state) => {
      state.titles = [];
    }
  },
});

export const {setVisibleTitles, setEmptyVisibleTitles} = visibleTitles.actions;
