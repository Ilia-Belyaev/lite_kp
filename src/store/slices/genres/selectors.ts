import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';
import { Genre } from '../../../models/models';

const takeGenre = (state: Pick<State, NameSpace.FIlmGenres>) => state[NameSpace.FIlmGenres].currentGenre;

export const getGenre = createSelector([takeGenre], (genre: Genre) => genre);
