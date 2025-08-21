import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { TitleCards } from '../../../models/models';
import { fetchPopularTitleAction } from '../../api-actions';

export const popularTitles = createSlice({
  name: NameSpace.PopularTitles,
  initialState: {
    titles: [] as TitleCards,
    isTitleLoaded: false,
    isTitleError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularTitleAction.pending, (state) => {
        state.isTitleLoaded = true;
        state.isTitleError = false;
      })
      .addCase(fetchPopularTitleAction.fulfilled, (state, action) => {
        state.titles = action.payload;
        state.isTitleLoaded = false;
      })
      .addCase(fetchPopularTitleAction.rejected, (state) => {
        state.isTitleError = true;
        state.isTitleLoaded = false;
      });
  },
});

