import { NameSpace } from '../../../constants';
import { State } from '../../../models/state';
import { createSelector } from '@reduxjs/toolkit';

const takeIsOpenSearch = (state: Pick<State, NameSpace.SeacrhPopover>) => state[NameSpace.SeacrhPopover].isOpen;
const takePopoverText = (state: Pick<State, NameSpace.SeacrhPopover>) => state[NameSpace.SeacrhPopover].text;

export const getIsOpenSearch = createSelector(takeIsOpenSearch, (isOpen: boolean) => isOpen);
export const getPopoverText = createSelector(takePopoverText, (text: string) => text);
