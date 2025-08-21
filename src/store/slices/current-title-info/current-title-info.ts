import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { TitleInfo } from '../../../models/models';
import { fetchTitleInfoAction } from '../../api-actions';
import { dropCurrentTitle } from './actions';

export const currentTitleInfo = createSlice({
  name: NameSpace.CurrentTitleInfo,
  initialState: {
    currentTitle: {} as TitleInfo,
    isTitleLoaded: false,
    isTitleError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTitleInfoAction.pending, (state) => {
        state.isTitleLoaded = true;
        state.isTitleError = false;
      })
      .addCase(fetchTitleInfoAction.fulfilled, (state, action) => {
        state.currentTitle = action.payload;
        state.isTitleLoaded = false;
      })
      .addCase(fetchTitleInfoAction.rejected, (state) => {
        state.isTitleError = true;
        state.isTitleLoaded = false;
      })
      .addCase(dropCurrentTitle, (state) => {
        state.currentTitle = {} as TitleInfo;
        state.isTitleError = false;
        state.isTitleLoaded = false;
      });
  },
});

