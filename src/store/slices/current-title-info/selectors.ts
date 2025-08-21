import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { TitleInfo } from '../../../models/models';
import { State } from '../../../models/state';

const takeCurrentTitleInfo = (state: Pick<State, NameSpace.CurrentTitleInfo>) => state[NameSpace.CurrentTitleInfo].currentTitle;

export const getCurrentTitleInfo = createSelector([takeCurrentTitleInfo], (title: TitleInfo) => title);
