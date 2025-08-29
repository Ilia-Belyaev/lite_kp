import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';
import { SearchTitles, TitleCards } from '../../../models/models';

const takeCurrentGenreTitles = (state: Pick<State, NameSpace.CurrentGenreTitles>) => state[NameSpace.CurrentGenreTitles].titles;
const takeSearchingTitles = (state: Pick<State, NameSpace.CurrentGenreTitles>) => state[NameSpace.CurrentGenreTitles].searchTitles.titles;
const takeSearchStatus = (state: Pick<State, NameSpace.CurrentGenreTitles>) => state[NameSpace.CurrentGenreTitles].searchTitles.searchIsOpened;
const takeSearchText = (state: Pick<State, NameSpace.CurrentGenreTitles>) => state[NameSpace.CurrentGenreTitles].searchTitles.letter;
const takeFullSearchingTitleInfo = (state: Pick<State, NameSpace.CurrentGenreTitles>) => state[NameSpace.CurrentGenreTitles].searchTitles;

export const getCurrentGenreTitles = createSelector([takeCurrentGenreTitles], (titles: TitleCards) => titles);
export const getSearchingTitles = createSelector([takeSearchingTitles], (titles: TitleCards) => titles);
export const getSearchingStatus = createSelector([takeSearchStatus], (status: boolean) => status);
export const getSearchText = createSelector([takeSearchText], (text: string) => text);
export const getFullSearchingTitleInfo = createSelector([takeFullSearchingTitleInfo], (data: SearchTitles) => data);
