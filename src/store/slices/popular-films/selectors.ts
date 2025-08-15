import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';
import { FilmCards } from '../../../models/models';

const takePopularFilms = (state: Pick<State, NameSpace.PopularFilms>) => state[NameSpace.PopularFilms].films;

export const getPopularFilms = createSelector([takePopularFilms], (films: FilmCards) => films);
