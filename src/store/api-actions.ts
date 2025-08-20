import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmCards, FilmId, FilmInfo, ServerResponse } from '../models/models';
import { AppDispatch, State } from '../models/state';
import { AxiosInstance } from 'axios';
import { ApiRoute, ErrorMessages } from '../constants';

export const fetchPopularFilmAction = createAsyncThunk<FilmCards, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchPopularFilmAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<ServerResponse>(ApiRoute.PopularKPFilms);
    const films = data.docs;

    return films;
  }
);

export const fetchFilmInfoAction = createAsyncThunk<FilmInfo,FilmId, {
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
      const {data} = await api.get<FilmInfo>(`${ApiRoute.CurrentFilm}${id}`);

      return data;
    } catch (error: unknown) {
      return rejectWithValue(error || ErrorMessages.FailLoadData);
    }
  }
);//не дописано!
