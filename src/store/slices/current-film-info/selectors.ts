import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { FilmInfo } from '../../../models/models';
import { State } from '../../../models/state';

const takeCurrentFilmInfo = (state: Pick<State, NameSpace.CurrentFilmInfo>) => state[NameSpace.CurrentFilmInfo].currentFilm;

export const getCurrentFilmInfo = createSelector([takeCurrentFilmInfo], (film: FilmInfo) => film);
