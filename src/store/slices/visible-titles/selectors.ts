import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';
import { TitleCards } from '../../../models/models';

const takeVisibleTitles = (state: Pick<State, NameSpace.VisibleTitles>) => state[NameSpace.VisibleTitles].titles;

export const getVisibleTitles = createSelector([takeVisibleTitles], (titles: TitleCards) => titles);
