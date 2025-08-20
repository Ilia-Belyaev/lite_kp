import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';
import { FilmCards } from '../../../models/models';

const takeVisibleFilms = (state: Pick<State, NameSpace.VisibleFilms>) => state[NameSpace.VisibleFilms].films;

export const getVisibleFilms = createSelector([takeVisibleFilms], (films: FilmCards) => films);
