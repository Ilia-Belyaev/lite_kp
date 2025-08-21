import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';

export const currentTitleNavBtn = createSlice({
  name: NameSpace.CurrentTitleNavBtn,
  initialState: {
    btn: '',
  },
  reducers: {
    setBtn: (state, action: PayloadAction<string>) => {
      state.btn = action.payload;
    }
  }
});

export const {setBtn} = currentTitleNavBtn.actions;
