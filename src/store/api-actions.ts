import { createAsyncThunk } from '@reduxjs/toolkit';
import { TitleCards, TitleId, TitleInfo, ServerResponse } from '../models/models';
import { AppDispatch, State } from '../models/state';
import { AxiosInstance } from 'axios';
import { ApiRoute, ErrorMessages } from '../constants';

export const fetchPopularTitleAction = createAsyncThunk<TitleCards, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchPopularTitleAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<ServerResponse>(ApiRoute.PopularKPTitles);
    const films = data.docs;

    return films;
  }
);

export const fetchTitleInfoAction = createAsyncThunk<TitleInfo,TitleId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchFilmInfoAction',
  async (id, {extra: api, rejectWithValue}) => {
    if (!id) {
      return rejectWithValue(ErrorMessages.NoID);
    }
    try {
      const {data} = await api.get<TitleInfo>(`${ApiRoute.CurrentTitle}${id}`);

      return data;
    } catch (error: unknown) {
      return rejectWithValue(error || ErrorMessages.FailLoadData);
    }
  }
);
