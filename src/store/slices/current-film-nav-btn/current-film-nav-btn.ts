import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';

export const currentFilmNavBtn = createSlice({
  name: NameSpace.CurrentFilmNavBtn,
  initialState: {
    btn: '',
  },
  reducers: {
    setBtn: (state, action: PayloadAction<string>) => {
      state.btn = action.payload;
    }
  }
});

export const {setBtn} = currentFilmNavBtn.actions;
