import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';
import { FilmCards } from '../../../models/models';

const takePopularFilms = (state: Pick<State, NameSpace.PopularFilms>) => state[NameSpace.PopularFilms].films;
const takeErrorStatus = (state: Pick<State, NameSpace.PopularFilms>) => state[NameSpace.PopularFilms].isFilmError;
const takeLoadStatus = (state: Pick<State, NameSpace.PopularFilms>) => state[NameSpace.PopularFilms].isFilmLoaded;

export const getPopularFilms = createSelector([takePopularFilms], (films: FilmCards) => films);
export const getErrorStatus = createSelector([takeErrorStatus], (error: boolean) => error);
export const getLoadStatus = createSelector([takeLoadStatus], (load: boolean) => load);

