import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {
    value: 0,
    title: 'redux numberone',
  },
  // caculator sate
  reducers: {
    tang: (state) => {
      state.value += 1;
    },
    giam: (state) => {
      state.value -= 1;
    },
    changeState: (state) => {
      state.title = 'state modify';
    },
  },
});

// Action creators are generated for each case reducer function
export const { tang, giam, changeState } = counterSlice.actions;

export default counterSlice.reducer;
