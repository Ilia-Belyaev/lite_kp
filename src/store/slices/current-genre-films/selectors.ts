import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';
import { FilmCards } from '../../../models/models';

const takeCurrentGenreFilms = (state: Pick<State, NameSpace.CurrentGenreFilms>) => state[NameSpace.CurrentGenreFilms].films;

export const getCurrentGenreFilms = createSelector([takeCurrentGenreFilms], (films: FilmCards) => films);
