import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmCards, ServerResponse } from '../models/models';
import { AppDispatch, State } from '../models/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../constants';

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
