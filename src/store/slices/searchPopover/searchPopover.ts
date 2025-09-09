import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';

export const searchPopover = createSlice({
  name: NameSpace.SeacrhPopover,
  initialState: {
    isOpen: false,
    text: '',
  },
  reducers: {
    setSearchPopoverOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setTextPopover(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { setSearchPopoverOpen, setTextPopover } = searchPopover.actions;
