import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';

const takeBtn = (state: Pick<State, NameSpace.CurrentFilmNavBtn>) => state[NameSpace.CurrentFilmNavBtn].btn;

export const getBtn = createSelector([takeBtn], (btn: string) => btn);
