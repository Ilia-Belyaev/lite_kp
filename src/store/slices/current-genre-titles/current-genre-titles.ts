import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { TitleCards, Genre, SearchInfo } from '../../../models/models';
import { filterTitles, findSearchingTitles } from '../../../utilites/utilites';

export const currentGenreTitles = createSlice({
  name: NameSpace.CurrentGenreTitles,
  initialState: {
    titles: [] as TitleCards,
    searchTitles: {
      titles: [] as TitleCards,
      searchIsOpened: false,
      letter: '',
    }
  },
  reducers: {
    setCurrentGenreTitles: (state, action: PayloadAction<[TitleCards, Genre]>) => {
      state.titles = filterTitles(action.payload);
    },
    setVisibleTitlesAfterSearch: (state, action: PayloadAction<SearchInfo>) => {
      state.searchTitles = findSearchingTitles(state.titles, action.payload);
    }
  },
});

export const {setCurrentGenreTitles, setVisibleTitlesAfterSearch} = currentGenreTitles.actions;
