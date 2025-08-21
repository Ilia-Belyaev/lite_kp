import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';
import { TitleCards } from '../../../models/models';

const takePopularTitles = (state: Pick<State, NameSpace.PopularTitles>) => state[NameSpace.PopularTitles].titles;
const takeErrorStatus = (state: Pick<State, NameSpace.PopularTitles>) => state[NameSpace.PopularTitles].isTitleError;
const takeLoadStatus = (state: Pick<State, NameSpace.PopularTitles>) => state[NameSpace.PopularTitles].isTitleLoaded;

export const getPopularTitles = createSelector([takePopularTitles], (titles: TitleCards) => titles);
export const getErrorStatus = createSelector([takeErrorStatus], (error: boolean) => error);
export const getLoadStatus = createSelector([takeLoadStatus], (load: boolean) => load);

