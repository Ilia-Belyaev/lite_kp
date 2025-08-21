import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';

const takeBtn = (state: Pick<State, NameSpace.CurrentTitleNavBtn>) => state[NameSpace.CurrentTitleNavBtn].btn;

export const getBtn = createSelector([takeBtn], (btn: string) => btn);
