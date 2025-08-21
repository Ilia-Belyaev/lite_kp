import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';
import { TitleCards } from '../../../models/models';

const takeCurrentGenreTitles = (state: Pick<State, NameSpace.CurrentGenreTitles>) => state[NameSpace.CurrentGenreTitles].titles;

export const getCurrentGenreTitles = createSelector([takeCurrentGenreTitles], (titles: TitleCards) => titles);
